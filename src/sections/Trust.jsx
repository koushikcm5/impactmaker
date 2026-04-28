import { useEffect, useRef, useState } from 'react';
import { School, Building2, Presentation, Users2, GraduationCap, FileText, Map, Globe2 } from 'lucide-react';
import './Trust.css';

const metricIcons = [
  School,
  Building2,
  Presentation,
  Users2,
  GraduationCap,
  FileText,
  Map,
  Globe2
];

const Trust = ({ data }) => {
  const [counts, setCounts] = useState(data.metrics.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const timers = [];
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

            const timer = window.setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = target;
                  return newCounts;
                });
                window.clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, duration / steps);

            timers.push(timer);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearInterval(timer));
    };
  }, [data.metrics]);

  return (
    <section className="trust" id="results" ref={sectionRef}>
      <div className="container">
        <div className="section-header trust-header">
          <h2>Impact Highlights</h2>
          <p>On a Mission to Transform Corporates, Educators & Student Learners into impactmakers

</p>
        </div>
        <div className="trust-grid">
          {data.metrics.map((metric, index) => {
            const Icon = metricIcons[index % metricIcons.length];
            return (
              <div key={index} className="trust-metric">
                <div className="metric-icon-shell">
                  <Icon className="metric-icon" size={24} />
                </div>
                <h3 className="metric-value">
                  {counts[index]}
                  <span className="metric-suffix">{metric.value.replace(/[0-9]/g, '')}</span>
                </h3>
                <p className="metric-label">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trust;
