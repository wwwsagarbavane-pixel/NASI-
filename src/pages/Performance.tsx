import React from 'react';
import PageHero from '../components/common/PageHero';
import { resourcesData } from '../data/nsai';
import { Download } from 'lucide-react';

const Performance = () => {
    // Get performance documents (Annex 1 and 2)
    const docs = resourcesData.filter(d => d.parentSection === 'performance' && d.title !== 'Brochure');

    return (
        <main className="main-content">
            <PageHero title="PERFORMANCE" />
            <section className="container section-padding">
                <div className="content-box" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        The Government of India has decided to implement use of the label for all products (seeds) indicating expected performance (adaptability and yield) from Rabi 2013 season.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        After extensive discussions at several industry forums, NSAI also has resolved to partner this important initiative of the Government aimed at quality assurance of the seed for the farmer and ensuring accountability for non-performance of a product, in instances of farmers' claims.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        NSAI encourages its members to indicate the expected performance of the marketed products in the labels, with immediate effect. They are advised to follow the process as given below:
                    </p>
                    <ol style={{ marginBottom: '2rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li>The label indicating the performance may be used as an INSERT in the product bag/packet.</li>
                        <li>The label should comply with the requirements as given in the Gazette Notification No. SO 939 (E) dated September 4, 2002 and should also cover the information about the recommendations of the states and its adaptability.</li>
                        <li>The expected yield may be mentioned along with the recommended package of practices in the INSERT. A sample INSERT proposed to be used by public sector in case of Chick Pea is given in Annexure 1.</li>
                        <li>Members may, if considered appropriate, include in the INSERT any/all DISCLAIMERS given in Annexure 2.</li>
                        <li>Members are requested to share the samples of Label/INSERT used with NSAI for record.</li>
                    </ol>

                    <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Annexures:</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {docs.map(doc => {
                            if (doc.fileUrl) {
                                return (
                                    <a 
                                        key={doc.id} 
                                        href={doc.fileUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', textDecoration: 'none', fontWeight: '500' }}
                                    >
                                        {doc.title} <Download size={16} />
                                    </a>
                                );
                            } else {
                                return (
                                    <span 
                                        key={doc.id} 
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', fontWeight: '500', cursor: 'not-allowed' }}
                                    >
                                        {doc.title} - (PDF Unavailable)
                                    </span>
                                );
                            }
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Performance;
