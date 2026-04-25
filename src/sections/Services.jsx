import ServiceCard from '../components/ServiceCard';
import NetworkCanvas from '../components/NetworkCanvas';
import { Briefcase, BookOpen, Users, Quote } from 'lucide-react';
import './Services.css';

const Services = ({ data }) => {
  return (
    <section className="services" id="workshops">
      <NetworkCanvas />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header services-header">
          <h2>The Game-Changer Workshops</h2>
          <p className="services-subtitle">
            These game-changing workshops enable holistic transformation for teams, educators, and students.
          </p>
          
          <div className="services-impact-chips">
            <div className="impact-chip">
              <Briefcase size={18} className="chip-icon" />
              <span><strong>For employees</strong> - in the way they perform</span>
            </div>
            <div className="impact-chip">
              <BookOpen size={18} className="chip-icon" />
              <span>
                <strong>Ed Tech</strong><br />
                <small><strong>For teachers</strong> - in the way they teach</small><br />
                <small><strong>For students</strong> - in the way they learn</small>
              </span>
            </div>
          </div>
          
          <div className="premium-quote-box">
            <Quote size={40} className="quote-bg-icon" />
            <p className="premium-quote-text">
              "Just by enabling their creative thinking capacity through ancient practices"
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
