import Button from '../components/Button';
import './CTA.css';

const CTA = ({ data }) => {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">{data.callLabel}</span>
              <a href={`tel:${data.phone}`} className="contact-phone">{data.phone}</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">{data.emailLabel}</span>
              <a href={`mailto:${data.email}`} className="contact-email">{data.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
