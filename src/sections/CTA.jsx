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
            <a href={`tel:${data.phone}`} className="contact-phone">Phone: {data.phone}</a>
            <a href={`mailto:${data.email}`} className="contact-email">Email: {data.email}</a>
          </div>
          <Button variant="primary" href={`mailto:${data.email}`}>{data.buttonText}</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
