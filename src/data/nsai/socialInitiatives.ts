export interface SocialInitiative {
    id: string;
    title: string;
    description: string;
    images: string[];
}

export const socialInitiativesData: SocialInitiative[] = [
    {
        id: "social-1",
        title: "NSAI contributes to AP -Telangana covid funds",
        description: "Met Hon'ble CM of AP on 6th to donate 1.50 cr towards Covid relief activities carried by state. It was same like for TS by NSL group (50 lakhs cash n 1 cr supply of sanitizer to govt)",
        images: ["/social-1.png"]
    },
    {
        id: "social-2",
        title: "Fight Malnutrition in Mayurbhanj",
        description: "National Seed Association of India Members - Bharat Nursery Pvt Ltd & Nuziveedu Seeds Limited Join Hands to Fight Malnutrition in Mayurbhanj District of Odisha.",
        images: [] // Empty to prevent broken image link
    }
];
