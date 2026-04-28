import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import DomainExpertise from './sections/DomainExpertise';
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
import ScrollToTop from './components/ScrollToTop';
import { siteData } from './data/siteData';
import './App.css';

// Code splitting: load these routes on-demand
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const InsightReader = lazy(() => import('./pages/InsightReader'));

// Loading placeholder for lazy-loaded pages
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '18px', color: '#666' }}>Loading...</div>
    </div>
  </div>
);


const HomePage = () => (
  <>
    <Navbar />
    <Hero data={siteData.hero} />
    <Trust data={siteData.trust} />
    <Clients />
    <DomainExpertise />
    <Workshops programs={siteData.programs} data={siteData.workshops} />
    <Testimonials data={siteData.testimonials} />
    <About data={siteData.about} />
    <Insights data={siteData.blog} />
    <Gallery />
    <Events />
    <CTA data={{ ...siteData.cta, phone: siteData.contact.phone, email: siteData.contact.email }} />
    <Footer contact={siteData.contact} />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/insight/:id" 
            element={
              <Suspense fallback={<PageLoader />}>
                <InsightDetail />
              </Suspense>
            } 
          />
          <Route 
            path="/insight/:id/reader" 
            element={
              <Suspense fallback={<PageLoader />}>
                <InsightReader />
              </Suspense>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
