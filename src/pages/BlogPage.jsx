import Navbar from '../sections/Navbar';
import Insights from '../sections/Insights';
import Footer from '../sections/Footer';
import { siteData } from '../data/siteData';

const BlogPage = () => (
  <>
    <Navbar />
    <div style={{ paddingTop: '90px' }}>
      <Insights data={siteData.blog} />
    </div>
    <Footer contact={siteData.contact} />
  </>
);

export default BlogPage;
