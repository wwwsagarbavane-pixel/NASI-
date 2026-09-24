import fs from 'fs';
import path from 'path';

const EVENTS_FILE = path.join(process.cwd(), 'src', 'data', 'nsai', 'events.ts');

let content = fs.readFileSync(EVENTS_FILE, 'utf8');

// Parse the file string roughly.
// I will just use regex to remove any object that has "mock_event" in its id.
content = content.replace(/\{\s*"id":\s*"mock_event_[0-9]+"[^}]+\},?/g, '');

// Wait, the regex [^}]+ will not work if the object contains nested objects (like arrays `images: [...]`).
// Let's do it safer.
