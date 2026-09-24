import fs from 'fs';
import https from 'https';

const targetFile = 'c:\\Users\\ADMIN\\.gemini\\antigravity-ide\\scratch\\nsai-redesign\\nsai-react\\src\\data\\nsai\\advocacy.ts';

async function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function run() {
    let content = fs.readFileSync(targetFile, 'utf-8');
    let jsonString = content.replace(/import.*?;\n*/g, '').replace(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/, '').replace(/;\s*$/, '');
    let data = JSON.parse(jsonString);
    
    let updatedCount = 0;
    
    for (const record of data) {
        if (record.url && record.url.includes('/post/')) {
            console.log(`Fetching ${record.url}...`);
            try {
                const html = await fetchHtml(record.url);
                // Look for a link to a PDF or uploaded-files or media
                const match = html.match(/<a\s+[^>]*href=["']([^"']*\.(?:pdf|PDF|doc|docx))["'][^>]*>/);
                if (match) {
                    let fileUrl = match[1];
                    if (!fileUrl.startsWith('http')) {
                        fileUrl = 'https://nsai.co.in' + (fileUrl.startsWith('/') ? '' : '/') + fileUrl;
                    }
                    record.fileUrl = fileUrl;
                    updatedCount++;
                    console.log(` -> Found PDF: ${fileUrl}`);
                } else {
                    console.log(` -> No PDF found on page.`);
                }
            } catch (e) {
                console.error(` -> Error fetching ${record.url}`);
            }
        }
    }
    
    if (updatedCount > 0) {
        const exportMatch = content.match(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/);
        const prefix = `import type { NsaiRecord } from './types';\n\n${exportMatch[0]}`;
        const newContent = prefix + JSON.stringify(data, null, 2) + ';\n';
        fs.writeFileSync(targetFile, newContent);
        console.log(`Updated ${updatedCount} records with direct PDF links!`);
    } else {
        console.log("No new PDF links found.");
    }
}

run();
