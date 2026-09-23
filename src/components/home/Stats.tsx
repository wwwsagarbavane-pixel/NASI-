import React from 'react';
import ScrollIndicator from './ScrollIndicator';

const Stats = () => {
    return (
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
            
            <ScrollIndicator />
        </div>
    );
};

export default Stats;
