import React, { useState, useMemo } from 'react';
import { ChevronRight, Search, FileText, Megaphone, Folder, Download, CheckCircle2, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { policyData } from '../data/nsai';
import FilteredSection from '../components/advocacy/FilteredSection';

const Policy = () => {
    const CATEGORIES = ['All', ...Array.from(new Set(policyData.map(d => d.category || d.parentSection || 'Policy')))];
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    
    // Pagination constants
    const ITEMS_PER_PAGE = 5;

    // Filter documents
    const filteredDocs = useMemo(() => {
        return policyData.filter(doc => {
            const cat = doc.category || doc.parentSection || 'Policy';
            const matchesCategory = activeCategory === 'All' || cat === activeCategory;
            const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  ((doc.description || '').toLowerCase().includes(searchQuery.toLowerCase()));
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
            
            <div style={{ marginTop: '3rem' }}>
                <FilteredSection title="Important Representations" data={policyData} />
            </div>
        </div>
    );
};

export default Policy;
