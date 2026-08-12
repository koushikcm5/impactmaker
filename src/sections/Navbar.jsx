import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/J-Impact New Logo 2024 Main.webp';
import './Navbar.css';

const workshopDropdownItems = [
  { label: "The Game-Changer Corporate Workshops", href: "/workshops/game-changer" },
  { label: "Ed-Tech Workshops", href: "/workshops/deep-dive" },
  { label: "AI Training Workshops", href: "/workshops/technical" },
  { label: "Design Thinking & Agile Workshops", href: "/workshops/transformational" },
  { label: "Keynote Speaker & Leadership Speaker", href: "/workshops/speaker" },
];

const navLinks = [
  { label: "Home", id: "home", href: "/#home", isScroll: true },
  { label: "About", id: "about-impact-maker", href: "/#about-impact-maker", isScroll: true },
  { label: "Workshops", id: "gamechanger-workshops", href: "/#gamechanger-workshops", isScroll: true, hasDropdown: true },
  { label: "Blog & Articles", id: "blog", href: "/blog", isScroll: false },
  { label: "Gallery", id: "gallery", href: "/gallery", isScroll: false },
  { label: "Events", id: "events", href: "/events", isScroll: false },
  { label: "Contact", id: "enquiry", href: "/#enquiry", isScroll: true },
];

const SCROLL_SECTION_IDS = navLinks.filter(l => l.isScroll).map(l => l.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [workshopOpen, setWorkshopOpen] = useState(false);
  const [mobileWorkshopOpen, setMobileWorkshopOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  const getIsActive = (link) => {
    if (link.hasDropdown) {
      return pathname.startsWith('/workshops') || (pathname === '/' && activeSection === link.id);
    }
    if (!link.isScroll) {
      return pathname === link.href || pathname.startsWith(link.href + '/');
    }
    if (pathname !== '/') return false;
    return activeSection === link.id;
  };

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setWorkshopOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset state on route change
  useEffect(() => {
    setIsOpen(false);
    setWorkshopOpen(false);
    setMobileWorkshopOpen(false);
  }, [pathname]);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setWorkshopOpen(false);
        setMobileWorkshopOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sticky navbar & scroll observer
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    if (pathname !== '/') {
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    setTimeout(() => {
      SCROLL_SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileWorkshopOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled || pathname !== '/' ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
              <img src={logo} alt="J-Impact Logo" className="navbar-logo" width="800" height="600" />
              <div className="brand-text">
                <span className="brand-name">J-Impact</span>
                <span className="brand-subtitle">Creative Learning Services</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="navbar-menu desktop-only">
              {navLinks.map((link, index) => {
                if (link.hasDropdown) {
                  return (
                    <div key={index} className="nav-dropdown-wrapper" ref={dropdownRef}>
                      <button
                        className={`nav-dropdown-trigger ${getIsActive(link) ? 'active' : ''}`}
                        onClick={() => setWorkshopOpen(v => !v)}
                        aria-expanded={workshopOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={14} className={`nav-chevron ${workshopOpen ? 'open' : ''}`} />
                      </button>
                      <div className={`nav-dropdown-menu ${workshopOpen ? 'open' : ''}`}>
                        {workshopDropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={`nav-dropdown-item${pathname === item.href ? ' active' : ''}`}
                            onClick={() => setWorkshopOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (!link.isScroll) {
                  return (
                    <Link
                      key={index}
                      to={link.href}
                      className={getIsActive(link) ? 'active' : ''}
                    >
                      {link.label}
                    </Link>
                  );
                }

                return pathname === '/' ? (
                  <a
                    key={index}
                    href={`#${link.id}`}
                    className={getIsActive(link) ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={index} to={link.href}>
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="navbar-toggle"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Right-side Backdrop Overlay */}
      <div
        className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Right-side Slide-out Drawer */}
      <aside className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <Link to="/" className="navbar-brand mobile-brand" onClick={closeMobileMenu}>
            <img src={logo} alt="J-Impact Logo" className="navbar-logo" width="800" height="600" />
            <div className="brand-text">
              <span className="brand-name">J-Impact</span>
              <span className="brand-subtitle">Creative Learning Services</span>
            </div>
          </Link>
          <button
            className="mobile-drawer-close"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <div className="mobile-nav-list">
            {navLinks.map((link, index) => {
              const isActive = getIsActive(link);
              if (link.hasDropdown) {
                return (
                  <div key={index} className="mobile-nav-group">
                    <button
                      className={`mobile-nav-link mobile-dropdown-trigger ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileWorkshopOpen(v => !v)}
                      aria-expanded={mobileWorkshopOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={16} className={`mobile-chevron ${mobileWorkshopOpen ? 'open' : ''}`} />
                    </button>
                    <div className={`mobile-dropdown-content ${mobileWorkshopOpen ? 'open' : ''}`}>
                      {workshopDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`mobile-sub-link${pathname === item.href ? ' active' : ''}`}
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (!link.isScroll) {
                return (
                  <div key={index} className="mobile-nav-group">
                    <Link
                      to={link.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              }

              return (
                <div key={index} className="mobile-nav-group">
                  {pathname === '/' ? (
                    <a
                      href={`#${link.id}`}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

