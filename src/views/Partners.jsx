import React from 'react';
import SEO from '../components/SEO';
import partnersData from '../data/partners.json';

export default function Partners() {
  return (
    <div className="bg-white">
      <SEO 
        title={partnersData.seo.title}
        description={partnersData.seo.description}
        keywords={partnersData.seo.keywords}
      />
      {/* Intro Section */}
      <section className="py-20 md:py-14 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="max-w-[900px]">
            <span className="text-[0.8rem] font-semibold tracking-widest uppercase text-brand-accent mb-2 block">
              {partnersData.intro.subtitle}
            </span>
            <h1 className="text-4xl sm:text-[3.5rem] font-bold leading-tight text-brand-primary mb-6">
              {partnersData.intro.title}
            </h1>
            <p className="text-[1.25rem] text-gray-500 leading-relaxed">
              {partnersData.intro.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Partners Matrix Grid */}
      <section className="pb-24 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-10">
          {partnersData.partnerCategories.map((category) => (
            <div key={category.id} className="grid grid-cols-1 md:grid-cols-[0.8fr_2.2fr] gap-5 md:gap-12 border-b border-brand-border pb-8 md:pb-10 items-start last:border-b-0 last:pb-0">
              {/* Category Label (Left Side) */}
              <div className="pt-0 md:pt-6">
                <h3 className="text-[0.75rem] font-semibold tracking-widest uppercase text-gray-500">{category.label}</h3>
              </div>

              {/* Brands Grid (Right Side) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.brands.map((brand, idx) => (
                  <div 
                    key={idx} 
                    className={`border rounded-xs py-10 px-6 text-center text-[1.25rem] font-bold tracking-wide flex items-center justify-center transition-all duration-250 ${
                      brand === '' 
                        ? 'bg-brand-bg-muted border-none pointer-events-none hidden sm:flex' 
                        : 'bg-white border-brand-border text-brand-primary hover:-translate-y-0.5 hover:border-brand-primary-light hover:shadow-md'
                    }`}
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
      <section className="py-20 md:py-14 bg-brand-dark-bg text-white">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-14 text-white">{partnersData.clients.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {partnersData.clients.list.map((client, idx) => (
              <div key={idx} className="bg-brand-dark-bg-card border border-brand-dark-border rounded-xs p-9 transition-all duration-250 hover:border-brand-accent hover:-translate-y-0.5">
                <h3 className="text-[1.35rem] font-semibold text-white mb-2">{client.name}</h3>
                <p className="text-[0.95rem] text-gray-400">{client.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[0.8rem] italic text-gray-400 opacity-70 border-t border-brand-dark-border pt-5">
            {partnersData.clients.note}
          </p>
        </div>
      </section>
    </div>
  );
}
