import React from 'react';

const CTA = () => {
    return (
        <div className="hero-actions">
            <a href="/about-us" className="btn btn-dark-green btn-large">Explore NSAI &rarr;</a>
            <button className="watch-story-btn">
                <span className="play-btn-circle-outline"><i data-lucide="play"></i></span>
                Watch Our Story
            </button>
        </div>
    );
};

export default CTA;
