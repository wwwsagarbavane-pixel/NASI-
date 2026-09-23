import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ContentBlock {
    id: number;
    title: string;
    icon: string;
    desc: string;
}

interface Props {
    title: string;
    description: string;
    intro: string;
    data: ContentBlock[];
}

const ContentPageTemplate: React.FC<Props> = ({ title, description, intro, data }) => {
    return (
        <div className="template-page">
            <section className="tmpl-hero">
                <div className="tmpl-hero-bg">
                    <img src="/assets/hero-bg-new.png" alt="Agriculture" />
                </div>
                <div className="container tmpl-hero-content">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <ChevronRight size={14} /> <span>{title}</span>
                    </div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="tmpl-underline"></div>
                </div>
            </section>

            <div className="container" style={{ marginTop: '2rem' }}>
                <span className="demo-badge">DEMO DATA</span>
            </div>

            <section className="container tmpl-section">
                <div className="content-intro-card">
                    <p>{intro}</p>
                </div>

                <div className="content-grid">
                    {data.map(block => (
                        <div key={block.id} className="c-block">
                            <div className="cb-icon"><i className={`fa fa-${block.icon}`}></i></div>
                            <h3>{block.title}</h3>
                            <p>{block.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ContentPageTemplate;
