import Navbar from '../sections/Navbar';
import Gallery from '../sections/Gallery';
import Footer from '../sections/Footer';
import { siteData } from '../data/siteData';

const GalleryPage = () => (
  <>
    <Navbar />
    <div style={{ paddingTop: '90px' }}>
      <Gallery />
    </div>
    <Footer contact={siteData.contact} />
  </>
);

export default GalleryPage;
