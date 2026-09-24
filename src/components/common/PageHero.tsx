import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Props {
    title: string;
}

const PageHero: React.FC<Props> = ({ title }) => {
    return (
        <section className="tmpl-hero">
            <div className="tmpl-hero-bg">
                <img src="/assets/hero-bg-new.png" alt="Hero Background" />
            </div>
            <div className="container tmpl-hero-content">
                <div className="breadcrumbs">
                    <Link to="/">Home</Link> <ChevronRight size={14} /> <span>{title}</span>
                </div>
                <h1 style={{ textTransform: 'uppercase' }}>{title}</h1>
                <div className="tmpl-underline"></div>
            </div>
        </section>
    );
};

export default PageHero;
