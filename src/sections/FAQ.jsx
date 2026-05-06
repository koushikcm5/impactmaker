import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'What makes this AI trainer unique?',
    a: 'The trainer combines Artificial Intelligence with Human Creative Intelligence, gamified learning, Design Thinking, and practical business automation strategies to deliver highly engaging and impactful sessions.'
  },
  {
    q: 'What topics are covered in AI workshops?',
    a: 'The workshops cover Generative AI, Agentic AI, AI for HR, AI for Marketing, AI for IT, AI business automation, workflow optimization, and AI productivity tools.'
  },
  {
    q: 'Do you conduct corporate AI training programs?',
    a: 'Yes, customized AI training programs are conducted for corporates, enterprises, MSMEs, startups, and educational institutions across India.'
  },
  {
    q: 'Are workshops available in Tamil, Malayalam, and Hindi?',
    a: 'Yes, training sessions and keynote speeches are available in Tamil, Malayalam, Hindi, and English.'
  },
  {
    q: 'What industries benefit from these AI training programs?',
    a: 'Industries including IT, HR, Education, Manufacturing, Marketing, Healthcare, Retail, MSMEs, and Corporate Enterprises benefit from these programs.'
  },
  {
    q: 'Do you offer keynote speaking sessions for events?',
    a: 'Yes, keynote speaking sessions are available for corporate events, conferences, leadership summits, educational institutions, and innovation forums.'
  },
  {
    q: 'What is Agentic AI training?',
    a: 'Agentic AI training focuses on autonomous AI workflows, business process automation, intelligent decision-making systems, and AI-driven productivity enhancement.'
  },
  {
    q: 'What is included in Design Thinking workshops?',
    a: 'The Design Thinking workshops include innovation frameworks, problem-solving methodologies, customer-centric thinking, brainstorming models, and practical implementation activities.'
  },
  {
    q: 'How does Gamified Learning help Gen Z learners?',
    a: 'Gamified learning improves engagement, retention, collaboration, creativity, and participation using interactive activities, simulations, and challenge-based learning.'
  },
  {
    q: 'Are customized training modules available?',
    a: 'Yes, fully customized workshop content and curriculum are created based on organizational goals, industry requirements, and audience profiles.'
  },
  {
    q: 'Is this suitable for beginners in AI?',
    a: 'Yes, the sessions are designed for both beginners and advanced professionals with simplified explanations and practical real-world examples.'
  },
  {
    q: 'How can organizations book a workshop or keynote session?',
    a: 'Organizations can connect directly through the contact or enquiry section to schedule customized workshops, keynote speeches, leadership programs, or AI transformation sessions.'
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
