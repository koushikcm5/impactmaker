import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { siteData } from '../data/siteData';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | J-Impact</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Navbar />
      
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        marginTop: '80px' // For fixed navbar
      }}>
        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', margin: '0', color: 'var(--primary-blue, #1659a7)', lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', margin: '1rem 0 2rem' }}>Oops! Page Not Found</h2>
        <p style={{ marginBottom: '2rem', maxWidth: '600px', opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.6 }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '14px 28px',
            backgroundColor: 'var(--primary-blue, #1659a7)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(22, 89, 167, 0.2)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Return to Home
        </Link>
      </div>
      
      <Footer contact={siteData.contact} />
    </>
  );
};

export default NotFoundPage;
