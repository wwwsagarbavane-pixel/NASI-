import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { advocacyData } from '../../data/nsai';
import NotificationCard from './NotificationCard';
import MinistryFilter from './MinistryFilter';

const NotificationList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('Ministry of Agriculture & Farmers Welfare');

    const filteredNotifications = advocacyData.filter(notif => {
        const matchesSearch = notif.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (notif.content || '').toLowerCase().includes(searchQuery.toLowerCase());
        
        // Use category for filtering (simulating ministry)
        const cat = notif.category || notif.parentSection || 'Advocacy';
        const matchesFilter = cat === activeFilter; 
        
        return matchesSearch && matchesFilter;
    });

    return (
        <section className="container section-padding pt-0">
            <div className="new-ui-wrapper shadow-soft">
                {/* Header Row */}
                <div className="new-ui-header">
                    <div className="new-ui-title-area">
                        <h2 style={{ fontSize: '1.25rem' }}>Important Notification</h2>
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
                                    {[
                                        { name: 'Ministry of Agriculture & Farmers Welfare', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
                                        { name: 'Ministry of Commerce & Industry', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
                                        { name: 'NITI Aayog', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' },
                                        { name: 'Ministry of Finance', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' }
                                    ].map(sub => (
                                        <button 
                                            key={sub.name}
                                            onClick={() => {}}
                                            style={{
                                                padding: '12px 16px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '8px',
                                                background: sub.name === 'NITI Aayog' ? '#fff' : 'transparent',
                                                borderRight: '1px solid #e2e8f0',
                                                borderTop: sub.name === 'NITI Aayog' ? '2px solid #8b0000' : '2px solid transparent',
                                                cursor: 'pointer',
                                                width: '120px'
                                            }}
                                        >
                                            <img src={sub.img} alt={sub.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                            <span style={{ fontSize: '0.65rem', textAlign: 'center', fontWeight: sub.name === 'NITI Aayog' ? '600' : 'normal', color: sub.name === 'NITI Aayog' ? '#1e3a8a' : '#475569' }}>
                                                {sub.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>MINISTRY OF COMMERCE & INDUSTRY</h3>
                                    <hr style={{ margin: '16px 0', borderColor: '#e2e8f0' }} />
                                </div>
                            </>
                        )}
                        
                        {activeFilter !== 'Other Ministry' && filteredNotifications.length > 0 ? (
                            <div className="nl-list">
                                {filteredNotifications.map(notif => (
                                    <NotificationCard key={notif.id} notification={notif} />
                                ))}
                            </div>
                        ) : activeFilter !== 'Other Ministry' ? (
                            <div className="nl-empty" style={{ padding: '2rem', color: '#000', fontSize: '0.9rem' }}>
                                No Letters
                            </div>
                        ) : null}
                        
                        {/* Fake Pagination for mockup matching */}
                        <div className="new-ui-pagination">
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <button className="page-btn">4</button>
                            <button className="page-btn">5</button>
                            <button className="page-btn">6</button>
                            <button className="page-btn">7</button>
                            <button className="page-btn">8</button>
                            <button className="page-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotificationList;
