import { CheckCircle } from 'lucide-react';
import './ValueProposition.css';

const ValueProposition = ({ data }) => {
  return (
    <section className="value-proposition">
      <div className="container">
        <div className="section-header">
          <h2>Why Work With Me</h2>
          <p>Results-driven approach backed by proven experience</p>
        </div>
        <div className="value-grid">
          {data.map((item, index) => (
            <div key={index} className="value-item">
              <CheckCircle className="value-icon" size={32} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
