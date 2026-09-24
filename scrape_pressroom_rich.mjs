import fs from 'fs';
import * as cheerio from 'cheerio';

const mediaFile = 'c:\\Users\\ADMIN\\.gemini\\antigravity-ide\\scratch\\nsai-redesign\\nsai-react\\src\\data\\nsai\\media.ts';
const targetUrl = 'https://nsai.co.in/press-room';

async function run() {
    console.log("Fetching " + targetUrl);
    const res = await fetch(targetUrl);
    const html = await res.text();
    const $ = cheerio.load(html);
    
    const newItems = [];
    
    // In the screenshot, it's a list. Let's look for standard list wrappers or loops.
    // We'll iterate over a.title or similar.
    // Let's just find all elements that have an image and a link nearby.
    
    // Usually these are in a grid or row. Let's look at all images.
    $('img').each((i, imgEl) => {
        let src = $(imgEl).attr('src');
        if (src && src.includes('storage/app/uploads/public/')) {
            // This is likely an article image!
            // Let's find the closest parent that contains a link or the title.
            const container = $(imgEl).closest('div.row, div.cell, div.card, li, article');
            const linkEl = container.find('a').not($(imgEl).parent('a')).first(); // avoid the image link
            let href = linkEl.attr('href');
            let title = linkEl.text().trim();
            
            // If we didn't find the link this way, let's try finding any 'a' nearby
            if (!href && $(imgEl).parent().is('a')) {
                 href = $(imgEl).parent().attr('href');
                 title = $(imgEl).closest('div, li, article').find('h1, h2, h3, h4, h5, p.title, a.title').text().trim();
            }

            if (!href) {
                // Try siblings
                href = $(imgEl).parent().parent().find('a').attr('href');
                title = $(imgEl).parent().parent().find('a').text().trim();
            }
            
            if (href && href.includes('/post/')) {
                 if (!href.startsWith('http')) {
                    href = 'https://nsai.co.in' + (href.startsWith('/') ? href : '/' + href);
                }
                
                if (!src.startsWith('http')) {
                    src = 'https://nsai.co.in' + (src.startsWith('/') ? src : '/' + src);
                }

                // Date is usually near "Last Updated:" or an icon
                let dateText = container.text();
                let dateMatch = dateText.match(/(?:Last Updated:\s*)([A-Za-z]+\s+\d{1,2},\s+\d{4})/i);
                let date = dateMatch ? dateMatch[1] : "";
                
                // If regex fails, let's try finding the span with calendar
                if (!date) {
                    const small = container.find('small, span, p').filter((i, el) => $(el).text().includes('Last Updated')).text();
                    date = small.replace('Last Updated:', '').trim();
                }

                if (title && title.length > 5) {
                    newItems.push({
                        url: href,
                        title: title,
                        image: src,
                        date: date,
                        type: "post",
                        id: `press_${i}_${Date.now()}`,
                        parentSection: "pressRoom",
                        available: true
                    });
                }
            }
        }
    });

    if (newItems.length > 0) {
        let content = fs.readFileSync(mediaFile, 'utf-8');
        let jsonString = content.replace(/import.*?;\n*/g, '').replace(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/, '').replace(/;\s*$/, '');
        let data = JSON.parse(jsonString);
        
        data = data.filter(d => d.parentSection !== 'pressRoom');
        
        // deduplicate
        const uniqueItems = [];
        const seenUrls = new Set();
        for (const item of newItems) {
            if (!seenUrls.has(item.url)) {
                seenUrls.add(item.url);
                uniqueItems.push(item);
            }
        }
        
        data = [...uniqueItems, ...data];
        
        const exportMatch = content.match(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/);
        const prefix = `import type { NsaiRecord } from './types';\n\n${exportMatch[0]}`;
        const newContent = prefix + JSON.stringify(data, null, 2) + ';\n';
        
        fs.writeFileSync(mediaFile, newContent);
        console.log(`Successfully extracted ${uniqueItems.length} rich pressRoom items.`);
    } else {
        console.log("Could not find rich media items. Trying alternative DOM traversal...");
        // alternative
        $('a[href*="/post/"]').each((i, el) => {
            const container = $(el).parent().parent();
            const img = container.find('img').attr('src');
            const date = container.text().match(/([A-Za-z]+\s+\d{1,2},\s+\d{4})/);
            
            console.log("Post:", $(el).text().trim(), "Img:", img, "Date:", date ? date[0] : null);
        });
    }
}

run();
