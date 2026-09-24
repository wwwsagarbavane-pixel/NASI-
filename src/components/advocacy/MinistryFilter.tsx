import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

interface Props {
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}

const MinistryFilter: React.FC<Props> = ({ activeFilter, setActiveFilter }) => {
    // Exact ministries from the mockup layout
    const ministries = [
        { 
            name: 'Ministry of Agriculture & Farmers Welfare', 
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' 
        },
        { 
            name: 'Ministry of Environment & Climate Change', 
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' 
        },
        { 
            name: 'Ministry of Science & Technology', 
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' 
        },
        { 
            name: 'Competition Commission of India', 
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg' 
        },
        { 
            name: 'Protection of Plant Variety & Farmers Right Act', 
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg'
        },
        {
            name: 'State Department of Agriculture',
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg'
        },
        { 
            name: 'Other Ministry', 
            icon: <Search size={20} className="text-gray-400" /> 
        }
    ];

    return (
        <div className="ministry-sidebar new-ui-sidebar">
            {ministries.map((ministry) => (
                <button
                    key={ministry.name}
                    className={`ministry-tab new-ui-tab ${activeFilter === ministry.name ? 'active' : ''}`}
                    onClick={() => setActiveFilter(ministry.name)}
                >
                    <div className="ministry-icon-wrapper">
                        {ministry.img ? (
                            <img src={ministry.img} alt={ministry.name} className="ministry-logo-img" />
                        ) : (
                            <div className="ministry-icon-fallback" style={{ background: '#22c55e', color: '#fff', borderRadius: '50%', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Search size={20} />
                            </div>
                        )}
                    </div>
                    <span className="ministry-name" style={{ flex: 1, textAlign: 'left', fontWeight: '500', fontSize: '0.9rem', color: '#000' }}>{ministry.name}</span>
                </button>
            ))}
        </div>
    );
};

export default MinistryFilter;
