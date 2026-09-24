import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NsaiRecord } from '../../data/nsai';

interface Props {
    notification: NsaiRecord;
}

const NotificationCard: React.FC<Props> = ({ notification }) => {
    // If there is rich content, we show View Details
    const hasDetail = !!(notification.content || notification.description);
    
    return (
        <div className="notification-card new-ui-card" style={{ 
            padding: '24px', 
            border: '1px solid #e2e8f0', 
            borderLeft: '4px solid #16a34a',
            borderRadius: '12px', 
            marginBottom: '20px', 
            background: '#fff',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
            transition: 'transform 0.2s, box-shadow 0.2s'
        }}>
            <div className="nc-content" style={{ width: '100%' }}>
                <h4 className="nc-title" style={{ color: '#0f172a', fontSize: '1.15rem', marginBottom: '8px', fontWeight: '700', lineHeight: '1.4' }}>
                    {notification.title}
                </h4>
                
                <div className="nc-meta" style={{ fontSize: '0.85rem', marginBottom: '14px', color: '#64748b' }}>
                    Posted in <span style={{ color: '#16a34a', fontWeight: '600' }}>{notification.category || notification.parentSection || 'Advocacy'}</span> 
                    {notification.date ? ` on ${notification.date}` : ''}
                </div>
                
                {(notification.description || notification.content) && (
                    <p className="nc-desc" style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.5', marginBottom: '20px' }}>
                        {notification.description || notification.content}
                    </p>
                )}
                
                <div className="nc-actions" style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                    {notification.fileUrl ? (
                        <a 
                            href={notification.fileUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', padding: '10px 18px', borderRadius: '6px', textDecoration: 'none', background: '#16a34a', color: '#fff', fontWeight: '600', transition: 'background 0.2s' }}
                            onMouseOver={(e) => e.currentTarget.style.background = '#15803d'}
                            onMouseOut={(e) => e.currentTarget.style.background = '#16a34a'}
                        >
                            <FileText size={16} />
                            View PDF
                        </a>
                    ) : notification.url ? (
                        <a 
                            href={notification.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', padding: '10px 18px', borderRadius: '6px', color: '#16a34a', border: '1px solid #16a34a', textDecoration: 'none', fontWeight: '600', transition: 'all 0.2s', background: 'transparent' }}
                            onMouseOver={(e) => { e.currentTarget.style.background = '#f0fdf4'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
                        >
                            <FileText size={16} />
                            View Source
                        </a>
                    ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', padding: '10px 18px', borderRadius: '6px', color: '#94a3b8', background: '#f8fafc', border: '1px solid #e2e8f0', cursor: 'not-allowed', fontWeight: '500' }}>
                            <FileText size={16} />
                            PDF Unavailable
                        </span>
                    )}

                    {hasDetail && (
                        <Link 
                            to={`/details/${notification.id}`}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', padding: '10px 18px', borderRadius: '6px', color: '#16a34a', border: '1px solid #16a34a', textDecoration: 'none', fontWeight: '600', transition: 'all 0.2s', background: 'transparent' }}
                            onMouseOver={(e) => { e.currentTarget.style.background = '#f0fdf4'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
                        >
                            View Details
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationCard;
