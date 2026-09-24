import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, FileText, Download, Folder } from 'lucide-react';
import type { NsaiRecord } from '../../data/nsai';

interface Props {
    title: string;
    description: string;
    data: NsaiRecord[];
}

const ResourceCenterTemplate: React.FC<Props> = ({ title, description, data }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 5;

    const filteredData = data.filter(doc => {
        const matchTitle = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
        const cat = doc.category || doc.parentSection || '';
        const matchCategory = cat.toLowerCase().includes(searchQuery.toLowerCase());
        return matchTitle || matchCategory;
    });

    const paginatedDocs = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));

    return (
        <div className="template-page">
            {/* HERO */}
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

            {/* CONTENT */}
            <section className="container tmpl-section">
                <div className="repo-header" style={{ borderRadius: '24px 24px 0 0', border: '1px solid #e2e8f0' }}>
                    <div className="repo-title">
                        <div className="repo-icon"><Folder size={24} /></div>
                        <h2>Document Library</h2>
                    </div>
                    <div className="repo-search">
                        <input 
                            type="text" 
                            placeholder="Search documents..." 
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                        <button className="search-btn"><Search size={18} /></button>
                    </div>
                </div>

                <div className="repo-content" style={{ background: 'white', border: '1px solid #e2e8f0', borderTop: 'none', borderRadius: '0 0 24px 24px', minHeight: '400px' }}>
                    {paginatedDocs.length > 0 ? (
                        <div className="doc-list">
                            {paginatedDocs.map(doc => {
                                const hasDetail = !!(doc.content || doc.description);
                                return (
                                    <div key={doc.id} className="doc-item" style={{ display: 'flex', alignItems: 'center', padding: '16px', borderBottom: '1px solid #e2e8f0', gap: '16px' }}>
                                        <div className="doc-icon">
                                            <FileText size={32} color="#dc2626" />
                                        </div>
                                        <div className="doc-info" style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '1rem', color: '#0b4228', marginBottom: '4px' }}>{doc.title}</h4>
                                            {(doc.description || doc.content) && (
                                                <p className="doc-desc" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '0.875rem', color: '#64748b', marginBottom: '8px' }}>
                                                    {doc.description || doc.content}
                                                </p>
                                            )}
                                            <p className="doc-meta" style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                                                {doc.category || doc.parentSection || 'Document'} 
                                                {doc.date ? ` | ${doc.date}` : ''}
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            {doc.fileUrl ? (
                                                <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className="btn-search-yellow" style={{ padding: '6px 12px', fontSize: '0.875rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', background: '#0b4228', color: '#fff' }}>
                                                    <Download size={14} /> PDF
                                                </a>
                                            ) : (
                                                <span style={{ padding: '6px 12px', fontSize: '0.875rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', background: '#f1f5f9', color: '#94a3b8', cursor: 'not-allowed' }}>
                                                    <Download size={14} /> Unavailable
                                                </span>
                                            )}
                                            {hasDetail && (
                                                <Link to={`/details/${doc.id}`} style={{ padding: '6px 12px', fontSize: '0.875rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#0b4228', border: '1px solid #0b4228' }}>
                                                    Details <ChevronRight size={14} />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="doc-empty">
                            <Folder size={48} color="#cbd5e1" />
                            <p>No documents found.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button 
                                    key={page} 
                                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ResourceCenterTemplate;
