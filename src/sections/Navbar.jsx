import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/J-Impact New Logo 2024 Main.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", id: "home", href: "#home" },
    { label: "About", id: "about", href: "#about" },
    { label: "Workshops", id: "workshops", href: "#workshops" },
    { label: "Blog & Articles", id: "blog", href: "#blog" },
    { label: "Gallery", id: "gallery", href: "#gallery" },
    { label: "Events", id: "events", href: "#events" },
    { label: "Contact", id: "contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach(link => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="#home" className="navbar-brand">
            <img src={logo} alt="J-Impact Logo" className="navbar-logo" />
            <div className="brand-text">
              <span className="brand-name">J-Impact</span>
              <span className="brand-subtitle">Creative Learning Services</span>
            </div>
          </a>
          
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={activeSection === link.id ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
