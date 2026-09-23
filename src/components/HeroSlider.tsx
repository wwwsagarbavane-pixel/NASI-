import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: '/assets/hero-slide-1.png',
            pretitleTop: 'SEEDS TODAY',
            pretitleBottom: 'A STRONGER TOMORROW',
            title: <>Shaping<br />India's<br /><span className="text-dark-green">Seed Future.</span></>,
            subtitle: "Representing, uniting and advancing India's seed industry through policy, innovation and collaboration.",
            stats: [
                { value: '500+', label: 'Members' },
                { value: '25+', label: 'Years of Impact' }
            ]
        },
        {
            image: '/assets/hero-slide-2.jpg',
            pretitleTop: 'INNOVATION',
            pretitleBottom: 'DRIVING GROWTH',
            title: <>Advanced<br />Breeding<br /><span className="text-dark-green">Technologies.</span></>,
            subtitle: "Embracing cutting-edge research to deliver high-yielding, climate-resilient seed varieties for Indian farmers.",
            stats: [
                { value: '50M+', label: 'Farmers Reached' },
                { value: '100+', label: 'Research Centers' }
            ]
        },
        {
            image: '/assets/hero-slide-3.jpg',
            pretitleTop: 'SUSTAINABILITY',
            pretitleBottom: 'NURTURING NATURE',
            title: <>Sustainable<br />Agriculture<br /><span className="text-dark-green">Practices.</span></>,
            subtitle: "Promoting eco-friendly farming methods that conserve water, enrich soil, and ensure long-term food security.",
            stats: [
                { value: '30%', label: 'Water Saved' },
                { value: '1M+', label: 'Acres Restored' }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="hero">
            <div className="hero-slider-wrapper">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0) 65%), url('${slide.image}') center/cover no-repeat`
                        }}
                    ></div>
                ))}
            </div>

            <img src="/assets/hero-glass-mask.png" alt="" className="hero-glass-mask" />

            <div className="container hero-content-overlay">
                <div className="hero-text-block">
                    <div className="hero-pretitle-wrap">
                        <div className="pretitle-top">{slides[currentSlide].pretitleTop}</div>
                        <div className="pretitle-line"></div>
                        <div className="pretitle-bottom">{slides[currentSlide].pretitleBottom}</div>
                    </div>
                    <h1 className="hero-title">{slides[currentSlide].title}</h1>
                    <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
                    
                    <div className="hero-actions">
                        <Link to="/about" className="btn btn-dark-green btn-large">Explore NSAI &rarr;</Link>
                        <button className="watch-story-btn">
                            <span className="play-icon"><ChevronRight size={20} color="#6b7a5a" /></span>
                            Watch Our Story
                        </button>
                    </div>
                </div>

                <div className="hero-stats-overlay">
                    {slides[currentSlide].stats.map((stat, i) => (
                        <div key={i} className="stat-card">
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="slider-controls">
                    {slides.map((_, index) => (
                        <button 
                            key={index}
                            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
