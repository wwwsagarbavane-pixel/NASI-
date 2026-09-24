import React from 'react';
import AdvocacyHero from '../components/advocacy/AdvocacyHero';
import AdvocacyOverview from '../components/advocacy/AdvocacyOverview';
import FilteredSection from '../components/advocacy/FilteredSection';
import { advocacyData } from '../data/nsai/advocacy';
import { policyData } from '../data/nsai/policy';

const Advocacy = () => {
    return (
        <main className="main-content">
            <AdvocacyHero />
            <AdvocacyOverview />
            
            {/* 
                LATEST NOTIFICATION 
                (Placeholder for future expansion, can just show recent items)
            */}
            
            {/* IMPORTANT NOTIFICATION */}
            <FilteredSection title="Important Notification" data={advocacyData} />
        </main>
    );
};

export default Advocacy;
