import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, FileText, Download, Folder } from 'lucide-react';

interface Document {
    id: number;
    title: string;
    category: string;
    date: string;
    size: string;
}

interface Props {
    title: string;
    description: string;
    data: Document[];
}

const ResourceCenterTemplate: React.FC<Props> = ({ title, description, data }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 5;

    const filteredData = data.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        doc.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

            {/* DEMO BADGE */}
            <div className="container" style={{ marginTop: '2rem' }}>
                <span className="demo-badge">DEMO DATA</span>
            </div>

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
                            {paginatedDocs.map(doc => (
                                <div key={doc.id} className="doc-item">
                                    <div className="doc-icon">
                                        <FileText size={32} color="#dc2626" />
                                    </div>
                                    <div className="doc-info">
                                        <h4>{doc.title}</h4>
                                        <p className="doc-meta">{doc.category} | Published: {doc.date} | Size: {doc.size}</p>
                                    </div>
                                    <button className="doc-download" title="Demo Download">
                                        <Download size={18} />
                                    </button>
                                </div>
                            ))}
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
