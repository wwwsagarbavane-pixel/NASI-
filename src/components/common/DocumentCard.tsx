import React from 'react';
import { ExternalLink, Calendar, Tag, Download, Eye, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NsaiRecord } from '../../data/nsai';

interface Props {
    document: NsaiRecord;
}

const DocumentCard: React.FC<Props> = ({ document }) => {
    const hasDetail = !!(document.content || document.description);
    
    // Determine the action link
    const linkProps = hasDetail 
        ? { to: `/details/${document.id}` } 
        : { to: document.fileUrl || document.url, target: "_blank", rel: "noopener noreferrer" };

    const isPdf = document.type === 'pdf' || (document.fileUrl && document.fileUrl.endsWith('.pdf')) || (document.url && document.url.endsWith('.pdf'));

    return (
        <div className="new-ui-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #e2e8f0', background: '#fff', borderRadius: '8px', transition: 'box-shadow 0.2s', border: '1px solid #e2e8f0', marginBottom: '8px' }}>
            
            <div className="nc-icon-left" style={{ width: '48px', height: '48px', borderRadius: '12px', background: isPdf ? '#fef2f2' : '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px', flexShrink: 0 }}>
                {isPdf ? <FileText className="nc-pdf-icon" style={{ color: '#ef4444' }} size={24} /> : <FileText style={{ color: '#16a34a' }} size={24} />}
            </div>

            <div className="nc-content" style={{ flex: 1 }}>
                <Link {...linkProps} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h4 className="nc-title" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>
                        {document.title || 'Untitled Document'}
                    </h4>
                </Link>
                {(document.description || document.content) && (
                    <p className="nc-desc" style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '8px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {document.description || document.content}
                    </p>
                )}
                <div className="nc-meta" style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: '#64748b', marginTop: '6px' }}>
                    {document.date && <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {document.date}</span>}
                    {document.category && <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Tag size={14} /> {document.category}</span>}
                </div>
            </div>
            
            <div className="nc-action" style={{ marginLeft: '20px' }}>
                {hasDetail ? (
                    <Link to={`/details/${document.id}`} className="circle-btn-download" title="Read Details">
                        <Eye size={18} />
                    </Link>
                ) : document.fileUrl || document.url ? (
                    <a href={document.fileUrl || document.url} target="_blank" rel="noopener noreferrer" className="circle-btn-download" title={isPdf ? "Download PDF" : "Open Link"}>
                        {isPdf ? <Download size={18} /> : <ExternalLink size={18} />}
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default DocumentCard;
