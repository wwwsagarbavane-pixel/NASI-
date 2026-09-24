import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { advocacyIntro } from '../../data/advocacyData';

const AdvocacyHero = () => {
    return (
        <section className="tmpl-hero">
            <div className="tmpl-hero-bg">
                <img src="/assets/hero-bg-new.png" alt="Advocacy Background" />
            </div>
            <div className="container tmpl-hero-content">
                <div className="breadcrumbs">
                    <Link to="/">Home</Link> <ChevronRight size={14} /> <span>Advocacy</span>
                </div>
                <h1>Advocacy</h1>
                <p style={{ maxWidth: '800px', lineHeight: '1.6' }}>{advocacyIntro}</p>
                <div className="tmpl-underline"></div>
            </div>
        </section>
    );
};

export default AdvocacyHero;
