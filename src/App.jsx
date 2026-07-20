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
import RecentGallery from './sections/RecentGallery';
import ScrollToTop from './components/ScrollToTop';
import BookPromoWidget from './components/BookPromoWidget';
import NetworkCanvas from './components/NetworkCanvas';
import WhatsAppButton from './components/WhatsAppButton';
import SEOHead from './components/SEOHead';
import { siteData } from './data/siteData';
import { PAGE_SEO, SITE_URL, SITE_NAME, FOUNDER_NAME, SITE_PHONE, SITE_EMAIL, makeBreadcrumb, makePersonSchema } from './utils/seoConfig';
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
const SEOPillarPage       = lazy(() => import('./pages/SEOPillarPage'));

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
  makePersonSchema(),
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: `India's Top AI Trainer & Best Keynote Speaker — ${FOUNDER_NAME}`,
    publisher: { '@id': `${SITE_URL}/#person` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Core Training Modules by Dr. Arun Divakaran',
    description: `Top professional training tracks offered by ${FOUNDER_NAME} — India's leading AI trainer.`,
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Game-Changer Corporate Workshops', url: `${SITE_URL}/workshops/game-changer` },
      { '@type': 'ListItem', position: 2, name: 'Technical AI & Generative AI Training', url: `${SITE_URL}/workshops/technical` },
      { '@type': 'ListItem', position: 3, name: 'Deep-Dive Analytics & Ed-Tech Workshops', url: `${SITE_URL}/workshops/deep-dive` },
      { '@type': 'ListItem', position: 4, name: 'Design Thinking & Enterprise Agile Training', url: `${SITE_URL}/workshops/transformational` },
      { '@type': 'ListItem', position: 5, name: 'AI Keynote & Leadership Speaking', url: `${SITE_URL}/workshops/speaker` },
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
    <RecentGallery />
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
    heading: 'Top AI Trainer in Tamil Nadu | Top Generative AI Trainer Tamil Nadu',
    subheading: 'Corporate AI Training, Keynote Speaking & Leadership Programs in Tamil Nadu',
    city: 'Tamil Nadu',
    region: 'Tamil Nadu',
    heroKeywords: ['Top AI Trainer Tamil Nadu', 'Top Generative AI Trainer', 'Tamil AI Training', 'Keynote Speaker TN', 'Design Thinking', 'Enterprise Agile', 'AI Leadership', 'AI for Colleges'],
    intro: `${FOUNDER_NAME} is Tamil Nadu's leading AI trainer and Top Generative AI Trainer in Tamil Nadu, delivering high-impact corporate AI workshops, keynote speeches, and leadership programs in Tamil and English. With deep roots in Coimbatore and a pan-Tamil Nadu presence covering Chennai, Madurai, Trichy, Salem, and Tirunelveli, Dr. Arun has trained professionals from leading IT firms, manufacturing companies, B-schools, and government institutions across the state.`,
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
    heading: 'Top AI Trainer in Coimbatore | Top Generative AI Trainer Coimbatore',
    subheading: 'Corporate AI Workshops, Keynote Speaking & Leadership Training in Coimbatore',
    city: 'Coimbatore',
    region: 'Tamil Nadu',
    heroKeywords: ['Top AI Trainer Coimbatore', 'Top Generative AI Trainer', 'Best Keynote Speaker', 'Corporate AI Training', 'Leadership Speaker', 'Data Analytics', 'Design Thinking', 'Agile Coach'],
    intro: `${FOUNDER_NAME} is Coimbatore's Top AI Trainer, Top Generative AI Trainer and Best Keynote Speaker, based in the heart of Tamil Nadu's industrial capital. Serving manufacturing firms, textile companies, IT enterprises, healthcare organizations, and engineering colleges across Coimbatore, Dr. Arun delivers customized AI training, Generative AI workshops, Data Analytics programs, Design Thinking workshops, and keynote sessions that drive measurable business impact.`,
    services: [
      { title: 'Best Keynote Speaker — Coimbatore', desc: 'Engaging keynote addresses for Coimbatore industrial associations, corporate conclaves, college events, and leadership forums. Inspiring talks on AI, digital transformation, and innovation.' },
      { title: 'Generative AI Training — Coimbatore', desc: 'Corporate Generative AI workshops for Coimbatore manufacturing, IT, textile, and healthcare companies. Practical, hands-on, results-driven training programs.' },
      { title: 'Data Analytics & Power BI Training', desc: 'Data-driven decision-making workshops using Power BI, Excel AI, and analytics tools for Coimbatore business leaders and teams.' },
      { title: 'AI for Engineering Colleges — Coimbatore', desc: 'AI and technology workshops for students and faculty at Coimbatore\'s premier engineering institutions — PSG, CIT, RVS, and more.' },
      { title: 'Leadership & Corporate Training', desc: 'Leadership development, soft skills, communication training, and team transformation programs for Coimbatore enterprises.' },
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
  'coimbatore-keynote': {
    seo: PAGE_SEO.geoCoimbatoreKeynote,
    heading: 'Best Keynote Speaker in Coimbatore',
    subheading: 'Inspiring Leadership, AI & Technology Keynotes for Coimbatore',
    city: 'Coimbatore',
    region: 'Tamil Nadu',
    heroKeywords: ['Best Keynote Speaker', 'Best AI Keynote Speaker', 'Leadership Speaker Coimbatore', 'Corporate Speaker', 'Digital Transformation', 'Innovation Speaker', 'Motivational Speaker', 'Tech Keynote'],
    intro: `${FOUNDER_NAME} is Coimbatore's Best Keynote Speaker, delivering powerful and inspiring keynote addresses on Artificial Intelligence, Digital Transformation, Leadership, Innovation, and the Future of Work. With 450+ keynote sessions delivered across India and internationally, Dr. Arun brings unmatched expertise, engaging storytelling, and actionable insights to corporate events, industrial associations, leadership summits, college fests, and technology conferences in Coimbatore.`,
    services: [
      { title: 'AI & Future of Work Keynote — Coimbatore', desc: 'Visionary keynote on how AI is transforming careers, industries, and organizations. Perfect for corporate annual meets, leadership forums, and HR summits in Coimbatore.' },
      { title: 'Generative AI for Business Leaders', desc: 'Practical keynote with live demonstrations showing how Generative AI is revolutionizing marketing, operations, and productivity for Coimbatore businesses.' },
      { title: 'Digital Transformation & Innovation', desc: 'Inspiring keynote on digital transformation journeys, innovation strategies, and building a culture of continuous improvement for Coimbatore enterprises.' },
      { title: 'Leadership in the AI Era', desc: 'Powerful keynote for senior leaders on developing AI-ready leadership skills, building high-performing teams, and navigating change in the AI age.' },
      { title: 'Keynote for Engineering Colleges', desc: 'Engaging and motivational keynotes for Coimbatore engineering college students on AI careers, future skills, entrepreneurship, and personal branding.' },
      { title: 'Industrial Association Keynotes', desc: 'Customized keynote addresses for Coimbatore industrial associations (CODISSIA, TiE, CCTEC) on AI adoption, industry 4.0, and business transformation.' },
    ],
  },
  'generative-ai-india': {
    seo: PAGE_SEO.geoGenAIIndia,
    heading: 'Top Generative AI Trainer in India',
    subheading: 'Enterprise Generative AI Training — ChatGPT, Claude, Gemini & Copilot',
    city: null,
    region: 'India',
    heroKeywords: ['Generative AI Training', 'ChatGPT Trainer', 'Claude AI Trainer', 'Gemini Trainer', 'Copilot Trainer', 'Prompt Engineering', 'AI Productivity', 'Enterprise AI'],
    intro: `${FOUNDER_NAME} is India's Top Generative AI Trainer, delivering practical, enterprise-focused Generative AI workshops for corporates, MSMEs, B-schools, and institutions across India. His programs cover ChatGPT, Claude, Google Gemini, Microsoft Copilot, Prompt Engineering, AI Productivity, and business automation — in English, Hindi, Tamil, and Malayalam. With 50,000+ professionals trained and 19+ years of corporate experience, Dr. Arun bridges the gap between AI theory and real business implementation.`,
    services: [
      { title: 'ChatGPT Corporate Training', desc: 'Hands-on ChatGPT workshops for business teams — covering prompt engineering, content creation, data analysis, coding assistance, and workflow automation.' },
      { title: 'Claude AI Enterprise Training', desc: 'Specialized Claude AI training covering Claude Projects, Artifacts, Claude Code, AI Agents, MCP integrations, and enterprise document intelligence.' },
      { title: 'Google Gemini & Copilot Training', desc: 'Practical workshops on Google Gemini for Workspace and Microsoft Copilot for M365 — boosting productivity across HR, Finance, Marketing, and IT teams.' },
      { title: 'Prompt Engineering Masterclass', desc: 'Advanced prompt engineering training for business professionals — covering chain-of-thought prompting, few-shot learning, role prompting, and output optimization.' },
      { title: 'Generative AI for Functional Roles', desc: 'Role-specific Generative AI training for HR, Marketing, Finance, IT, Operations, and Sales teams — practical tools for immediate productivity gains.' },
      { title: 'AI Productivity & Automation', desc: 'Workflow automation using Generative AI tools — reducing manual effort, accelerating content creation, and enabling data-driven decision-making.' },
    ],
  },
  'generative-ai-coimbatore': {
    seo: PAGE_SEO.geoGenAICoimbatore,
    heading: 'Top Generative AI Trainer in Coimbatore',
    subheading: 'Hands-On Generative AI Workshops for Coimbatore Enterprises & Colleges',
    city: 'Coimbatore',
    region: 'Tamil Nadu',
    heroKeywords: ['Generative AI Coimbatore', 'ChatGPT Trainer', 'Claude AI Training', 'Prompt Engineering', 'AI Workshop', 'Corporate AI', 'AI Productivity', 'AI for Colleges'],
    intro: `${FOUNDER_NAME} is Coimbatore's Top Generative AI Trainer, delivering practical Generative AI workshops for manufacturing firms, IT companies, textile enterprises, healthcare organizations, and engineering colleges across Coimbatore. His programs are tailored to Coimbatore's unique business ecosystem — combining global AI best practices with local industry context, delivered in Tamil and English for maximum accessibility.`,
    services: [
      { title: 'Generative AI for Manufacturing — Coimbatore', desc: 'AI productivity tools for Coimbatore manufacturing teams — process documentation, quality reporting, supplier communication, and predictive maintenance insights.' },
      { title: 'ChatGPT & Claude Training — Coimbatore', desc: 'Practical ChatGPT and Claude AI workshops for Coimbatore business teams — covering content creation, data analysis, and business communication.' },
      { title: 'Prompt Engineering Workshop — Coimbatore', desc: 'Advanced prompt engineering training for Coimbatore professionals — maximizing AI output quality for business writing, analysis, and automation.' },
      { title: 'Generative AI for Colleges — Coimbatore', desc: 'AI literacy and Generative AI workshops for students and faculty at Coimbatore engineering colleges — PSG, CIT, RVS, KCT, and more.' },
      { title: 'AI for MSMEs — Coimbatore', desc: 'Affordable, practical Generative AI training for Coimbatore MSMEs — helping small businesses leverage AI for marketing, operations, and customer service.' },
      { title: 'AI Productivity Bootcamp', desc: 'Intensive one-day AI productivity bootcamp for Coimbatore corporate teams — covering 10+ AI tools with hands-on practice and implementation roadmap.' },
    ],
  },
  'generative-ai-tamil-nadu': {
    seo: PAGE_SEO.geoGenAITamilNadu,
    heading: 'Top Generative AI Trainer in Tamil Nadu',
    subheading: 'Generative AI Training in Tamil & English Across Tamil Nadu',
    city: 'Tamil Nadu',
    region: 'Tamil Nadu',
    heroKeywords: ['Generative AI Tamil Nadu', 'Tamil AI Trainer', 'ChatGPT Training TN', 'Claude AI Tamil Nadu', 'AI Workshop Chennai', 'AI Training Madurai', 'Prompt Engineering TN', 'Corporate AI TN'],
    intro: `${FOUNDER_NAME} is Tamil Nadu's Top Generative AI Trainer, delivering high-impact Generative AI workshops in Tamil and English for enterprises, colleges, and professionals across Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, and all of Tamil Nadu. His programs combine practical AI tools with Tamil Nadu's industrial context — manufacturing, IT services, textiles, healthcare, and education.`,
    services: [
      { title: 'Generative AI Training — Chennai', desc: 'Corporate Generative AI workshops for Chennai IT companies, BPOs, and enterprises — covering ChatGPT, Claude, Gemini, and AI productivity tools.' },
      { title: 'Generative AI Training — Coimbatore', desc: 'Hands-on AI workshops for Coimbatore manufacturing, textile, and IT companies — practical tools for immediate business impact.' },
      { title: 'Tamil Language AI Training', desc: 'Generative AI workshops delivered in Tamil — making AI accessible for Tamil Nadu professionals across all industries and education levels.' },
      { title: 'AI for Tamil Nadu Colleges', desc: 'Generative AI literacy programs for engineering students, MBA scholars, and faculty across Tamil Nadu institutions.' },
      { title: 'AI for Tamil Nadu MSMEs', desc: 'Practical AI adoption programs for Tamil Nadu small and medium enterprises — affordable, impactful, and immediately applicable.' },
      { title: 'Prompt Engineering — Tamil Nadu', desc: 'Advanced prompt engineering workshops for Tamil Nadu professionals — maximizing productivity with ChatGPT, Claude, and Gemini.' },
    ],
  },
  'agentic-ai-india': {
    seo: PAGE_SEO.geoAgenticAI,
    heading: 'Top Agentic AI Trainer in India',
    subheading: 'Enterprise Agentic AI Training — Autonomous Workflows & AI Agents',
    city: null,
    region: 'India',
    heroKeywords: ['Agentic AI Training', 'AI Agents India', 'Workflow Automation', 'Business Process AI', 'Autonomous AI', 'AI Productivity', 'Enterprise AI', 'AI Transformation'],
    intro: `${FOUNDER_NAME} is India's leading Agentic AI Trainer, helping enterprises understand, implement, and scale autonomous AI workflows, AI agents, and intelligent business process automation. As Agentic AI becomes the next frontier of enterprise technology, Dr. Arun's programs equip leadership teams, IT professionals, and functional managers with the knowledge and frameworks to deploy AI agents that deliver measurable ROI.`,
    services: [
      { title: 'Agentic AI Fundamentals for Business', desc: 'Introduction to Agentic AI — what AI agents are, how they work, and how enterprises can leverage them for business automation and productivity.' },
      { title: 'AI Workflow Automation Training', desc: 'Hands-on training on building autonomous AI workflows using tools like n8n, Make, and Claude MCP — reducing manual effort by up to 70%.' },
      { title: 'AI Agents for Enterprise Teams', desc: 'Practical AI agent implementation for HR, Marketing, Finance, and IT teams — automating repetitive tasks and enabling intelligent decision support.' },
      { title: 'Agentic AI Leadership Program', desc: 'Strategic Agentic AI program for C-suite and senior leaders — AI governance, ROI measurement, and organizational readiness for autonomous AI.' },
      { title: 'Claude AI Agents & MCP Training', desc: 'Specialized training on Claude AI Agents, Model Context Protocol (MCP), and enterprise automation using Anthropic\'s ecosystem.' },
      { title: 'Responsible Agentic AI', desc: 'AI governance, ethics, and DPDP compliance training for organizations deploying autonomous AI systems in enterprise environments.' },
    ],
  },
  'prompt-engineering-india': {
    seo: PAGE_SEO.geoPromptEngineering,
    heading: 'Top Prompt Engineering Trainer in India',
    subheading: 'Advanced Prompt Engineering Training for Enterprise Teams',
    city: null,
    region: 'India',
    heroKeywords: ['Prompt Engineering Training', 'ChatGPT Prompting', 'Claude Prompting', 'AI Prompting India', 'Prompt Engineering Workshop', 'Enterprise AI', 'AI Productivity', 'Generative AI'],
    intro: `${FOUNDER_NAME} delivers India's most practical and enterprise-focused Prompt Engineering training — helping business professionals, developers, HR teams, marketers, and leaders unlock the full potential of AI tools through advanced prompting techniques. His workshops cover ChatGPT, Claude, Google Gemini, and Microsoft Copilot — with real-world business use cases and hands-on practice.`,
    services: [
      { title: 'Prompt Engineering Fundamentals', desc: 'Core prompting techniques for business professionals — zero-shot, few-shot, chain-of-thought, role prompting, and output formatting.' },
      { title: 'Advanced Prompt Engineering Masterclass', desc: 'Deep-dive prompt engineering for power users — covering prompt chaining, meta-prompting, system prompts, and AI workflow design.' },
      { title: 'Prompt Engineering for ChatGPT', desc: 'Specialized ChatGPT prompting workshop — maximizing output quality for content creation, data analysis, coding, and business communication.' },
      { title: 'Prompt Engineering for Claude AI', desc: 'Claude-specific prompting techniques — leveraging long-context reasoning, document analysis, and enterprise collaboration features.' },
      { title: 'Prompt Engineering for HR & Marketing', desc: 'Role-specific prompting workshops for HR and Marketing teams — job descriptions, performance reviews, campaign briefs, and content calendars.' },
      { title: 'Prompt Engineering for Developers', desc: 'Technical prompt engineering for developers — API integration, system prompt design, RAG prompting, and AI-assisted coding workflows.' },
    ],
  },
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NetworkCanvas fixed />
      <BookPromoWidget />
      <WhatsAppButton phone={siteData.contact.phone} />
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
          <Route path="/best-ai-keynote-speaker-coimbatore" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs['coimbatore-keynote']} />
            </Suspense>
          } />
          <Route path="/best-keynote-speaker-coimbatore" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs['coimbatore-keynote']} />
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
          
          {/* SEO Pillar Page - Master SEO Content */}
          <Route path="/top-ai-trainer-coimbatore-india" element={
            <Suspense fallback={<PageLoader />}>
              <SEOPillarPage />
            </Suspense>
          } />

          {/* Claude AI Trainers India 2026 — SEO article route */}
          <Route path="/top-10-claude-ai-trainers-india-2026" element={
            <Suspense fallback={<PageLoader />}>
              <InsightDetail slugOverride="top-10-claude-ai-trainers-india-2026" />
            </Suspense>
          } />

          {/* Generative AI Trainer geo pages */}
          <Route path="/generative-ai-trainer-india" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs['generative-ai-india']} />
            </Suspense>
          } />
          <Route path="/generative-ai-trainer-coimbatore" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs['generative-ai-coimbatore']} />
            </Suspense>
          } />
          <Route path="/generative-ai-trainer-tamil-nadu" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs['generative-ai-tamil-nadu']} />
            </Suspense>
          } />

          {/* Agentic AI & Prompt Engineering pages */}
          <Route path="/agentic-ai-trainer-india" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs['agentic-ai-india']} />
            </Suspense>
          } />
          <Route path="/prompt-engineering-trainer-india" element={
            <Suspense fallback={<PageLoader />}>
              <GeoPage config={geoConfigs['prompt-engineering-india']} />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
