import React, { useState } from 'react';
import type { NsaiRecord } from '../../data/nsai/types';
import NotificationCard from './NotificationCard';
import MinistryFilter from './MinistryFilter';

interface Props {
    title: string;
    data: NsaiRecord[];
}

const ITEMS_PER_PAGE = 5;

const FilteredSection: React.FC<Props> = ({ title, data }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('Ministry of Agriculture & Farmers Welfare');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState('Ministry of Commerce & Industry');

    // Reset pagination when filter or search changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, activeFilter, activeSubTab]);

    const filteredDocs = data.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (doc.content || '').toLowerCase().includes(searchQuery.toLowerCase());
        
        let cat = doc.category || 'Other';
        const titleLower = doc.title.toLowerCase();
        
        // Basic fallback mapping if category is missing
        if (!doc.category) {
            if (titleLower.includes('plant') || titleLower.includes('variety') || titleLower.includes('ppv&fr') || titleLower.includes('fee')) cat = 'Protection of Plant Variety & Farmers Right Act';
            else if (titleLower.includes('competition') || titleLower.includes('cci')) cat = 'Competition Commission of India';
            else if (titleLower.includes('science') || titleLower.includes('tech') || titleLower.includes('biotechnology')) cat = 'Ministry of Science & Technology';
            else if (titleLower.includes('state') || titleLower.includes('department')) cat = 'State Department of Agriculture';
            else if (titleLower.includes('environment') || titleLower.includes('moef') || titleLower.includes('geac')) cat = 'Ministry of Environment & Climate Change';
            else if (titleLower.includes('commerce')) cat = 'Ministry of Commerce & Industry';
            else if (titleLower.includes('consumer')) cat = 'Ministry of Consumer Affairs, Food & Public Distribution';
            else if (titleLower.includes('finance') || titleLower.includes('cbdt') || titleLower.includes('tax')) cat = 'Ministry of Finance';
            else cat = 'Other Ministry';
        }

        const matchesFilter = cat === activeFilter || (activeFilter === 'Other Ministry' && cat === activeSubTab);
        
        return matchesSearch && matchesFilter;
    });

    const totalPages = Math.ceil(filteredDocs.length / ITEMS_PER_PAGE);
    const paginatedDocs = filteredDocs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const subTabs = [
        { name: 'Ministry of Agriculture & Farmers Welfare', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
        { name: 'Ministry of Commerce & Industry', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
        { name: 'NITI Aayog', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
        { name: 'Ministry of Finance', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' }
    ];

    return (
        <section className="container section-padding pt-0">
            <div className="new-ui-wrapper shadow-soft">
                {/* Header Row */}
                <div className="new-ui-header">
                    <div className="new-ui-title-area">
                        <h2 style={{ fontSize: '1.25rem' }}>{title}</h2>
                    </div>

                    <div className="new-ui-search-bar">
                        <div className="search-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search Keyword" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{ paddingLeft: '16px', borderRadius: '0' }}
                            />
                        </div>
                        <button className="btn-search-yellow" style={{ borderRadius: '0', padding: '10px 32px' }}>
                            Search
                        </button>
                    </div>
                </div>

                {/* Content Row */}
                <div className="new-ui-content">
                    <div className="new-ui-sidebar-col">
                        <MinistryFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                    </div>

                    <div className="new-ui-results-col">
                        {activeFilter === 'Other Ministry' && (
                            <>
                                <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', background: '#f1f5f9' }}>
                                    {subTabs.map(sub => (
                                        <button 
                                            key={sub.name}
                                            onClick={() => setActiveSubTab(sub.name)}
                                            style={{
                                                padding: '12px 16px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '8px',
                                                background: sub.name === activeSubTab ? '#fff' : 'transparent',
                                                borderRight: '1px solid #e2e8f0',
                                                borderTop: sub.name === activeSubTab ? '2px solid #8b0000' : '2px solid transparent',
                                                cursor: 'pointer',
                                                width: '120px'
                                            }}
                                        >
                                            <img src={sub.img} alt={sub.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                            <span style={{ fontSize: '0.65rem', textAlign: 'center', fontWeight: sub.name === activeSubTab ? '600' : 'normal', color: sub.name === activeSubTab ? '#1e3a8a' : '#475569' }}>
                                                {sub.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{activeSubTab.toUpperCase()}</h3>
                                    <hr style={{ margin: '16px 0', borderColor: '#e2e8f0' }} />
                                </div>
                            </>
                        )}
                        
                        {paginatedDocs.length > 0 ? (
                            <div className="nl-list">
                                {paginatedDocs.map(doc => (
                                    <NotificationCard key={doc.id} notification={doc} />
                                ))}
                            </div>
                        ) : (
                            <div className="nl-empty" style={{ padding: '2rem', color: '#64748b', textAlign: 'center' }}>
                                No documents found
                            </div>
                        )}
                        
                        {totalPages > 1 && (
                            <div className="new-ui-pagination" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button 
                                        key={page} 
                                        onClick={() => setCurrentPage(page)}
                                        className={`page-btn ${page === currentPage ? 'active' : ''}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                {currentPage < totalPages && (
                                    <button className="page-btn" onClick={() => setCurrentPage(currentPage + 1)}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilteredSection;
