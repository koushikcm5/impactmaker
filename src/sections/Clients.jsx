import './Clients.css';

// Logo Imports
import logo1 from '../assets/about/clients/1699758570211.jpeg';
import logo2 from '../assets/about/clients/1713083233323.jpeg';
import logo3 from '../assets/about/clients/1774619006451.jpeg';
import logo4 from '../assets/about/clients/2165uiNlScL._SY200_.jpg';
import logo5 from '../assets/about/clients/82162196-034b-4335-977a-aac82aedabad.png';
import logo6 from '../assets/about/clients/ANI-20230503075501.png';
import logo7 from '../assets/about/clients/Asian-paints-202201211346409722690.png';
import logo8 from '../assets/about/clients/CII Logo369.png';
import logo9 from '../assets/about/clients/Continental-Logo-Social.jpg';
import logo10 from '../assets/about/clients/HEXAWARE-LOGO.PNG';
import logo11 from '../assets/about/clients/Infoblox_Logo.jpg';
import logo12 from '../assets/about/clients/Target-brand-strategy-positioning.jpg';
import logo13 from '../assets/about/clients/Untitled-design-14.png';
import logo14 from '../assets/about/clients/channels4_profile.jpg';
import logo15 from '../assets/about/clients/images.jpeg';
import logo16 from '../assets/about/clients/images.png';
import logo17 from '../assets/about/clients/logo_widen_1200.jpeg';
import logo18 from '../assets/about/clients/star-agile.png';
import logo19 from '../assets/about/clients/unnamed.jpg';
import logo20 from '../assets/about/clients/upgrade-Knowledgehunt-institute-logo.png';

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20
];

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-header">
          <span className="clients-kicker">Professional Network</span>
          <h2>Trusted by Industry Leaders</h2>
          <p>Delivered workforce transformation Programs at these prestigious organizations.
</p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>
          
          <div className="marquee-content">
            {/* First set of logos */}
            <div className="marquee-track">
              {clientLogos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="logo-item">
                  <img src={logo} alt={`Client Logo ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless looping */}
            <div className="marquee-track" aria-hidden="true">
              {clientLogos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="logo-item">
                  <img src={logo} alt={`Client Logo ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
