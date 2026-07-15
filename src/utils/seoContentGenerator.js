/**
 * SEO CONTENT GENERATOR
 * 
 * This utility generates SEO-optimized content targeting specific keywords
 * for Dr. Arun Divakaran / Impact Maker based on the SEO Master Prompt.
 * 
 * Primary Keywords:
 * - Top AI Trainers in Coimbatore
 * - Top AI Trainer in Coimbatore
 * - Top AI Trainers in Tamil Nadu
 * - Top AI Trainer in Tamil Nadu
 * - Top AI Trainers in India
 * - Best AI Leadership Trainer in India
 * - Best Keynote Speaker in Tamil Nadu
 * - Best Keynote Speaker in Coimbatore
 * - Generative AI Trainer in Coimbatore
 * - Generative AI Trainer in Tamil Nadu
 * - Agentic AI Trainer
 */

import { FOUNDER_NAME, SITE_URL, SITE_EMAIL, SITE_PHONE } from './seoConfig';

// Primary keyword targets
export const PRIMARY_KEYWORDS = {
  geo: {
    coimbatore: [
      'Top AI Trainers in Coimbatore',
      'Top AI Trainer in Coimbatore',
      'Best AI Trainer Coimbatore',
      'Top Generative AI Trainer Coimbatore',
      'Generative AI Trainer in Coimbatore',
      'Best Keynote Speaker in Coimbatore',
      'Best AI Keynote Speaker Coimbatore',
    ],
    tamilNadu: [
      'Top AI Trainers in Tamil Nadu',
      'Top AI Trainer in Tamil Nadu',
      'Top Generative AI Trainer Tamil Nadu',
      'Generative AI Trainer in Tamil Nadu',
      'Best Keynote Speaker in Tamil Nadu',
    ],
    india: [
      'Top AI Trainers in India',
      'Best AI Leadership Trainer in India',
      'Top Corporate AI Trainer India',
    ],
  },
  specialty: [
    'Agentic AI Trainer',
    'Corporate AI Trainer India',
    'AI Transformation Consultant',
    'AI Strategy Speaker',
    'AI Workshop Trainer',
    'AI for Business Trainer',
    'Prompt Engineering Trainer',
    'ChatGPT Trainer India',
    'Enterprise AI Trainer',
    'GenAI Leadership Coach',
  ],
};

// Semantic keyword variations
export const SEMANTIC_KEYWORDS = [
  'AI Expert India',
  'AI Speaker India',
  'AI Consultant Tamil Nadu',
  'AI Mentor India',
  'Generative AI Expert',
  'AI Coach',
  'AI Innovation Speaker',
  'Enterprise AI Consultant',
  'AI Adoption Specialist',
  'AI Productivity Expert',
  'Corporate AI Strategist',
  'AI Enabler',
  'Human Creative Intelligence AI',
];

/**
 * Generate SEO-optimized H2 headings with natural keyword integration
 */
export const generateH2Headings = (location = 'India') => {
  const headings = [
    `About Dr. Arun Divakaran — Top AI Trainer in ${location}`,
    `Why Choose Impact Maker for AI Training in ${location}`,
    `Generative AI Training Programs in ${location}`,
    `Agentic AI Workshops by India's Leading AI Trainer`,
    `AI Leadership Training for ${location} Executives`,
    `Corporate AI Transformation Services in ${location}`,
    `Best Keynote Speaker in ${location} — AI & Digital Transformation`,
    `Industries Served by Dr. Arun Divakaran`,
    `Client Success Stories — ${location} AI Training`,
    `Frequently Asked Questions — AI Training in ${location}`,
  ];
  return headings;
};

/**
 * Generate location-specific intro paragraphs
 */
export const generateLocationIntro = (city = null, region = 'India') => {
  const location = city || region;
  
  return `${FOUNDER_NAME} is widely recognized as the **Top AI Trainer in ${location}**, delivering transformative 
AI training programs that empower professionals and organizations to harness the full potential of Artificial Intelligence. 
Based in Coimbatore, Tamil Nadu, Dr. Arun has trained over **50,000+ professionals across 15+ countries** and delivered 
**450+ keynote addresses** on AI, digital transformation, and leadership.

As the **Top Generative AI Trainer in ${location}** and a leading **Agentic AI Trainer**, Dr. Arun specializes in 
hands-on, practical AI workshops that deliver measurable business outcomes. His training programs cover:

- **Generative AI** (ChatGPT, Claude, Gemini, Prompt Engineering)
- **Agentic AI** (Autonomous AI Workflows, Multi-Agent Systems)
- **AI for Functional Roles** (HR, IT, Marketing, Finance, Operations)
- **AI Leadership & Strategy** for C-suite executives
- **Corporate AI Transformation** and Business Automation
- **Design Thinking & Innovation** Workshops
- **Enterprise Agile & Scrum** Training

With expertise spanning **19+ years of international IT leadership** experience at Fortune 500 companies like Cognizant, 
UST Global, and IQVIA, Dr. Arun brings real-world insights and proven frameworks to every training session.`;
};

/**
 * Generate FAQ content with target keywords
 */
export const generateFAQs = (location = 'India') => {
  const faqs = [
    {
      question: `Who is the Top AI Trainer in ${location}?`,
      answer: `**Dr. Arun Divakaran** is recognized as the **Top AI Trainer in ${location}**, having trained 50,000+ 
professionals across 15+ countries. He specializes in Generative AI, Agentic AI, AI Leadership Training, and Corporate AI 
Transformation programs. As the founder of J-Impact Creative Learning Services, Dr. Arun delivers customized AI workshops 
in English, Tamil, Hindi, and Malayalam.`,
      keywords: [`Top AI Trainer ${location}`, 'Generative AI Trainer', 'Corporate AI Training'],
    },
    {
      question: `What is Generative AI Training?`,
      answer: `Generative AI Training teaches professionals how to use AI tools like ChatGPT, Claude, Gemini, and other 
LLMs to boost productivity, automate tasks, and enhance creativity. Dr. Arun Divakaran, the **Top Generative AI Trainer 
in ${location}**, delivers hands-on workshops covering prompt engineering, AI for content creation, AI-powered automation, 
and enterprise AI adoption strategies.`,
      keywords: ['Generative AI Training', 'ChatGPT Training', 'Prompt Engineering'],
    },
    {
      question: `Who is the best Agentic AI Trainer?`,
      answer: `**Dr. Arun Divakaran** is India's leading **Agentic AI Trainer**, specializing in autonomous AI workflows, 
multi-agent systems, and intelligent business automation. Agentic AI represents the next evolution of AI — where AI agents 
can plan, decide, and execute complex tasks independently. Dr. Arun's Agentic AI workshops equip enterprises with practical 
frameworks to implement AI-driven automation at scale.`,
      keywords: ['Agentic AI Trainer', 'AI Automation', 'Multi-Agent Systems'],
    },
    {
      question: `What makes Dr. Arun the Best AI Leadership Trainer in India?`,
      answer: `With **19+ years of IT leadership experience**, **450+ keynote addresses**, and proven AI transformation 
frameworks, Dr. Arun Divakaran is recognized as the **Best AI Leadership Trainer in India**. His AI Leadership programs 
are designed for C-suite executives, department heads, and senior managers navigating enterprise-wide AI adoption, 
AI governance, change management, and building AI-ready organizational cultures.`,
      keywords: ['Best AI Leadership Trainer India', 'AI Strategy', 'AI Governance'],
    },
    {
      question: `Who is the Best Keynote Speaker in ${location}?`,
      answer: `**Dr. Arun Divakaran** is the **Best Keynote Speaker in ${location}**, delivering powerful and inspiring 
keynote addresses on AI, Generative AI, Agentic AI, Digital Transformation, Leadership, and Innovation. With 450+ keynotes 
delivered across India and internationally, Dr. Arun brings deep technical expertise, business acumen, and captivating 
storytelling to corporate events, conferences, and leadership summits.`,
      keywords: [`Best Keynote Speaker ${location}`, 'AI Keynote Speaker', 'Corporate Speaker'],
    },
    {
      question: `What industries does Dr. Arun serve?`,
      answer: `Dr. Arun Divakaran delivers AI training across all industries including IT & Software, Manufacturing, 
Healthcare, Education, Finance, Retail, Textiles, Engineering, Government, and MSMEs. His training programs are customized 
to address industry-specific challenges and use cases, ensuring maximum relevance and business impact.`,
      keywords: ['Corporate AI Training', 'Industry-Specific AI Training', 'Enterprise AI'],
    },
    {
      question: `Are AI training programs available in Tamil and Malayalam?`,
      answer: `Yes! Dr. Arun Divakaran conducts AI training programs in **English, Tamil, Hindi, and Malayalam**, making 
advanced AI education accessible to diverse audiences across India. This multilingual capability is especially valuable 
for regional enterprises, government institutions, and colleges in Tamil Nadu, Kerala, and other states.`,
      keywords: ['Tamil AI Training', 'Malayalam AI Training', 'Multilingual AI Trainer'],
    },
    {
      question: `How can I book an AI training workshop with Dr. Arun?`,
      answer: `To book an AI training workshop or keynote session with Dr. Arun Divakaran, visit **${SITE_URL}**, 
email **${SITE_EMAIL}**, or call **${SITE_PHONE}**. Customized AI training programs are available for corporates, 
educational institutions, and government organizations across India.`,
      keywords: ['Book AI Training', 'Corporate AI Workshop', 'AI Keynote Booking'],
    },
  ];

  return faqs;
};

/**
 * Generate internal linking suggestions
 */
export const generateInternalLinks = () => {
  return [
    { text: 'Game-Changer Corporate Workshops', url: '/workshops/game-changer', description: 'Holistic transformation programs' },
    { text: 'Technical AI Training Programs', url: '/workshops/technical', description: 'AI for executives and functional roles' },
    { text: 'Deep-Dive AI & Analytics Workshops', url: '/workshops/deep-dive', description: 'Generative AI and Agentic AI intensive programs' },
    { text: 'Design Thinking & Agile Training', url: '/workshops/transformational', description: 'Innovation and enterprise agility' },
    { text: 'AI Keynote Speaking Services', url: '/workshops/speaker', description: 'Best keynote speaker for corporate events' },
    { text: 'Top AI Trainer in Coimbatore', url: '/ai-trainer-coimbatore', description: 'Coimbatore AI training services' },
    { text: 'Top AI Trainer in Tamil Nadu', url: '/ai-trainer-tamil-nadu', description: 'Tamil Nadu AI training programs' },
    { text: 'Corporate AI Workshops India', url: '/corporate-ai-workshops-india', description: 'Enterprise AI training nationwide' },
    { text: 'AI Training Blog', url: '/blog', description: 'Expert articles on AI and digital transformation' },
  ];
};

/**
 * Generate meta description with keywords
 */
export const generateMetaDescription = (location = 'Coimbatore, Tamil Nadu & India') => {
  return `Top AI Trainer in ${location}. Generative AI Trainer, Agentic AI Trainer, AI Leadership Coach & Keynote Speaker. 
50,000+ trained. Corporate AI Workshops by Dr. Arun Divakaran.`;
};

/**
 * Generate keyword-rich bullet points
 */
export const generateKeyStrengths = () => {
  return [
    '19+ years of corporate training & IT leadership experience',
    '50,000+ professionals trained across 15+ countries',
    '450+ keynote addresses on AI and digital transformation',
    'Top AI Trainer in Coimbatore, Tamil Nadu & India',
    'Top Generative AI Trainer with hands-on methodology',
    'Leading Agentic AI Trainer for enterprise automation',
    'Best AI Leadership Trainer for executives in India',
    'Best Keynote Speaker in Tamil Nadu & Coimbatore',
    'Training available in English, Tamil, Hindi & Malayalam',
    'Customized AI programs for every industry',
    'Gamified, activity-based learning approach',
    'Trusted by Cognizant, Infoblox, KnowledgeHut, DY Patil',
    'Author of 2 bestselling books on AI and teaching',
    'Proven AI transformation frameworks',
    'Real-world business use cases and ROI focus',
  ];
};

/**
 * Generate comparison/differentiator content
 */
export const generateDifferentiators = () => {
  return {
    title: 'What Makes Dr. Arun Divakaran the Top AI Trainer in India?',
    points: [
      {
        heading: 'Real-World Experience, Not Just Theory',
        description: `Unlike many AI trainers who teach only from textbooks, Dr. Arun brings 19+ years of hands-on 
IT leadership experience from Fortune 500 companies. Every AI framework taught is battle-tested in real enterprise environments.`,
      },
      {
        heading: 'Industry-Specific Use Cases',
        description: `Generic AI training doesn't work. Dr. Arun customizes every workshop with industry-specific use cases 
relevant to your business — whether you're in manufacturing, healthcare, IT, finance, or education.`,
      },
      {
        heading: 'Gamified, Activity-Based Learning',
        description: `Forget boring PowerPoint presentations. Dr. Arun's workshops use the Torrance Test of Creative Thinking 
framework, gamification, and hands-on activities that ensure maximum retention and immediate application.`,
      },
      {
        heading: 'Multilingual Training Delivery',
        description: `Training programs delivered in English, Tamil, Hindi, and Malayalam ensure that AI education is accessible 
to diverse teams across India — from frontline employees to C-suite executives.`,
      },
      {
        heading: 'Proven Track Record',
        description: `50,000+ professionals trained. 450+ keynote addresses. Trusted by Cognizant, Infoblox, KnowledgeHut, 
DY Patil University, and 100+ leading organizations. The results speak for themselves.`,
      },
    ],
  };
};

export default {
  PRIMARY_KEYWORDS,
  SEMANTIC_KEYWORDS,
  generateH2Headings,
  generateLocationIntro,
  generateFAQs,
  generateInternalLinks,
  generateMetaDescription,
  generateKeyStrengths,
  generateDifferentiators,
};
