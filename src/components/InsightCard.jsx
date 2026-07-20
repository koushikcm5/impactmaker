import { ArrowRight } from 'lucide-react';
import './InsightCard.css';

const InsightCard = ({ title, excerpt, category, image, onClick, isBook, isArticle }) => {
  if (isArticle) {
    return (
      <div className="insight-card-modern insight-card-article" onClick={onClick}>
        {image && (
          <div className="insight-image-container insight-article-img-container">
            <img src={image} alt={title} className="insight-card-img insight-article-full-img" loading="lazy" width="800" height="600" />
            <div className="insight-card-tag insight-article-tag">Article</div>
          </div>
        )}
        <div className="insight-content">
          {!image && <div className="insight-card-tag-inline insight-article-tag">Article</div>}
          <h3 className="insight-card-title">{title}</h3>
          <p className="insight-card-excerpt">{excerpt}</p>
          <button className="insight-read-btn">Read More <ArrowRight size={15} /></button>
        </div>
        <div className="insight-card-glow" />
      </div>
    );
  }

  return (
    <div className={`insight-card-modern${isBook ? ' insight-card-book' : ''}`} onClick={onClick}>
      {image && (
        <div className="insight-image-container">
          <img src={image} alt={title} className="insight-card-img" loading="lazy" width="800" height="600" />
          <div className="insight-card-tag">{category}</div>
        </div>
      )}

      <div className="insight-content">
        {!image && <div className="insight-card-tag-inline">{category}</div>}
        <h3 className="insight-card-title">{title}</h3>
        <p className="insight-card-excerpt">{excerpt}</p>
        <button className="insight-read-btn">
          Read More <ArrowRight size={15} />
        </button>
      </div>

      <div className="insight-card-glow" />
    </div>
  );
};

export default InsightCard;
