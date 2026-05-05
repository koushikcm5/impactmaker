import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Trust from './sections/Trust';
import Clients from './sections/Clients';
import Workshops from './sections/Workshops';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import { siteData } from './data/siteData';
import './App.css';

// Code splitting: load these routes on-demand
const InsightDetail       = lazy(() => import('./pages/InsightDetail'));
const InsightReader       = lazy(() => import('./pages/InsightReader'));
const GalleryPage         = lazy(() => import('./pages/GalleryPage'));
const EventsPage          = lazy(() => import('./pages/EventsPage'));
const BlogPage            = lazy(() => import('./pages/BlogPage'));
const GameChangerPage     = lazy(() => import('./pages/GameChangerPage'));
const DeepDivePage        = lazy(() => import('./pages/DeepDivePage'));
const TechnicalPage       = lazy(() => import('./pages/TechnicalPage'));
const TransformationalPage= lazy(() => import('./pages/TransformationalPage'));
const SpeakerPage         = lazy(() => import('./pages/SpeakerPage'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div style={{ fontSize: '18px', color: '#666' }}>Loading...</div>
  </div>
);

// Home page — scroll-based experience
// Sections: Hero → Impact Highlights → Trusted by Industry Leaders →
//           Workshops → Testimonials → About Impact Maker → Enquiry/Contact
const HomePage = () => (
  <>
    <Navbar />
    <Hero data={siteData.hero} />
    <Trust data={siteData.trust} />
    <Clients />
    <Workshops />
    <Testimonials data={siteData.testimonials} />
    <About data={siteData.about} />
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
          <Route path="/gallery" element={
            <Suspense fallback={<PageLoader />}><GalleryPage /></Suspense>
          } />
          <Route path="/events" element={
            <Suspense fallback={<PageLoader />}><EventsPage /></Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<PageLoader />}><BlogPage /></Suspense>
          } />
          <Route path="/workshops/game-changer" element={
            <Suspense fallback={<PageLoader />}><GameChangerPage /></Suspense>
          } />
          <Route path="/workshops/deep-dive" element={
            <Suspense fallback={<PageLoader />}><DeepDivePage /></Suspense>
          } />
          <Route path="/workshops/technical" element={
            <Suspense fallback={<PageLoader />}><TechnicalPage /></Suspense>
          } />
          <Route path="/workshops/transformational" element={
            <Suspense fallback={<PageLoader />}><TransformationalPage /></Suspense>
          } />
          <Route path="/workshops/speaker" element={
            <Suspense fallback={<PageLoader />}><SpeakerPage /></Suspense>
          } />
          <Route path="/insight/:id" element={
            <Suspense fallback={<PageLoader />}><InsightDetail /></Suspense>
          } />
          <Route path="/insight/:id/reader" element={
            <Suspense fallback={<PageLoader />}><InsightReader /></Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
