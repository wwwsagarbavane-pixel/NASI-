import fs from 'fs/promises';
import path from 'path';

const RAW_DIR = path.resolve('./src/data/nsai/raw');
const OUT_DIR = path.resolve('./src/data/nsai');

async function writeTsFile(filename, variableName, data) {
    const content = `import type { NsaiRecord } from './types';\n\nexport const ${variableName}: NsaiRecord[] = ${JSON.stringify(data, null, 2)};\n`;
    await fs.writeFile(path.join(OUT_DIR, filename), content);
    console.log(`Created ${filename}`);
}

async function readJson(filename) {
    try {
        const raw = await fs.readFile(path.join(RAW_DIR, filename), 'utf-8');
        return JSON.parse(raw).map(item => ({
            ...item,
            parentSection: filename.replace('.json', ''), // default map
            available: true
        }));
    } catch (e) {
        console.warn(`Could not read ${filename}, returning empty array.`);
        return [];
    }
}

async function convert() {
    const policy = await readJson('policy.json');
    await writeTsFile('policy.ts', 'policyData', policy);

    const advocacy = await readJson('advocacy.json');
    await writeTsFile('advocacy.ts', 'advocacyData', advocacy);

    const publications = await readJson('publications.json');
    await writeTsFile('publications.ts', 'publicationsData', publications);

    // Resources Center groups several
    const seedActs = await readJson('seedActs.json');
    const performance = await readJson('performance.json');
    const minutesMeeting = await readJson('minutesMeeting.json');
    const ipr = await readJson('ipr.json');
    const reports = await readJson('reports.json');
    const resources = [...seedActs, ...performance, ...minutesMeeting, ...ipr, ...reports];
    await writeTsFile('resources.ts', 'resourcesData', resources);

    // Events groups several
    const events = await readJson('events.json');
    const workshops = await readJson('workshops.json');
    const agm = await readJson('agm.json');
    const elections = await readJson('elections.json');
    const allEvents = [...events, ...workshops, ...agm, ...elections];
    await writeTsFile('events.ts', 'eventsData', allEvents);

    // Media Center
    const photoGallery = await readJson('photoGallery.json');
    const videoGallery = await readJson('videoGallery.json');
    const pressRoom = await readJson('pressRoom.json');
    const media = [...photoGallery, ...videoGallery, ...pressRoom];
    await writeTsFile('media.ts', 'mediaData', media);

    // Index
    const indexContent = `
export * from './types';
export * from './policy';
export * from './advocacy';
export * from './publications';
export * from './resources';
export * from './events';
export * from './media';
`;
    await fs.writeFile(path.join(OUT_DIR, 'index.ts'), indexContent);
    console.log('Created index.ts');
}

convert().catch(console.error);
