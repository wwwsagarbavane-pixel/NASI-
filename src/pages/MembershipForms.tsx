import React, { useState } from 'react';
import { ArrowRight, FileText, Users, Download } from 'lucide-react';
import NewMembershipForm from '../components/forms/NewMembershipForm';
import RenewalForm from '../components/forms/RenewalForm';

const MembershipForms = () => {
    const [selectedForm, setSelectedForm] = useState<'none' | 'new' | 'renewal'>('none');

    const renderHero = () => (
        <section className="ref-hero">
            <div className="ref-hero-left">
                <div className="ref-label-wrap">
                    <div className="ref-label-line"></div>
                    <span className="ref-label">BECOME A MEMBER</span>
                </div>
                <h1 className="ref-hero-title">
                    Membership <span>Form</span>
                </h1>
                <p className="ref-hero-desc">
                    Be a part of India's growing seed industry. Fill out the membership form and join NSAI in building a stronger, sustainable future together.
                </p>

                <div className="ref-hero-features">
                    <div className="ref-h-feature">
                        <div className="ref-h-icon"><i className="fa fa-users"></i></div>
                        <div className="ref-h-text">Larger<br/>Network</div>
                    </div>
                    <div className="ref-h-feature">
                        <div className="ref-h-icon"><i className="fa fa-leaf"></i></div>
                        <div className="ref-h-text">Greater<br/>Opportunities</div>
                    </div>
                    <div className="ref-h-feature">
                        <div className="ref-h-icon"><i className="fa fa-line-chart"></i></div>
                        <div className="ref-h-text">Sustainable<br/>Growth</div>
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
    );

    return (
        <main style={{ background: '#f8fafc', paddingBottom: '4rem' }}>
            {selectedForm === 'none' && (
                <>
                    {renderHero()}
                    
                    <section className="form-selection-container">
                        <div className="form-card-new">
                            <div className="fc-icon"><FileText size={32} /></div>
                            <div className="fc-content">
                                <h3>New Membership Form</h3>
                                <p>For Individual / Corporate Members</p>
                            </div>
                            <div className="fc-actions">
                                <button className="btn-primary" onClick={() => setSelectedForm('new')}>
                                    Fill Form Online <ArrowRight size={16} />
                                </button>
                                <button className="btn-outline-small">
                                    <Download size={14} /> View PDF
                                </button>
                            </div>
                        </div>

                        <div className="form-card-new">
                            <div className="fc-icon"><Users size={32} /></div>
                            <div className="fc-content">
                                <h3>Membership Form for Renewal Members</h3>
                                <p>For Existing Members</p>
                            </div>
                            <div className="fc-actions">
                                <button className="btn-primary" onClick={() => setSelectedForm('renewal')}>
                                    Fill Renewal Form Online <ArrowRight size={16} />
                                </button>
                                <button className="btn-outline-small">
                                    <Download size={14} /> View PDF
                                </button>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {selectedForm === 'new' && <NewMembershipForm onBack={() => setSelectedForm('none')} />}
            {selectedForm === 'renewal' && <RenewalForm onBack={() => setSelectedForm('none')} />}
            
        </main>
    );
};

export default MembershipForms;
