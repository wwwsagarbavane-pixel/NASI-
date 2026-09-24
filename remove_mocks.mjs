import fs from 'fs';
import path from 'path';

const EVENTS_FILE = path.join(process.cwd(), 'src', 'data', 'nsai', 'events.ts');
let content = fs.readFileSync(EVENTS_FILE, 'utf8');

// The regex I used earlier to find mock events
const mockEventRegex = /\{\s*"id": "mock_event_1"[\s\S]*\}\s*/;
const match = content.match(mockEventRegex);

if (match) {
    // We need to remove from this match to the end of the array
    content = content.replace(/\{\s*"id": "mock_event_1"[\s\S]*\}\s*/, '');
    
    // Cleanup any trailing commas before the closing bracket
    content = content.replace(/,\s*\];/g, '\n];');
    
    fs.writeFileSync(EVENTS_FILE, content, 'utf8');
    console.log('Removed mock events.');
} else {
    // If it's at the top, let's remove from the opening bracket to the end of mock_event_8
    content = content.replace(/export const eventsData: NsaiRecord\[\] = \[\s*\{\s*"id": "mock_event_1"[\s\S]*"id": "mock_event_8"[\s\S]*?"url": "#"\s*\},/, 'export const eventsData: NsaiRecord[] = [');
    fs.writeFileSync(EVENTS_FILE, content, 'utf8');
    console.log('Removed mock events from the top.');
}
