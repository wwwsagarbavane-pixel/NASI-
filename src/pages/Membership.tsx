import React, { useState } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Membership = () => {
    const [activeTab, setActiveTab] = useState('why');

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
                        Membership
                    </h1>
                    <p className="ref-hero-desc">
                        National Seed Association of India (NSAI) invites all seeds men to partner the future growth of the fifth largest seed industry in the world by enrolling as a member.
                    </p>

                    <div className="ref-hero-features">
                        <div className="ref-h-feature">
                            <div className="ref-h-icon"><i className="fa fa-users"></i></div>
                            <div className="ref-h-text">Stronger<br/>Network</div>
                        </div>
                        <div className="ref-h-feature">
                            <div className="ref-h-icon"><i className="fa fa-leaf"></i></div>
                            <div className="ref-h-text">Greater<br/>Opportunities</div>
                        </div>
                        <div className="ref-h-feature">
                            <div className="ref-h-icon"><i className="fa fa-line-chart"></i></div>
                            <div className="ref-h-text">A Sustainable<br/>Future</div>
                        </div>
                    </div>
                </div>

                <div className="ref-handwriting">
                    <p style={{ transform: 'rotate(-5deg)', marginTop: '20px' }}>Together<br/>for a Stronger<br/>Seed Industry</p>
                    <div style={{ width: '80px', height: '3px', background: 'linear-gradient(to right, #f97316 33%, #fff 33%, #fff 66%, #10b981 66%)', margin: '0 auto', borderRadius: '2px', transform: 'rotate(-5deg)' }}></div>
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
                    <div 
                        className={`ref-sidebar-item ${activeTab === 'why' ? 'active' : ''}`}
                        onClick={() => setActiveTab('why')}
                    >
                        <div className="s-left">
                            <i className="fa fa-users" style={{ fontSize: '1.2rem' }}></i>
                            <span>Why Should You Be a Member?</span>
                        </div>
                        <ChevronRight size={18} color={activeTab === 'why' ? '#166534' : '#94a3b8'} />
                    </div>

                    <div 
                        className={`ref-sidebar-item ${activeTab === 'how' ? 'active' : ''}`}
                        onClick={() => setActiveTab('how')}
                    >
                        <div className="s-left">
                            <i className="fa fa-file-text-o" style={{ fontSize: '1.2rem' }}></i>
                            <span>How to Become a Member?</span>
                        </div>
                        <ChevronRight size={18} color={activeTab === 'how' ? '#166534' : '#94a3b8'} />
                    </div>

                    <div 
                        className={`ref-sidebar-item ${activeTab === 'fee' ? 'active' : ''}`}
                        onClick={() => setActiveTab('fee')}
                    >
                        <div className="s-left">
                            <i className="fa fa-database" style={{ fontSize: '1.2rem' }}></i>
                            <span>Membership Category & Fee</span>
                        </div>
                        <ChevronRight size={18} color={activeTab === 'fee' ? '#166534' : '#94a3b8'} />
                    </div>

                    <div 
                        className={`ref-sidebar-item ${activeTab === 'rules' ? 'active' : ''}`}
                        onClick={() => setActiveTab('rules')}
                    >
                        <div className="s-left">
                            <i className="fa fa-shield" style={{ fontSize: '1.2rem' }}></i>
                            <span>Rules & Regulation</span>
                        </div>
                        <ChevronRight size={18} color={activeTab === 'rules' ? '#166534' : '#94a3b8'} />
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="ref-content">
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', color: '#16a34a' }}>MEMBERSHIP</span>
                        <div style={{ width: '30px', height: '1px', background: '#16a34a' }}></div>
                    </div>

                    <h2 className="ref-content-title">Why Should You Be a Member?</h2>
                    <p className="ref-content-desc">
                        National Seed Association of India (NSAI) invites all seeds men to partner the future growth of the fifth largest seed industry in the world by enrolling as a member. Join the vibrant technology driven Indian Seed Industry Association, representing more than 90% of the private sector trade turnover, and benefit from access to new knowledge through participation in technical seminars/ conferences/ workshops; and articles contributed by eminent national and international experts in the NSAI quarterly magazine (circulated free to members); reach your products and technology to a wider market through advertising (at discounted rates for members) in the industry magazine and the interactive NSAI website; enhance your trade value through networking with key industry personnel and participation in the trading sessions at the Indian Seed Congress.
                    </p>

                    <div className="ref-highlights">
                        <div className="ref-highlight-item" style={{ alignItems: 'flex-start' }}>
                            <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                            <span>Gain easy access to the seed industry in India</span>
                        </div>
                        <div className="ref-highlight-item" style={{ alignItems: 'flex-start' }}>
                            <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                            <span>Participate in exclusive Training Programs / Lectures / Interactive Sessions / Workshops / Seminars and meetings of the seed industry</span>
                        </div>
                        <div className="ref-highlight-item" style={{ alignItems: 'flex-start' }}>
                            <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                            <span>Get opportunities to interact with key persons throughout the Indian seed industry</span>
                        </div>
                        <div className="ref-highlight-item" style={{ alignItems: 'flex-start' }}>
                            <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                            <span>Receive complimentary issues of the Indian Seed & Planting Material magazine</span>
                        </div>
                        <div className="ref-highlight-item" style={{ alignItems: 'flex-start' }}>
                            <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                            <span>Avail the networking and trading possibilities for you and your employees</span>
                        </div>
                        <div className="ref-highlight-item" style={{ alignItems: 'flex-start' }}>
                            <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                            <span>Meet government representatives, seed and agricultural agencies and state seed associations in India</span>
                        </div>
                        <div className="ref-highlight-item" style={{ alignItems: 'flex-start' }}>
                            <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                            <span>Have exclusive access to seed trade, country, technical reports and statistics</span>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
};

export default Membership;
