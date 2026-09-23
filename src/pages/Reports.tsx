import React, { useState } from 'react';
import { ChevronRight, Download, Eye, FileText, CheckCircle2 } from 'lucide-react';

const Reports = () => {
    const [activeYear, setActiveYear] = useState('2026');
    const years = ['2026', '2024', '2023', '2022', '2021', '2020'];

    return (
        <main style={{ background: '#f8fafc' }}>
            {/* HERO SECTION */}
            <section className="ref-hero">
                <div className="ref-hero-left">
                    <div className="ref-label-wrap">
                        <div className="ref-label-line"></div>
                        <span className="ref-label">GROW TOGETHER</span>
                    </div>
                    <h1 className="ref-hero-title">
                        Annual <span>Report</span>
                    </h1>
                    <p className="ref-hero-desc">
                        National Seed Association of India (NSAI) invites all stakeholders to partner the future growth of the seed industry by exploring our annual reports.
                    </p>

                    <div className="ref-hero-features">
                        <div className="ref-h-feature">
                            <div className="ref-h-icon"><i className="fa fa-book"></i></div>
                            <div className="ref-h-text">KNOWLEDGE</div>
                        </div>
                        <div className="ref-h-feature">
                            <div className="ref-h-icon"><i className="fa fa-users"></i></div>
                            <div className="ref-h-text">COLLABORATION</div>
                        </div>
                        <div className="ref-h-feature">
                            <div className="ref-h-icon"><i className="fa fa-line-chart"></i></div>
                            <div className="ref-h-text">SUSTAINABLE<br/>GROWTH</div>
                        </div>
                    </div>
                </div>

                <div className="ref-handwriting">
                    <p>Seeds for<br/>a Brighter<br/>Tomorrow</p>
                    <div style={{ width: '80px', height: '3px', background: 'linear-gradient(to right, #f97316 33%, #fff 33%, #fff 66%, #10b981 66%)', margin: '0 auto', borderRadius: '2px' }}></div>
                </div>

                <div className="ref-vertical-features">
                    <span>PEOPLE</span>
                    <span>PARTNERSHIP</span>
                    <span>PROGRESS</span>
                </div>
            </section>

            {/* MAIN CONTAINER */}
            <section className="ref-main-container">
                
                {/* LEFT NAV */}
                <div className="ref-sidebar">
                    <div style={{ padding: '0 2rem 1.5rem', borderBottom: '1px solid #e2e8f0', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', color: '#16a34a' }}>ANNUAL REPORTS</span>
                            <div style={{ flexGrow: 1, height: '1px', background: '#16a34a' }}></div>
                        </div>
                    </div>
                    
                    {years.map((year) => (
                        <div 
                            key={year}
                            className={`ref-sidebar-item ${activeYear === year ? 'active' : ''}`}
                            onClick={() => setActiveYear(year)}
                        >
                            <div className="s-left">
                                <FileText size={18} />
                                <span>Annual Report – Year {year}</span>
                            </div>
                            <ChevronRight size={18} color={activeYear === year ? '#166534' : '#94a3b8'} />
                        </div>
                    ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className="ref-content">
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', color: '#16a34a' }}>ANNUAL REPORT</span>
                        <div style={{ width: '30px', height: '1px', background: '#16a34a' }}></div>
                    </div>

                    <h2 className="ref-content-title">Annual Report – Year {activeYear}</h2>
                    <p className="ref-content-desc">
                        National Seed Association of India (NSAI) provides this annual report to share detailed information about the association, seed industry activities, crucial initiatives, strategic growth, and key developments across the sector over the past year.
                    </p>

                    <div className="ref-highlights">
                        <div className="ref-highlight-item"><CheckCircle2 size={18} color="#16a34a" /> Seed Industry Insights</div>
                        <div className="ref-highlight-item"><CheckCircle2 size={18} color="#16a34a" /> Industry Activities & Initiatives</div>
                        <div className="ref-highlight-item"><CheckCircle2 size={18} color="#16a34a" /> Association Performance</div>
                        <div className="ref-highlight-item"><CheckCircle2 size={18} color="#16a34a" /> Sector Developments</div>
                        <div className="ref-highlight-item"><CheckCircle2 size={18} color="#16a34a" /> Stakeholder Engagement</div>
                        <div className="ref-highlight-item"><CheckCircle2 size={18} color="#16a34a" /> Future Growth Initiatives</div>
                    </div>

                    <div className="ref-pdf-area">
                        <svg width="60" height="76" viewBox="0 0 72 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6C0 2.68629 2.68629 0 6 0H46L72 26V84C72 87.3137 69.3137 90 66 90H6C2.68629 90 0 87.3137 0 84V6Z" fill="#ffffff"/>
                            <path d="M46 0L72 26H52C48.6863 26 46 23.3137 46 20V0Z" fill="#e2e8f0"/>
                            <path d="M0 45C0 42.7909 1.79086 41 4 41H46V57H4C1.79086 57 0 55.2091 0 53V45Z" fill="#dc2626"/>
                            <text x="23" y="53" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">PDF</text>
                            <path d="M35 57C35 60 40 68 45 70C50 72 60 70 60 65C60 60 48 55 45 55C42 55 40 50 42 45C44 40 50 35 48 35C46 35 42 40 40 45C38 50 35 55 35 57Z" fill="#dc2626" fillOpacity="0.8"/>
                        </svg>
                        
                        <div className="ref-pdf-meta">
                            <h4>PDF DOCUMENT</h4>
                            <p>File size: 4.2 MB &nbsp;&bull;&nbsp; Published on: 12 Apr {activeYear}</p>
                            
                            <div className="ref-actions">
                                <button className="ref-btn-primary">
                                    <Download size={16} /> DOWNLOAD PDF
                                </button>
                                <button className="ref-btn-outline">
                                    <Eye size={16} /> VIEW ONLINE
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    );
};

export default Reports;