import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Mic } from 'lucide-react';
import corpVisImg from '../assets/Events/Corporate Visibility.png';
import './Events.css';

const eventsData = [
  {
    id: 1,
    tag: 'Corporate Workshop',
    title: 'CORPORATE VISIBILITY',
    image: corpVisImg,
    description:
      'The term "VISIBILITY" is one of the most misinterpreted, misjudged, convoluted terms in the corporate world. It is so unbelievable that even today, this term is still deeply rooted in the corporate culture.',
    full:
      'The term "VISIBILITY" is one of the most misinterpreted, misjudged, convoluted terms in the corporate world. It is so unbelievable that even today, this term is still deeply rooted in the corporate culture.\n\nI have witnessed how this term has ruined many of my fellow colleagues\' careers, constituted many peer pressures, contributed to several unhealthy means of working styles, reduced peace of mind, induced political shrewdness, yielded resignations/separations etc.\n\nI am connecting my understanding to the famous Peter\'s principle and sharing 4 effective takeaways from this entire session. Are you ready to redefine what true visibility means in your workplace?',
    accent: 'blue',
    featured: true,
  },
];

const EventCard = ({ event }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`event-card ${event.featured ? 'event-card--featured' : ''} event-card--${event.accent}`}>
      {event.image && (
        <div className="event-img-wrap">
          <img src={event.image} alt={event.title} className="event-img" />
        </div>
      )}
      <div className="event-card-inner">
        {/* Left accent strip */}
        <div className="event-accent-strip" aria-hidden="true" />

        <div className="event-body">
          <div className="event-meta-row">
            <span className="event-tag">
              <Mic size={12} />
              {event.tag}
            </span>
            {event.featured && <span className="event-featured-badge">Featured</span>}
          </div>

          <h3 className="event-title">{event.title}</h3>

          <p className="event-description">
            {event.description}
          </p>

          {expanded && (
            <div className="event-full-text">
              {event.full.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          <div className="event-actions">
            <button
              className="event-toggle-btn"
              onClick={() => setExpanded(v => !v)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <><ChevronUp size={16} /> Read Less</>
              ) : (
                <><ChevronDown size={16} /> Read More</>
              )}
            </button>
            <a href="#contact" className="event-register-btn">
              Enquire Now <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const Events = () => {
  return (
    <section id="events" className="events">
      {/* Background blobs */}
      <div className="events-blob events-blob--1" aria-hidden="true" />
      <div className="events-blob events-blob--2" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="events-eyebrow">Live Experiences</span>
          <h2>Events &amp; Talks</h2>
          <p>High-impact sessions designed to shift perspectives, spark conversations and drive real change - in boardrooms and campuses alike.</p>
        </div>

        <div className="events-list">
          {eventsData.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="events-cta-strip">
          <p>Want to host a session at your organisation?</p>
          <a href="#contact" className="events-host-btn">
            Get in Touch <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
