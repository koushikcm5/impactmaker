import InsightCard from '../components/InsightCard';
import './Insights.css';

const Insights = ({ data }) => {
  return (
    <section className="insights" id="blog">
      <div className="container">
        <div className="section-header">
          <h2>Blog & Articles</h2>
        </div>
        <div className="insights-grid">
          {data.map(insight => (
            <InsightCard 
              key={insight.id}
              title={insight.title}
              excerpt={insight.excerpt}
              category={insight.category}
              full={insight.full}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
