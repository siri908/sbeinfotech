import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <Link to="/" className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <img src="/sb_logo.png" alt="SB Enterprises Logo" className="logo-img" />
            <span className="logo-text">SBENTERPRISES</span>
          </Link>
          <p className="footer-desc">
            Providing factory-sealed, manufacturer-certified products with dedicated post-purchase service.
          </p>
        </div>

        {/* Regional Office Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Regional Office</h4>
          <div className="footer-info-item">
            <MapPin size={18} className="footer-icon shrink-0" />
            <address className="footer-address">
              304, SP Residency, Road Number 1,<br />
              (Near Uma Beauty Parlour), Medipalli,<br />
              Hyderabad, Medchal Malkajgiri,<br />
              Telangana, 500098.
            </address>
          </div>
        </div>

        {/* Get in Touch Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Get in Touch</h4>
          <div className="footer-contact-list">
            <div className="footer-info-item">
              <Phone size={18} className="footer-icon" />
              <a href="tel:+919032747551" className="footer-link font-medium">
                +91 90327 47551
              </a>
            </div>
            <div className="footer-info-item">
              <Mail size={18} className="footer-icon" />
              <a href="mailto:info@sbeinfotech.in" className="footer-link">
                info@sbeinfotech.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; {currentYear} SIRI BHAVANI ENTERPRISES. ALL RIGHTS RESERVED.
          </p>
          <span className="account-credit">
            ACCOUNTS MANAGED BY SHIVANI DIDI
          </span>
        </div>
      </div>


    </footer>
  );
}
