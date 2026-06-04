import React from 'react';
import SEO from '../components/SEO';

export default function Partners() {
  const partnerCategories = [
    {
      id: 'hardware',
      label: 'Hardware & Systems',
      brands: ['DELL', 'HP', 'Lenovo']
    },
    {
      id: 'network',
      label: 'Network & Security',
      brands: ['Cisco', 'Fortinet', 'SonicWall', 'D-Link', 'TP-Link', 'Bitdefender']
    },
    {
      id: 'software',
      label: 'Software Ecosystems',
      brands: ['Microsoft', 'Adobe', ''] // empty cell placeholder
    }
  ];

  return (
    <div className="partners-view">
      <SEO 
        title="Our Tech Partners | SBEnterprises"
        description="We partner with industry-leading brands like Lenovo, Dell, HP, Cisco, and Sophos to supply genuine, manufacturer-warranted enterprise IT solutions."
        keywords="authorized IT partners, Lenovo distributor, Dell reseller, HP partner, Sophos security, genuine hardware warranty"
      />
      {/* Intro Section */}
      <section className="section-padding partners-intro-section">
        <div className="container">
          <div className="partners-header">
            <span className="section-subtitle">Partners & Clients</span>
            <h1 className="partners-title">
              Authorized by the world's leading technology brands.
            </h1>
            <p className="partners-lead">
              Our strategic manufacturer partnerships let us deliver factory-sealed, certified hardware at competitive pricing — with the service contracts to match.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Matrix Grid */}
      <section className="partners-matrix-section">
        <div className="container matrix-container">
          {partnerCategories.map((category) => (
            <div key={category.id} className="matrix-row">
              {/* Category Label (Left Side) */}
              <div className="matrix-label-wrapper">
                <h3 className="matrix-label">{category.label}</h3>
              </div>

              {/* Brands Grid (Right Side) */}
              <div className="matrix-grid">
                {category.brands.map((brand, idx) => (
                  <div 
                    key={idx} 
                    className={`matrix-brand-card ${brand === '' ? 'placeholder-card' : ''}`}
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Clients Section (Dark Blue) */}
      <section className="section-padding dark-section clients-section">
        <div className="container">
          <h2 className="section-title text-white clients-title">Key clients</h2>

          <div className="grid grid-2 clients-grid">
            <div className="client-display-card">
              <h3 className="client-display-name">Telangana State Police Department</h3>
              <p className="client-display-desc">Surveillance & Infrastructure</p>
            </div>

            <div className="client-display-card">
              <h3 className="client-display-name">VaniMedia</h3>
              <p className="client-display-desc">IT Systems Management</p>
            </div>
          </div>

          <p className="clients-extra-note">
            Additional client accounts managed via Shivani Didi.
          </p>
        </div>
      </section>

      
    </div>
  );
}
