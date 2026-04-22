import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download, FileText, ExternalLink, Maximize2 } from 'lucide-react';
import { siteData } from '../data/siteData';
import { getArticleAssets, AMAZON_KINDLE_URL } from '../utils/assetLoader';
import '../sections/Insights.css';

const InsightDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const insight = siteData.blog.find(item => item.id === parseInt(id));
  
  if (!insight) return <div className="not-found">Insight not found</div>;

  const { image, pdf } = getArticleAssets(insight.title);
  const isCreatiwitty = insight.title.toUpperCase().includes("CREATI-WITTY");

  return (
    <div className="insight-page-wrapper animate-fade-in">
      <div className="article-viewer-container page-mode">
        <div className="article-viewer-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} /> Back
          </button>
          <div className="viewer-title-area">
            <span className="viewer-category">{insight.category}</span>
            <h1 className="viewer-title">{insight.title}</h1>
          </div>
          <div style={{ width: '100px' }} /> {/* Spacer */}
        </div>

        <div className="article-viewer-content">
          <div className="article-main-layout">
            <div className="article-text-section">
              {image && (
                <div className="article-featured-img-wrap">
                  <img src={image} alt={insight.title} className="article-featured-img" />
                </div>
              )}
              
              {isCreatiwitty && (
                <div className="book-action-banner">
                  <div className="banner-visual">
                    <BookOpen size={28} />
                  </div>
                  <div className="banner-info">
                    <h3>Explore the complete book</h3>
                    <p>Unlock practical strategies for creative teaching and personalized learning.</p>
                  </div>
                  <a href={AMAZON_KINDLE_URL} target="_blank" rel="noopener noreferrer" className="read-book-here-btn">
                    Read Book Here <ExternalLink size={18} />
                  </a>
                </div>
              )}

              <div className="article-full-text">
                {insight.full.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {pdf && (
                <div className="reader-cta-box">
                  <p>This article includes an interactive PDF companion.</p>
                  <button className="open-reader-btn" onClick={() => navigate(`/insight/${id}/reader`)}>
                    Open Full-Screen Reader <Maximize2 size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightDetail;
