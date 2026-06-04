import React from 'react';
import { ShieldCheck, Tags, HeartHandshake, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function About({ onContactClick }) {
  const values = [
    {
      icon: <ShieldCheck size={36} className="value-icon" />,
      num: '01',
      title: 'Factory-sealed',
      desc: 'Brand-new, manufacturer-certified products only.'
    },
    {
      icon: <Tags size={36} className="value-icon" />,
      num: '02',
      title: 'Competitive pricing',
      desc: 'Market-aligned rates without compromising on quality.'
    },
    {
      icon: <HeartHandshake size={36} className="value-icon" />,
      num: '03',
      title: 'Long-term service',
      desc: 'Dedicated post-purchase service agreements built for trust.'
    }
  ];

  return (
    <div className="about-view">
      <SEO 
        title="About Us | Siri Bhavani Enterprises (SBEnterprises)"
        description="Learn about the mission, values, and evolution of Siri Bhavani Enterprises (SBEnterprises), your trusted technology hardware and facility solutions partner."
        keywords="about SBEnterprises, Siri Bhavani Enterprises mission, tech startup evolution, reliable IT partner, corporate values"
      />
      {/* Intro Section */}
      <section className="section-padding about-intro-section">
        <div className="container">
          <div className="about-header">
            <span className="section-subtitle">About – Siri Bhavani Enterprises</span>
            <h1 className="about-title">
              Making technology accessible and reliable for everyone.
            </h1>
            <p className="about-lead">
              Also operating as SBEnterprises — a trusted partner in IT & Facility Solutions, serving thousands of clients across Telangana, Andhra Pradesh, and surrounding regions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Evolution Detail Section */}
      <section className="section-padding about-details-section">
        <div className="container grid grid-2 details-grid">
          {/* Mission */}
          <div className="detail-block">
            <h3 className="block-title">Our Mission</h3>
            <p className="block-text">
              Founded to make technology accessible and reliable, we focus on delivering high-quality, cost-effective hardware, IT infrastructure, and facility essentials tailored to client needs.
            </p>
          </div>

          {/* Evolution */}
          <div className="detail-block">
            <h3 className="block-title">Our Evolution</h3>
            <p className="block-text">
              We progressed from a modest tech device sales startup into a comprehensive IT solutions provider through strategic manufacturer partnerships and solid client relationships built on trust.
            </p>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="section-padding values-section">
        <div className="container">
          <h2 className="section-title values-header-title">What we stand for</h2>

          <div className="grid grid-3 values-grid">
            {values.map((val) => (
              <div key={val.num} className="value-card">
                <div className="value-card-header flex justify-between items-center">
                  {val.icon}
                  <span className="value-num">{val.num}</span>
                </div>
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-text">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding cta-section">
        <div className="container cta-container">
          <h2 className="cta-title">Ready to discuss your infrastructure?</h2>
          <button onClick={onContactClick} className="btn btn-primary cta-btn">
            Get in touch <ArrowRight size={18} style={{ marginLeft: '0.65rem' }} />
          </button>
        </div>
      </section>

      
    </div>
  );
}
