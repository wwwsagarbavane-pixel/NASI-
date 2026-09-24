import fs from 'fs';

const mediaFile = 'c:\\Users\\ADMIN\\.gemini\\antigravity-ide\\scratch\\nsai-redesign\\nsai-react\\src\\data\\nsai\\media.ts';

function run() {
    let content = fs.readFileSync(mediaFile, 'utf-8');
    let jsonString = content.replace(/import.*?;\n*/g, '').replace(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/, '').replace(/;\s*$/, '');
    let data = JSON.parse(jsonString);
    
    const beforeCount = data.length;
    data = data.filter(d => d.url !== '/assets/gallery/image 01.jpg');
    const afterCount = data.length;
    
    const exportMatch = content.match(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/);
    const prefix = `import type { NsaiRecord } from './types';\n\n${exportMatch[0]}`;
    const newContent = prefix + JSON.stringify(data, null, 2) + ';\n';
    
    fs.writeFileSync(mediaFile, newContent);
    console.log(`Removed ${beforeCount - afterCount} images from media.ts`);
}

run();
