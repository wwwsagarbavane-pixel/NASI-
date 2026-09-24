import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const BASE_URL = 'https://nsai.co.in';

async function fetchPage(url) {
    try {
        const response = await axios.get(url);
        return cheerio.load(response.data);
    } catch (e) {
        console.error(`Error fetching ${url}: ${e.message}`);
        return null;
    }
}

async function scrapePolicy() {
    console.log('Fetching /policy...');
    const $ = await fetchPage(`${BASE_URL}/policy`);
    if (!$) return;

    // The policy page likely has multiple categories or records. Let's find links.
    // Try to find the main container. Usually it's `.container`, `.main-content`, etc.
    // We'll log the headings and all links within the main content to understand the structure.
    
    console.log('--- Page Headings ---');
    $('h1, h2, h3, h4').each((i, el) => {
        console.log($(el).text().trim().replace(/\s+/g, ' '));
    });

    console.log('\n--- Possible Categories / Tabs / Filters ---');
    // Often lists like ul.nav-tabs, or elements with class category, filter etc.
    $('.nav-tabs li, .category, .filter').each((i, el) => {
        console.log($(el).text().trim().replace(/\s+/g, ' '));
    });

    console.log('\n--- Content Links (Possible Detail Pages or PDFs) ---');
    $('a').each((i, el) => {
        const href = $(el).attr('href');
        const text = $(el).text().trim().replace(/\s+/g, ' ');
        // filter out navigation links
        if (href && (href.includes('/post/') || href.includes('.pdf') || href.includes('/policy/'))) {
            console.log(`[${text}] -> ${href}`);
        }
    });
}

scrapePolicy();
