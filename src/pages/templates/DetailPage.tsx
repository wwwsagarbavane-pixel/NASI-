import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Calendar, Tag, ExternalLink, Download, FileText } from 'lucide-react';
import { 
  policyData, 
  advocacyData, 
  publicationsData, 
  resourcesData, 
  mediaData, 
  eventsData 
} from '../../data/nsai';

const DetailPage = () => {
    const { id } = useParams<{ id: string }>();

    // Consolidate all datasets into one to find the record
    const record = useMemo(() => {
        const allData = [
            ...policyData, 
            ...advocacyData, 
            ...publicationsData, 
            ...resourcesData, 
            ...mediaData, 
            ...eventsData
        ];
        return allData.find(item => item.id === id);
    }, [id]);

    if (!record) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <FileText size={48} color="#cbd5e1" style={{ margin: '0 auto 20px' }} />
                <h2>Record Not Found</h2>
                <p>The requested document or page could not be found.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Return Home</Link>
            </div>
        );
    }

    return (
        <div className="detail-page" style={{ paddingBottom: '60px' }}>
            {/* Hero / Header */}
            <div className="dp-header" style={{ backgroundColor: '#f8fafc', padding: '60px 0', borderBottom: '1px solid #e2e8f0' }}>
                <div className="container">
                    <div className="breadcrumbs" style={{ marginBottom: '20px' }}>
                        <Link to="/">Home</Link> <ChevronRight size={14} /> 
                        <span>{record.parentSection || 'Category'}</span> <ChevronRight size={14} /> 
                        <span style={{ color: '#64748b' }}>{record.title}</span>
                    </div>
                    
                    <h1 className="dp-title" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px', maxWidth: '800px' }}>
                        {record.title}
                    </h1>
                    
                    <div className="dp-meta" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', color: '#64748b' }}>
                        {record.date && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Calendar size={16} /> {record.date}
                            </span>
                        )}
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Tag size={16} /> {record.category || record.parentSection}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="container" style={{ marginTop: '60px' }}>
                <div className="dp-layout" style={{ display: 'flex', gap: '40px', flexDirection: 'row', flexWrap: 'wrap' }}>
                    
                    {/* Main Content */}
                    <div className="dp-main" style={{ flex: '1 1 600px' }}>
                        {record.image && (
                            <div className="dp-featured-image" style={{ marginBottom: '40px' }}>
                                <img src={record.image} alt={record.title} style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            </div>
                        )}
                        
                        {(record.content || record.description) ? (
                            <div 
                                className="dp-rich-content" 
                                style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}
                                dangerouslySetInnerHTML={{ __html: record.content || record.description || '' }}
                            />
                        ) : (
                            <div className="dp-no-content" style={{ padding: '40px', backgroundColor: '#f1f5f9', borderRadius: '8px', textAlign: 'center', color: '#64748b' }}>
                                No detailed description available for this record.
                            </div>
                        )}
                    </div>

                    {/* Sidebar Area */}
                    <div className="dp-sidebar" style={{ flex: '0 0 350px' }}>
                        {/* Attachments / Actions */}
                        <div className="dp-card" style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #e2e8f0' }}>Resources & Links</h3>
                            
                            {record.fileUrl ? (
                                <a href={record.fileUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                    <Download size={18} /> Download Document
                                </a>
                            ) : (
                                <div style={{ padding: '12px', backgroundColor: '#f1f5f9', color: '#94a3b8', borderRadius: '6px', textAlign: 'center', marginBottom: '16px', fontSize: '0.9rem' }}>
                                    Document Unavailable
                                </div>
                            )}

                            {record.url && record.url !== '#' && (
                                <a href={record.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                    <ExternalLink size={18} /> Original Source
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailPage;
