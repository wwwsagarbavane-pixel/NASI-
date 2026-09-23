import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
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
    );
};

export default HeroSlider;
