import React from 'react';
import { ChevronRight, FileText, Download } from 'lucide-react'; // adjust imports as needed

const About = () => {
    return (
        <main className="main-content">
        {/* About Hero Section */}
        <section className="about-hero">
            <div className="container about-hero-inner">
                <div className="about-hero-text">
                    <div className="section-label bento-label">ABOUT NSAI <span className="line-green"></span></div>
                    <h1 className="about-hero-title">About NSAI</h1>
                    <h2 className="about-hero-subtitle">National Seed Association of India</h2>
                    <p className="about-hero-desc">We represent and unite the Indian seed industry, working closely with policymakers, researchers, and farmers to ensure a progressive, sustainable, and food-secure future for the nation.</p>
                </div>
                <div className="about-hero-visual">
                    <div className="premium-glass-card">
                        <img src="/assets/hero-bg-new.png" alt="Agriculture" />
                    </div>
                </div>
            </div>
        </section>

        {/* Vision & Mission */}
        <section className="vision-mission-section section-padding section-bg-gray">
            <div className="container vision-mission-grid grid-2-col">
                <div className="vision-card premium-card">
                    <div className="vm-icon-wrap"><i data-lucide="eye"></i></div>
                    <h3>OUR VISION</h3>
                    <p className="vm-text">"A dynamic, innovative, internationally competitive, research-based industry producing high performance, high quality seeds and planting materials which benefit farmers and significantly contribute to the sustainable growth of Indian Agriculture."</p>
                    <div className="vm-accent-line"></div>
                </div>
                <div className="mission-card premium-card">
                    <div className="vm-icon-wrap"><i data-lucide="target"></i></div>
                    <h3>OUR MISSION</h3>
                    <p className="vm-text">To encourage investment in state of the art R&amp;D to bring to the Indian farmer high yielding varieties and hybrids, and thereby promote the growth of the Indian Seed Industry.</p>
                    <div className="vm-accent-line"></div>
                </div>
            </div>
        </section>

        {/* What We Do / Objectives */}
        <section className="objectives-section container section-padding">
            <div className="section-header-centered">
                <div className="section-label"><span className="dot-green"></span> WHAT WE DO</div>
                <h2 className="section-title">Objectives</h2>
            </div>
            
            <div className="objective-grid grid-2-col mt-5">
                <div className="objective-card">
                    <div className="obj-number">01</div>
                    <div className="obj-icon"><i data-lucide="shield"></i></div>
                    <p>To create a policy environment for the seed industry</p>
                    <div className="obj-arrow"><i data-lucide="arrow-up-right"></i></div>
                </div>
                <div className="objective-card">
                    <div className="obj-number">02</div>
                    <div className="obj-icon"><i data-lucide="briefcase"></i></div>
                    <p>To create better interaction & provide business opportunities among our stakeholders</p>
                    <div className="obj-arrow"><i data-lucide="arrow-up-right"></i></div>
                </div>
                <div className="objective-card">
                    <div className="obj-number">03</div>
                    <div className="obj-icon"><i data-lucide="users"></i></div>
                    <p>To hold meetings and interactions between the public & private sector to discuss common issues</p>
                    <div className="obj-arrow"><i data-lucide="arrow-up-right"></i></div>
                </div>
                <div className="objective-card">
                    <div className="obj-number">04</div>
                    <div className="obj-icon"><i data-lucide="handshake"></i></div>
                    <p>To facilitate Public Private Partnership</p>
                    <div className="obj-arrow"><i data-lucide="arrow-up-right"></i></div>
                </div>
            </div>
        </section>

        {/* Our Team Header */}
        <section className="team-header-section section-padding">
            <div className="container text-center">
                <div className="section-label"><span className="dot-green"></span> OUR TEAM</div>
                <h2 className="section-title">Meet the leadership and professionals working with NSAI.</h2>
            </div>
        </section>

        {/* Office Bearers */}
        <section className="team-category-section container">
            <h3 className="team-category-title">Office Bearers</h3>
            <div className="team-grid-4-col">
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-01.jpg" alt="Dr. Prabhakar Rao" /></div>
                    <div className="team-info">
                        <h4>Dr. Prabhakar Rao</h4>
                        <span className="designation">President, NSAI</span>
                        <span className="organization">Fortune Hybrid Seeds Ltd.</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-02.jpg" alt="Mr. Dineshbhai B. Patel" /></div>
                    <div className="team-info">
                        <h4>Mr. Dineshbhai B. Patel</h4>
                        <span className="designation">Vice President, NSAI</span>
                        <span className="organization">Mahalaxmi Cropscience Pvt. Ltd.</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-03.jpg" alt="Dr. Jai Singh" /></div>
                    <div className="team-info">
                        <h4>Dr. Jai Singh</h4>
                        <span className="designation">General Secretary, NSAI</span>
                        <span className="organization">Prabhat Agri Biotech Limited</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-04.jpg" alt="Mr. Vaibhav Ravi Kashikar" /></div>
                    <div className="team-info">
                        <h4>Mr. Vaibhav Ravi Kashikar</h4>
                        <span className="designation">Treasurer, NSAI</span>
                        <span className="organization">Ankur Seeds Pvt. Ltd.</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Members */}
        <section className="team-category-section container mt-5">
            <h3 className="team-category-title">Members</h3>
            <div className="team-grid-4-col">
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-05.jpg" alt="Mr. Chunduri Rambabu" /></div>
                    <div className="team-info">
                        <h4>Mr. Chunduri Rambabu</h4>
                        <span className="organization">Sri Rama Agri Genetics India Pvt. Ltd.</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-06.jpg" alt="Mr. K. Praveen Kumar" /></div>
                    <div className="team-info">
                        <h4>Mr. K. Praveen Kumar</h4>
                        <span className="organization">Asian Agri Genetics Ltd.</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-07.jpg" alt="Mr. Siddhartha S Sen" /></div>
                    <div className="team-info">
                        <h4>Mr. Siddhartha S Sen</h4>
                        <span className="organization">Parasmoni Organic & Agri Products Pvt. Ltd.</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-08.jpg" alt="Mr. Ajeet Mulay" /></div>
                    <div className="team-info">
                        <h4>Mr. Ajeet Mulay</h4>
                        <span className="organization">Green Gold Seeds Pvt. Ltd.</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-09.jpg" alt="Mr. Pawan Kumar Kansal" /></div>
                    <div className="team-info">
                        <h4>Mr. Pawan Kumar Kansal</h4>
                        <span className="organization">Kohinoor Seed Fields (India) Pvt. Ltd.</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-10.jpg" alt="Dr. Gundavaram Pawan" /></div>
                    <div className="team-info">
                        <h4>Dr. Gundavaram Pawan</h4>
                        <span className="organization">Kaveri Seed Company Limited</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-11.jpg" alt="Mr. Patel Rameshbhai Dhulabhai" /></div>
                    <div className="team-info">
                        <h4>Mr. Patel Rameshbhai Dhulabhai</h4>
                        <span className="organization">Shree Ram AgroTech</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-12.jpg" alt="Mr. U Saravanan" /></div>
                    <div className="team-info">
                        <h4>Mr. U Saravanan</h4>
                        <span className="organization">National Fertilizers Ltd.</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-13.jpg" alt="Mr. M. Ravi Kumar" /></div>
                    <div className="team-info">
                        <h4>Mr. M. Ravi Kumar</h4>
                        <span className="organization">Seedsmen Association</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Co-Opt Members */}
        <section className="team-category-section container mt-5">
            <h3 className="team-category-title">Co-Opt Members</h3>
            <div className="team-grid-2-col-sm">
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-14.jpg" alt="Dr. Bibhuti Bhusan Pattanaik" /></div>
                    <div className="team-info">
                        <h4>Dr. Bibhuti Bhusan Pattanaik</h4>
                        <span className="organization">Bhulaxmi Seeds</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-15.jpg" alt="Dr. Kirtan Y Patel" /></div>
                    <div className="team-info">
                        <h4>Dr. Kirtan Y Patel</h4>
                        <span className="organization">Moti Seeds Pvt. Ltd.</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Secretariat */}
        <section className="team-category-section container mt-5 pb-5">
            <h3 className="team-category-title">Secretariat</h3>
            <div className="team-grid-4-col">
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-16.jpg" alt="Dr. R K Tripathi" /></div>
                    <div className="team-info">
                        <h4>Dr. R K Tripathi</h4>
                        <span className="designation">Advisor (Technical)</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-17.jpg" alt="Mr. Yashpal Saini" /></div>
                    <div className="team-info">
                        <h4>Mr. Yashpal Saini</h4>
                        <span className="designation">Deputy Director (Admin & Accounts)</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-18.jpg" alt="Dr. Deepanker Pandey" /></div>
                    <div className="team-info">
                        <h4>Dr. Deepanker Pandey</h4>
                        <span className="designation">Deputy Director (Technical)</span>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-img-wrap"><img src="/assets/team/profile-19.jpg" alt="Dr. Pramod Sharma" /></div>
                    <div className="team-info">
                        <h4>Dr. Pramod Sharma</h4>
                        <span className="designation">Assistant Director (Technical)</span>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section section-bg-dark-green relative section-padding">
            <div className="container text-center">
                <h2 className="text-white mb-3" style={{"fontSize":"2.5rem","fontWeight":"700"}}>Building a Stronger Seed Industry Together</h2>
                <p className="text-white-80 mb-4" style={{"maxWidth":"600px","margin":"0 auto","fontSize":"1.1rem"}}>NSAI works to create meaningful collaboration, policy engagement and opportunities across the seed industry.</p>
                <div className="d-flex justify-content-center gap-3" style={{"display":"flex","gap":"1rem","justifyContent":"center"}}>
                    <button className="btn btn-white btn-pill btn-large">Learn More</button>
                    <button className="btn btn-dark-green-outline btn-pill btn-large">Contact NSAI &rarr;</button>
                </div>
            </div>
        </section>
    </main>
    );
};

export default About;