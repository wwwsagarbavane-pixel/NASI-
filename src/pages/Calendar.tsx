import React from 'react';
import { Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';

const Calendar = () => {
    const calendarData = [
        {
            month: "January",
            items: ["Seed Times", "Seed News -Newsletter", "Calendar 2016", "Governing Council Meeting", "Souvenir"]
        },
        {
            month: "February",
            items: ["Indian Seed Congress (Conference)", "Seed News -Newsletter"]
        },
        {
            month: "March",
            items: ["Membership Renewal Drive", "Seed News -Newsletter", "Meeting with State Seed Association", "Governing Council Meeting"]
        },
        {
            month: "April",
            items: ["Seed Times", "Seed News -Newsletter", "Capacity Building Training", "Knowledge Report"]
        },
        {
            month: "May",
            items: ["Seed News -Newsletter", "Foundation Day Lecture", "A/Cs Book Closing", "Governing Council Meeting"]
        },
        {
            month: "June",
            items: ["Seed News -Newsletter"]
        },
        {
            month: "July",
            items: ["Seed Times", "Seed News -Newsletter", "Workshop (Technical Issue)", "Governing Council Meeting", "Knowledge Report"]
        },
        {
            month: "August",
            items: ["Seed News -Newsletter"]
        },
        {
            month: "September",
            items: ["Seed News -Newsletter", "Seed Directory", "Annual Report", "AGM", "Governing Council Meeting"]
        },
        {
            month: "October",
            items: ["Seed Times", "Seed News -Newsletter", "Workshop (Training To Members)", "Diwali Greetings", "Knowledge Report"]
        },
        {
            month: "November",
            items: ["Seed News -Newsletter", "Breeder Seed Indent", "Governing Council Meeting"]
        },
        {
            month: "December",
            items: ["Seed News -Newsletter", "New Year's Greetings"]
        }
    ];

    return (
        <main style={{ background: '#f8fafc', paddingBottom: '4rem' }}>
            {/* HERO SECTION */}
            <section className="ref-hero" style={{ minHeight: '35vh' }}>
                <div className="ref-hero-left" style={{ maxWidth: '800px' }}>
                    <div className="ref-label-wrap">
                        <div className="ref-label-line"></div>
                        <span className="ref-label">ANNUAL PLANNING</span>
                    </div>
                    <h1 className="ref-hero-title">
                        Activity Calendar
                    </h1>
                    <p className="ref-hero-desc">
                        Stay up to date with the National Seed Association of India's annual schedule of conferences, meetings, newsletter publications, and workshops.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
                <style>{`
                    .cal-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }
                    @media (min-width: 768px) {
                        .cal-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (min-width: 1024px) {
                        .cal-grid {
                            grid-template-columns: repeat(3, 1fr);
                            gap: 32px;
                        }
                    }
                    @media (min-width: 1280px) {
                        .cal-grid {
                            grid-template-columns: repeat(4, 1fr);
                        }
                    }
                    .cal-card {
                        background: #fff;
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
                        border: 1px solid #f1f5f9;
                        transition: all 0.3s ease;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                    }
                    .cal-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
                        border-color: #cbd5e1;
                    }
                    .cal-card-header {
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                        padding: 16px 20px;
                        border-bottom: 1px solid #e2e8f0;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }
                    .cal-card-month {
                        font-size: 1.1rem;
                        font-weight: 700;
                        color: #0f172a;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .cal-card-body {
                        padding: 20px;
                        flex-grow: 1;
                        background: #fff;
                    }
                    .cal-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 10px;
                        margin-bottom: 12px;
                    }
                    .cal-item:last-child {
                        margin-bottom: 0;
                    }
                    .cal-item-text {
                        font-size: 0.9rem;
                        color: #475569;
                        line-height: 1.4;
                    }
                `}</style>

                <div className="cal-grid">
                    {calendarData.map((data, idx) => (
                        <div key={idx} className="cal-card">
                            <div className="cal-card-header">
                                <CalendarIcon size={20} color="#16a34a" />
                                <span className="cal-card-month">{data.month}</span>
                            </div>
                            <div className="cal-card-body">
                                {data.items.map((item, i) => (
                                    <div key={i} className="cal-item">
                                        <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span className="cal-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Calendar;
