import { useNavigate } from 'react-router-dom';
import InsightCard from '../components/InsightCard';
import { getArticleAssets } from '../utils/assetLoader';
import './Insights.css';

const Insights = ({ data }) => {
  const navigate = useNavigate();

  const enhancedData = data.map(item => ({
    ...item,
    ...getArticleAssets(item.title)
  }));

  return (
    <section className="insights" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="insights-eyebrow">Knowledge Hub</span>
          <h2>Articles & Books</h2>
          <p>Exploring the intersections of human intelligence, corporate culture, and the future of technology.</p>
        </div>
        
        <div className="insights-grid">
          {enhancedData.map(insight => (
            <InsightCard 
              key={insight.id}
              {...insight}
              onClick={() => navigate(`/insight/${insight.id}`)}
              isBook={insight.title.toUpperCase().includes("CREATI-WITTY")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;




