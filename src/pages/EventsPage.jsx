import Navbar from '../sections/Navbar';
import Events from '../sections/Events';
import Footer from '../sections/Footer';
import { siteData } from '../data/siteData';

const EventsPage = () => (
  <>
    <Navbar />
    <div style={{ paddingTop: '90px' }}>
      <Events />
    </div>
    <Footer contact={siteData.contact} />
  </>
);

export default EventsPage;
