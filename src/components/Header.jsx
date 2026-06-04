import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

export default function Header({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/partners', label: 'Partners' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={handleNavClick} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <img src="/sb_logo.png" alt="SB Enterprises Logo" className="logo-img" />
          <span className="logo-text">SBENTERPRISES</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={handleNavClick}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header-cta">
          <button onClick={onContactClick} className="btn btn-primary btn-sm">
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    {/* Mobile Drawer */}
    <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
      <nav className="mobile-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                onContactClick();
              }}
              className="btn btn-primary w-full mobile-cta-btn"
            >
              Contact Us <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            </button>
          </li>
        </ul>
      </nav>
    </div>

    
    </header>
  );
}
