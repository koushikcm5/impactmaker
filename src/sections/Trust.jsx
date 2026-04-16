import './Trust.css';

const Trust = ({ data }) => {
  return (
    <section className="trust" id="results">
      <div className="container">
        <div className="trust-heading">
          <span className="trust-eyebrow">Credibility signal</span>
          <h2>Proof that the transformation model scales across campuses, classrooms, and teams.</h2>
        </div>
        <div className="trust-grid">
          {data.metrics.map((metric, index) => (
            <div key={index} className="trust-metric">
              <h3 className="metric-value">{metric.value}</h3>
              <p className="metric-label">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
