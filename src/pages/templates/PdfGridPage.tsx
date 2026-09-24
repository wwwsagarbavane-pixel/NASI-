import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';
import type { NsaiRecord } from '../../data/nsai';

interface PdfGridPageProps {
    title: string;
    description: string;
    data: NsaiRecord[];
}

// PDF Grid Page with 3D Book Style
const PdfGridPage: React.FC<PdfGridPageProps> = ({ title, description, data }) => {
    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <section className="tmpl-hero">
                <div className="tmpl-hero-bg">
                    <img src="/assets/hero-bg-new.png" alt="Agriculture Background" />
                </div>
                <div className="container tmpl-hero-content">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <span>/</span> <span>Events</span> <span>/</span> <span>{title}</span>
                    </div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="tmpl-underline"></div>
                </div>
            </section>

            {/* PDF Book Grid Container */}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 15px' }}>
                {data.length > 0 ? (
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
                        gap: '32px 24px',
                        justifyItems: 'center'
                    }}>
                        {data.map(doc => {
                            let displayTitle = doc.title || decodeURIComponent((doc.fileUrl || doc.url || '').split('/').pop() || '').replace('.pdf', '').replace(/-/g, ' ');
                            if (displayTitle.length > 50) displayTitle = displayTitle.substring(0, 50) + '...';
                            
                            let finalPdfUrl = doc.fileUrl || doc.url;
                            
                            return (
                                <div key={doc.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px', opacity: 0.9 }}>
                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                                    <polyline points="14 2 14 8 20 8"/>
                                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                                    <line x1="10" y1="9" x2="8" y2="9"/>
                                                </svg>
                                                <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 700, textAlign: 'center', textTransform: 'uppercase', lineHeight: '1.3', letterSpacing: '0.5px' }}>
                                                    {displayTitle}
                                                </span>
                                            </div>
                                            <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b', lineHeight: '1.4', textAlign: 'center', margin: '0 0 4px 0' }}>
                                                {displayTitle}
                                            </p>
                                            <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                    <polyline points="7 10 12 15 17 10"/>
                                                    <line x1="12" y1="15" x2="12" y2="3"/>
                                                </svg> 
                                                Download PDF
                                            </span>
                                        </a>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p style={{ color: '#64748b', textAlign: 'center', padding: '3rem' }}>
                        No documents available at the moment.
                    </p>
                )}
            </div>
        </div>
    );
};

export default PdfGridPage;
