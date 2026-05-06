import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/J-Impact New Logo 2024 Main.png';
import './Navbar.css';

const workshopDropdownItems = [
  { label: "The Game-Changer Workshops", href: "/workshops/game-changer"    },
  { label: "Deep-Dive Workshops",        href: "/workshops/deep-dive"       },
  { label: "Technical Workshops",        href: "/workshops/technical"       },
  { label: "Transformational Workshops", href: "/workshops/transformational" },
  { label: "Keynote Speaker",            href: "/workshops/speaker"         },
];

const navLinks = [
  { label: "Home",           id: "home",                  href: "/#home",                  isScroll: true  },
  { label: "About",          id: "about-impact-maker",    href: "/#about-impact-maker",    isScroll: true  },
  { label: "Workshops",      id: "gamechanger-workshops", href: "/#gamechanger-workshops", isScroll: true, hasDropdown: true },
  { label: "Blog & Articles",id: "blog",                  href: "/blog",                   isScroll: false },
  { label: "Gallery",        id: "gallery",               href: "/gallery",                isScroll: false },
  { label: "Events",         id: "events",                href: "/events",                 isScroll: false },
  { label: "Contact",        id: "enquiry",               href: "/#enquiry",               isScroll: true  },
];

const SCROLL_SECTION_IDS = navLinks.filter(l => l.isScroll).map(l => l.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [workshopOpen, setWorkshopOpen] = useState(false);
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
              /* ── Workshops dropdown ── */
              if (link.hasDropdown) {
                return (
                  <div key={index} className="nav-dropdown-wrapper" ref={dropdownRef}>
                    <button
                      className={`nav-dropdown-trigger ${getIsActive(link) ? 'active' : ''}`}
                      onClick={() => setWorkshopOpen(v => !v)}
                      aria-expanded={workshopOpen}
                      aria-haspopup="true"
                    >
                      <span>Workshops</span>
                      <ChevronDown size={14} className={`nav-chevron ${workshopOpen ? 'open' : ''}`} />
                    </button>
                    <div className={`nav-dropdown-menu ${workshopOpen ? 'open' : ''}`}>
                      {workshopDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`nav-dropdown-item${pathname === item.href ? ' active' : ''}`}
                          onClick={() => { setIsOpen(false); setWorkshopOpen(false); }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              /* ── Non-scroll items (Gallery, Blog, Events) — always navigate ── */
              if (!link.isScroll) {
                return (
                  <Link
                    key={index}
                    to={link.href}
                    className={getIsActive(link) ? 'active' : ''}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              }

              /* ── Scroll items — anchor on home, Link from other pages ── */
              return pathname === '/' ? (
                <a
                  key={index}
                  href={`#${link.id}`}
                  className={getIsActive(link) ? 'active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={index} to={link.href} onClick={() => setIsOpen(false)}>
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
