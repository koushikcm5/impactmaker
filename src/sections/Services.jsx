import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = ({ data }) => {
  return (
    <section className="services" id="workshops">
      <div className="container">
        <div className="section-header services-header">
          <h2>The Game-Changer Workshops</h2>
          <p className="services-subtitle">
            These game-changing workshops enable holistic transformation for teams, educators, and students.
          </p>
          <div className="services-points">
            <p>For your employees - in the way they perform.</p>
            <p>For your teachers - in the way they teach.</p>
            <p>For your students - in the way they learn.</p>
          </div>
          <p className="services-quote">
            "Just by enabling their creative thinking capacity through ancient practices"
          </p>
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
