import React from 'react';
import HeroSlider from './HeroSlider';
import CTA from './CTA';
import Stats from './Stats';

const Hero = () => {
    return (
        <section className="hero-full-bg">
            <HeroSlider />

            <div className="container hero-content-overlay">
                <div className="hero-text-block">
                    <div className="hero-pretitle-wrap">
                        <div className="pretitle-top">SEEDS TODAY</div>
                        <div className="pretitle-line"></div>
                        <div className="pretitle-bottom">A STRONGER TOMORROW</div>
                    </div>
                    <h1 className="hero-title"><span className="text-black">Shaping<br />India's</span><br /><span className="text-dark-green">Seed Future.</span></h1>
                    <p className="hero-subtitle">Representing, uniting and advancing India's seed industry through policy, innovation and collaboration.</p>
                    
                    <CTA />
                </div>
            </div>

            <Stats />
        </section>
    );
};

export default Hero;
