import React from 'react';
import { Link } from 'react-router-dom';
import type { NsaiRecord } from '../../data/nsai';

interface Props {
    title: string;
    description: string;
    data: NsaiRecord[];
}

// Helper component for the Leaf Divider
const LeafDivider = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '4rem 0' }}>
        <div style={{ height: '1px', background: '#d1d5db', flex: 1, maxWidth: '300px' }}></div>
        <div style={{ margin: '0 1rem' }}>
            {/* SVG Leaf Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#22c55e" stroke="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fillOpacity="0" />
                <path d="M17.5 10c0-1.5-1.5-3-3.5-3-2.5 0-4.5 2-4.5 4.5S11 16 13.5 16c2 0 3.5-1.5 3.5-3 0-1.5-1-2.5-2.5-2.5C13 10.5 12 11.5 12 11.5s-1-1-2.5-1C8 10.5 7 11.5 7 13c0 2 2 4 5 5 3-1 5-3 5-5 0-1.5-1.5-2.5-2.5-2.5-1.5 0-2.5 1-2.5 1s1-1 2.5-1z" />
                <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" fillOpacity="0" stroke="#22c55e" strokeWidth="2" />
            </svg>
        </div>
        <div style={{ height: '1px', background: '#d1d5db', flex: 1, maxWidth: '300px' }}></div>
    </div>
);

// Event Row Component
const EventRow = ({ event, isUpcoming }: { event: NsaiRecord, isUpcoming?: boolean }) => {
    // Determine images to show
    let images: string[] = [];
    if (event.images && event.images.length > 0) {
        images = event.images;
    } else if (event.image) {
        images = [event.image];
    } else if (event.url?.match(/\.(jpg|jpeg|png)$/i)) {
        images = [event.url];
    } else {
        images = ['/assets/hero-bg-raw.png'];
    }
    
    // As per prompt: Upcoming image 120-180px, Past image 160-220px
    const imgWidth = isUpcoming ? '180px' : '220px';
    const singleImgHeight = isUpcoming ? '120px' : '150px';
    const stackedImgHeight = '100px'; // fixed height for stacked thumbnails
    
    return (
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flexShrink: 0, width: imgWidth, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {images.map((imgSrc, idx) => (
                    <div key={idx} style={{ width: '100%', height: images.length > 1 ? stackedImgHeight : singleImgHeight, overflow: 'hidden', borderRadius: '6px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <img src={imgSrc} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                ))}
            </div>
            
            <div style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e3a8a', margin: '0 0 1rem 0' }}>
                    <a href={event.fileUrl || event.url || "#"} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        {event.title}
                    </a>
                </h3>
                
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                    {event.description || event.content || 'Click the title to view details or download the associated file for this event.'}
                </p>
                
                <div style={{ marginTop: '1rem' }}>
                    {!!(event.content || event.description) ? (
                        <Link to={`/details/${event.id}`} className="btn-event" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#15803d', color: 'white', borderRadius: '4px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                            View Event &rarr;
                        </Link>
                    ) : (event.fileUrl || event.url) && (
                        <a href={event.fileUrl || event.url} target="_blank" rel="noopener noreferrer" className="btn-event" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#15803d', color: 'white', borderRadius: '4px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                            View PDF / Source &rarr;
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const EventListTemplate: React.FC<Props> = ({ title, description, data }) => {
    // Split into upcoming (1st item) and past (rest) for the visual effect
    const upcomingEvents = data.length > 0 ? [data[0]] : [];
    const pastEvents = data.length > 1 ? data.slice(1) : [];

    return (
        <div className="template-page" style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
            <section className="tmpl-hero">
                <div className="tmpl-hero-bg">
                    <img src="/assets/hero-bg-new.png" alt="Agriculture Background" />
                </div>
                <div className="container tmpl-hero-content">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <span>/</span> <span>{title}</span>
                    </div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="tmpl-underline"></div>
                </div>
            </section>

            <section className="container tmpl-section" style={{ padding: '4rem 15px', maxWidth: '1100px', margin: '0 auto' }}>
                {/* UPCOMING EVENTS */}
                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        UPCOMING EVENTS
                    </h2>
                    <div style={{ width: '40px', height: '3px', background: '#22c55e', marginBottom: '2rem' }}></div>
                    
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map(evt => <EventRow key={evt.id} event={evt} isUpcoming={true} />)
                    ) : (
                        <p style={{ color: '#64748b' }}>No upcoming events.</p>
                    )}
                </div>

                {/* Divider */}
                <LeafDivider />

                {/* PAST EVENTS */}
                <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        PAST EVENTS
                    </h2>
                    <div style={{ width: '40px', height: '3px', background: '#22c55e', marginBottom: '2rem' }}></div>
                    
                    {pastEvents.length > 0 ? (
                        pastEvents.map(evt => <EventRow key={evt.id} event={evt} />)
                    ) : (
                        <p style={{ color: '#64748b' }}>No past events.</p>
                    )}
                </div>
                
                <LeafDivider />
            </section>
        </div>
    );
};

export default EventListTemplate;
