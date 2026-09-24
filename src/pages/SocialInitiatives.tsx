import React from 'react';
import { socialInitiativesData } from '../data/nsai/socialInitiatives';

const SocialInitiatives = () => {
    return (
        <main style={{ background: '#f8fafc', paddingBottom: '4rem' }}>
            {/* HERO SECTION */}
            <section className="ref-hero" style={{ minHeight: '30vh' }}>
                <div className="ref-hero-left" style={{ maxWidth: '800px' }}>
                    <div className="ref-label-wrap">
                        <div className="ref-label-line"></div>
                        <span className="ref-label">OUR IMPACT</span>
                    </div>
                    <h1 className="ref-hero-title">
                        Social Initiatives
                    </h1>
                    <p className="ref-hero-desc">
                        NSAI is committed to giving back to the community and driving positive social change across the nation.
                    </p>
                </div>
            </section>

            <section className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
                <div className="new-ui-wrapper shadow-soft" style={{ padding: '40px', background: '#fff' }}>
                    
                    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {socialInitiativesData.map((item, idx) => (
                            <div key={item.id} style={{ 
                                display: 'flex', 
                                flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                                gap: '2rem',
                                alignItems: 'center',
                                padding: '2rem',
                                background: '#f8fafc',
                                borderRadius: '16px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)'
                            }}>
                                
                                {/* Image Column */}
                                <div style={{ flex: '1', minWidth: '300px' }}>
                                    {item.images && item.images.length > 0 ? (
                                        <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                            <img 
                                                src={item.images[0]} 
                                                alt={item.title} 
                                                style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} 
                                            />
                                        </div>
                                    ) : (
                                        <div style={{ 
                                            width: '100%', 
                                            height: '300px', 
                                            background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)', 
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#64748b',
                                            fontWeight: '500'
                                        }}>
                                            Image Coming Soon
                                        </div>
                                    )}
                                </div>

                                {/* Text Column */}
                                <div style={{ flex: '1.2' }}>
                                    <h3 style={{ 
                                        fontSize: '1.75rem', 
                                        fontWeight: '700', 
                                        color: '#0f172a',
                                        marginBottom: '1rem',
                                        lineHeight: '1.3'
                                    }}>
                                        {item.title}
                                    </h3>
                                    
                                    <div style={{ width: '60px', height: '4px', background: '#16a34a', borderRadius: '2px', marginBottom: '1.5rem' }}></div>
                                    
                                    <p style={{ 
                                        fontSize: '1.05rem', 
                                        color: '#334155', 
                                        lineHeight: '1.7' 
                                    }}>
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SocialInitiatives;
