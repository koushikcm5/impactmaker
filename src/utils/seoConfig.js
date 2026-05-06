// ─── Site Constants ───────────────────────────────────────────────────────────
export const SITE_URL = 'https://impactmaker.in';
export const SITE_NAME = 'J-Impact Creative Learning Services';
export const FOUNDER_NAME = 'Dr. Arun Divakaran';
export const SITE_PHONE = '+91-8078834082';
export const SITE_EMAIL = 'arun.divakaran@hotmail.com';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// ─── Default / Fallback SEO ───────────────────────────────────────────────────
export const DEFAULT_SEO = {
  title: `J-Impact Creative Learning Services | ${FOUNDER_NAME} | Top AI Trainer in India`,
  description: `${FOUNDER_NAME} — India's Top AI Trainer & Keynote Speaker. Expert in Generative AI, Agentic AI, Corporate AI Workshops, Design Thinking, Enterprise Agile & Leadership Training. 50,000+ professionals trained across 15+ countries.`,
  keywords: 'Top AI Trainer India, Best AI Trainer Tamil Nadu, AI Trainer Coimbatore, Best AI Leadership Trainer India, Generative AI Trainer, Agentic AI Trainer, Corporate AI Workshops India, Keynote Speaker Tamil Nadu Kerala, Design Thinking Trainer, Enterprise Agile Trainer',
};

// ─── Per-Page SEO Configurations ─────────────────────────────────────────────
export const PAGE_SEO = {
  home: {
    title: `J-Impact Creative Learning Services | ${FOUNDER_NAME} | Top AI Trainer in India`,
    description: `${FOUNDER_NAME} is India's Top AI Trainer & Keynote Speaker. Expert in Generative AI, Agentic AI, Corporate AI Workshops, Design Thinking, Enterprise Agile & Leadership Training. 50,000+ professionals trained across 15+ countries.`,
    keywords: 'Top AI Trainer India, Best AI Trainer Tamil Nadu, Best AI Trainer Kerala, AI Trainer Coimbatore, Best AI Leadership Trainer India, Generative AI Trainer India, Agentic AI Trainer, Corporate AI Workshops, Keynote Speaker Tamil Nadu, Keynote Speaker Kerala, Design Thinking Trainer, Enterprise Agile Trainer, AI Transformation Consultant, Corporate Soft Skills Trainer, Future Skills Trainer India',
    canonical: `${SITE_URL}/`,
  },
  blog: {
    title: 'AI Training Blog & Expert Insights | Corporate AI Articles | J-Impact',
    description: `Expert articles on AI training, Generative AI, Agentic AI, Corporate Leadership, Design Thinking, and Digital Transformation by ${FOUNDER_NAME} — India's leading AI trainer and keynote speaker.`,
    keywords: 'AI Training Blog India, Generative AI Articles, Agentic AI Blog, Corporate AI Training Tips, AI Leadership Articles, Design Thinking Blog, AI for Business India, AI Productivity Tips, Digital Transformation Articles',
    canonical: `${SITE_URL}/blog`,
  },
  gallery: {
    title: 'Workshop Gallery — Corporate & EdTech Training Photos | J-Impact',
    description: `Explore photos from ${FOUNDER_NAME}'s corporate AI workshops, EdTech faculty training, keynote sessions, and enterprise learning programs across India.`,
    keywords: 'AI Training Workshop Gallery, Corporate Workshop Photos India, EdTech Training Sessions, AI Keynote Speaker Gallery, Corporate Training Coimbatore',
    canonical: `${SITE_URL}/gallery`,
  },
  events: {
    title: 'AI Training Events & Upcoming Workshops | J-Impact | Dr. Arun Divakaran',
    description: `Discover upcoming AI training events, corporate workshops, keynote speaking sessions, and enterprise learning programs by ${FOUNDER_NAME} across India.`,
    keywords: 'AI Training Events India, Corporate Workshop Events, Upcoming AI Workshops India, AI Keynote Events, Learning Programs India',
    canonical: `${SITE_URL}/events`,
  },
  workshopGameChanger: {
    title: 'Game-Changer Corporate Workshops | Holistic Transformation | J-Impact',
    description: `Transform your team with ${FOUNDER_NAME}'s Game-Changer Workshops — holistic corporate training that unlocks creative thinking, AI adoption, and measurable performance improvement.`,
    keywords: 'Game Changer Corporate Workshops India, Holistic Transformation Training, Corporate Team Transformation, Creative Thinking Workshops, AI Corporate Training India',
    canonical: `${SITE_URL}/workshops/game-changer`,
  },
  workshopDeepDive: {
    title: 'Deep-Dive AI & Analytics Workshops | Enterprise Learning | J-Impact',
    description: `Intensive deep-dive workshops on Generative AI, Agentic AI, Data Analytics, Power BI, and enterprise technology for corporates by ${FOUNDER_NAME}.`,
    keywords: 'Deep Dive AI Workshops India, Data Analytics Training Corporate, Power BI Training India, Generative AI Deep Dive, Enterprise AI Skills Training',
    canonical: `${SITE_URL}/workshops/deep-dive`,
  },
  workshopTechnical: {
    title: 'Technical AI Training | AI for Leadership & Functional Roles | J-Impact',
    description: `Technical AI training programs for executive leadership, functional roles (HR, IT, Marketing, Finance), and fresh engineers by ${FOUNDER_NAME} — Top AI Trainer in India.`,
    keywords: 'Technical AI Training India, AI for Executive Leadership, AI for HR Teams, AI for IT Teams, AI for Marketing, AI for Fresh Engineers, Enterprise AI Skills',
    canonical: `${SITE_URL}/workshops/technical`,
  },
  workshopTransformational: {
    title: 'Design Thinking & Leadership Transformation Workshops | J-Impact',
    description: `Design Thinking, Leadership Transformation, and Agile & Scrum workshops for corporate teams by ${FOUNDER_NAME} — Certified Design Thinking and Enterprise Agile Trainer in India.`,
    keywords: 'Design Thinking Trainer India, Leadership Transformation Workshop, Agile Scrum Training Corporate, Enterprise Agile Trainer, Design Thinking Corporate India',
    canonical: `${SITE_URL}/workshops/transformational`,
  },
  workshopSpeaker: {
    title: 'Best AI Keynote Speaker India | Corporate Events | Dr. Arun Divakaran',
    description: `Book ${FOUNDER_NAME} as your AI Keynote Speaker or Leadership Speaker for corporate events, conferences, leadership summits, and innovation forums across India, Tamil Nadu, and Kerala.`,
    keywords: 'Best AI Keynote Speaker India, Best Keynote Speaker Tamil Nadu, Best Keynote Speaker Kerala, Best Keynote Speaker Coimbatore, Corporate AI Speaker India, Digital Transformation Speaker',
    canonical: `${SITE_URL}/workshops/speaker`,
  },
  geoIndia: {
    title: 'Dr. Arun Divakaran | J-Impact Creative Learning Services | Top AI Trainer in India',
    description: `${FOUNDER_NAME} is India's Top AI Trainer with 50,000+ professionals trained across 15+ countries. Offering Generative AI, Agentic AI, Leadership, and Corporate AI workshops pan-India. Hindi, Tamil, Malayalam & English.`,
    keywords: 'Top AI Trainer India, Best AI Trainer India, AI Corporate Training India, Generative AI Trainer India, Best AI Leadership Trainer India, AI Keynote Speaker India, Corporate AI Workshops India, AI Transformation Consultant India, Hindi AI Trainer, AI Training Programs Enterprises India',
    canonical: `${SITE_URL}/top-ai-trainer-india`,
  },
  geoTamilNadu: {
    title: 'Top AI Trainer in Tamil Nadu | Best AI Workshops | Dr. Arun Divakaran',
    description: `${FOUNDER_NAME} — Top AI Trainer in Tamil Nadu. Corporate AI workshops, keynote speaking, and leadership programs in Tamil & English across Chennai, Coimbatore, Madurai, Trichy, and all of Tamil Nadu.`,
    keywords: 'Top AI Trainer Tamil Nadu, Best AI Trainer Tamil Nadu, AI Training Tamil Nadu, Tamil AI Trainer, AI Workshops Tamil Nadu, Best Keynote Speaker Tamil Nadu, Top Soft Skills Trainer Tamil Nadu, AI Training Chennai Coimbatore Madurai, Future Skills Trainer Tamil Nadu',
    canonical: `${SITE_URL}/ai-trainer-tamil-nadu`,
  },
  geoCoimbatore: {
    title: 'Top AI Trainer in Coimbatore | Corporate AI & Keynote | Dr. Arun Divakaran',
    description: `${FOUNDER_NAME} — Top AI Trainer in Coimbatore. Specialized corporate AI training, Generative AI workshops, Design Thinking, Agile Scrum, and keynote speaking for Coimbatore enterprises and colleges.`,
    keywords: 'Top AI Trainer Coimbatore, Best AI Trainer Coimbatore, AI Training Coimbatore, Corporate AI Workshops Coimbatore, Generative AI Trainer Coimbatore, AI Consultant Coimbatore, Keynote Speaker Coimbatore, Data Analytics Trainer Coimbatore, Agile Coach Coimbatore, AI College Workshops Coimbatore',
    canonical: `${SITE_URL}/ai-trainer-coimbatore`,
  },
  geoKeynote: {
    title: 'Best AI Keynote Speaker in India | Conferences & Summits | Dr. Arun Divakaran',
    description: `Book ${FOUNDER_NAME} — India's Best AI Keynote Speaker for corporate events, conferences, innovation summits, and leadership forums. Inspiring talks on Generative AI, Digital Transformation, and the Future of Work.`,
    keywords: 'Best AI Keynote Speaker India, Best Keynote Speaker Tamil Nadu Kerala, AI Speaker India, Corporate Keynote AI India, Digital Transformation Speaker India, AI Conference Speaker India, Innovation Speaker India, Corporate AI Keynote Speaker',
    canonical: `${SITE_URL}/best-ai-keynote-speaker-india`,
  },
  geoCorporate: {
    title: 'Corporate AI Training Workshops India | Enterprise AI Programs | Dr. Arun Divakaran',
    description: `Comprehensive corporate AI training workshops across India by ${FOUNDER_NAME}. Generative AI, Agentic AI, AI for Functional Roles, Leadership, and Business Automation programs for enterprises and MSMEs.`,
    keywords: 'Corporate AI Workshops India, Enterprise AI Training India, AI Training Programs Corporates India, Generative AI Corporate India, AI for Enterprises India, AI for MSME India, AI Trainer for Corporate Companies, AI Business Automation Trainer, Learning Development AI Trainer',
    canonical: `${SITE_URL}/corporate-ai-workshops-india`,
  },
};

// ─── Blog Category Config ─────────────────────────────────────────────────────
export const BLOG_CATEGORIES = [
  'All',
  'AI for Business',
  'Generative AI',
  'Agentic AI',
  'AI for HR',
  'AI for Marketing',
  'AI for IT Teams',
  'Design Thinking',
  'Enterprise Agile',
  'Corporate Leadership',
  'Soft Skills',
  'Innovation & Creativity',
  'Gamified Learning',
  'Future Skills',
  'AI Productivity',
  'Digital Transformation',
];

// ─── Schema Generators ────────────────────────────────────────────────────────
export const makeBreadcrumb = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ...crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  ],
});

export const makeArticleSchema = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.seoTitle || post.title,
  description: post.metaDescription || post.excerpt,
  url: `${SITE_URL}/insight/${post.id}`,
  datePublished: post.publishedDate || '2024-06-01T00:00:00+05:30',
  dateModified: post.modifiedDate || '2025-01-01T00:00:00+05:30',
  author: {
    '@type': 'Person',
    name: FOUNDER_NAME,
    url: SITE_URL,
    jobTitle: 'Top AI Trainer & Keynote Speaker, India',
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/insight/${post.id}` },
  keywords: post.tags ? post.tags.join(', ') : (post.focusKeyword || post.category),
  articleSection: post.category,
  inLanguage: 'en-IN',
  image: post.ogImage || OG_IMAGE,
});

export const makeServiceSchema = (name, description, path) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  url: `${SITE_URL}${path}`,
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'State', name: 'Kerala' },
    { '@type': 'City', name: 'Coimbatore' },
  ],
});

export const makeLocalBusinessSchema = (city, region, description) => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EducationalOrganization'],
  '@id': `${SITE_URL}/#organization-${(city || 'india').toLowerCase().replace(/\s/g, '-')}`,
  name: SITE_NAME,
  description: description || `Top AI Trainer in ${city || 'India'} — ${FOUNDER_NAME} offers corporate AI workshops, keynote speaking, Design Thinking, and leadership training in ${region || 'India'}.`,
  url: SITE_URL,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  logo: `${SITE_URL}/favicon.png`,
  image: OG_IMAGE,
  address: {
    '@type': 'PostalAddress',
    addressLocality: city || 'Coimbatore',
    addressRegion: region || 'Tamil Nadu',
    addressCountry: 'IN',
    postalCode: '641001',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.0168,
    longitude: 76.9558,
  },
  areaServed: city ? [city, region || 'Tamil Nadu', 'India'] : ['India', 'Tamil Nadu', 'Kerala', 'Coimbatore'],
  priceRange: '₹₹₹',
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00'],
});

export const makeGeoFAQ = (city) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: `Who is the top AI trainer in ${city || 'India'}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${FOUNDER_NAME} is the top AI trainer in ${city || 'India'}, with 19+ years of experience and 50,000+ professionals trained. He specializes in Generative AI, Agentic AI, Corporate AI Workshops, Leadership Training, Design Thinking, and Keynote Speaking.`,
      },
    },
    {
      '@type': 'Question',
      name: `What AI training programs are available in ${city || 'India'}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `J-Impact offers comprehensive AI training programs in ${city || 'India'} including Generative AI workshops, Agentic AI training, AI for Functional Roles (HR, IT, Marketing, Finance), AI Leadership Programs, Design Thinking, Enterprise Agile, and Business Workflow Automation.`,
      },
    },
    {
      '@type': 'Question',
      name: `Does Dr. Arun Divakaran conduct workshops in ${city || 'India'}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Yes, ${FOUNDER_NAME} conducts customized corporate AI workshops, keynote sessions, faculty development programs, and leadership training across ${city || 'all major cities in India'}.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Are workshops available in Tamil, Malayalam, and Hindi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, training sessions and keynote speeches are available in Tamil, Malayalam, Hindi, and English, making it accessible for diverse corporate and educational audiences.',
      },
    },
  ],
});
