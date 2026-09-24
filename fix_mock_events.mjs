import fs from 'fs';
import path from 'path';

const EVENTS_FILE = path.join(process.cwd(), 'src', 'data', 'nsai', 'events.ts');

let content = fs.readFileSync(EVENTS_FILE, 'utf8');

const newEvents = `
  {
    "id": "mock_event_1",
    "title": "Indian Seed Congress 2024, New Delhi, India",
    "parentSection": "events",
    "content": "National Seed Association of India is actively participating in Indian Seed Congress 2024. The event will bring together leaders of the seed industry. The discussions will include focus on various issues... We invite you to join us...",
    "image": "/assets/events/images sss01.jpg",
    "url": "#"
  },
  {
    "id": "mock_event_2",
    "title": "Indian Seed Congress 2023, Delhi, India",
    "parentSection": "events",
    "content": "National Seed Association of India successfully hosted Indian Seed Congress 2023. The event brought together leaders of the seed industry to discuss important advancements.",
    "image": "/assets/events/images sss02.jpg",
    "url": "#"
  },
  {
    "id": "mock_event_3",
    "title": "Symposium on “Emerging Trends in Seed Industry”",
    "parentSection": "events",
    "content": "A symposium on Emerging Trends in Seed Industry was organized by NSAI and Society for Plant Research.",
    "images": [
      "/assets/events/images sss03.jpg",
      "/assets/events/images sss04.jpg",
      "/assets/events/images sss05.jpg",
      "/assets/events/images sss06.jpg"
    ],
    "url": "#"
  },
  {
    "id": "mock_event_4",
    "title": "Agriculture Today Group – Round table Meeting of pre-kharif seeds, May 2024",
    "parentSection": "events",
    "content": "Agriculture Today Group held a roundtable meeting on pre-kharif seeds at Constitution Club, New Delhi.",
    "images": [
      "/assets/events/images sss07.jpg",
      "/assets/events/images sss08.jpg"
    ],
    "url": "#"
  },
  {
    "id": "mock_event_5",
    "title": "NSAI Participation in the 17th Annual General Meeting of APSA",
    "parentSection": "events",
    "content": "NSAI delegates participated in the 17th Annual General Meeting of APSA to discuss regional seed policies.",
    "image": "/assets/events/images sss09.jpg",
    "url": "#"
  },
  {
    "id": "mock_event_6",
    "title": "Global symposium on Farmers Right",
    "parentSection": "events",
    "content": "The first ever Global Symposium on Farmers Rights was inaugurated by Hon'ble President of India Smt Droupadi Murmu.",
    "image": "/assets/events/images sss10.jpg",
    "url": "#"
  },
  {
    "id": "mock_event_7",
    "title": "Indian Seed Congress 2020, Delhi, India",
    "parentSection": "events",
    "content": "Indian Seed Congress 2020 was a major milestone for the seed industry.",
    "image": "/assets/events/images sss11.jpg",
    "url": "#"
  },
  {
    "id": "mock_event_8",
    "title": "Awareness/Training on Barcoding/Agmarking for Seed Traceability",
    "parentSection": "events",
    "content": "A training workshop was conducted on barcoding and agmarking for better seed traceability.",
    "image": "/assets/hero-bg-raw.png",
    "url": "#"
  },
`;

// Insert the new events at the top of the array
content = content.replace(/export const eventsData: NsaiRecord\[\] = \[/, 'export const eventsData: NsaiRecord[] = [\n' + newEvents);

fs.writeFileSync(EVENTS_FILE, content, 'utf8');
console.log('Added target events to the top of eventsData!');
