import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    
    // Use transparent header for home, solid white header for all other tabs
    const headerClass = isHomePage
        ? `nsai-header header-transparent ${isScrolled ? 'scrolled' : ''}`
        : `nsai-header header-solid-white ${isScrolled ? 'scrolled' : ''}`;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <header className={headerClass}>
            <div className="header-inner">
                <Link to="/" className="nav-logo">
                    <img src="/assets/nsai-logo.png" alt="NSAI Logo" className="brand-logo" />
                </Link>

                <nav className={`nav-links-upper ${isMobileMenuOpen ? 'active' : ''}`}>
                    <div className="dropdown">
                        <Link to="/about">ABOUT US <ChevronDown size={14} /></Link>
                        <div className="dropdown-content">
                            <Link to="/about">About NSAI</Link>
                            <Link to="/reports">Annual Reports</Link>
                            <Link to="/brochure">NSAI Brochure</Link>
                        </div>
                    </div>
                    
                    <div className="dropdown">
                        <Link to="/membership-info">MEMBERSHIP <ChevronDown size={14} /></Link>
                        <div className="dropdown-content">
                            <Link to="/membership-info">All About Membership</Link>
                            <Link to="/membership-forms">Membership Forms</Link>
                            <Link to="/login">Register / Login</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <Link to="/policy">OUR WORK <ChevronDown size={14} /></Link>
                        <div className="dropdown-content">
                            <Link to="/policy">Policy</Link>
                            <Link to="/advocacy">Advocacy</Link>
                            <Link to="/publications">Publication</Link>
                            <Link to="/social-initiatives">NSAI Social Initiatives</Link>
                            <Link to="/breeder-seed-index">Breeder Seed Index</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <Link to="/seed-rules">RESOURCE CENTER <ChevronDown size={14} /></Link>
                        <div className="dropdown-content">
                            <Link to="/seed-rules">Seed – Acts & Bills</Link>
                            <Link to="/performance-label">Performance Label</Link>
                            <Link to="/minutes">Minutes of Meetings</Link>
                            <Link to="/ipr">Intellectual Property Rights</Link>
                            <Link to="/reports-recommendations">Reports & Recommendations of Various Committees</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <Link to="/photo-gallery">MEDIA CENTER <ChevronDown size={14} /></Link>
                        <div className="dropdown-content">
                            <Link to="/photo-gallery">Photo Gallery</Link>
                            <Link to="/video-gallery">Video Gallery</Link>
                            <Link to="/press-room">Press Room</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <Link to="/past-conferences">EVENTS <ChevronDown size={14} /></Link>
                        <div className="dropdown-content">
                            <Link to="/past-conferences">Past Conferences</Link>
                            <Link to="/other-events">Other Events</Link>
                            <Link to="/workshop-training">Workshop & Training</Link>
                            <Link to="/agm">AGM</Link>
                            <Link to="/election">NSAI Election</Link>
                        </div>
                    </div>
                </nav>

                <div className="nav-actions">
                    <button className="icon-btn-transparent"><Search size={20} /></button>
                    <Link to="/membership-info" className="btn btn-dark-green">Become a Member &rarr;</Link>
                    <button 
                        className="icon-btn-transparent mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
