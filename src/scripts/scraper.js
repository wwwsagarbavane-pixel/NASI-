import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const BASE_URL = 'https://nsai.co.in';
const OUTPUT_DIR = path.resolve('./src/data/nsai/raw');

// Helpers
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const generateId = (url) => crypto.createHash('md5').update(url).digest('hex').substring(0, 10);

async function fetchPage(url) {
    try {
        console.log(`Fetching: ${url}`);
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        return cheerio.load(response.data);
    } catch (e) {
        console.error(`Error fetching ${url}: ${e.message}`);
        return null;
    }
}

// Scrape a generic listing page (like Policy, Advocacy)
async function scrapeListSection(sectionUrl, sectionName) {
    const records = [];
    let currentPage = 1;
    let hasNextPage = true;

    while (hasNextPage) {
        const url = `${BASE_URL}${sectionUrl}${currentPage > 1 ? `?page=${currentPage}` : ''}`;
        const $ = await fetchPage(url);
        
        if (!$) break;

        const items = $('.news-list-item, .blog-card, .list-item, a[href*="/post/"]');
        
        if (items.length === 0) {
            // Sometimes it's just raw links in a container
            $('a').each((i, el) => {
                const href = $(el).attr('href');
                if (href && href.includes('/post/')) {
                    records.push({
                        url: href.startsWith('http') ? href : `${BASE_URL}${href}`,
                        title: $(el).text().trim().replace(/\s+/g, ' '),
                        type: 'post'
                    });
                } else if (href && href.includes('.pdf')) {
                    records.push({
                        url: href.startsWith('http') ? href : `${BASE_URL}${href}`,
                        title: $(el).text().trim().replace(/\s+/g, ' '),
                        type: 'pdf'
                    });
                }
            });
            break; // No pagination if it's just a raw list of links
        }

        // If structured items exist
        items.each((i, el) => {
            const href = $(el).is('a') ? $(el).attr('href') : $(el).find('a').attr('href');
            if (href) {
                records.push({
                    url: href.startsWith('http') ? href : `${BASE_URL}${href}`,
                    title: $(el).find('h3, h4, .title').text().trim() || $(el).text().trim().replace(/\s+/g, ' '),
                    date: $(el).find('.date, .news-date').text().trim(),
                    type: href.includes('.pdf') ? 'pdf' : 'post'
                });
            }
        });

        // Check for pagination
        const nextLink = $('.pagination a[rel="next"]').attr('href');
        if (nextLink) {
            currentPage++;
            await delay(500);
        } else {
            hasNextPage = false;
        }
    }

    // Deduplicate records by URL
    const uniqueRecordsMap = new Map();
    for (const record of records) {
        if (!uniqueRecordsMap.has(record.url)) {
            uniqueRecordsMap.set(record.url, record);
        }
    }
    const uniqueRecords = Array.from(uniqueRecordsMap.values());

    console.log(`Found ${uniqueRecords.length} records for ${sectionName}`);

    // Now fetch details for each "post" record
    for (const record of uniqueRecords) {
        if (record.type === 'post') {
            const detail$ = await fetchPage(record.url);
            if (detail$) {
                record.content = detail$('.post-content, .content, .main-content').text().trim().replace(/\s+/g, ' ');
                // Extract PDF if any inside the post
                const pdfLink = detail$('a[href*=".pdf"]').attr('href');
                if (pdfLink) {
                    record.fileUrl = pdfLink.startsWith('http') ? pdfLink : `${BASE_URL}${pdfLink}`;
                }
                const dateText = detail$('.post-meta .date').text().trim();
                if (dateText) record.date = dateText;
            }
            await delay(300);
        }
        record.id = generateId(record.url);
    }

    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.writeFile(path.join(OUTPUT_DIR, `${sectionName}.json`), JSON.stringify(uniqueRecords, null, 2));
    console.log(`Saved ${sectionName}.json`);
}

async function main() {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    // 1. OUR WORK
    await scrapeListSection('/policy', 'policy');
    await scrapeListSection('/advocacy', 'advocacy');
    await scrapeListSection('/publications', 'publications');
    await scrapeListSection('/social-initiatives', 'socialInitiatives');

    // 2. RESOURCE CENTER
    await scrapeListSection('/resource-seed-rules', 'seedActs');
    await scrapeListSection('/performance', 'performance');
    await scrapeListSection('/minutes-meeting', 'minutesMeeting');
    await scrapeListSection('/intellectual-property-right', 'ipr');
    await scrapeListSection('/reports-and-recommendations-of-various-committees', 'reports');

    // 3. MEDIA CENTER
    await scrapeListSection('/photo-gallery-new', 'photoGallery');
    await scrapeListSection('/video-gallery', 'videoGallery');
    await scrapeListSection('/press-room', 'pressRoom');

    // 4. EVENTS
    await scrapeListSection('/events', 'events');
    await scrapeListSection('/workshop-training', 'workshops');
    await scrapeListSection('/agm', 'agm');
    await scrapeListSection('/NSAI-election', 'elections');

    console.log('Scraping Complete!');
}

main().catch(console.error);
