import { useEffect, useRef, useState } from 'react';
import './Trust.css';

const Trust = ({ data }) => {
  const [counts, setCounts] = useState(data.metrics.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          data.metrics.forEach((metric, index) => {
            const target = parseInt(metric.value);
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = target;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [data.metrics]);

  return (
    <section className="trust" id="results" ref={sectionRef}>
      <div className="container">
        <div className="trust-grid">
          {data.metrics.map((metric, index) => (
            <div key={index} className="trust-metric">
              <h3 className="metric-value">{counts[index]}{metric.value.replace(/[0-9]/g, '')}</h3>
              <p className="metric-label">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
