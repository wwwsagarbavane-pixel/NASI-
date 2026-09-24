import React from 'react';
import { advocacyPoints } from '../../data/advocacyData';

const AdvocacyOverview = () => {
    return (
        <section className="container section-padding">
            <div className="section-label mb-4">
                <span className="dot-green"></span> ADVOCACY OVERVIEW
            </div>
            <div className="advocacy-overview-grid">
                {advocacyPoints.map((point) => (
                    <div key={point.id} className="advocacy-card">
                        <div className="advocacy-card-number">0{point.id}</div>
                        <p className="advocacy-card-text">{point.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdvocacyOverview;
