import React from 'react';
import type { NsaiRecord } from '../../data/nsai';

interface Props {
    documents: NsaiRecord[];
}

const BookGrid: React.FC<Props> = ({ documents }) => {
    if (!documents || documents.length === 0) {
        return (
            <div className="nl-empty" style={{ padding: '4rem 2rem', textAlign: 'center', color: '#64748b', fontSize: '1.1rem', background: '#f8fafc', borderRadius: '8px', border: '2px dashed #e2e8f0' }}>
                No documents found.
            </div>
        );
    }

    return (
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
            gap: '32px 24px' 
        }}>
            {documents.map(doc => {
                let displayTitle = doc.title || decodeURIComponent((doc.fileUrl || doc.url || '').split('/').pop() || '').replace('.pdf', '').replace(/-/g, ' ');
                if (displayTitle.length > 35) displayTitle = displayTitle.substring(0, 35) + '...';
                
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
                                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b', lineHeight: '1.4', textAlign: 'center' }}>
                                    {displayTitle}
                                </p>
                                <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: '600', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg> 
                                    Download PDF
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <line x1="10" y1="9" x2="8" y2="9"/>
                                    </svg>
                                </div>
                                <p style={{ fontSize: '0.9rem', fontWeight: '500', color: '#94a3b8', textAlign: 'center' }}>{displayTitle}</p>
                                <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '6px', fontWeight: '600' }}>Unavailable</span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default BookGrid;
