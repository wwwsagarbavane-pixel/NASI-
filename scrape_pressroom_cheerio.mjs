import * as cheerio from 'cheerio';

const targetUrl = 'https://nsai.co.in/press-room';

async function run() {
    console.log("Fetching " + targetUrl);
    const res = await fetch(targetUrl);
    const html = await res.text();
    const $ = cheerio.load(html);
    
    // find all links that look like posts
    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href && href.includes('/post/')) {
            console.log(`Found Post URL: ${href}`);
            console.log(`Title: ${$(el).text().trim()}`);
            console.log(`Parent classes: ${$(el).parent().attr('class')} - ${$(el).parent().parent().attr('class')}`);
            console.log("----------------------");
        }
    });
}

run();
