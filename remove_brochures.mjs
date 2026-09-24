import fs from 'fs';

const targetFile = 'c:\\Users\\ADMIN\\.gemini\\antigravity-ide\\scratch\\nsai-redesign\\nsai-react\\src\\data\\nsai\\resources.ts';

function run() {
    let content = fs.readFileSync(targetFile, 'utf-8');
    let jsonString = content.replace(/import.*?;\n*/g, '').replace(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/, '').replace(/;\s*$/, '');
    let data = JSON.parse(jsonString);
    
    // Filter out Brochure
    const newData = data.filter(d => d.title !== "Brochure");
    
    const exportMatch = content.match(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/);
    const prefix = `import type { NsaiRecord } from './types';\n\n${exportMatch[0]}`;
    const newContent = prefix + JSON.stringify(newData, null, 2) + ';\n';
    
    fs.writeFileSync(targetFile, newContent);
    console.log(`Removed Brochure items. New count: ${newData.length}`);
}

run();
