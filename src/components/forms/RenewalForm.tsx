import React, { useState } from 'react';
import { ArrowRight, UploadCloud, CheckCircle2, FileText, ArrowLeft, Download } from 'lucide-react';

const RenewalForm = ({ onBack }: { onBack: () => void }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({
        category: '',
        turnover: '',
        paymentMethod: 'online'
    });
    const [submitted, setSubmitted] = useState(false);

    const steps = [
        { id: 1, title: 'Organisation & Membership' },
        { id: 2, title: 'Contacts' },
        { id: 3, title: 'Membership Details' },
        { id: 4, title: 'Business Information' },
        { id: 5, title: 'Payment' },
        { id: 6, title: 'Documents' },
        { id: 7, title: 'Declaration' },
        { id: 8, title: 'Review & Submit' }
    ];

    const nextStep = () => {
        if (step < 8) setStep(step + 1);
        window.scrollTo(0, 500);
    };
    
    const prevStep = () => {
        if (step > 1) setStep(step - 1);
        window.scrollTo(0, 500);
    };

    const handleInput = (field: string, val: string) => {
        setFormData({ ...formData, [field]: val });
    };

    const calculateFee = () => {
        const cat = formData.category;
        const turn = formData.turnover;
        if (!cat) return null;
        
        if (cat === 'ordinary') {
            if (turn === 'tier1') return { admission: 0, annual: 10000, total: 10000 };
            if (turn === 'tier2') return { admission: 0, annual: 25000, total: 25000 };
            if (turn === 'tier3') return { admission: 0, annual: 60000, total: 60000 };
            if (turn === 'tier4') return { admission: 0, annual: 100000, total: 100000 };
            return { admission: 0, annual: 10000, total: 10000 }; 
        }
        
        return { admission: 0, annual: 15000, total: 15000 };
    };

    const feeDetails = calculateFee();

    if (submitted) {
        return (
            <div className="form-success-state">
                <CheckCircle2 size={80} color="#16a34a" />
                <h2>Renewal Application Submitted Successfully</h2>
                <p className="ref-number">Application Reference Number: <strong>NSAI-REN-26-881</strong></p>
                <p className="success-desc">
                    Your membership renewal application has been submitted successfully.<br/>
                    Our team will review the submitted information and documents.
                </p>
                <div className="success-actions">
                    <button className="btn-primary">View Application</button>
                    <button className="btn-outline"><Download size={16}/> Download Submitted Application</button>
                    <button className="btn-outline" onClick={onBack}>Back to Membership</button>
                </div>
            </div>
        );
    }

    return (
        <div className="multi-step-form-wrapper">
            
            <div className="form-header">
                <button className="back-btn" onClick={onBack}><ArrowLeft size={16}/> Back to Form Selection</button>
                <h2>Membership Renewal Application (2026-27)</h2>
                <p>Please provide your existing membership details to begin the renewal process.</p>
            </div>

            <div className="form-layout">
                {/* Left Progress Sidebar */}
                <div className="form-sidebar">
                    {steps.map(s => (
                        <div key={s.id} className={`form-step-indicator ${step === s.id ? 'active' : ''} ${step > s.id ? 'completed' : ''}`}>
                            <div className="step-num">{s.id < 10 ? `0${s.id}` : s.id}</div>
                            <div className="step-text">{s.title}</div>
                        </div>
                    ))}
                </div>

                {/* Right Content Area */}
                <div className="form-content">
                    
                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="form-step">
                            <h3>01. Organisation & Membership Details</h3>
                            <div className="form-grid">
                                <div className="input-group full-width highlight-bg">
                                    <label>Existing NSAI Membership Number *</label>
                                    <input type="text" placeholder="e.g. NSAI/2020/081" onChange={(e) => handleInput('nsaiNumber', e.target.value)} value={formData.nsaiNumber || ''} />
                                    <p className="form-hint" style={{margin: '0.5rem 0 0'}}>This is required to fetch your existing record.</p>
                                </div>
                                <div className="input-group full-width">
                                    <label>Name of the Organisation *</label>
                                    <input type="text" placeholder="e.g. Acme Seeds Pvt Ltd" onChange={(e) => handleInput('orgName', e.target.value)} value={formData.orgName || ''} />
                                </div>
                                <div className="input-group">
                                    <label>Year of Incorporation</label>
                                    <input type="text" placeholder="e.g. 2010" />
                                </div>
                                <div className="input-group full-width">
                                    <label>Registered Address *</label>
                                    <textarea placeholder="Full address" rows={2}></textarea>
                                </div>
                                <div className="input-group">
                                    <label>Telephone</label>
                                    <input type="text" placeholder="+91" />
                                </div>
                                <div className="input-group">
                                    <label>Mobile *</label>
                                    <input type="text" placeholder="+91" />
                                </div>
                                <div className="input-group full-width">
                                    <label>Official Email *</label>
                                    <input type="email" placeholder="email@company.com" onChange={(e) => handleInput('email', e.target.value)} value={formData.email || ''} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <div className="form-step">
                            <h3>02. Contacts</h3>
                            
                            <h4 className="section-sub-title">Details of Chairman / MD / CEO</h4>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Name *</label>
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="input-group">
                                    <label>Designation *</label>
                                    <input type="text" placeholder="e.g. CEO" />
                                </div>
                                <div className="input-group">
                                    <label>Email *</label>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-group">
                                    <label>Mobile *</label>
                                    <input type="text" placeholder="+91" />
                                </div>
                            </div>

                            <hr className="form-divider" />

                            <h4 className="section-sub-title">Immediate Contact Person</h4>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Name *</label>
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="input-group">
                                    <label>Designation *</label>
                                    <input type="text" placeholder="e.g. Manager" />
                                </div>
                                <div className="input-group">
                                    <label>Email *</label>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-group">
                                    <label>Mobile *</label>
                                    <input type="text" placeholder="+91" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                        <div className="form-step">
                            <h3>03. Membership Details</h3>
                            <p className="form-hint">Confirm your existing membership category for the renewal.</p>
                            
                            <div className="category-cards">
                                <div className={`category-card ${formData.category === 'ordinary' ? 'selected' : ''}`} onClick={() => handleInput('category', 'ordinary')}>
                                    <div className="cat-header">
                                        <h4>ORDINARY MEMBER</h4>
                                        <div className="cat-radio"></div>
                                    </div>
                                    <p>Organisation deals in at least any two of: Seed Research, Seed Production, Seed Marketing.</p>
                                </div>

                                <div className={`category-card ${formData.category === 'associate' ? 'selected' : ''}`} onClick={() => handleInput('category', 'associate')}>
                                    <div className="cat-header">
                                        <h4>ASSOCIATE MEMBER</h4>
                                        <div className="cat-radio"></div>
                                    </div>
                                    <p>For allied fields but not directly in seeds.</p>
                                </div>

                                <div className={`category-card ${formData.category === 'association' ? 'selected' : ''}`} onClick={() => handleInput('category', 'association')}>
                                    <div className="cat-header">
                                        <h4>ASSOCIATION MEMBER</h4>
                                        <div className="cat-radio"></div>
                                    </div>
                                    <p>For seed associations or agri-allied associations.</p>
                                </div>

                                <div className={`category-card ${formData.category === 'public' ? 'selected' : ''}`} onClick={() => handleInput('category', 'public')}>
                                    <div className="cat-header">
                                        <h4>PUBLIC SECTOR</h4>
                                        <div className="cat-radio"></div>
                                    </div>
                                    <p>For public organisations.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 4 */}
                    {step === 4 && (
                        <div className="form-step">
                            <h3>04. Business Information</h3>
                            
                            {formData.category === 'ordinary' && (
                                <>
                                <h4 className="section-sub-title">Sales Turnover (Rs.)</h4>
                                <div className="form-grid">
                                    <div className="input-group full-width">
                                        <label>Select Turnover Range (For Fee Calculation) *</label>
                                        <select onChange={(e) => handleInput('turnover', e.target.value)} value={formData.turnover || ''}>
                                            <option value="">-- Select Turnover --</option>
                                            <option value="tier1">Rs. 0 to 10 Crores</option>
                                            <option value="tier2">Rs. 10 to 50 Crores</option>
                                            <option value="tier3">Rs. 50 to 100 Crores</option>
                                            <option value="tier4">Rs. above 100 Crores</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <label>FY 2025-26 (Audited / Unaudited)</label>
                                        <input type="text" placeholder="Amount in Rs." />
                                    </div>
                                    <div className="input-group">
                                        <label>FY 2024-25 (Audited)</label>
                                        <input type="text" placeholder="Amount in Rs." />
                                    </div>
                                </div>
                                <hr className="form-divider" />
                                </>
                            )}

                            <h4 className="section-sub-title">Additional Information</h4>
                            <div className="form-grid">
                                <div className="input-group full-width">
                                    <label>Name of State where Marketing is done</label>
                                    <input type="text" />
                                </div>
                                <div className="input-group full-width">
                                    <label>Name of State(s) where Production is being done</label>
                                    <input type="text" />
                                </div>
                                <div className="input-group full-width">
                                    <label>Name of Brand under which products are being sold</label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 5 */}
                    {step === 5 && (
                        <div className="form-step">
                            <h3>05. Payment</h3>
                            
                            {!feeDetails ? (
                                <div className="fee-warning">Please complete Step 3 and 4 to view fee calculations.</div>
                            ) : (
                                <div className="fee-calculation-card">
                                    <div className="fee-row">
                                        <span>Annual Subscription (Renewal)</span>
                                        <span>Rs. {feeDetails.annual.toLocaleString()}/-</span>
                                    </div>
                                    <div className="fee-divider"></div>
                                    <div className="fee-row total">
                                        <span>Total Payable</span>
                                        <span>Rs. {feeDetails.total.toLocaleString()}/-</span>
                                    </div>
                                </div>
                            )}

                            <h4 className="section-sub-title" style={{marginTop: '2rem'}}>Payment Details</h4>
                            <div className="payment-options">
                                <label className="radio-label">
                                    <input type="radio" name="payment" checked={formData.paymentMethod === 'online'} onChange={() => handleInput('paymentMethod', 'online')} />
                                    Online Fund Transfer (NEFT / RTGS)
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="payment" checked={formData.paymentMethod === 'deposit'} onChange={() => handleInput('paymentMethod', 'deposit')} />
                                    Deposit by Cash / Cheque / DD
                                </label>
                            </div>

                            <div className="form-grid" style={{ marginTop: '2rem' }}>
                                {formData.paymentMethod === 'online' ? (
                                    <>
                                        <div className="input-group">
                                            <label>Transfer Date *</label>
                                            <input type="date" />
                                        </div>
                                        <div className="input-group">
                                            <label>Bank / Branch *</label>
                                            <input type="text" />
                                        </div>
                                        <div className="input-group">
                                            <label>UTR No. *</label>
                                            <input type="text" />
                                        </div>
                                        <div className="input-group">
                                            <label>Amount *</label>
                                            <input type="text" value={feeDetails ? `Rs. ${feeDetails.total}` : ''} readOnly />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="input-group">
                                            <label>Deposit Date *</label>
                                            <input type="date" />
                                        </div>
                                        <div className="input-group">
                                            <label>Branch *</label>
                                            <input type="text" />
                                        </div>
                                        <div className="input-group">
                                            <label>Cheque / DD No. *</label>
                                            <input type="text" />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    {/* STEP 6 */}
                    {step === 6 && (
                        <div className="form-step">
                            <h3>06. Documents</h3>
                            <p className="form-hint">Upload documents required for renewal.</p>
                            
                            <div className="upload-cards">
                                <div className="upload-card">
                                    <div className="upload-icon"><FileText size={24}/></div>
                                    <div className="upload-info">
                                        <h4>Audited / Un-Audited Balance Sheet</h4>
                                        <p>Previous two years</p>
                                    </div>
                                    <button className="btn-upload"><UploadCloud size={16}/> Upload</button>
                                </div>
                                <div className="upload-card">
                                    <div className="upload-icon"><FileText size={24}/></div>
                                    <div className="upload-info">
                                        <h4>Copy of the Seed License</h4>
                                        <p>Valid license of the Company</p>
                                    </div>
                                    <button className="btn-upload"><UploadCloud size={16}/> Upload</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 7 */}
                    {step === 7 && (
                        <div className="form-step">
                            <h3>07. Declaration</h3>
                            
                            <div className="undertaking-box">
                                <h4>Undertaking</h4>
                                <p>
                                    The applicant confirms awareness of ethical business principles, undertakes to follow ethical business practices during membership tenure, and agrees to abide by NSAI Rules & Regulations.
                                </p>
                            </div>

                            <div className="form-grid" style={{ marginTop: '2rem' }}>
                                <div className="input-group">
                                    <label>Authorized Name *</label>
                                    <input type="text" />
                                </div>
                                <div className="input-group">
                                    <label>Designation *</label>
                                    <input type="text" />
                                </div>
                                <div className="input-group full-width">
                                    <label>Digital Signature / Upload Signature *</label>
                                    <div className="signature-pad">
                                        <span>Click to sign or upload image</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 8 */}
                    {step === 8 && (
                        <div className="form-step">
                            <h3>08. Review & Submit</h3>
                            <p className="form-hint">Please review your renewal information.</p>
                            
                            <div className="review-box">
                                <div className="review-section">
                                    <h4>NSAI Membership</h4>
                                    <p><strong>Membership Number:</strong> {formData.nsaiNumber || 'Not provided'}</p>
                                </div>
                                <div className="review-section">
                                    <h4>Organisation Details</h4>
                                    <p><strong>Name:</strong> {formData.orgName || 'Not provided'}</p>
                                    <p><strong>Email:</strong> {formData.email || 'Not provided'}</p>
                                </div>
                                <div className="review-section">
                                    <h4>Membership</h4>
                                    <p><strong>Category:</strong> {formData.category ? formData.category.toUpperCase() : 'Not provided'}</p>
                                    <p><strong>Total Payable:</strong> {feeDetails ? `Rs. ${feeDetails.total}` : 'N/A'}</p>
                                </div>
                            </div>

                            <label className="checkbox-label" style={{ marginTop: '2rem' }}>
                                <input type="checkbox" />
                                I confirm that the information provided in this renewal application is accurate and complete.
                            </label>
                        </div>
                    )}


                    {/* Navigation Buttons */}
                    <div className="form-footer">
                        {step > 1 ? (
                            <button className="btn-outline" onClick={prevStep}>Previous Step</button>
                        ) : <div></div>}
                        
                        {step < 8 ? (
                            <button className="btn-primary" onClick={nextStep}>Continue <ArrowRight size={16}/></button>
                        ) : (
                            <button className="btn-primary submit-btn" onClick={() => setSubmitted(true)}>SUBMIT RENEWAL APPLICATION <ArrowRight size={16}/></button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RenewalForm;
