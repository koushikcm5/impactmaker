import ServiceCard from '../components/ServiceCard';
import NetworkCanvas from '../components/NetworkCanvas';
import { Quote } from 'lucide-react';
import './Services.css';

const Services = ({ data }) => {
  return (
    <section className="services" id="workshops">
      <NetworkCanvas />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header services-header">
          <h2>The Game-Changer Workshops</h2>
          
          <div className="premium-quote-box">
            <Quote size={40} className="quote-bg-icon" />
            <span className="premium-quote-kicker">Creative thinking, reawakened</span>
            <p className="premium-quote-text">
              These game-changing workshops spark <span>holistic transformation</span> for corporates,
              educators, and learners by unlocking their <span>creative thinking</span> through
              <span> timeless ancient practices</span>.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {data.map(service => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
