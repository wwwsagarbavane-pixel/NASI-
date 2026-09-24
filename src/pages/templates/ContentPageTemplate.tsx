import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import type { NsaiRecord } from '../../data/nsai';

interface Props {
    title: string;
    description: string;
    intro?: string;
    data: NsaiRecord[];
}

const ContentPageTemplate: React.FC<Props> = ({ title, description, intro, data }) => {
    return (
        <div className="template-page">
            <section className="tmpl-hero">
                <div className="tmpl-hero-bg">
                    <img src="/assets/hero-bg-new.png" alt="Agriculture" />
                </div>
                <div className="container tmpl-hero-content">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <ChevronRight size={14} /> <span>{title}</span>
                    </div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="tmpl-underline"></div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {intro && (
                        <div style={{ marginBottom: '4rem', textAlign: 'center', borderBottom: '2px solid #000', paddingBottom: '2rem' }}>
                            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: '#111', fontWeight: 400, letterSpacing: '-0.5px' }}>
                                LATEST UPDATES
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#555', marginTop: '1rem' }}>{intro}</p>
                        </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {data.length > 0 ? (
                            data.map((block, index) => (
                                <article key={block.id} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '2rem',
                                    borderBottom: index !== data.length - 1 ? '1px solid #e5e5e5' : 'none',
                                    paddingBottom: index !== data.length - 1 ? '3rem' : '0',
                                    alignItems: 'center'
                                }}>
                                    {/* Left Image (Newspaper Style) */}
                                    <div style={{ flexShrink: 0, width: '250px', height: '180px', overflow: 'hidden', position: 'relative' }}>
                                        {block.image ? (
                                            <img src={block.image} alt={block.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', filter: 'contrast(1.05)' }} 
                                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', background: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                            </div>
                                        )}
                                        {/* Accent bar */}
                                        <div style={{ position: 'absolute', left: 0, top: 0, width: '4px', height: '100%', background: '#10b981' }}></div>
                                    </div>
                                    
                                    {/* Right Content */}
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        {block.date && (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
                                                <span>{block.date.toUpperCase()}</span>
                                                <span style={{ width: '30px', height: '1px', background: '#10b981' }}></span>
                                                <span style={{ color: '#000' }}>PRESS RELEASE</span>
                                            </div>
                                        )}
                                        
                                        <h3 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0 0 1rem 0', fontFamily: 'Georgia, serif', lineHeight: '1.3', color: '#111' }}>
                                            <a href={block.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}
                                               onMouseOver={(e) => e.currentTarget.style.color = '#10b981'}
                                               onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
                                            >
                                                {block.title}
                                            </a>
                                        </h3>
                                        
                                        <p style={{ color: '#444', fontSize: '1rem', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', margin: 0 }}>
                                            {block.description || block.content}
                                        </p>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="empty-state" style={{ padding: '4rem', textAlign: 'center', borderTop: '2px solid #000', borderBottom: '2px solid #000' }}>
                                <p style={{ fontSize: '1.2rem', color: '#555', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>No press releases available at the moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContentPageTemplate;
