import Navbar from '../sections/Navbar';
import Gallery from '../sections/Gallery';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { siteData } from '../data/siteData';
import { PAGE_SEO, makeBreadcrumb } from '../utils/seoConfig';

const gallerySchemas = [
  makeBreadcrumb([{ name: 'Workshop Gallery', path: '/gallery' }])
];

const GalleryPage = () => (
  <>
    <SEOHead
      title={PAGE_SEO.gallery.title}
      description={PAGE_SEO.gallery.description}
      keywords={PAGE_SEO.gallery.keywords}
      canonical={PAGE_SEO.gallery.canonical}
      schemas={gallerySchemas}
    />
    <Navbar />
    
    {/* Visual Breadcrumb */}
    <Breadcrumb 
      items={[{ name: 'Workshop Gallery', path: '/gallery' }]} 
      style={{ paddingTop: '110px' }} 
    />

    <div>
      <Gallery />
    </div>
    <Footer contact={siteData.contact} />
  </>
);

export default GalleryPage;
