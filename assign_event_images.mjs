import fs from 'fs';
import path from 'path';

const EVENTS_FILE = path.join(process.cwd(), 'src', 'data', 'nsai', 'events.ts');

let content = fs.readFileSync(EVENTS_FILE, 'utf8');

// Array of new image filenames
const newImages = [
    '/assets/events/images sss01.jpg',
    '/assets/events/images sss02.jpg',
    '/assets/events/images sss03.jpg',
    '/assets/events/images sss04.jpg',
    '/assets/events/images sss05.jpg',
    '/assets/events/images sss06.jpg',
    '/assets/events/images sss07.jpg',
    '/assets/events/images sss08.jpg',
    '/assets/events/images sss09.jpg',
    '/assets/events/images sss10.jpg',
    '/assets/events/images sss11.jpg'
];

let imageIdx = 0;

// Simple regex replace to add image property
content = content.replace(/"parentSection": "(events|workshops|agm|elections)"(,)?/g, (match, p1, p2) => {
    const img = newImages[imageIdx % newImages.length];
    imageIdx++;
    return `"parentSection": "${p1}",\n    "image": "${img}"${p2 || ''}`;
});

fs.writeFileSync(EVENTS_FILE, content, 'utf8');
console.log('Successfully assigned event images.');
