import React from 'react';
import PageHero from '../components/common/PageHero';
import LayoutWithSidebar from '../components/common/LayoutWithSidebar';
import { resourcesData } from '../data/nsai';
import { BookOpen, Handshake } from 'lucide-react';

const MinutesOfMeeting = () => {
    // Exclude the placeholder Brochure
    const momData = resourcesData.filter(d => d.parentSection === 'minutesMeeting' && d.title !== 'Brochure');

    // Assign the category to existing data because resources.ts doesn't have it
    const categorizedData = momData.map(doc => ({
        ...doc,
        category: 'MOM related to CLCuD' // All extracted MOM data belongs to this tab based on the screenshot
    }));

    const tabs = [
        { id: 'MOM related to CLCuD', label: 'MOM related to CLCuD', icon: <BookOpen size={18} /> },
        { id: 'MOM on Bilateral Cooperation between India and Germany on Seed Development', label: 'MOM on Bilateral Cooperation between India and Germany on Seed Development', icon: <Handshake size={18} /> }
    ];

    return (
        <main className="main-content">
            <PageHero title="MINUTES OF MEETING" />
            <LayoutWithSidebar 
                title="" 
                tabs={tabs} 
                data={categorizedData} 
                defaultTabId="MOM related to CLCuD" 
            />
        </main>
    );
};

export default MinutesOfMeeting;
