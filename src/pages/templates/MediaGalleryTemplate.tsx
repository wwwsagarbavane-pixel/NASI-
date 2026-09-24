import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Play } from 'lucide-react';
import type { NsaiRecord } from '../../data/nsai';

interface Props {
    title: string;
    description: string;
    data: NsaiRecord[];
    type: 'photo' | 'video';
}

const MediaGalleryTemplate: React.FC<Props> = ({ title, description, data, type }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    // Extract unique categories
    const categories = ['All', ...Array.from(new Set(data.map(item => item.category || item.parentSection || 'Media')))];

    const filteredData = activeFilter === 'All' 
        ? data 
        : data.filter(item => (item.category || item.parentSection || 'Media') === activeFilter);

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

            <section className="container tmpl-section">
                <div className="gallery-filters">
                    {categories.map(cat => (
                        <button 
                            key={cat} 
                            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredData.map(item => (
                        <div key={item.id} className="gallery-item">
                            <div className="gi-img-wrapper">
                                <img src={item.image || item.url || '/assets/hero-bg-new.png'} alt={item.title} />
                                {type === 'video' && (
                                    <div className="video-overlay">
                                        <div className="play-btn"><Play size={24} fill="currentColor" /></div>
                                        {item.date && <span className="duration">{item.date}</span>}
                                    </div>
                                )}
                            </div>
                            <div className="gi-info">
                                <span className="gi-cat">{item.category || item.parentSection || 'Media'}</span>
                                <h4>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        {item.title}
                                    </a>
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
                
                {filteredData.length === 0 && (
                    <div className="empty-state">No media found for this category.</div>
                )}
            </section>
        </div>
    );
};

export default MediaGalleryTemplate;
