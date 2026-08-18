import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { siteData } from '../data/siteData';
import { SITE_URL } from '../utils/seoConfig';

const SitemapPage = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | J-Impact</title>
        <meta name="description" content="HTML Sitemap for J-Impact Creative Learning Services by Dr. Arun Divakaran." />
        <link rel="canonical" href={`${SITE_URL}/sitemap`} />
      </Helmet>
      
      <Navbar />
      
      <main style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
        <h1 style={{ marginBottom: '2rem', color: 'var(--primary-blue, #1659a7)' }}>Sitemap</h1>
        <p style={{ marginBottom: '3rem', fontSize: '1.1rem', opacity: 0.8 }}>
          Explore the key sections, workshops, and regional training hubs of J-Impact.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          <section>
            <h2 style={{ borderBottom: '2px solid var(--accent-orange, #f28c28)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Core Pages</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/#about-impact-maker" style={{ color: 'inherit', textDecoration: 'none' }}>About Dr. Arun</Link></li>
              <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog & Insights</Link></li>
              <li><Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</Link></li>
              <li><Link to="/events" style={{ color: 'inherit', textDecoration: 'none' }}>Events</Link></li>
            </ul>
          </section>

          <section>
            <h2 style={{ borderBottom: '2px solid var(--accent-orange, #f28c28)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Training Workshops</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/workshops/game-changer" style={{ color: 'inherit', textDecoration: 'none' }}>Game-Changer Workshops</Link></li>
              <li><Link to="/workshops/technical" style={{ color: 'inherit', textDecoration: 'none' }}>Technical AI Training</Link></li>
              <li><Link to="/workshops/deep-dive" style={{ color: 'inherit', textDecoration: 'none' }}>Deep-Dive Analytics</Link></li>
              <li><Link to="/workshops/transformational" style={{ color: 'inherit', textDecoration: 'none' }}>Design Thinking & Agile</Link></li>
              <li><Link to="/workshops/speaker" style={{ color: 'inherit', textDecoration: 'none' }}>Keynote Speaking</Link></li>
            </ul>
          </section>

          <section>
            <h2 style={{ borderBottom: '2px solid var(--accent-orange, #f28c28)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Regional SEO Hubs</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/top-ai-trainer-india" style={{ color: 'inherit', textDecoration: 'none' }}>Top AI Trainer in India</Link></li>
              <li><Link to="/ai-trainer-tamil-nadu" style={{ color: 'inherit', textDecoration: 'none' }}>Top AI Trainer in Tamil Nadu</Link></li>
              <li><Link to="/ai-trainer-coimbatore" style={{ color: 'inherit', textDecoration: 'none' }}>Top AI Trainer in Coimbatore</Link></li>
              <li><Link to="/generative-ai-trainer-india" style={{ color: 'inherit', textDecoration: 'none' }}>Generative AI Trainer in India</Link></li>
              <li><Link to="/generative-ai-trainer-coimbatore" style={{ color: 'inherit', textDecoration: 'none' }}>Generative AI Trainer in Coimbatore</Link></li>
              <li><Link to="/generative-ai-trainer-tamil-nadu" style={{ color: 'inherit', textDecoration: 'none' }}>Generative AI Trainer in Tamil Nadu</Link></li>
              <li><Link to="/agentic-ai-trainer-india" style={{ color: 'inherit', textDecoration: 'none' }}>Agentic AI Trainer in India</Link></li>
              <li><Link to="/prompt-engineering-trainer-india" style={{ color: 'inherit', textDecoration: 'none' }}>Prompt Engineering Trainer</Link></li>
              <li><Link to="/best-ai-keynote-speaker-india" style={{ color: 'inherit', textDecoration: 'none' }}>Best Keynote Speaker India</Link></li>
              <li><Link to="/best-keynote-speaker-coimbatore" style={{ color: 'inherit', textDecoration: 'none' }}>Best Keynote Speaker Coimbatore</Link></li>
              <li><Link to="/claude-ai-trainer-in-coimbatore" style={{ color: 'inherit', textDecoration: 'none' }}>Claude AI Trainer Coimbatore</Link></li>
              <li><Link to="/ai-trainer-kerala" style={{ color: 'inherit', textDecoration: 'none' }}>Top AI Trainer in Kerala</Link></li>
              <li><Link to="/ai-trainer-chennai" style={{ color: 'inherit', textDecoration: 'none' }}>Top AI Trainer in Chennai</Link></li>
              <li><Link to="/ai-trainer-kochi" style={{ color: 'inherit', textDecoration: 'none' }}>Top AI Trainer in Kochi</Link></li>
              <li><Link to="/ai-trainer-trivandrum" style={{ color: 'inherit', textDecoration: 'none' }}>Top AI Trainer in Trivandrum</Link></li>
              <li><Link to="/ai-trainer-palakkad" style={{ color: 'inherit', textDecoration: 'none' }}>Top AI Trainer in Palakkad</Link></li>
            </ul>
          </section>

        </div>
      </main>
      
      <Footer contact={siteData.contact} />
    </>
  );
};

export default SitemapPage;
