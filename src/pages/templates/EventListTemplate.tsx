import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    type: string;
    desc: string;
    status: string; // 'upcoming' | 'past'
}

interface Props {
    title: string;
    description: string;
    data: Event[];
}

const EventListTemplate: React.FC<Props> = ({ title, description, data }) => {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

    const filteredEvents = data.filter(evt => evt.status === activeTab);

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
                <div className="event-tabs">
                    <button 
                        className={`e-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
                        onClick={() => setActiveTab('upcoming')}
                    >
                        Upcoming Events
                    </button>
                    <button 
                        className={`e-tab ${activeTab === 'past' ? 'active' : ''}`}
                        onClick={() => setActiveTab('past')}
                    >
                        Past Events
                    </button>
                </div>

                <div className="event-list">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(evt => (
                            <div key={evt.id} className="event-card">
                                <div className="event-date-block">
                                    <span className="ed-day">{evt.date.split(' ')[0]}</span>
                                    <span className="ed-month">{evt.date.split(' ')[1]}</span>
                                </div>
                                <div className="event-info">
                                    <span className="event-type">{evt.type}</span>
                                    <h3>{evt.title}</h3>
                                    <div className="event-meta">
                                        <span><Calendar size={14} /> {evt.date}</span>
                                        <span><MapPin size={14} /> {evt.location}</span>
                                    </div>
                                    <p>{evt.desc}</p>
                                </div>
                                <div className="event-actions">
                                    <button className="btn-event">View Details <ArrowRight size={16}/></button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-state">No {activeTab} events found.</div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default EventListTemplate;
