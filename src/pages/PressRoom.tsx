import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { mediaData } from '../data/nsai';

const PressRoom: React.FC = () => {
    const pressData = mediaData.filter(d => d.parentSection === 'pressRoom');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All News');

    const categories = [
        { name: 'All News', count: 24 },
        { name: 'Announcements', count: 6 },
        { name: 'Events', count: 4 },
        { name: 'Policy & Regulations', count: 5 },
        { name: 'Membership', count: 3 },
        { name: 'Seed Industry', count: 4 },
        { name: 'Research & Innovation', count: 2 },
    ];

    const years = [2024, 2023, 2022, 2021, 2020];

    // Assign mock categories to items for visual fidelity
    const processedData = pressData.map((item, idx) => {
        const catList = ['Announcements', 'Events', 'Seed Industry', 'Policy & Regulations', 'Environmental', 'Research & Innovation'];
        return {
            ...item,
            category: catList[idx % catList.length]
        };
    });

    return (
        <div className="press-room-page" style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <div style={{ position: 'relative', background: 'linear-gradient(90deg, #e0f2e9 0%, #ffffff 100%)', padding: '3rem 0 4rem 0', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '50%', backgroundImage: 'url(/assets/hero-bg-raw.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8, clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>
                        <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
                        <ChevronRight size={14} />
                        <span>Media Center</span>
                        <ChevronRight size={14} />
                        <span style={{ color: '#10b981', fontWeight: 500 }}>Press Room</span>
                    </div>
                    
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#1e293b', margin: '0 0 1rem 0' }}>
                        PRESS <span style={{ color: '#16a34a' }}>ROOM</span>
                    </h1>
                    
                    <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '400px', lineHeight: '1.6' }}>
                        Latest news, announcements and updates from National Seed Association of India
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                {/* Left Sidebar */}
                <aside style={{ width: '280px', flexShrink: 0 }}>
                    {/* Search */}
                    <div style={{ background: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input 
                                type="text" 
                                placeholder="Search news..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ width: '100%', padding: '10px 10px 10px 36px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }}
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Categories</h3>
                            <ChevronRight size={16} color="#64748b" style={{ transform: 'rotate(-90deg)' }}/>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {categories.map((cat, idx) => (
                                <li key={idx}>
                                    <button 
                                        onClick={() => setSelectedCategory(cat.name)}
                                        style={{ 
                                            width: '100%', 
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            alignItems: 'center', 
                                            padding: '10px 12px', 
                                            background: selectedCategory === cat.name ? '#dcfce7' : 'transparent',
                                            border: 'none',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            color: selectedCategory === cat.name ? '#16a34a' : '#475569',
                                            fontWeight: selectedCategory === cat.name ? 600 : 500,
                                            textAlign: 'left'
                                        }}
                                    >
                                        <span style={{ borderLeft: selectedCategory === cat.name ? '3px solid #16a34a' : '3px solid transparent', paddingLeft: '8px', marginLeft: '-12px' }}>{cat.name}</span>
                                        <span style={{ background: selectedCategory === cat.name ? '#bbf7d0' : '#f1f5f9', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' }}>{cat.count}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Year Filter */}
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Year</h3>
                            <ChevronRight size={16} color="#64748b" style={{ transform: 'rotate(90deg)' }}/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {years.map((year, idx) => (
                                <label key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: '#16a34a' }} />
                                        <span style={{ color: '#475569', fontSize: '0.95rem' }}>{year}</span>
                                    </div>
                                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{Math.floor(Math.random() * 5) + 2}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: '#f1f5f9', border: 'none', borderRadius: '24px', color: '#475569', fontWeight: 600, cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21v-5h5"></path></svg>
                        Clear Filters
                    </button>
                </aside>

                {/* Main Content */}
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', margin: 0 }}>
                            Latest News & <span style={{ color: '#16a34a' }}>Updates</span>
                        </h2>
                        <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Showing 1-{processedData.length} of 24 news items</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {processedData.map((item) => (
                            <div key={item.id} style={{
                                background: '#fff',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ height: '180px', width: '100%', overflow: 'hidden', background: '#f1f5f9' }}>
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                        </div>
                                    )}
                                </div>

                                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.8rem', fontWeight: 500 }}>
                                            <Calendar size={14} />
                                            {item.date || 'Oct 14, 2021'}
                                        </div>
                                        <span style={{ background: '#dcfce7', color: '#16a34a', padding: '4px 10px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 600 }}>
                                            {item.category}
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', margin: '0 0 0.75rem 0', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {item.title}
                                    </h3>

                                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 1.5rem 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', flex: 1 }}>
                                        {item.description || item.content || 'Latest updates and announcements from the National Seed Association of India regarding agricultural policies and seed industry developments.'}
                                    </p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                        <Link to={item.url ? item.url : `/details/${item.id}`} style={{ color: '#16a34a', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            Read More <ArrowRight size={14} />
                                        </Link>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                                            <ChevronRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '3rem' }}>
                        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#94a3b8', cursor: 'pointer' }}>
                            <ChevronLeft size={16} />
                        </button>
                        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#16a34a', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>1</button>
                        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#475569', fontWeight: 600, cursor: 'pointer' }}>2</button>
                        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#475569', fontWeight: 600, cursor: 'pointer' }}>3</button>
                        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#475569', cursor: 'pointer' }}>
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PressRoom;
