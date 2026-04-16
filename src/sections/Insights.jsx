import InsightCard from '../components/InsightCard';
import './Insights.css';

const Insights = ({ data }) => {
  return (
    <section className="insights" id="blog">
      <div className="container">
        <div className="section-header">
          <h2>Blog & Articles</h2>
          <p>Insights on education, leadership, and transformation</p>
        </div>
        <div className="insights-grid">
          {data.map(insight => (
            <InsightCard 
              key={insight.id}
              title={insight.title}
              excerpt={insight.excerpt}
              category={insight.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
