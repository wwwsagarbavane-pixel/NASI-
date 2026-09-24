export interface NsaiRecord {
  id: string;
  title: string;
  slug?: string;
  url: string; // The original NSAI URL
  parentSection: string;
  category?: string;
  subcategory?: string;
  description?: string;
  content?: string; // Rich text / paragraphs
  date?: string;
  image?: string;
  images?: string[]; // Multiple images for stacking
  fileUrl?: string | null; // PDF links
  externalUrl?: string;
  type?: string; // document, video, event, etc.
  available: boolean; // false if link is broken
}
