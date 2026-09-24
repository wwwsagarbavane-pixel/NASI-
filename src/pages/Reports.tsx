import React from 'react';
import PageHero from '../components/common/PageHero';
import BookGrid from '../components/common/BookGrid';
import { resourcesData } from '../data/nsai';

const Reports = () => {
    // Filter for reports and exclude placeholder brochure to match screenshot
    const data = resourcesData.filter(d => d.parentSection === 'reports' && d.title !== 'Brochure');

    return (
        <main className="main-content">
            <PageHero title="REPORTS AND RECOMMENDATIONS OF VARIOUS COMMITTEES" />
            <section className="container section-padding">
                <BookGrid documents={data} />
            </section>
        </main>
    );
};

export default Reports;