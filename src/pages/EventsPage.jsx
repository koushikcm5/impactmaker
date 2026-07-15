import Navbar from '../sections/Navbar';
import Events from '../sections/Events';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { siteData } from '../data/siteData';
import { PAGE_SEO, makeBreadcrumb } from '../utils/seoConfig';

const eventsSchemas = [
  makeBreadcrumb([{ name: 'Events & Workshops', path: '/events' }])
];

const EventsPage = () => (
  <>
    <SEOHead
      title={PAGE_SEO.events.title}
      description={PAGE_SEO.events.description}
      keywords={PAGE_SEO.events.keywords}
      canonical={PAGE_SEO.events.canonical}
      schemas={eventsSchemas}
    />
    <Navbar />
    
    {/* Visual Breadcrumb */}
    <Breadcrumb 
      items={[{ name: 'Events & Workshops', path: '/events' }]} 
      style={{ paddingTop: '110px' }} 
    />

    <div>
      <Events />
    </div>
    <Footer contact={siteData.contact} />
  </>
);

export default EventsPage;
