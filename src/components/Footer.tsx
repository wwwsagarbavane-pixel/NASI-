import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Leaf, Settings, ArrowRight, MessageCircle, ChevronRight, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="nsai-global-footer">
            {/* CTA Banner Section */}
            <div className="footer-cta-banner">
                <div className="container cta-container">
                    <div className="cta-left">
                        <div className="cta-tag"><span>&bull;</span> JOIN NSAI <hr /></div>
                        <h2>Be a Part of<br />India's Seed Network.</h2>
                        <p>Together we can empower farmers, promote sustainable agriculture and build a stronger, food-secure India.</p>
                    </div>
                    <div className="cta-middle">
                        <div className="cta-feature">
                            <div className="cta-icon"><Users size={24} /></div>
                            <div className="cta-text">
                                <h4>Stronger<br />Farmers</h4>
                                <p>Empowering rural communities</p>
                            </div>
                        </div>
                        <div className="cta-feature">
                            <div className="cta-icon"><Leaf size={24} /></div>
                            <div className="cta-text">
                                <h4>Sustainable<br />Agriculture</h4>
                                <p>For a greener tomorrow</p>
                            </div>
                        </div>
                        <div className="cta-feature">
                            <div className="cta-icon"><Settings size={24} /></div>
                            <div className="cta-text">
                                <h4>Innovative<br />Seed Ecosystem</h4>
                                <p>Driving progress through innovation</p>
                            </div>
                        </div>
                    </div>
                    <div className="cta-right">
                        <Link to="/membership-info" className="btn-become-member">Become a Member <ArrowRight size={20} /></Link>
                        <p className="cta-sub">Grow Together. Build Tomorrow.</p>
                    </div>

                </div>
            </div>

            {/* Main Footer Section */}
            <div className="footer-main">
                <div className="container footer-grid">
                    <div className="footer-col footer-brand-col">
                        <img src="/assets/nsai-logo.png" alt="NSAI Logo" className="footer-logo" />
                        <p className="footer-description">Working together for a progressive seed ecosystem and a stronger, food-secure India.</p>
                        <div className="footer-socials">
                            <a href="#" className="social-icon"><i className="fa fa-linkedin"></i></a>
                            <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="social-icon"><i className="fa fa-youtube-play"></i></a>
                            <a href="#" className="social-icon"><MessageCircle size={20} /></a> 
                        </div>
                    </div>
                    
                    <div className="footer-col footer-links-col">
                        <h4 className="footer-title">About Us</h4>
                        <ul className="footer-links">
                            <li><Link to="/about"><ChevronRight size={16} /> Overview</Link></li>
                            <li><Link to="/about"><ChevronRight size={16} /> Our Vision</Link></li>
                            <li><Link to="/about"><ChevronRight size={16} /> Governing Council</Link></li>
                            <li><Link to="/about"><ChevronRight size={16} /> Team</Link></li>
                            <li><Link to="/about"><ChevronRight size={16} /> Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col footer-links-col">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/membership-info"><ChevronRight size={16} /> Membership</Link></li>
                            <li><Link to="/policy"><ChevronRight size={16} /> Our Work</Link></li>
                            <li><Link to="/seed-rules"><ChevronRight size={16} /> Knowledge Center</Link></li>
                            <li><Link to="/past-conferences"><ChevronRight size={16} /> Events</Link></li>
                            <li><Link to="/press-room"><ChevronRight size={16} /> News</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col footer-links-col">
                        <h4 className="footer-title">Resources</h4>
                        <ul className="footer-links">
                            <li><Link to="/publications"><ChevronRight size={16} /> Publications</Link></li>
                            <li><Link to="/reports"><ChevronRight size={16} /> Reports</Link></li>
                            <li><Link to="/policy"><ChevronRight size={16} /> Policy</Link></li>
                            <li><Link to="/seed-rules"><ChevronRight size={16} /> Regulations</Link></li>
                            <li><Link to="/minutes"><ChevronRight size={16} /> Meeting Minutes</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col footer-contact-col">
                        <h4 className="footer-title">Contact Us</h4>
                        <div className="footer-contact-items">
                            <div className="contact-item">
                                <div className="contact-icon"><MapPin size={20} /></div>
                                <p>National Seed Association of India<br />New Delhi, India</p>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><Mail size={20} /></div>
                                <p>info@nsai.co.in</p>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><Phone size={20} /></div>
                                <p>+91 11 1234 5678</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-col footer-map-col">
                        <div className="india-map-graphic">
                            <div className="seeds-stamp">Seeds for a<br />Stronger India</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <div className="container footer-bottom-flex">
                    <p>&copy; 2026 National Seed Association of India. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="#">Privacy Policy</Link>
                        <span className="separator">|</span>
                        <Link to="#">Terms of Use</Link>
                        <span className="separator">|</span>
                        <Link to="#">Sitemap</Link>
                    </div>
                    <button className="back-to-top" onClick={scrollToTop}><ArrowUp size={20} /></button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
