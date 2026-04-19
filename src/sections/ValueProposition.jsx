import { CheckCircle2, ShieldCheck, Zap, Heart } from 'lucide-react';
import './ValueProposition.css';

const valueIcons = [CheckCircle2, ShieldCheck, Zap, Heart];

const ValueProposition = ({ data }) => {
  return (
    <section className="value-proposition">
      <div className="container">
        <div className="section-header">
          <span className="value-kicker">Core Philosophy</span>
          <h2>Why Work With Me</h2>
          <p>Results-driven approach backed by proven experience and ancient wisdom.</p>
        </div>
        <div className="value-grid">
          {data.map((item, index) => {
            const Icon = valueIcons[index % valueIcons.length];
            return (
              <div key={index} className="value-item">
                <div className="value-icon-shell">
                  <Icon className="value-icon" size={32} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
