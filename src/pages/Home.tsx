import React, { useState, useEffect } from 'react';
import { ChevronRight, FileText, Download } from 'lucide-react'; // adjust imports as needed

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    
    const slides = [
        "/assets/hero-slide-final-1.png",
        "/assets/hero-slide-final-2.png",
        "/assets/hero-slide-final-3.png",
        "/assets/hero-slide-final-4.png"
    ];

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="main-content">
        
        {/* 2. Hero Section (Full Width Background) */}
        <section 
            className="hero-full-bg"
            
            
        >
            <div className="hero-bg-image-wrapper hero-slider-wrapper">
                {slides.map((slide, index) => (
                    <img 
                        key={index}
                        src={slide} 
                        alt={`Hero Background ${index + 1}`} 
                        className={`hero-bg-img hero-slide ${index === currentSlide ? "active" : ""}`} 
                    />
                ))}
                <div className="hero-bg-gradient"></div>
                <div className="hero-bottom-gradient"></div>
            </div>

            <div className="container hero-content-overlay">
                {/* Left Text */}
                <div className="hero-text-block">
                    <div className="hero-pretitle-wrap">
                        <div className="pretitle-top">SEEDS TODAY</div>
                        <div className="pretitle-line"></div>
                        <div className="pretitle-bottom">A STRONGER TOMORROW</div>
                    </div>
                    <h1 className="hero-title"><span className="text-black">Shaping<br />India's</span><br /><span className="text-dark-green">Seed Future.</span></h1>
                    <p className="hero-subtitle">Representing, uniting and advancing India's seed industry through policy, innovation and collaboration.</p>
                    
                    <div className="hero-actions">
                        <a href="/about-us" className="btn btn-dark-green btn-large">Explore NSAI &rarr;</a>
                        
                    </div>
                </div>

            </div>

            {/* Stats Bar Overlay Bottom Left */}
            <div className="hero-stats-overlay container">
                <div className="stat-item-white">
                    <i data-lucide="sprout"></i>
                    <div className="stat-text">
                        <strong>200+</strong>
                        <span>Members</span>
                    </div>
                </div>
                <div className="stat-divider-white"></div>
                <div className="stat-item-white">
                    <i data-lucide="users"></i>
                    <div className="stat-text">
                        <strong>Pan India</strong>
                        <span>Network</span>
                    </div>
                </div>
                <div className="stat-divider-white"></div>
                <div className="stat-item-white">
                    <i data-lucide="leaf"></i>
                    <div className="stat-text">
                        <strong>10+</strong>
                        <span>Years of Impact</span>
                    </div>
                </div>
                
                {/* Scroll indicator bottom right */}
                <div className="scroll-indicator">
                    <span>Scroll</span>
                    <i data-lucide="arrow-down"></i>
                </div>
            </div>
        </section>

        {/* ORGANIC BENTO SECTION */}
        <section className="organic-bento container section-padding">
            <div className="bento-grid">
                
                {/* 1. Main About Block */}
                <div className="bento-card bento-about">
                    {/* Background Blobs */}
                    <div className="blob-bg-1"></div>
                    <div className="blob-bg-2"></div>
                    
                    <div className="bento-about-content">
                        <div className="section-label bento-label">ABOUT NSAI <span className="line-green"></span></div>
                        <h2 className="bento-title">Seeds for a<br /><span className="text-dark-green">Brighter India</span></h2>
                        <p className="bento-desc">The vision of NSAI is to create "A dynamic, innovative, internationally competitive, research based industry producing high performance, high quality seeds and planting materials which benefit farmers and significantly contribute to the sustainable growth of Indian Agriculture".</p>
                        
                        <div className="bento-about-actions mt-4">
                            <button className="btn btn-dark-green btn-pill-icon">Know Us <i className="circle-icon" data-lucide="arrow-right"></i></button>
                            <div className="action-stats">
                                <div className="stat">Farmers<br />First</div>
                                <div className="stat-div"></div>
                                <div className="stat">Sustainable<br />Agriculture</div>
                                <div className="stat-div"></div>
                                <div className="stat">Stronger<br />India</div>
                            </div>
                        </div>
                        
                        <div className="floating-handwriting">Growing<br />Together</div>
                        <div className="handwriting-underline"></div>
                    </div>
                </div>

                {/* 2. Events Card */}
                <div className="bento-card card-events">
                    <div className="card-content">
                        <div className="card-icon-wrap"><i data-lucide="calendar"></i></div>
                        <h3>EVENTS</h3>
                        <p>Bringing the seed community together</p>
                        <button className="circle-btn-white"><i data-lucide="arrow-right"></i></button>
                    </div>
                    <div className="corner-image-br">
                        <img src="/assets/gallery/image 02.jpg" alt="Events" />
                    </div>
                </div>

                {/* 3. Magazines Card */}
                <div className="bento-card card-magazines">
                    <div className="card-content">
                        <div className="card-icon-wrap"><i data-lucide="book-open"></i></div>
                        <h3>MAGAZINES</h3>
                        <p>Knowledge that cultivates growth</p>
                        <button className="circle-btn-white"><i data-lucide="arrow-right"></i></button>
                    </div>
                    <div className="floating-magazines">
                        <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=200&auto=format&fit=crop" className="mag-back" alt="Mag" />
                        <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=200&auto=format&fit=crop" className="mag-front" alt="Mag" />
                    </div>
                </div>

                {/* 4. Membership Card */}
                <div className="bento-card card-membership">
                    <div className="card-content">
                        <div className="card-icon-wrap"><i data-lucide="users"></i></div>
                        <h3>MEMBERSHIP</h3>
                        <p>Stronger together for a sustainable future</p>
                        <button className="circle-btn-white"><i data-lucide="arrow-right"></i></button>
                    </div>
                    <div className="corner-image-br curve-alt">
                        <img src="/assets/gallery/image 06.jpg" alt="Membership" />
                    </div>
                </div>

                {/* 5. Training Card */}
                <div className="bento-card card-training">
                    <div className="card-content">
                        <div className="card-icon-wrap"><i data-lucide="graduation-cap"></i></div>
                        <h3>TRAINING</h3>
                        <p>Building knowledge today for a better tomorrow</p>
                        <button className="circle-btn-white"><i data-lucide="arrow-right"></i></button>
                    </div>
                    <div className="corner-image-br">
                        <img src="/assets/gallery/image 08.jpg" alt="Training" />
                    </div>
                </div>

                {/* 6. Congress Card (Wide) */}
                <div className="bento-card card-congress">
                    {/* Faded Background Image */}
                    <div className="congress-bg"></div>
                    
                    <div className="congress-content">
                        <h2>Indian Seed <span className="text-dark-green">Congress</span></h2>
                        <div className="line-green-short"></div>
                        <p>A platform for collaboration, innovation and a stronger seed ecosystem.</p>
                        <button className="btn btn-dark-green btn-pill-icon mt-4">Explore <i data-lucide="arrow-right"></i></button>
                    </div>
                    
                    <div className="congress-map">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/India_map_en.svg/1024px-India_map_en.svg.png" className="dotted-map-img" alt="India Map" />
                        <div className="map-dots-overlay">
                            {/* We can simulate glowing dots with CSS if needed */}
                        </div>
                    </div>
                    
                    <div className="congress-side-text">
                        <div className="line-green-vertical"></div>
                        <span>SEEDS</span>
                        <span>PEOPLE</span>
                        <span>A STRONGER</span>
                        <span>INDIA</span>
                        <div className="line-green-vertical"></div>
                    </div>
                </div>
                
            </div>
        </section>

        {/* 6.5 News & Insights */}
        <section className="news-clean container section-padding">
            <div className="section-header-row">
                <div className="section-label"><span className="dot-green"></span> NEWS & INSIGHTS</div>
                <a href="#" className="view-all-link">View All News &rarr;</a>
            </div>
            
            <div className="news-split">
                {/* Featured Left */}
                <div className="news-featured-clean">
                    <img src="/assets/gallery/image 10.jpg" alt="Seed Sector" />
                    <div className="featured-badge">Featured</div>
                    <div className="news-overlay-bottom">
                        <span className="news-date">AUG 12, 2025</span>
                        <h3>India's Seed Sector:<br />Opportunities for a Food-Secure Future</h3>
                        <button className="circle-btn-outline-white"><i data-lucide="arrow-right"></i></button>
                    </div>
                </div>
                
                {/* List Right */}
                <div className="news-list-clean">
                    <div className="news-list-item">
                        <img src="/assets/gallery/image 05.jpg" alt="News" />
                        <div className="news-list-content">
                            <span className="news-date">AUG 11, 2025</span>
                            <h4>List of Eligible Candidates for<br />the NSAI GC Election 2025-27</h4>
                        </div>
                        <button className="circle-btn-gray-small"><i data-lucide="arrow-right"></i></button>
                    </div>
                    
                    <div className="news-list-item">
                        <img src="/assets/gallery/image 07.jpg" alt="News" />
                        <div className="news-list-content">
                            <span className="news-date">JUL 28, 2025</span>
                            <h4>Election Notice - NSAI<br />Governing Council 2025-27</h4>
                        </div>
                        <button className="circle-btn-gray-small"><i data-lucide="arrow-right"></i></button>
                    </div>
                    
                    <div className="news-list-item">
                        <img src="/assets/gallery/image 09.jpg" alt="News" />
                        <div className="news-list-content">
                            <span className="news-date">JUL 22, 2025</span>
                            <h4>NSAI 19th AGM & Election<br />2025-27</h4>
                        </div>
                        <button className="circle-btn-gray-small"><i data-lucide="arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </section>

        {/* 8. Events & Gallery */}
        <section className="gallery-clean container section-padding pt-0">
            <div className="section-header-row">
                <div className="section-label"><span className="dot-green"></span> EVENTS & GALLERY</div>
            </div>
            
            <div className="gallery-grid-masonry mt-4">
                <div className="gallery-item-masonry"><img src="/assets/gallery/image 02.jpg" alt="Gallery" /></div>
                <div className="gallery-item-masonry"><img src="/assets/gallery/image 04.jpg" alt="Gallery" /></div>
                <div className="gallery-item-masonry"><img src="/assets/gallery/image 06.jpg" alt="Gallery" /></div>
                <div className="gallery-item-masonry"><img src="/assets/gallery/image 08.jpg" alt="Gallery" /></div>
            </div>
            
            <div style={{"textAlign":"center","marginTop":"3.5rem"}}>
                <button className="btn" style={{"background":"transparent","border":"2px solid var(--dark-green)","color":"var(--dark-green)","fontWeight":"600","padding":"0.8rem 2.5rem"}}>View All Gallery &rarr;</button>
            </div>
        </section>

        {/* 9. Testimonial (Modi) */}
        <section className="testimonial-clean section-bg-gray">
            <div className="container testimonial-clean-inner">
                <div className="section-label"><span className="dot-green"></span> PEOPLE SAY ABOUT NSAI</div>
                
                <div className="testimonial-slider-wrap mt-4">
                    <button className="circle-btn-white shadow"><i data-lucide="arrow-left"></i></button>
                    
                    <div className="testimonial-content-clean">
                        <div className="circular-portrait-modi">
                            <img src="/assets/modi.jpg" alt="Narendra Modi" />
                        </div>
                        
                        <div className="quote-text-wrap">
                            <div className="quote-icon">“</div>
                            <p className="quote-text">It is a pleasure to learn that National Seed Association of India (NSAI) is organising the 10th Indian Seed Congress, 2020 at New Delhi.<br />I wish all success.</p>
                            <div className="quote-author mt-4">
                                <strong>Honorable Narendra Modi</strong>
                                <span>Prime Minister of India</span>
                            </div>
                        </div>
                        
                        <div className="testimonial-sketch">
                            <span className="handwriting-text handwriting-modi">Stronger Farmers<br />Brighter India</span>
                            <i data-lucide="leaf" className="sketch-leaf"></i>
                        </div>
                    </div>
                    
                    <button className="circle-btn-white shadow"><i data-lucide="arrow-right"></i></button>
                </div>
                
                <div className="slider-dots-hero justify-center mt-4">
                    <span className="dot active"></span><span className="dot"></span><span className="dot"></span>
                </div>
            </div>
        </section>

        

    </main>
    );
};

export default Home;






