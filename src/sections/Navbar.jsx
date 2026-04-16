import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/J-Impact New Logo 2024 Main.png';
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
            <img src={logo} alt="J-Impact Logo" className="navbar-logo" />
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
