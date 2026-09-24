import React, { useState } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/common/PageHero';

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

                    {activeTab === 'why' && (
                        <>
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
                        </>
                    )}

                    {activeTab === 'how' && (
                        <>
                            <h2 className="ref-content-title">How to Become a Member?</h2>
                            <p className="ref-content-desc" style={{ marginBottom: '1.5rem' }}>
                                To become a member of NSAI follow the steps below:
                            </p>
                            
                            <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#334155', fontSize: '1rem', lineHeight: '1.6' }}>
                                <li>
                                    Download Membership form for New Members. <a href="https://nsai.co.in/storage/app/media/uploaded-files/membership%20Form.pdf" target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>Click here to Download</a>
                                </li>
                                <li>
                                    Send it to National Seed Association of India Secretariat Office.
                                    <div style={{ marginLeft: '1rem', marginTop: '0.75rem', marginBottom: '0.75rem', padding: '1.5rem', background: '#f1f5f9', borderRadius: '8px', borderLeft: '4px solid #16a34a' }}>
                                        <p style={{ margin: 0, fontWeight: 600, color: '#0f172a' }}>Postal Address:</p>
                                        <p style={{ margin: '0.25rem 0 0 0' }}>National Seed Association of India</p>
                                        <p style={{ margin: '0' }}>909, Surya Kiran Building</p>
                                        <p style={{ margin: '0' }}>19, Kasturba Gandhi Marg,</p>
                                        <p style={{ margin: '0' }}>New Delhi 110001, India</p>
                                        <p style={{ margin: '0.5rem 0 0 0', fontWeight: 500 }}>Tel: +91 11 4353 3241-43</p>
                                    </div>
                                </li>
                                <li>Send a cheque of Rs. 1000/- as one time admission fee.</li>
                                <li>Send a cheque for membership of the amount based on the turnover category (View Fee) as mentioned in the form.</li>
                                <li>The application will be processed and approved by the Governing Council.</li>
                                <li>A new membership number and login details for the NSAI website will be allotted to you.</li>
                            </ol>
                        </>
                    )}

                    {activeTab === 'fee' && (
                        <>
                            <h2 className="ref-content-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Membership Category & Fee</h2>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.95rem' }}>
                                    <thead>
                                        <tr style={{ background: '#f8fafc' }}>
                                            <th style={{ border: '1px solid #cbd5e1', padding: '1rem', fontWeight: 600, color: '#334155', width: '30%' }}>Member Category</th>
                                            <th style={{ border: '1px solid #cbd5e1', padding: '1rem', fontWeight: 600, color: '#334155', width: '40%' }}>Turnover in Rs.</th>
                                            <th style={{ border: '1px solid #cbd5e1', padding: '1rem', fontWeight: 600, color: '#334155', width: '30%' }}>Applicable Basic Annual Subscription Charges (Rs.)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem', verticalAlign: 'middle' }} rowSpan={4}>Ordinary Member</td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 0 crore - 10 crore</td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 10,000</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 10 crore - 50 crore</td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 25,000</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 50 crore - 100 crore</td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 50,000</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>More than Rs. 100 crore</td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 1,00,000</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Associate Member</td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}></td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 15,000</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Association Member</td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}></td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 15,000</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Public Sector</td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}></td>
                                            <td style={{ border: '1px solid #cbd5e1', padding: '1rem' }}>Rs. 15,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {activeTab === 'rules' && (
                        <>
                            <h2 className="ref-content-title" style={{ marginBottom: '3rem' }}>Rules & Regulation</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem' }}>
                                <img src="/images/rules_icon.png" alt="Rules Icon" style={{ width: '120px', height: 'auto', marginBottom: '1rem' }} onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/3074/3074064.png"; }} />
                                <a href="https://nsai.co.in/storage/app/media/nsairr2013latest.pdf" target="_blank" rel="noreferrer" style={{ color: '#1e3a8a', textDecoration: 'underline', fontWeight: 500, fontSize: '1.1rem' }}>
                                    Click to view Rules & Regulation
                                </a>
                            </div>
                        </>
                    )}
                </div>

            </section>
        </main>
    );
};

export default Membership;
