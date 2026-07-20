import './Clients.css';

// Logo Imports
import logo1 from '../assets/about/clients/1699758570211.webp';
import logo2 from '../assets/about/clients/1713083233323.webp';
import logo3 from '../assets/about/clients/1774619006451.webp';
import logo4 from '../assets/about/clients/2165uiNlScL._SY200_.webp';
import logo5 from '../assets/about/clients/82162196-034b-4335-977a-aac82aedabad.webp';
import logo6 from '../assets/about/clients/ANI-20230503075501.webp';
import logo7 from '../assets/about/clients/Asian-paints-202201211346409722690.webp';
import logo8 from '../assets/about/clients/CII Logo369.webp';
import logo9 from '../assets/about/clients/Continental-Logo-Social.webp';
import logo10 from '../assets/about/clients/HEXAWARE-LOGO.webp';
import logo11 from '../assets/about/clients/Infoblox_Logo.webp';
import logo12 from '../assets/about/clients/Target-brand-strategy-positioning.webp';
import logo13 from '../assets/about/clients/Untitled-design-14.webp';
import logo14 from '../assets/about/clients/channels4_profile.webp';
import logo15 from '../assets/about/clients/images.webp';
import logo16 from '../assets/about/clients/images.webp';
import logo17 from '../assets/about/clients/logo_widen_1200.webp';
import logo18 from '../assets/about/clients/star-agile.webp';
import logo19 from '../assets/about/clients/unnamed.webp';
import logo20 from '../assets/about/clients/upgrade-Knowledgehunt-institute-logo.webp';
import logo21 from '../assets/about/clients/corning-inc-logo-png_seeklogo-402622.webp';
import logo22 from '../assets/about/clients/catterpillar.webp';
import logo23 from '../assets/about/clients/mahendra.webp';

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23
];

const Clients = () => {
  return (
    <section className="clients-section" id="trusted-leaders">
      <div className="container">
        <div className="clients-header">
          <span className="clients-kicker">Professional Network</span>
          <h2>Trusted by Industry Leaders</h2>
          <p>Delivered workforce transformation Programs at these prestigious organizations.</p>
        </div>

        <div className="marquee-3d-stage">
          <div className="marquee-wrapper">
            <div className="marquee-fade-left"></div>
            <div className="marquee-fade-right"></div>

            <div className="marquee-content">
              <div className="marquee-track">
                {clientLogos.map((logo, index) => (
                  <div key={`logo-1-${index}`} className="logo-item">
                    <img src={logo} alt={`Client Logo ${index + 1}`} loading="lazy"  width="800" height="600" />
                  </div>
                ))}
              </div>
              <div className="marquee-track" aria-hidden="true">
                {clientLogos.map((logo, index) => (
                  <div key={`logo-2-${index}`} className="logo-item">
                    <img src={logo} alt={`Client Logo ${index + 1}`} loading="lazy"  width="800" height="600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
