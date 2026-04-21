import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Trust from './sections/Trust';
import Clients from './sections/Clients';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Workshops from './sections/Workshops';
import Insights from './sections/Insights';
import Gallery from './sections/Gallery';
import Events from './sections/Events';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import { siteData } from './data/siteData';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-aurora app-aurora-left" aria-hidden="true" />
      <div className="app-aurora app-aurora-right" aria-hidden="true" />
      <div className="app-grid" aria-hidden="true" />
      <div className="app-depth app-depth-left" aria-hidden="true">
        <span className="depth-orbit depth-orbit-large" />
        <span className="depth-card depth-card-blue" />
        <span className="depth-dot depth-dot-blue" />
      </div>
      <div className="app-depth app-depth-right" aria-hidden="true">
        <span className="depth-orbit depth-orbit-small" />
        <span className="depth-card depth-card-saffron" />
        <span className="depth-dot depth-dot-saffron" />
      </div>
      <div className="app-depth app-depth-bottom" aria-hidden="true">
        <span className="depth-plane" />
      </div>
      <Navbar />
      <Hero data={siteData.hero} />
      <Trust data={siteData.trust} />
      <Clients />
      <Workshops programs={siteData.programs} data={siteData.workshops} />
      <Testimonials data={siteData.testimonials} />
      <About data={siteData.about} />
      <Insights data={siteData.blog} />
      <Gallery />
      <Events />
      <CTA data={{ ...siteData.cta, phone: siteData.contact.phone, email: siteData.contact.email }} />
      <Footer contact={siteData.contact} />
    </div>
  );
}

export default App;
