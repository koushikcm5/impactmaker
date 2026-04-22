import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, Download, FileText } from 'lucide-react';
import { siteData } from '../data/siteData';
import { getArticleAssets } from '../utils/assetLoader';
import '../sections/Insights.css';

const InsightReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const insight = siteData.blog.find(item => item.id === parseInt(id));
  const { pdf } = insight ? getArticleAssets(insight.title) : { pdf: null };

  if (!pdf) return <div className="not-found">Reader asset not available</div>;

  return (
    <div className="full-screen-reader-page animate-fade-in">
      <div className="reader-header">
        <button className="reader-back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} /> Exit Reader
        </button>
        <div className="reader-title-info">
          <FileText size={18} />
          <h3>{insight.title}</h3>
        </div>
        <a href={pdf} download className="reader-download-btn">
          <Download size={20} />
        </a>
      </div>
      
      <div className="reader-main-content">
        <iframe 
          src={`${pdf}#view=FitH`} 
          title={`Reader: ${insight.title}`}
          className="reader-iframe"
        />
      </div>
    </div>
  );
};

export default InsightReader;
