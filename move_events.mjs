import fs from 'fs';
import path from 'path';

const EVENTS_FILE = path.join(process.cwd(), 'src', 'data', 'nsai', 'events.ts');

let content = fs.readFileSync(EVENTS_FILE, 'utf8');

// I need to find the array export and put the mock events at the TOP.
// Right now, they are at the bottom.
// I will just use regex to extract the mock events and move them to the top of the array.

const mockEventRegex = /,\s*\{\s*"id": "mock_event_1"[\s\S]*\}\s*\];/m;
const match = content.match(mockEventRegex);

if (match) {
    // Remove it from the end
    content = content.replace(mockEventRegex, '];');
    
    // Create the mock events array contents
    const mockData = match[0].replace(/^,/, '').replace(/\];$/, ',');
    
    // Insert after the array opening bracket
    content = content.replace(/export const eventsData: NsaiRecord\[\] = \[/, 'export const eventsData: NsaiRecord[] = [\n' + mockData);
    
    fs.writeFileSync(EVENTS_FILE, content, 'utf8');
    console.log('Moved mock events to the top of the array!');
} else {
    console.log('Could not find mock events at the end of the file.');
}
