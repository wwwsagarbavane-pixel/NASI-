import fs from 'fs';
import path from 'path';

const mediaFile = 'c:\\Users\\ADMIN\\.gemini\\antigravity-ide\\scratch\\nsai-redesign\\nsai-react\\src\\data\\nsai\\media.ts';
const galleryDir = 'c:\\Users\\ADMIN\\.gemini\\antigravity-ide\\scratch\\nsai-redesign\\nsai-react\\public\\assets\\gallery';

function run() {
    let content = fs.readFileSync(mediaFile, 'utf-8');
    let jsonString = content.replace(/import.*?;\n*/g, '').replace(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/, '').replace(/;\s*$/, '');
    let data = JSON.parse(jsonString);
    
    // Remove all old photoGallery and videoGallery items
    data = data.filter(d => d.parentSection !== 'photoGallery' && d.parentSection !== 'videoGallery');
    
    // Read all files in galleryDir
    const files = fs.readdirSync(galleryDir);
    
    const newItems = files.filter(f => f.match(/\.(jpg|jpeg|png)$/i)).map((file, index) => {
        return {
            url: `/assets/gallery/${file}`,
            image: `/assets/gallery/${file}`,
            title: file.replace(/\.[^/.]+$/, "").toUpperCase(),
            type: "image",
            id: `gallery_${index}_${Date.now()}`,
            parentSection: "photoGallery",
            available: true
        };
    });
    
    data = [...newItems, ...data];
    
    const exportMatch = content.match(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/);
    const prefix = `import type { NsaiRecord } from './types';\n\n${exportMatch[0]}`;
    const newContent = prefix + JSON.stringify(data, null, 2) + ';\n';
    
    fs.writeFileSync(mediaFile, newContent);
    console.log(`Added ${newItems.length} images to media.ts`);
}

run();
