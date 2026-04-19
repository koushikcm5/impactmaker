import { useState } from 'react';
import { Phone, Mail, Send, MapPin, CheckCircle } from 'lucide-react';
import './CTA.css';

const CTA = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-grid">
          {/* Left Column: Enquiry Form */}
          <div className="enquiry-card shadow-premium">
            <div className="form-header">
              <span className="pill-badge">Get in Touch</span>
              <h2>Send an Enquiry</h2>
              <p>Have specific questions? Reach out to us directly.</p>
            </div>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={status !== 'idle'}>
                {status === 'idle' && (
                  <>
                    <span>Submit Enquiry</span>
                    <Send size={18} />
                  </>
                )}
                {status === 'sending' && <span className="loader"></span>}
                {status === 'success' && (
                  <>
                    <span>Sent Successfully</span>
                    <CheckCircle size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="info-stack">
            <div className="contact-info-card shadow-premium">
              <h3>Contact Information</h3>
              <div className="contact-grid-simple">
                <div className="contact-item">
                  <div className="icon-box"><Phone size={20} /></div>
                  <div>
                    <span className="label">Call Us</span>
                    <a href={`tel:${data.phone}`} className="value">{data.phone}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-box"><Mail size={20} /></div>
                  <div>
                    <span className="label">Email Us</span>
                    <a href={`mailto:${data.email}`} className="value">{data.email}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-box"><MapPin size={20} /></div>
                  <div>
                    <span className="label">Location</span>
                    <span className="value">Coimbatore, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-card shadow-premium">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44154746654!2d76.88483285741036!3d11.012014524458316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713511800000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
