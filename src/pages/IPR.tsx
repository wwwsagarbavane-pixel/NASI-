import React from 'react';
import PageHero from '../components/common/PageHero';
import BookGrid from '../components/common/BookGrid';
import { resourcesData } from '../data/nsai';

const IPR = () => {
    // Filter for IPR and exclude placeholder brochure to match screenshot
    const data = resourcesData.filter(d => d.parentSection === 'ipr' && d.title !== 'Brochure');

    return (
        <main className="main-content">
            <PageHero title="INTELLECTUAL PROPERTY RIGHT" />
            <section className="container section-padding">
                <BookGrid documents={data} />
            </section>
        </main>
    );
};

export default IPR;
