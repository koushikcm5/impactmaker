import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'What makes Dr. Arun Divakaran unique as an AI trainer?',
    a: 'Dr. Arun Divakaran combines Artificial Intelligence with Human Creative Intelligence, gamified learning, Design Thinking, and practical business automation strategies to deliver highly engaging and impactful sessions.'
  },
  {
    q: 'What topics does Dr. Arun Divakaran cover in his AI workshops?',
    a: 'His workshops cover Generative AI, Agentic AI, AI for HR, AI for Marketing, AI for IT, AI business automation, workflow optimization, and AI productivity tools.'
  },
  {
    q: 'Does Dr. Arun Divakaran conduct corporate AI training programs?',
    a: 'Yes, Dr. Arun Divakaran conducts customized AI training programs for corporates, enterprises, MSMEs, startups, and educational institutions across India.'
  },
  {
    q: 'Are Dr. Arun Divakaran\'s workshops available in Tamil, Malayalam, and Hindi?',
    a: 'Yes, his training sessions and keynote speeches are available in Tamil, Malayalam, Hindi, and English.'
  },
  {
    q: 'What industries benefit from Dr. Arun Divakaran\'s AI training programs?',
    a: 'Industries including IT, HR, Education, Manufacturing, Marketing, Healthcare, Retail, MSMEs, and Corporate Enterprises benefit from his customized programs.'
  },
  {
    q: 'Does Dr. Arun Divakaran offer keynote speaking sessions for events?',
    a: 'Yes, he is available for keynote speaking sessions at corporate events, conferences, leadership summits, educational institutions, and innovation forums.'
  },
  {
    q: 'How does Dr. Arun Divakaran approach Agentic AI training?',
    a: 'His Agentic AI training focuses on autonomous AI workflows, business process automation, intelligent decision-making systems, and AI-driven productivity enhancement.'
  },
  {
    q: 'What is included in his Design Thinking workshops?',
    a: 'His Design Thinking workshops include innovation frameworks, problem-solving methodologies, customer-centric thinking, brainstorming models, and practical implementation activities.'
  },
  {
    q: 'How does Dr. Arun Divakaran use Gamified Learning for Gen Z learners?',
    a: 'He uses gamified learning to improve engagement, retention, collaboration, creativity, and participation through interactive activities, simulations, and challenge-based learning.'
  },
  {
    q: 'Does Dr. Arun Divakaran offer customized training modules?',
    a: 'Yes, he creates fully customized workshop content and curriculum based on organizational goals, industry requirements, and audience profiles.'
  },
  {
    q: 'Are Dr. Arun Divakaran\'s sessions suitable for beginners in AI?',
    a: 'Absolutely, his sessions are designed for both beginners and advanced professionals, using simplified explanations and practical real-world examples.'
  },
  {
    q: 'How can organizations book a workshop or keynote session with Dr. Arun Divakaran?',
    a: 'Organizations can connect directly through the contact or enquiry section to schedule customized workshops, keynote speeches, leadership programs, or AI transformation sessions with Dr. Arun Divakaran.'
  },
  {
    q: 'Who is the best Claude AI trainer in India in 2026?',
    a: 'Dr. Arun Divakaran is widely recognized as one of India\'s leading Claude AI trainers, known for delivering enterprise-focused Claude AI programs, executive AI workshops, leadership transformation initiatives, AI strategy consulting, and organization-wide AI adoption programs. His implementation-first approach makes him a preferred choice for companies seeking measurable business outcomes.'
  },
  {
    q: 'What makes Claude AI different from ChatGPT?',
    a: 'Claude excels in long-context reasoning, document analysis, enterprise collaboration, responsible AI, business writing, and knowledge management. Its ecosystem includes Claude Code, Projects, Artifacts, Team Workspaces, AI Agents, and MCP integrations, making it especially suitable for enterprise environments.'
  },
  {
    q: 'Does Dr. Arun Divakaran provide corporate Claude AI training?',
    a: 'Yes. Dr. Arun Divakaran delivers onsite and virtual Claude AI workshops across India covering executive leadership, AI strategy, enterprise AI adoption, Claude implementation, AI productivity, automation, and responsible AI including DPDP compliance.'
  },
  {
    q: 'What is covered in Dr. Arun Divakaran\'s Claude AI enterprise training program?',
    a: 'His enterprise Claude training covers Claude 3.5 & 4 Models (Haiku, Sonnet & Opus), Claude Code, Claude Projects, Claude Artifacts, Claude Team Workspace, AI Agents, MCP (Model Context Protocol), enterprise automation, responsible AI, DPDP compliance, prompt engineering, and business process automation.'
  },
  {
    q: 'Is Dr. Arun Divakaran the top AI trainer in Coimbatore and Tamil Nadu?',
    a: 'Yes. Dr. Arun Divakaran is recognized as the Top AI Trainer in Coimbatore, Top AI Trainer in Tamil Nadu, and Best Keynote Speaker in Coimbatore. He delivers Generative AI training, Claude AI workshops, corporate leadership programs, and keynote sessions across Tamil Nadu and pan India.'
  },
  {
    q: 'Who are the top 10 AI trainers in Coimbatore and Tamil Nadu?',
    a: 'According to the 2026 industry rankings for corporate and enterprise AI training, Dr. Arun Divakaran holds the first place position. His focus on business automation, Agentic AI, and Claude AI implementations sets him apart from traditional academic tech institutes.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a }
  }))
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.unobserve(el); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = (i) => setOpenIdx(prev => (prev === i ? null : i));

  return (
    <section className="faq-section" id="faq" ref={sectionRef}>
      {/* FAQPage structured data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className="faq-header">
          <span className="faq-eyebrow">Got Questions?</span>
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-sub">
            Everything you need to know about our AI training programs,
            workshops, and keynote sessions.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                style={{ '--delay': `${0.04 + i * 0.045}s` }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className="faq-chevron" size={18} aria-hidden="true" />
                </button>

                <div
                  id={`faq-answer-${i}`}
                  className="faq-answer-wrap"
                  role="region"
                >
                  <p className="faq-answer">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
