import React from 'react';
import SEO from '../components/SEO';

export default function Products() {
  const coreProducts = [
    {
      index: '01 / 05',
      title: 'Desktops & Laptops',
      desc: 'Entry-level to advanced laptops, desktops, tablets, netbooks, and smart gadgets — for personal use, corporate fleets, and gifting.',
      img: '/assets/product_laptop.png',
      alignLeft: true
    },
    {
      index: '02 / 05',
      title: 'Server & Storage',
      desc: 'Enterprise-grade servers, complex storage frameworks, networking equipment, and full-scale IT infrastructure with flexible service contracts.',
      img: '/assets/product_server.png',
      alignLeft: false
    },
    {
      index: '03 / 05',
      title: 'Printers & Plotters',
      desc: 'Standard office printers, wide-format plotters, and multifunction printing units for individuals and corporate environments.',
      img: '/assets/product_plotter.png',
      alignLeft: true
    },
    {
      index: '04 / 05',
      title: 'CCTV Surveillance',
      desc: 'From basic residential security to intricate, enterprise-grade multi-site monitoring — full installation and servicing.',
      img: '/assets/product_cctv.png',
      alignLeft: false
    },
    {
      index: '05 / 05',
      title: 'Firewall & Cybersecurity',
      desc: 'Brand-certified hardware firewalls protecting organizations of all sizes, ensuring safe and high-uptime connectivity.',
      img: '/assets/product_firewall.png',
      alignLeft: true
    }
  ];

  const otherProducts = [
    'Software Licenses & Antivirus',
    'Computer Peripherals & Network Access Points',
    'Biometric Devices',
    'Air Conditioners',
    'Sanitary Chemicals'
  ];

  return (
    <div className="products-view">
      <SEO 
        title="Our Products & Services | SBEnterprises"
        description="Explore our extensive range of manufacturer-certified products including servers, desktops, laptops, enterprise printers, surveillance systems, and cybersecurity firewalls."
        keywords="enterprise hardware, server storage, office laptops, CCTV cameras, firewall security, plotters, Cisco, Dell, HP"
      />
      {/* Intro Section */}
      <section className="section-padding products-intro-section">
        <div className="container">
          <div className="products-header">
            <span className="section-subtitle">Catalog – Core Offerings</span>
            <h1 className="products-title">
              Hardware, infrastructure, and facility essentials.
            </h1>
            <p className="products-lead">
              Every product is brand-new, factory-sealed and backed by a dedicated post-purchase service agreement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Products Showcase (Alternating Layout) */}
      <section className="core-products-section">
        <div className="container flex flex-col gap-8">
          {coreProducts.map((product) => (
            <div 
              key={product.index} 
              className={`product-block ${product.alignLeft ? 'block-img-left' : 'block-img-right'}`}
            >
              {/* Product Image Wrapper */}
              <div className="product-block-visual">
                <img src={product.img} alt={product.title} className="product-block-img" />
              </div>

              {/* Product Info Panel */}
              <div className="product-block-info">
                <span className="product-block-index">{product.index}</span>
                <h2 className="product-block-title">{product.title}</h2>
                <p className="product-block-desc">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Products Section */}
      <section className="section-padding other-products-section">
        <div className="container">
          <div className="other-products-header">
            <h2 className="section-title">Other products</h2>
            <p className="section-description">
              Secondary tech peripherals and facility management items we supply alongside our core offerings.
            </p>
          </div>

          <div className="other-products-grid">
            {otherProducts.map((item, idx) => (
              <div key={idx} className="other-product-card">
                <span className="other-product-bullet"></span>
                <h4 className="other-product-title">{item}</h4>
              </div>
            ))}
            {/* Blank Placeholder card to align 3x2 grid as shown in screenshots */}
            <div className="other-product-card blank-card"></div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
