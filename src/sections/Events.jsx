import { Calendar } from 'lucide-react';
import './Events.css';

const Events = () => {
  return (
    <section id="events" className="events">
      <div className="container">
        <h2>Upcoming Events</h2>
        <div className="events-empty">
          <Calendar size={48} />
          <p>No upcoming events at the moment.</p>
          <p className="events-subtitle">Check back soon for new workshops and seminars!</p>
        </div>
      </div>
    </section>
  );
};

export default Events;
