import React, { useState } from 'react';
import { ChevronRight, ArrowRight, UploadCloud, CheckCircle2, FileText, ArrowLeft, Download } from 'lucide-react';

const NewMembershipForm = ({ onBack }: { onBack: () => void }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({
        category: '',
        turnover: '',
        paymentMethod: 'online'
    });
    const [submitted, setSubmitted] = useState(false);

    const steps = [
        { id: 1, title: 'Organisation Details' },
        { id: 2, title: 'Leadership & Contacts' },
        { id: 3, title: 'Membership Category' },
        { id: 4, title: 'Business Information' },
        { id: 5, title: 'Membership Fee' },
        { id: 6, title: 'Payment Details' },
        { id: 7, title: 'Documents' },
        { id: 8, title: 'Declaration' },
        { id: 9, title: 'Review & Submit' }
    ];

    const nextStep = () => {
        if (step < 9) setStep(step + 1);
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
            if (turn === 'tier1') return { admission: 1000, annual: 10000, total: 11000 };
            if (turn === 'tier2') return { admission: 1000, annual: 25000, total: 26000 };
            if (turn === 'tier3') return { admission: 1000, annual: 60000, total: 61000 };
            if (turn === 'tier4') return { admission: 1000, annual: 100000, total: 101000 };
            return { admission: 1000, annual: 10000, total: 11000 }; // default
        }
        
        return { admission: 1000, annual: 15000, total: 16000 };
    };

    const feeDetails = calculateFee();

    if (submitted) {
        return (
            <div className="form-success-state">
                <CheckCircle2 size={80} color="#16a34a" />
                <h2>Application Submitted Successfully</h2>
                <p className="ref-number">Application Reference Number: <strong>NSAI-26-4892</strong></p>
                <p className="success-desc">
                    Your membership application has been submitted successfully.<br/>
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
                <h2>New Membership Application (2026-27)</h2>
                <p>Please complete all sections of this digital application.</p>
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
                            <h3>01. Organisation Details</h3>
                            <div className="form-grid">
                                <div className="input-group full-width">
                                    <label>Name of the Organisation *</label>
                                    <input type="text" placeholder="e.g. Acme Seeds Pvt Ltd" onChange={(e) => handleInput('orgName', e.target.value)} value={formData.orgName || ''} />
                                </div>
                                <div className="input-group">
                                    <label>Year of Incorporation *</label>
                                    <input type="text" placeholder="e.g. 2010" onChange={(e) => handleInput('year', e.target.value)} value={formData.year || ''} />
                                </div>
                                <div className="input-group full-width">
                                    <label>Registered Address *</label>
                                    <textarea placeholder="Full address" rows={3} onChange={(e) => handleInput('address', e.target.value)} value={formData.address || ''}></textarea>
                                </div>
                                <div className="input-group">
                                    <label>Telephone</label>
                                    <input type="text" placeholder="+91" onChange={(e) => handleInput('telephone', e.target.value)} value={formData.telephone || ''} />
                                </div>
                                <div className="input-group">
                                    <label>Mobile *</label>
                                    <input type="text" placeholder="+91" onChange={(e) => handleInput('mobile', e.target.value)} value={formData.mobile || ''} />
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
                            <h3>02. Leadership & Contacts</h3>
                            
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
                            <p className="form-hint">For Industrial Relations and Membership Services</p>
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
                            
                            <button className="btn-outline-dashed">+ Add Additional Contact</button>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                        <div className="form-step">
                            <h3>03. Membership Category</h3>
                            <p className="form-hint">Please select the appropriate membership category for your organisation.</p>
                            
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
                                    <p>For allied fields but not directly in seeds (e.g., Vendor, Agri Input Manufacturer, Consultant).</p>
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
                                    <p>For public organisations dealing in seed or agri-allied fields.</p>
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
                                <div className="input-group full-width">
                                    <label>Name of crop(s) in which Production is being done</label>
                                    <input type="text" />
                                </div>
                                <div className="input-group full-width">
                                    <label>Name of crop(s) in which Marketing is being done</label>
                                    <input type="text" />
                                </div>
                                <div className="input-group full-width">
                                    <label>Sale Certificate (CA Certificate) – Turn Over of Seed</label>
                                    <input type="text" placeholder="Details..." />
                                </div>
                                <div className="input-group full-width">
                                    <label>References of two NSAI member companies</label>
                                    <textarea rows={2} placeholder="Reference 1, Reference 2"></textarea>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 5 */}
                    {step === 5 && (
                        <div className="form-step">
                            <h3>05. Membership Fee</h3>
                            <p className="form-hint">Your fee is calculated automatically based on your Category and Turnover.</p>
                            
                            {!feeDetails ? (
                                <div className="fee-warning">Please complete Step 3 and 4 to view fee calculations.</div>
                            ) : (
                                <div className="fee-calculation-card">
                                    <div className="fee-row">
                                        <span>Admission Fee (One-time)</span>
                                        <span>Rs. {feeDetails.admission.toLocaleString()}/-</span>
                                    </div>
                                    <div className="fee-row">
                                        <span>Annual Subscription</span>
                                        <span>Rs. {feeDetails.annual.toLocaleString()}/-</span>
                                    </div>
                                    <div className="fee-divider"></div>
                                    <div className="fee-row total">
                                        <span>Total Payable</span>
                                        <span>Rs. {feeDetails.total.toLocaleString()}/-</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* STEP 6 */}
                    {step === 6 && (
                        <div className="form-step">
                            <h3>06. Payment Details</h3>
                            
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
                                        <div className="input-group">
                                            <label>Deposit Challan No.</label>
                                            <input type="text" />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    {/* STEP 7 */}
                    {step === 7 && (
                        <div className="form-step">
                            <h3>07. Required Documents</h3>
                            <p className="form-hint">Please upload the following required documents in PDF format.</p>
                            
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
                                <div className="upload-card uploaded-state">
                                    <div className="upload-icon"><CheckCircle2 size={24} color="#16a34a"/></div>
                                    <div className="upload-info">
                                        <h4>Undertaking on Company Letter Head</h4>
                                        <p>undertaking_signed.pdf (1.2 MB)</p>
                                    </div>
                                    <button className="btn-upload text-red">Remove</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 8 */}
                    {step === 8 && (
                        <div className="form-step">
                            <h3>08. Declaration & Signature</h3>
                            
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
                                <div className="input-group full-width">
                                    <label>Company Seal (Optional upload)</label>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 9 */}
                    {step === 9 && (
                        <div className="form-step">
                            <h3>09. Review Application</h3>
                            <p className="form-hint">Please review your information before final submission.</p>
                            
                            <div className="review-box">
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
                                <div className="review-section">
                                    <h4>Payment</h4>
                                    <p><strong>Method:</strong> {formData.paymentMethod === 'online' ? 'Online Transfer' : 'Deposit'}</p>
                                </div>
                            </div>

                            <label className="checkbox-label" style={{ marginTop: '2rem' }}>
                                <input type="checkbox" />
                                I confirm that the information provided in this application is accurate and complete.
                            </label>
                        </div>
                    )}


                    {/* Navigation Buttons */}
                    <div className="form-footer">
                        {step > 1 ? (
                            <button className="btn-outline" onClick={prevStep}>Previous Step</button>
                        ) : <div></div>}
                        
                        {step < 9 ? (
                            <button className="btn-primary" onClick={nextStep}>Continue <ArrowRight size={16}/></button>
                        ) : (
                            <button className="btn-primary submit-btn" onClick={() => setSubmitted(true)}>SUBMIT MEMBERSHIP APPLICATION <ArrowRight size={16}/></button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewMembershipForm;
