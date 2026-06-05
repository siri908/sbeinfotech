import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import homeData from '../data/home.json';

export default function Home({ onContactClick }) {
  const navigate = useNavigate();

  const handleSpecClick = () => {
    navigate('/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      <SEO 
        title={homeData.seo.title}
        description={homeData.seo.description}
        keywords={homeData.seo.keywords}
      />
      
      {/* Hero Section */}
      <section className="py-20 md:py-14 overflow-hidden bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center px-[0.85rem] py-[0.35rem] text-[0.75rem] font-semibold tracking-wider uppercase rounded-full mb-5 bg-brand-accent-light text-brand-accent">
              {homeData.hero.badge}
            </span>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] font-extrabold leading-[1.1] text-brand-primary tracking-tight mb-6">
              {homeData.hero.title}
            </h1>
            <p className="text-[1.15rem] text-gray-500 leading-relaxed mb-9 max-w-[540px]">
              {homeData.hero.desc}
            </p>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <button onClick={() => handleSpecClick()} className="inline-flex items-center justify-center px-6 py-3 text-[0.95rem] font-medium rounded-xs border border-transparent cursor-pointer transition-all duration-250 bg-brand-primary text-white hover:bg-brand-primary-light hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(18,24,41,0.15)] active:translate-y-0">
                {homeData.hero.ctaExplore} <ArrowRight size={16} className="ml-2" />
              </button>
              <button onClick={onContactClick} className="inline-flex items-center justify-center px-6 py-3 text-[0.95rem] font-medium rounded-xs cursor-pointer transition-all duration-250 bg-transparent border border-brand-border text-brand-primary hover:bg-brand-bg-muted hover:border-brand-primary hover:-translate-y-[2px] active:translate-y-0">
                {homeData.hero.ctaContact}
              </button>
            </div>
          </div>
          
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute w-[90%] h-[90%] bg-gradient-to-br from-brand-accent-light to-slate-200 rounded-md z-1 -rotate-3"></div>
            <img 
              src={homeData.hero.imgSrc} 
              alt={homeData.hero.imgAlt} 
              className="w-full max-w-[480px] h-auto aspect-[4/3] object-cover rounded-md shadow-lg z-10 border border-brand-border"
            />
          </div>
        </div>
      </section>

      {/* Strategic Partners Ribbon */}
      <section className="border-t border-b border-brand-border py-8 bg-brand-bg-muted text-center">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <span className="block text-[0.65rem] font-bold tracking-widest uppercase text-gray-500 mb-5">
            {homeData.partners.label}
          </span>
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex justify-center gap-12 flex-wrap px-4">
              {homeData.partners.brands.map((brand, idx) => (
                <span key={idx} className="text-[0.95rem] font-bold text-brand-primary tracking-wide opacity-60">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-20 md:py-14 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4">
            <div>
              <h2 className="text-4xl font-bold leading-snug text-brand-primary">{homeData.offerings.title}</h2>
              <p className="text-[1.1rem] text-gray-500 mt-4 max-w-[600px]">
                {homeData.offerings.description}
              </p>
            </div>
            <span className="text-[0.75rem] font-semibold tracking-widest text-gray-500 mb-2">
              {homeData.offerings.categoryLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.offerings.list.map((item) => (
              <div key={item.id} className="group bg-white border border-brand-border rounded-xs overflow-hidden transition-all duration-250 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary-light">
                <div className="aspect-[16/10] bg-brand-bg-muted overflow-hidden relative border-b border-brand-border">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[1.25rem] font-semibold text-brand-primary mb-2">{item.title}</h3>
                  <p className="text-[0.95rem] text-gray-500 mb-6 flex-grow">{item.desc}</p>
                  <button onClick={handleSpecClick} className="text-[0.8rem] font-semibold tracking-wider text-brand-accent uppercase inline-flex items-center gap-2 mt-auto hover:text-brand-primary no-underline cursor-pointer bg-transparent border-none p-0">
                    Explore Specs <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}

            {/* Facility Essentials Card (Text List) */}
            <div className="bg-brand-bg-muted border border-dashed border-brand-border rounded-xs overflow-hidden transition-all duration-250 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary-light">
              <div className="p-9 flex flex-col justify-center h-full">
                <h3 className="text-[1.4rem] font-bold text-brand-primary mb-6">{homeData.offerings.essentials.title}</h3>
                <ul className="flex flex-col gap-4 text-[0.95rem] text-brand-primary">
                  {homeData.offerings.essentials.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* South India Stats Section (Dark Blue) */}
      <section className="py-20 md:py-14 bg-brand-dark-bg text-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-snug text-white">
              {homeData.stats.title}
            </h2>
            <p className="text-[1.1rem] text-brand-dark-text-muted mt-4 max-w-[600px]">
              {homeData.stats.description}
            </p>
            
            <div className="flex gap-10 mt-8">
              {homeData.stats.counters.map((counter, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-5xl font-extrabold text-brand-accent">{counter.num}</span>
                  <span className="text-[0.8rem] uppercase tracking-wider text-brand-dark-text-muted">{counter.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-dark-bg-card border border-brand-dark-border rounded-xs p-9">
            <h3 className="text-[0.75rem] font-bold tracking-widest uppercase text-brand-dark-text-muted mb-8">{homeData.stats.clientsCard.title}</h3>
            <div className="flex flex-col gap-6">
              {homeData.stats.clientsCard.list.map((client, idx) => (
                <div key={idx} className="border-b border-brand-dark-border pb-6 last:border-0 last:pb-0">
                  <h4 className="text-[1.2rem] font-bold text-white mb-1">{client.name}</h4>
                  <p className="text-[0.9rem] text-brand-dark-text-muted">{client.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[0.7rem] uppercase tracking-widest text-brand-dark-text-muted/65 mt-8">
              {homeData.stats.clientsCard.note}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-14 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {homeData.testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-brand-bg-muted border border-brand-border rounded-xs p-9 flex flex-col justify-between">
                <p className="text-[1.1rem] italic leading-relaxed text-brand-primary opacity-90 mb-8">
                  {testimonial.quote}
                </p>
                <div className="flex flex-col gap-0.5">
                  <h5 className="text-[0.95rem] font-bold text-brand-primary">{testimonial.author}</h5>
                  <span className="text-[0.8rem] text-gray-500 font-medium">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
