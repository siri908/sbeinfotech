import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import navItems from '../data/navigation.json';

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

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 bg-white border-b border-brand-border transition-all duration-300 ${scrolled ? 'py-3 shadow-xs' : 'py-5'}`}>
      <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 select-none cursor-pointer no-underline" onClick={handleNavClick}>
          <img src="/sb_logo.png" alt="SB Enterprises Logo" className="h-8 w-auto object-contain block" />
          <span className="text-[1.05rem] font-bold tracking-[0.02em] text-brand-primary">SBENTERPRISES</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-9">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={handleNavClick}
                  className={({ isActive }) => 
                    `relative bg-none border-none text-[0.95rem] font-medium text-brand-primary cursor-pointer py-2 opacity-85 hover:opacity-100 transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-brand-accent after:origin-bottom-right after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left ${
                      isActive ? 'text-brand-accent opacity-100 font-semibold after:scale-x-100' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={onContactClick} 
            className="inline-flex items-center justify-center px-5 py-2 text-[0.85rem] font-medium rounded-xs border border-transparent cursor-pointer transition-all duration-250 bg-brand-primary text-white hover:bg-brand-primary-light hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(18,24,41,0.15)] active:translate-y-0"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <button 
          className="md:hidden bg-none border-none text-brand-primary cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-border shadow-lg p-6 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <nav className="mobile-nav">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={handleNavClick}
                  className={({ isActive }) => 
                    `bg-none border-none text-[1.1rem] font-medium text-brand-primary w-full text-left py-2 cursor-pointer no-underline ${
                      isActive ? 'text-brand-accent font-semibold' : ''
                    }`
                  }
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
                className="inline-flex items-center justify-center w-full px-6 py-3 text-[0.95rem] font-medium rounded-xs border border-transparent cursor-pointer transition-all duration-250 bg-brand-primary text-white hover:bg-brand-primary-light hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(18,24,41,0.15)] active:translate-y-0 mt-2"
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
