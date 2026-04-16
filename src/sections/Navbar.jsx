import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Workshops", href: "#workshops" },
    { label: "Blog & Articles", href: "#blog" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="#home" className="navbar-brand">
            <span>J-Impact</span>
            <small>Creative Learning</small>
          </a>
          
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
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
