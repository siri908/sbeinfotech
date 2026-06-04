import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home({ onContactClick }) {
  const navigate = useNavigate();

  const brands = [
    'DELL', 'HP', 'Lenovo', 'Cisco', 'Fortinet', 
    'SonicWall', 'D-Link', 'TP-Link', 'Bitdefender', 'Microsoft', 'Adobe'
  ];

  const offerings = [
    {
      id: 'laptops',
      title: 'Desktops & Laptops',
      desc: 'Consumer electronics and corporate fleets with dedicated service agreements.',
      img: '/assets/product_laptop.png'
    },
    {
      id: 'server',
      title: 'Server & Storage',
      desc: 'High-performance frameworks for complex data management.',
      img: '/assets/product_server.png'
    },
    {
      id: 'plotters',
      title: 'Printers & Plotters',
      desc: 'Wide-format professional units built for corporate production spaces.',
      img: '/assets/product_plotter.png'
    },
    {
      id: 'cctv',
      title: 'CCTV Surveillance',
      desc: 'Multi-site monitoring solutions with enterprise-grade installation.',
      img: '/assets/product_cctv.png'
    },
    {
      id: 'firewall',
      title: 'Firewall & Cybersecurity',
      desc: 'Brand-certified hardware protecting against advanced cyber threats.',
      img: '/assets/product_firewall.png'
    }
  ];

  const handleSpecClick = () => {
    navigate('/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-view">
      <SEO 
        title="SBEnterprises | IT & Facility Solutions Provider"
        description="SBEnterprises (Siri Bhavani Enterprises) is your trusted IT & Facility Solutions partner, serving Telangana, Andhra Pradesh, and surrounding South India regions with manufacturer-certified hardware and cybersecurity."
        keywords="IT solutions, facility management, cybersecurity, hardware providers, networking, CCTV surveillance, firewall, enterprise IT, Hyderabad, South India, Siri Bhavani Enterprises"
      />
      {/* Hero Section */}
      <section className="section-padding hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge badge-accent">Serving Telangana & Andhra Pradesh</span>
            <h1 className="hero-title">
              Your Trusted Partner in IT & Facility Solutions.
            </h1>
            <p className="hero-desc">
              Comprehensive infrastructure management — from enterprise-grade servers to full-scale facility security systems, delivered with manufacturer-certified reliability.
            </p>
            <div className="hero-buttons">
              <button onClick={() => handleSpecClick()} className="btn btn-primary">
                Explore Solutions <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
              </button>
              <button onClick={onContactClick} className="btn btn-outline">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-img-backdrop"></div>
            <img 
              src="/assets/hero_server_rack.png" 
              alt="High Tech Server Rack Cabinet" 
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Strategic Partners Ribbon */}
      <section className="partners-ribbon">
        <div className="container">
          <span className="ribbon-label">Strategic Manufacturer Partnerships</span>
          <div className="brands-wrapper">
            <div className="brands-list">
              {brands.map((brand, idx) => (
                <span key={idx} className="brand-item">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="section-padding offerings-section">
        <div className="container">
          <div className="section-header offerings-header">
            <div>
              <h2 className="section-title">Core Offerings</h2>
              <p className="section-description">
                Manufacturer-certified hardware for high-uptime environments.
              </p>
            </div>
            <span className="category-count">(05) CATEGORIES</span>
          </div>

          <div className="offerings-grid">
            {offerings.map((item) => (
              <div key={item.id} className="card offering-card">
                <div className="card-img-wrapper">
                  <img src={item.img} alt={item.title} className="card-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                  <button onClick={handleSpecClick} className="card-link btn-text-link">
                    Explore Specs <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}

            {/* Facility Essentials Card (Text List) */}
            <div className="card list-card">
              <div className="card-body list-card-body">
                <h3 className="card-title list-card-title">Facility Essentials</h3>
                <ul className="essentials-list">
                  <li>
                    <span className="bullet"></span> Software Licenses & Antivirus
                  </li>
                  <li>
                    <span className="bullet"></span> Peripherals & Network Access Points
                  </li>
                  <li>
                    <span className="bullet"></span> Biometric Devices
                  </li>
                  <li>
                    <span className="bullet"></span> Air Conditioners
                  </li>
                  <li>
                    <span className="bullet"></span> Sanitary Chemicals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* South India Stats Section (Dark Blue) */}
      <section className="section-padding dark-section stats-section">
        <div className="container stats-container">
          <div className="stats-info">
            <h2 className="section-title text-white">
              Making technology accessible and reliable across South India.
            </h2>
            <p className="section-description text-muted">
              Founded as a modest tech sales startup, SBEnterprises has evolved into a comprehensive IT solutions provider through strategic manufacturer partnerships and deep client trust.
            </p>
            
            <div className="stats-counters flex">
              <div className="counter-item">
                <span className="counter-num">1000+</span>
                <span className="counter-label">Clients Served</span>
              </div>
              <div className="counter-item">
                <span className="counter-num">11+</span>
                <span className="counter-label">Global Partners</span>
              </div>
            </div>
          </div>

          <div className="stats-clients-card">
            <h3 className="clients-card-title">Major Clients</h3>
            <div className="client-rows">
              <div className="client-row">
                <h4 className="client-name">Telangana State Police Department</h4>
                <p className="client-desc">Surveillance & Infrastructure</p>
              </div>
              <div className="client-row">
                <h4 className="client-name">VaniMedia</h4>
                <p className="client-desc">IT Systems Management</p>
              </div>
            </div>
            <p className="clients-footer-note">
              Additional accounts managed via Shivani Didi
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="grid grid-2 testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "SBEnterprises stands out for their professionalism and dedication. We've seen tangible improvements in our processes since partnering with them."
              </p>
              <div className="testimonial-author">
                <h5 className="author-name">Arjun T.</h5>
                <span className="author-role">Business Consultant</span>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                "The team at SBEnterprises is exceptional. They understand our challenges and provide innovative solutions that truly make a difference."
              </p>
              <div className="testimonial-author">
                <h5 className="author-name">Priya D.</h5>
                <span className="author-role">Project Lead</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
