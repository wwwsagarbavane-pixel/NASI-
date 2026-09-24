import fs from 'fs';

const mediaFile = 'c:\\Users\\ADMIN\\.gemini\\antigravity-ide\\scratch\\nsai-redesign\\nsai-react\\src\\data\\nsai\\media.ts';

function run() {
    let content = fs.readFileSync(mediaFile, 'utf-8');
    let jsonString = content.replace(/import.*?;\n*/g, '').replace(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/, '').replace(/;\s*$/, '');
    let data = JSON.parse(jsonString);
    
    const newItems = [
      {
        "url": "https://www.youtube.com/embed/HUM73skJ_1M",
        "image": "https://img.youtube.com/vi/HUM73skJ_1M/hqdefault.jpg",
        "title": "NSAI Event Video 1",
        "type": "video",
        "id": "vid_youtube_1",
        "parentSection": "videoGallery",
        "available": true
      },
      {
        "url": "https://www.youtube.com/embed/jkuCziZzH7M",
        "image": "https://img.youtube.com/vi/jkuCziZzH7M/hqdefault.jpg",
        "title": "NSAI Event Video 2",
        "type": "video",
        "id": "vid_youtube_2",
        "parentSection": "videoGallery",
        "available": true
      },
      {
        "url": "/assets/gallery/video.mp4",
        "image": "/assets/hero-bg-new.png", 
        "title": "NSAI Local Video",
        "type": "video",
        "id": "vid_local_1",
        "parentSection": "videoGallery",
        "available": true
      }
    ];
    
    data = [...newItems, ...data];
    
    const exportMatch = content.match(/export\s+const\s+[a-zA-Z0-9_]+\s*(:\s*NsaiRecord\[\])?\s*=\s*/);
    const prefix = `import type { NsaiRecord } from './types';\n\n${exportMatch[0]}`;
    const newContent = prefix + JSON.stringify(data, null, 2) + ';\n';
    
    fs.writeFileSync(mediaFile, newContent);
    console.log(`Added ${newItems.length} videos to media.ts`);
}

run();
