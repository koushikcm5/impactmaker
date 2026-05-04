import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/J-Impact New Logo 2024 Main.png';
import './Navbar.css';

const workshopDropdownItems = [
  { label: "The Game-Changer Workshops", anchor: "game-changer" },
  { label: "Deep-Dive Workshops", anchor: "deep-dive" },
  { label: "Technical Workshops", anchor: "technical-workshops" },
  { label: "Transformational Workshops", anchor: "transformational-workshops" },
  { label: "Speaker", anchor: "speaker-section" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [workshopOpen, setWorkshopOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  const navLinks = [
    { label: "Home", id: "home", href: "/#home" },
    { label: "About", id: "about", href: "/#about" },
    { label: "Workshops", id: "workshops", href: "/#workshops", hasDropdown: true },
    { label: "Blog & Articles", id: "blog", href: "/#blog" },
    { label: "Gallery", id: "gallery", href: "/#gallery" },
    { label: "Events", id: "events", href: "/#events" },
    { label: "Contact", id: "contact", href: "/#contact" }
  ];

  const handleDropdownItemClick = (anchor) => {
    setIsOpen(false);
    setWorkshopOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${anchor}`;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setWorkshopOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    setTimeout(() => {
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) observer.observe(section);
      });
    }, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <nav className={`navbar ${scrolled || pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="J-Impact Logo" className="navbar-logo" />
            <div className="brand-text">
              <span className="brand-name">J-Impact</span>
              <span className="brand-subtitle">Creative Learning Services</span>
            </div>
          </Link>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={index}
                    className="nav-dropdown-wrapper"
                    ref={dropdownRef}
                  >
                    <button
                      className={`nav-dropdown-trigger ${activeSection === link.id ? 'active' : ''}`}
                      onClick={() => setWorkshopOpen(v => !v)}
                      aria-expanded={workshopOpen}
                      aria-haspopup="true"
                    >
                      <span>Workshops</span>
                      <ChevronDown size={14} className={`nav-chevron ${workshopOpen ? 'open' : ''}`} />
                    </button>
                    <div className={`nav-dropdown-menu ${workshopOpen ? 'open' : ''}`}>
                      {workshopDropdownItems.map((item) => (
                        <button
                          key={item.anchor}
                          className="nav-dropdown-item"
                          onClick={() => handleDropdownItemClick(item.anchor)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return pathname === '/' ? (
                <a
                  key={index}
                  href={link.href.replace('/', '')}
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
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
