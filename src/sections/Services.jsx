import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = ({ data }) => {
  return (
    <section className="services" id="workshops">
      <div className="container">
        <div className="section-header">
          <h2>Programs</h2>
          <p>Transformative workshops for holistic development</p>
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
