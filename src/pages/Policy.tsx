import React, { useState, useMemo } from 'react';
import { ChevronRight, Search, FileText, Megaphone, Folder, Download, CheckCircle2, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
    { id: 'agri', name: 'Ministry of Agriculture & Farmers Welfare', icon: '/assets/emblem.png' }, // placeholder icon
    { id: 'env', name: 'Ministry of Environment & Climate Change', icon: '/assets/emblem.png' },
    { id: 'sci', name: 'Ministry of Science & Technology', icon: '/assets/emblem.png' },
    { id: 'cci', name: 'Competition Commission of India', icon: '/assets/cci-logo.png' },
    { id: 'ppv', name: 'Protection of Plant Variety & Farmers Right Act', icon: '/assets/ppv-logo.png' },
    { id: 'state', name: 'State Department of Agriculture', icon: '/assets/emblem.png' },
    { id: 'other', name: 'Other Ministry', icon: '/assets/search-icon.png' }
];

const MOCK_DOCUMENTS = [
    {
        id: 1,
        title: 'ICAR-CICR_Advisory Pest and Disease Management 2024',
        category: 'agri',
        meta: 'Posted in IMP. NOTIFICATIONS, Latest News, Ministry of Agriculture and farmer welfare, Whats New on May 31, 2024',
    },
    {
        id: 2,
        title: 'ICAR-CICR_Advisory Pest and Disease Management 2024.pdf',
        category: 'env',
        meta: 'Posted in Ministry of Agriculture and farmer welfare on Sep 12, 2022',
    },
    {
        id: 3,
        title: 'Letter - Bt Cotton RIB issue in Punjab',
        desc: 'Ref: 1. JDA (HVP) O/o Director of Agriculture and Farmers Welfare, Punjab Memo. No. ADO (Seed)/HVVP/1190 dated 29.08.2022\n2. GOI Letter no. 6-2/2017-SD (PI) dated 30.03.2021097-Letter _j.s (Seeds). RIB Punjab.PDF',
        category: 'agri',
        meta: 'Posted in Ministry of Agriculture and farmer welfare on Aug 31, 2022',
    },
    {
        id: 4,
        title: 'Environmental release of RRF event in HT Cotton_083-ADG Seeds.pdf',
        category: 'env',
        meta: 'Posted in Ministry of Agriculture and farmer welfare on Aug 05, 2022',
    },
    {
        id: 5,
        title: 'Proposed amendments in the Section 19 of the Seeds Act, 1966 (Offences and Penalties) 060-Letter to JS Seed.PDF',
        category: 'agri',
        meta: 'Posted in Ministry of Agriculture and farmer welfare on Jul 21, 2022',
    },
    {
        id: 6,
        title: '034- Letter to Secretary Agri_ dt 21-07-22.PDF',
        desc: '034- Letter to Secretary Agri_ dt 21-07-22Payment of Annual Fee and Renewal Fee for the Plant Varieties (Extant Notified Category) registered under the provisions of the PPV&FR Act, 2001.',
        category: 'agri',
        meta: 'Ref: (1) Public Notice (13 of 2020) F. No. PPV&FRA/legal/02/2019 dated 09-11-2020...',
    },
];

const Policy = () => {
    const [activeCategory, setActiveCategory] = useState('agri');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    
    // Pagination constants
    const ITEMS_PER_PAGE = 5;

    // Filter documents
    const filteredDocs = useMemo(() => {
        return MOCK_DOCUMENTS.filter(doc => {
            const matchesCategory = doc.category === activeCategory;
            const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  (doc.desc && doc.desc.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const paginatedDocs = filteredDocs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const totalPages = Math.max(1, Math.ceil(filteredDocs.length / ITEMS_PER_PAGE));

    return (
        <div className="policy-page">
            {/* HERO SECTION */}
            <section className="policy-hero">
                <div className="policy-hero-bg">
                    <img src="/assets/hero-bg-new.png" alt="Agriculture Field" />
                </div>
                
                <div className="container policy-hero-container">
                    <div className="policy-hero-left">
                        <div className="breadcrumbs">
                            <Link to="/">Home</Link> <ChevronRight size={14} /> <span>Policy</span>
                        </div>
                        <h1 className="policy-title">Policy</h1>
                        <p className="policy-subtitle">
                            Building a progressive policy ecosystem<br/>
                            for a stronger seed industry.
                        </p>
                        <div className="policy-underline"></div>
                    </div>

                    <div className="policy-hero-center">
                        <div className="policy-tagline">
                            Policy<br/>
                            for People<br/>
                            for Progress
                        </div>
                        <div className="policy-tricolor-stroke"></div>
                    </div>

                    <div className="policy-hero-right">
                        <div className="policy-feature">
                            <div className="pf-icon"><i className="fa fa-leaf"></i></div>
                            <span>Stronger<br/>Policy Framework</span>
                        </div>
                        <div className="policy-feature">
                            <div className="pf-icon"><i className="fa fa-users"></i></div>
                            <span>Farmer-Centric<br/>Approach</span>
                        </div>
                        <div className="policy-feature">
                            <div className="pf-icon"><i className="fa fa-handshake-o"></i></div>
                            <span>Collaborative<br/>Governance</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="container">
                <div className="policy-intro-card">
                    <p>
                        NSAI aims to redefine the Indian seed industry by creating a convergence of farmers, seed industry, and the government. Our work ranges from quality seeds circulation, the formation of legislation & policies, preserving farmers’ rights, etc. Being a recognized partner of government, we steer national and international policy decisions that take the nation ahead through the sustainable growth of agriculture.
                    </p>
                </div>
            </section>

            {/* OBJECTIVES */}
            <section className="container">
                <div className="policy-objectives-wrapper">
                    <div className="policy-objective">
                        <div className="po-num">1.</div>
                        <div className="po-icon"><i className="fa fa-bullseye"></i></div>
                        <p>NSAI collaborates with different governmental bodies & institutions like State Ministries, Ministry of Agriculture, Ministry of Environment, and ICAR, etc PR to form the best policies for the upliftment of Indian agriculture, seed industry, and farmers.</p>
                    </div>
                    <div className="policy-objective">
                        <div className="po-num">2.</div>
                        <div className="po-icon"><i className="fa fa-users"></i></div>
                        <p>We welcome new ideas and fully participate in the formation of all kinds of agriculture and seed related policies and legislation to ensure the free and fair movement of seeds.</p>
                    </div>
                    <div className="policy-objective">
                        <div className="po-num">3.</div>
                        <div className="po-icon"><i className="fa fa-gavel"></i></div>
                        <p>We work closely with organizational bodies responsible for law-making to ensure better legislation for the farmers of India and take care of their intellectual property rights.</p>
                    </div>
                </div>
            </section>

            {/* LATEST NEWS & REPRESENTATION */}
            <section className="container policy-two-col">
                <div className="policy-card">
                    <div className="pc-header">
                        <div className="pc-title">
                            <div className="pc-icon"><FileText size={20} /></div>
                            <h3>Latest Representation</h3>
                        </div>
                        <a href="#" className="pc-link">View All <ChevronRight size={16} /></a>
                    </div>
                    <div className="pc-content rep-list">
                        <div className="rep-item">
                            <h4>Framework of Understanding between Trait Developing Companies (TDCs) and Plant Breeding Companies (PBCs) within the Seed Industry</h4>
                            <p className="meta">Posted in IMP. NOTIFICATIONS, Latest News, Policy, Whats New on Dec 17, 2021</p>
                        </div>
                        <div className="rep-item">
                            <h4>Framework of Understanding between TDCs and PBCs within the Seed Industry</h4>
                            <p className="meta">Framework of understanding-Sign.pdf</p>
                        </div>
                        <div className="rep-item">
                            <h4>Indian Seed Industry as part of Atmanirbhar Bharat program submitted to NABARD</h4>
                        </div>
                    </div>
                </div>

                <div className="policy-card">
                    <div className="pc-header">
                        <div className="pc-title">
                            <div className="pc-icon" style={{background: '#dcfce7', color: '#16a34a'}}><Megaphone size={20} /></div>
                            <h3>Latest News</h3>
                        </div>
                        <a href="#" className="pc-link">View All <ChevronRight size={16} /></a>
                    </div>
                    <div className="pc-content news-carousel">
                        <button className="carousel-btn prev"><ChevronLeft size={20}/></button>
                        <div className="news-slide">
                            <div className="news-img-placeholder">
                                {/* Simulating the document image from screenshot */}
                                <div className="doc-mockup"></div>
                            </div>
                            <div className="news-info">
                                <h4>Notification on Seed Policy Updates</h4>
                                <span className="news-date">Dec 17, 2021</span>
                                <p>Government releases new guidelines to strengthen the seed ecosystem and support farmers.</p>
                            </div>
                        </div>
                        <button className="carousel-btn next"><ChevronRightIcon size={20}/></button>
                        
                        <div className="carousel-dots">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPORTANT REPRESENTATIONS */}
            <section className="container">
                <div className="policy-repo-card">
                    <div className="repo-header">
                        <div className="repo-title">
                            <div className="repo-icon"><Folder size={24} /></div>
                            <h2>Important Representations</h2>
                        </div>
                        <div className="repo-search">
                            <input 
                                type="text" 
                                placeholder="Search documents, keywords..." 
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            <button className="search-btn"><Search size={18} /></button>
                        </div>
                    </div>

                    <div className="repo-layout">
                        {/* Sidebar Navigation */}
                        <div className="repo-sidebar">
                            {CATEGORIES.map(cat => (
                                <button 
                                    key={cat.id}
                                    className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                        setCurrentPage(1);
                                    }}
                                >
                                    <span className="cat-icon-ph"></span>
                                    <span className="cat-name">{cat.name}</span>
                                    <ChevronRight size={16} className="cat-chevron" />
                                </button>
                            ))}
                        </div>

                        {/* Document List */}
                        <div className="repo-content">
                            {paginatedDocs.length > 0 ? (
                                <div className="doc-list">
                                    {paginatedDocs.map(doc => (
                                        <div key={doc.id} className="doc-item">
                                            <div className="doc-icon">
                                                <img src="/assets/pdf-icon.png" alt="PDF" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                                <FileText size={24} color="#dc2626" className="fallback-icon" />
                                            </div>
                                            <div className="doc-info">
                                                <h4>{doc.title}</h4>
                                                {doc.desc && <p className="doc-desc">{doc.desc}</p>}
                                                <p className="doc-meta">{doc.meta}</p>
                                            </div>
                                            <button className="doc-download">
                                                <Download size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="doc-empty">
                                    <Folder size={48} color="#cbd5e1" />
                                    <p>No documents found for this category or search.</p>
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
                                    <button 
                                        className="page-btn next"
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                    >
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Policy;
