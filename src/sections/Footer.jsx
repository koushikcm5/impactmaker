import { Mail, Phone, Globe, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = ({ contact }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dr. Arun Divakaran</h3>
            <p>Transforming education through creative teaching methods</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#workshops">Workshops</a>
              <a href="#blog">Blog & Articles</a>
              <a href="#gallery">Gallery</a>
              <a href="#events">Events</a>
            </nav>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <a href={`tel:${contact.phone}`} className="contact-link">
                <Phone size={18} />
                <span>{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="contact-link">
                <Mail size={18} />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Follow</h4>
            <div className="social-links">
              <a href={contact.social.linkedin} aria-label="LinkedIn">
                <Globe size={24} />
              </a>
              <a href={contact.social.twitter} aria-label="Twitter">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} Dr. Arun Divakaran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
