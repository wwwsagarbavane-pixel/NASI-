import React, { useState } from 'react';
import { publicationsData } from '../data/nsai';
import { FileText, Download } from 'lucide-react';

// Extracted categories from the left sidebar in the screenshot
const CATEGORIES = [
    'NSAI Magazine - Seed Times',
    'India Seed Congress (Souvenir/Report)',
    'NSAI Lectures',
    'NSAI News Letter',
    'Position/Status Paper'
];

const getCategoryFromUrl = (url: string) => {
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes('isc') || lowerUrl.includes('india-seed-congress') || lowerUrl.includes('souviner')) return 'India Seed Congress (Souvenir/Report)';
    if (lowerUrl.includes('newsletter') || lowerUrl.includes('news-letter')) return 'NSAI News Letter';
    if (lowerUrl.includes('lecture')) return 'NSAI Lectures';
    if (lowerUrl.includes('position') || lowerUrl.includes('status')) return 'Position/Status Paper';
    
    // Default to Seed Times as it's the bulk of the documents
    if (lowerUrl.includes('seed-times') || lowerUrl.includes('seed%20times')) return 'NSAI Magazine - Seed Times';

    return 'Other'; // Fallback
};

const getYearFromUrl = (url: string) => {
    const match = url.match(/(20\d{2})/);
    return match ? match[1] : 'Other';
};

const Publications = () => {
    const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

    // Grouping logic
    const categorizedDocs = publicationsData.filter(d => d.parentSection === 'publications' && d.title !== 'Brochure').map(doc => {
        return {
            ...doc,
            derivedCategory: getCategoryFromUrl(doc.url),
            derivedYear: getYearFromUrl(doc.url)
        };
    });

    const activeDocs = categorizedDocs.filter(d => d.derivedCategory === activeTab);
    
    // Group active docs by year
    const docsByYear = activeDocs.reduce((acc, doc) => {
        const year = doc.derivedYear;
        if (!acc[year]) acc[year] = [];
        acc[year].push(doc);
        return acc;
    }, {} as Record<string, typeof activeDocs>);

    // Sort years descending
    const sortedYears = Object.keys(docsByYear).sort((a, b) => {
        if (a === 'Other') return 1;
        if (b === 'Other') return -1;
        return parseInt(b) - parseInt(a);
    });

    return (
        <main style={{ background: '#f8fafc', paddingBottom: '4rem' }}>
            {/* HERO SECTION */}
            <section className="ref-hero" style={{ minHeight: '30vh' }}>
                <div className="ref-hero-left" style={{ maxWidth: '800px' }}>
                    <div className="ref-label-wrap">
                        <div className="ref-label-line"></div>
                        <span className="ref-label">RESOURCES & MEDIA</span>
                    </div>
                    <h1 className="ref-hero-title">
                        Publications
                    </h1>
                    <p className="ref-hero-desc">
                        Explore our comprehensive library of seed times magazines, annual reports, newsletters, and position papers.
                    </p>
                </div>
            </section>

            <section className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
                <div className="new-ui-wrapper shadow-soft" style={{ display: 'flex', minHeight: '600px' }}>
                    
                    {/* LEFT: Sidebar Categories */}
                    <div className="new-ui-sidebar-col" style={{ width: '280px' }}>
                        <div className="new-ui-sidebar">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    className={`new-ui-tab ${activeTab === cat ? 'active' : ''}`}
                                    onClick={() => setActiveTab(cat)}
                                    style={{ 
                                        display: 'block', 
                                        textAlign: 'left', 
                                        padding: '18px 24px',
                                        fontSize: '0.95rem',
                                        fontWeight: '500',
                                        color: '#334155',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Document Groups by Year */}
                    <div className="new-ui-results-col" style={{ padding: '40px', background: '#fff' }}>
                        {sortedYears.length > 0 ? (
                            sortedYears.map(year => (
                                <div key={year} style={{ marginBottom: '3rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                                        <h3 style={{ 
                                            fontSize: '1.4rem',
                                            fontWeight: '700',
                                            color: '#0f172a',
                                            margin: 0,
                                            paddingRight: '16px'
                                        }}>
                                            YEAR {year}
                                        </h3>
                                        <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
                                    </div>
                                    
                                    <div style={{ 
                                        display: 'grid', 
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
                                        gap: '32px 24px' 
                                    }}>
                                        {docsByYear[year].map(doc => {
                                            // Try to format a nice display title from the URL if title is missing
                                            let displayTitle = doc.title || decodeURIComponent(doc.url.split('/').pop() || '').replace('.pdf', '').replace(/-/g, ' ');
                                            if (displayTitle.length > 35) displayTitle = displayTitle.substring(0, 35) + '...';
                                            
                                            // Use doc.url directly as fileUrl for publications
                                            let finalPdfUrl = doc.fileUrl || doc.url;
                                            
                                            return (
                                                <div key={doc.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    {finalPdfUrl ? (
                                                        <a href={finalPdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', width: '100%' }}
                                                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }}
                                                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                                                        >
                                                            {/* Magazine Cover UI */}
                                                            <div style={{ 
                                                                width: '140px', 
                                                                height: '190px', 
                                                                background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                                                                borderRadius: '4px 8px 8px 4px',
                                                                boxShadow: 'inset 4px 0 10px rgba(0,0,0,0.1), 0 8px 16px -4px rgba(0,0,0,0.2)',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                padding: '16px',
                                                                position: 'relative',
                                                                overflow: 'hidden',
                                                                marginBottom: '16px'
                                                            }}>
                                                                {/* Book Spine Shadow */}
                                                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '10px', background: 'linear-gradient(to right, rgba(255,255,255,0.2), rgba(0,0,0,0.2))' }}></div>
                                                                
                                                                <FileText color="#fff" size={32} style={{ marginBottom: '12px', opacity: 0.9 }} />
                                                                <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 700, textAlign: 'center', textTransform: 'uppercase', lineHeight: '1.3', letterSpacing: '0.5px' }}>
                                                                    {displayTitle}
                                                                </span>
                                                            </div>
                                                            <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b', lineHeight: '1.4', textAlign: 'center' }}>
                                                                {displayTitle}
                                                            </p>
                                                            <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: '600', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                                <Download size={12} /> Download PDF
                                                            </span>
                                                        </a>
                                                    ) : (
                                                        <div style={{ textDecoration: 'none', color: '#9ca3af', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'not-allowed', width: '100%' }}>
                                                            <div style={{ 
                                                                width: '140px', 
                                                                height: '190px', 
                                                                background: '#f1f5f9',
                                                                borderRadius: '4px 8px 8px 4px',
                                                                boxShadow: 'inset 4px 0 10px rgba(0,0,0,0.05), 0 4px 6px -1px rgba(0,0,0,0.05)',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                padding: '16px',
                                                                position: 'relative',
                                                                marginBottom: '16px'
                                                            }}>
                                                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '10px', background: 'rgba(0,0,0,0.03)' }}></div>
                                                                <FileText color="#cbd5e1" size={32} style={{ marginBottom: '12px' }} />
                                                            </div>
                                                            <p style={{ fontSize: '0.9rem', fontWeight: '500', color: '#94a3b8', textAlign: 'center' }}>{displayTitle}</p>
                                                            <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '6px', fontWeight: '600' }}>Unavailable</span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="nl-empty" style={{ padding: '4rem 2rem', textAlign: 'center', color: '#64748b', fontSize: '1.1rem', background: '#f8fafc', borderRadius: '8px', border: '2px dashed #e2e8f0' }}>
                                No publications found for this category.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Publications;
