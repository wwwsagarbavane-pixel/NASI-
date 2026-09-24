import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, Search, ChevronRight, FileText } from 'lucide-react';
import { eventsData } from '../data/nsai/events';
import type { NsaiRecord } from '../data/nsai';

// Event Row Component
const WorkshopTrainingPage: React.FC = () => {
    const data = eventsData.filter(d => d.parentSection === 'workshops');
    
    // Split into workshops and training based on title
    const workshops = data.filter(d => !d.title.toLowerCase().includes('training'));
    const trainings = data.filter(d => d.title.toLowerCase().includes('training'));

    // Extract exact data from the target screenshot
    const pdfMapping: Record<string, { title: string; url: string }[]> = {
        '52847bc572': [{ title: 'Program Details & Form', url: '#' }],
        'd0c68b23e9': [
            { title: 'Perspective / Key Messages', url: '#' },
            { title: 'Registration Form', url: '#' }
        ],
        'df43c371f3': [{ title: 'Draft APSA Position Paper', url: '#' }],
        'e0fb4142ea': [
            { title: 'Download Brochure', url: '#' },
            { title: 'Sponsorship Details', url: '#' }
        ],
        '7b0a0410e0': [{ title: 'Read More', url: '#' }]
    };

    const titleMapping: Record<string, string> = {
        '52847bc572': 'Procedure and Status for Indenting and Allocation of Breeder Seed through NSAI and Strength & Challenges of SATHI Portal of DASFV',
        'd0c68b23e9': 'Workshop on Gazette Notification issued by Govt. of India on the Access & Benefit Sharing (Biodiversity) guidelines',
        'df43c371f3': 'IPR Workshop organized by APSA at Bangkok',
        'e0fb4142ea': 'National Workshop on Strategic IP Management for Agriculture',
        '7b0a0410e0': 'Training Program for Young CEOs of the Seed Industry'
    };

    const extractDate = (text: string) => {
        const match = text.match(/(\d{1,2})(?:st|nd|rd|th)?\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\,?\s+(\d{4})/i);
        if (match) return { day: match[1].padStart(2, '0'), monthYear: `${match[2]} ${match[3]}` };
        
        const match2 = text.match(/(\d{1,2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2,4})/i);
        if (match2) return { day: match2[1].padStart(2, '0'), monthYear: `${match2[2]} 20${match2[3].slice(-2)}` };
        
        return { day: "TBA", monthYear: "Soon" };
    };

    const renderCard = (event: NsaiRecord, type: 'workshop' | 'training') => {
        const dateInfo = extractDate(event.content + " " + event.title);
        const pillBg = type === 'workshop' ? '#e6f4ea' : '#fef3c7';
        const pillColor = type === 'workshop' ? '#166534' : '#92400e';
        const dateBg = type === 'workshop' ? '#f4fbf7' : '#fffdeb';
        
        const exactTitle = titleMapping[event.id] || event.title;
        const pdfLinks = pdfMapping[event.id] || (event.fileUrl ? [{ title: 'Download PDF', url: event.fileUrl }] : []);

        return (
            <div key={event.id} style={{ display: 'flex', background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', marginBottom: '1.2rem', transition: 'all 0.2s ease', cursor: 'pointer' }}>
                {/* Date Box */}
                <div style={{ width: '110px', background: dateBg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', borderRight: '1px solid #f8fafc' }}>
                    <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1e293b', lineHeight: 1 }}>{dateInfo.day}</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>{dateInfo.monthYear}</span>
                </div>
                
                {/* Content Box */}
                <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                        {exactTitle}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.6 }}>
                        {event.description || event.content || 'Click to view more details.'}
                    </p>
                </div>

                {/* Actions Box */}
                <div style={{ width: '280px', padding: '1.5rem', display: 'flex', flexDirection: 'column', background: '#fff', borderLeft: '1px dashed #e2e8f0' }}>
                    <div style={{ alignSelf: 'flex-start', background: pillBg, color: pillColor, padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'capitalize' }}>
                        {type}
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {pdfLinks.map((link, idx) => (
                            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem', background: '#fff', border: '1px solid #f1f5f9', borderRadius: '6px', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s ease', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                                <div style={{ color: '#ef4444' }}>
                                    <FileText size={20} strokeWidth={2} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e3a8a' }}>{link.title}</div>
                                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>(PDF)</div>
                                </div>
                                <ChevronRight size={14} color="#cbd5e1" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div style={{ background: '#fcfcfc', minHeight: '100vh', paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <div style={{ position: 'relative', height: '350px', background: '#fff', overflow: 'hidden' }}>
                <img src="/assets/hero-bg-new.png" alt="Agriculture" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }} />
                
                {/* Lighter Gradient Overlay */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 35%, rgba(255,255,255,0) 100%)' }}></div>
                
                <div className="container" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="breadcrumbs" style={{ marginBottom: '1rem', justifyContent: 'flex-start', position: 'relative', zIndex: 2 }}>
                        <Link to="/">Home</Link> <span>/</span> 
                        <span>Resource Center</span> <span>/</span> 
                        <span style={{ color: '#15803d', fontWeight: 500 }}>Workshop & Training</span>
                    </div>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '-0.5px', margin: '0 0 1rem 0', position: 'relative', zIndex: 2 }}>
                        WORKSHOP & <span style={{ color: '#15803d' }}>TRAINING</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '500px', margin: '0 0 1.5rem 0', lineHeight: 1.5, position: 'relative', zIndex: 2 }}>
                        Capacity building and knowledge sharing for a stronger seed industry.
                    </p>
                    <div style={{ width: '50px', height: '4px', background: '#22c55e', borderRadius: '2px', position: 'relative', zIndex: 2 }}></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 15px', marginTop: '2rem', position: 'relative', zIndex: 10 }}>
                {/* WORKSHOP LIST */}
                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', background: '#e6f4ea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15803d', flexShrink: 0 }}>
                                <Users size={24} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.2rem 0', textTransform: 'uppercase' }}>WORKSHOP LIST</h2>
                                <p style={{ color: '#64748b', margin: 0, fontSize: '0.9rem' }}>Explore upcoming and past workshops organized or supported by NSAI.</p>
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <div style={{ position: 'relative' }}>
                                <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                                <input type="text" placeholder="Search workshops..." style={{ padding: '0.6rem 1rem 0.6rem 2.2rem', borderRadius: '6px', border: '1px solid #e2e8f0', width: '220px', outline: 'none', fontSize: '0.9rem' }} />
                            </div>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, color: '#1e293b', fontSize: '0.9rem' }}>
                                Filter <ChevronRight size={14} style={{ transform: 'rotate(90deg)' }} />
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        {workshops.map(evt => renderCard(evt, 'workshop'))}
                        {workshops.length === 0 && <p style={{ color: '#64748b' }}>No workshops found.</p>}
                    </div>
                </div>

                {/* TRAINING LIST */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', background: '#e6f4ea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15803d', flexShrink: 0, border: '1px solid #22c55e' }}>
                                <GraduationCap size={24} color="#15803d" />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.2rem 0', textTransform: 'uppercase' }}>TRAINING LIST</h2>
                                <p style={{ color: '#64748b', margin: 0, fontSize: '0.9rem' }}>Training programs to build capabilities for the seed industry.</p>
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <div style={{ position: 'relative' }}>
                                <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                                <input type="text" placeholder="Search training..." style={{ padding: '0.6rem 1rem 0.6rem 2.2rem', borderRadius: '6px', border: '1px solid #e2e8f0', width: '220px', outline: 'none', fontSize: '0.9rem' }} />
                            </div>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, color: '#1e293b', fontSize: '0.9rem' }}>
                                Filter <ChevronRight size={14} style={{ transform: 'rotate(90deg)' }} />
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        {trainings.map(evt => renderCard(evt, 'training'))}
                        {trainings.length === 0 && <p style={{ color: '#64748b' }}>No training programs found.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopTrainingPage;
