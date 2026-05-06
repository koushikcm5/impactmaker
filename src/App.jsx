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
import NetworkCanvas from './components/NetworkCanvas';
import SEOHead from './components/SEOHead';
import { siteData } from './data/siteData';
import { PAGE_SEO, SITE_URL, SITE_NAME, FOUNDER_NAME, SITE_PHONE, SITE_EMAIL, makeBreadcrumb } from './utils/seoConfig';
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
const GeoPage             = lazy(() => import('./pages/GeoPage'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div style={{ fontSize: '18px', color: '#666' }}>Loading...</div>
  </div>
);

const homepageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AI Training Services by Dr. Arun Divakaran',
    description: `Top AI Training programs offered by ${FOUNDER_NAME} — India's leading AI trainer in Tamil Nadu, Kerala, and Coimbatore.`,
    numberOfItems: 10,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Corporate AI Workshops', url: `${SITE_URL}/workshops/game-changer` },
      { '@type': 'ListItem', position: 2, name: 'Generative AI Training', url: `${SITE_URL}/workshops/technical` },
      { '@type': 'ListItem', position: 3, name: 'Agentic AI Training', url: `${SITE_URL}/workshops/deep-dive` },
      { '@type': 'ListItem', position: 4, name: 'Design Thinking Workshops', url: `${SITE_URL}/workshops/transformational` },
      { '@type': 'ListItem', position: 5, name: 'Enterprise Agile Training', url: `${SITE_URL}/workshops/transformational` },
      { '@type': 'ListItem', position: 6, name: 'AI Keynote Speaking', url: `${SITE_URL}/workshops/speaker` },
      { '@type': 'ListItem', position: 7, name: 'AI Leadership Training', url: `${SITE_URL}/workshops/technical` },
      { '@type': 'ListItem', position: 8, name: 'Soft Skills Training', url: `${SITE_URL}/workshops/game-changer` },
      { '@type': 'ListItem', position: 9, name: 'Gamified Learning', url: `${SITE_URL}/workshops/game-changer` },
      { '@type': 'ListItem', position: 10, name: 'Business Workflow Automation', url: `${SITE_URL}/workshops/deep-dive` },
    ]
  }
];

// Home page — scroll-based experience with full SEO
const HomePage = () => (
  <>
    <SEOHead
      title={PAGE_SEO.home.title}
      description={PAGE_SEO.home.description}
      keywords={PAGE_SEO.home.keywords}
      canonical={PAGE_SEO.home.canonical}
      schemas={homepageSchemas}
    />
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

// Geo page configurations
const geoConfigs = {
  india: {
    seo: PAGE_SEO.geoIndia,
    heading: 'Top AI Trainer in India',
    subheading: 'Empowering Indian Enterprises with World-Class AI Training',
    city: null,
    region: 'India',
    heroKeywords: ['Generative AI', 'Agentic AI', 'AI Leadership', 'Business Automation', 'Keynote Speaking', 'Design Thinking', 'Enterprise Agile', 'Soft Skills'],
    intro: `${FOUNDER_NAME} is India's top-ranked AI trainer and corporate learning specialist, having trained 50,000+ professionals across 15+ countries. With expertise spanning Generative AI, Agentic AI, Design Thinking, Enterprise Agile, and Leadership Development, Dr. Arun delivers transformative AI training programs for enterprises, MSMEs, B-schools, and institutions across all of India — in English, Hindi, Tamil, and Malayalam.`,
    services: [
      { title: 'Generative AI Training for Enterprises', desc: 'Hands-on Generative AI workshops for corporate teams, covering ChatGPT, Claude, Gemini, and AI productivity tools tailored to your industry.' },
      { title: 'Agentic AI & Business Automation', desc: 'Training programs on autonomous AI workflows, intelligent process automation, and AI-driven decision-making for operational efficiency.' },
      { title: 'AI Leadership Programs', desc: 'Strategic AI frameworks for C-suite leaders, department heads, and managers navigating enterprise-wide AI transformation.' },
      { title: 'Corporate AI Keynote Speaking', desc: 'Inspiring keynote addresses on AI, digital transformation, and the future of work for conferences, summits, and corporate events.' },
      { title: 'Design Thinking Workshops', desc: 'Human-centered innovation programs that equip teams to solve complex business challenges through structured creativity.' },
      { title: 'Enterprise Agile & Scrum', desc: 'SAFe Agile, Scrum, and Agile transformation workshops for delivery teams, project managers, and enterprise leadership.' },
    ],
  },
  'tamil-nadu': {
    seo: PAGE_SEO.geoTamilNadu,
    heading: 'Top AI Trainer in Tamil Nadu',
    subheading: 'Corporate AI Training, Keynote Speaking & Leadership Programs in Tamil Nadu',
    city: 'Tamil Nadu',
    region: 'Tamil Nadu',
    heroKeywords: ['Tamil AI Training', 'Generative AI', 'Keynote Speaker TN', 'Design Thinking', 'Enterprise Agile', 'AI Leadership', 'Soft Skills', 'AI for Colleges'],
    intro: `${FOUNDER_NAME} is Tamil Nadu's leading AI trainer, delivering high-impact corporate AI workshops, keynote speeches, and leadership programs in Tamil and English. With deep roots in Coimbatore and a pan-Tamil Nadu presence covering Chennai, Madurai, Trichy, Salem, and Tirunelveli, Dr. Arun has trained professionals from leading IT firms, manufacturing companies, B-schools, and government institutions across the state.`,
    services: [
      { title: 'Generative AI & Agentic AI Training — Tamil Nadu', desc: 'Corporate AI workshops covering ChatGPT, Copilot, and AI automation tools — delivered in Tamil & English for maximum accessibility.' },
      { title: 'Keynote Speaking — Tamil Nadu Events', desc: 'Powerful keynote addresses on AI, digital transformation, and future skills for Tamil Nadu corporate events, college fests, and industry summits.' },
      { title: 'AI for Colleges & B-Schools — Tamil Nadu', desc: 'Specialized AI training for engineering students, MBA scholars, and faculty in colleges across Tamil Nadu — bridging the academia-industry gap.' },
      { title: 'Soft Skills & Communication Training', desc: 'Corporate communication, professional etiquette, and leadership soft skills training for Tamil Nadu enterprises and freshers.' },
      { title: 'Design Thinking & Innovation Workshops', desc: 'Human-centered design workshops for Tamil Nadu product teams, startups, and corporate innovation labs.' },
      { title: 'Enterprise Agile & SAFe Agile', desc: 'Agile transformation, Scrum Master training, and SAFe Agile certification workshops for IT and manufacturing companies in Tamil Nadu.' },
    ],
  },
  coimbatore: {
    seo: PAGE_SEO.geoCoimbatore,
    heading: 'Top AI Trainer in Coimbatore',
    subheading: 'Corporate AI Workshops, Keynote Speaking & Leadership Training in Coimbatore',
    city: 'Coimbatore',
    region: 'Tamil Nadu',
    heroKeywords: ['Generative AI Coimbatore', 'AI Corporate Training', 'Keynote Speaker CBE', 'Data Analytics', 'Design Thinking', 'Power BI', 'Agile Coach', 'AI Consultant'],
    intro: `${FOUNDER_NAME} is Coimbatore's premier AI trainer and corporate learning specialist, based in the heart of Tamil Nadu's industrial capital. Serving manufacturing firms, textile companies, IT enterprises, healthcare organizations, and engineering colleges across Coimbatore, Dr. Arun delivers customized AI training, Data Analytics workshops, Design Thinking programs, and keynote sessions that drive measurable business impact.`,
    services: [
      { title: 'Generative AI Training — Coimbatore', desc: 'Corporate Generative AI workshops for Coimbatore manufacturing, IT, textile, and healthcare companies. Practical, hands-on, results-driven.' },
      { title: 'Data Analytics & Power BI Training', desc: 'Data-driven decision-making workshops using Power BI, Excel AI, and analytics tools for Coimbatore business leaders and teams.' },
      { title: 'AI Keynote Speaker — Coimbatore Events', desc: 'Engaging keynote addresses for Coimbatore industrial associations, corporate conclaves, college events, and leadership forums.' },
      { title: 'AI for Engineering Colleges — Coimbatore', desc: 'AI and technology workshops for students and faculty at Coimbatore\'s premier engineering institutions — PSG, CIT, RVS, and more.' },
      { title: 'Agile Coaching & Scrum Training', desc: 'Agile transformation and SAFe Scrum training for Coimbatore IT companies and product development teams.' },
      { title: 'Design Thinking & Innovation Programs', desc: 'Innovation and problem-solving workshops for Coimbatore startups, MSMEs, and corporate R&D teams.' },
    ],
  },
  keynote: {
    seo: PAGE_SEO.geoKeynote,
    heading: 'Best AI Keynote Speaker in India',
    subheading: 'Inspiring AI & Digital Transformation Keynotes for Corporate India',
    city: null,
    region: 'India',
    heroKeywords: ['AI Keynote India', 'Digital Transformation Speaker', 'Corporate AI Speaker', 'Innovation Speaker', 'Leadership Speaker', 'Tamil Nadu Keynote', 'Kerala Speaker', 'Tech Conferences'],
    intro: `${FOUNDER_NAME} is India's most sought-after AI Keynote Speaker, delivering electrifying talks on Artificial Intelligence, Digital Transformation, Agentic AI, and the Future of Work for corporate conferences, leadership summits, technology events, and educational institutions. With 450+ keynote addresses delivered across India and 15+ countries, Dr. Arun brings a rare combination of deep technical expertise, business acumen, and captivating storytelling to every stage.`,
    services: [
      { title: 'AI & Future of Work Keynote', desc: 'A visionary keynote on how AI, automation, and human creativity will redefine careers, organizations, and industries by 2030.' },
      { title: 'Generative AI for Business Leaders', desc: 'Practical and inspiring talk on how Generative AI is already transforming marketing, HR, finance, and operations — with live demonstrations.' },
      { title: 'Agentic AI: The Next Frontier', desc: 'A forward-looking keynote on autonomous AI agents, their business applications, and how organizations must prepare for the agentic era.' },
      { title: 'Digital Transformation Speaker', desc: 'Real-world digital transformation journeys, lessons learned, and the organizational mindset shifts required for successful transformation.' },
      { title: 'Leadership in the Age of AI', desc: 'A powerful keynote for senior leaders on developing an AI-ready leadership mindset, building AI-literate teams, and navigating AI governance.' },
      { title: 'Innovation & Design Thinking Keynote', desc: 'An energizing keynote on human-centered innovation, creative problem-solving, and building a culture of continuous experimentation.' },
    ],
  },
  corporate: {
    seo: PAGE_SEO.geoCorporate,
    heading: 'Corporate AI Training Workshops in India',
    subheading: 'Enterprise AI Programs for Corporates, MSMEs & Fortune 500 Companies',
    city: null,
    region: 'India',
    heroKeywords: ['Corporate AI India', 'Enterprise AI Training', 'AI for HR', 'AI for Marketing', 'AI for IT', 'Business Automation', 'AI Productivity', 'AI Leadership'],
    intro: `J-Impact Corporate AI Training Programs by ${FOUNDER_NAME} are India's most comprehensive and impactful enterprise AI training suite. Designed for Fortune 500 companies, MSMEs, startups, and government organizations, these programs equip every function — HR, IT, Marketing, Finance, Operations, and Sales — with practical AI skills that drive immediate business value. With customized curricula, industry-specific use cases, and delivery in English, Hindi, Tamil, and Malayalam, J-Impact is the trusted AI training partner for India's leading enterprises.`,
    services: [
      { title: 'AI for HR Teams', desc: 'Practical AI tools for recruitment automation, employee onboarding, performance management, L&D personalization, and HR analytics.' },
      { title: 'AI for Marketing Teams', desc: 'Generative AI for content creation, campaign optimization, customer segmentation, social media automation, and marketing analytics.' },
      { title: 'AI for IT Teams & Developers', desc: 'GitHub Copilot, AI-assisted coding, prompt engineering, MLOps basics, and AI integration for development and QA teams.' },
      { title: 'AI for Finance & Operations', desc: 'AI-powered forecasting, budget optimization, supply chain automation, and intelligent reporting for finance and ops leaders.' },
      { title: 'AI Leadership & Strategy', desc: 'Executive AI strategy workshops for C-suite and senior leadership — AI governance, ROI measurement, and change management.' },
      { title: 'Agentic AI & Workflow Automation', desc: 'End-to-end business process automation using Agentic AI, RPA integration, and intelligent workflow design for enterprise efficiency.' },
    ],
  },
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NetworkCanvas fixed />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Content pages */}
          <Route path="/gallery" element={
            <Suspense fallback={<PageLoader />}><GalleryPage /></Suspense>
          } />
          <Route path="/events" element={
            <Suspense fallback={<PageLoader />}><EventsPage /></Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<PageLoader />}><BlogPage /></Suspense>
          } />

          {/* Workshop pages */}
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

          {/* Blog / Article pages */}
          <Route path="/insight/:id" element={
            <Suspense fallback={<PageLoader />}><InsightDetail /></Suspense>
          } />
          <Route path="/insight/:id/reader" element={
            <Suspense fallback={<PageLoader />}><InsightReader /></Suspense>
          } />

          {/* Geo-targeted SEO landing pages */}
          <Route path="/top-ai-trainer-india" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs.india} />
            </Suspense>
          } />
          <Route path="/ai-trainer-tamil-nadu" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs['tamil-nadu']} />
            </Suspense>
          } />
          <Route path="/ai-trainer-coimbatore" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs.coimbatore} />
            </Suspense>
          } />
          <Route path="/best-ai-keynote-speaker-india" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs.keynote} />
            </Suspense>
          } />
          <Route path="/corporate-ai-workshops-india" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs.corporate} />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
