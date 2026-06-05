import React from 'react';
import { ShieldCheck, Tags, HeartHandshake, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import aboutData from '../data/about.json';

const IconMap = {
  ShieldCheck: ShieldCheck,
  Tags: Tags,
  HeartHandshake: HeartHandshake
};

export default function About({ onContactClick }) {
  return (
    <div className="bg-white">
      <SEO 
        title={aboutData.seo.title}
        description={aboutData.seo.description}
        keywords={aboutData.seo.keywords}
      />
      {/* Intro Section */}
      <section className="py-20 md:py-14 bg-brand-bg-muted">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="max-w-[900px]">
            <span className="text-[0.8rem] font-semibold tracking-widest uppercase text-brand-accent mb-2 block">
              {aboutData.intro.subtitle}
            </span>
            <h1 className="text-4xl sm:text-[2.5rem] font-bold leading-tight text-brand-primary mb-6">
              {aboutData.intro.title}
            </h1>
            <p className="text-[1.2rem] text-gray-500 leading-relaxed">
              {aboutData.intro.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Evolution Detail Section */}
      <section className="py-20 md:py-14 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-brand-primary">{aboutData.details.mission.title}</h3>
            <p className="text-[1rem] text-gray-500 leading-relaxed">
              {aboutData.details.mission.text}
            </p>
          </div>

          {/* Evolution */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-brand-primary">{aboutData.details.evolution.title}</h3>
            <p className="text-[1rem] text-gray-500 leading-relaxed">
              {aboutData.details.evolution.text}
            </p>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-20 md:py-14 bg-brand-bg-muted">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-primary mb-12">{aboutData.values.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.values.list.map((val) => {
              const IconComponent = IconMap[val.iconName] || ShieldCheck;
              return (
                <div key={val.num} className="bg-white border border-brand-border rounded-xs p-8 flex flex-col justify-between min-h-[260px]">
                  <div className="flex justify-between items-center mb-6">
                    <IconComponent size={36} className="text-brand-accent shrink-0" />
                    <span className="text-[0.95rem] font-bold text-gray-400 tracking-wider">{val.num}</span>
                  </div>
                  <div>
                    <h3 className="text-[1.3rem] font-bold text-brand-primary mb-3">{val.title}</h3>
                    <p className="text-[0.95rem] text-gray-500 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white text-center py-24 md:py-20">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-[600px] leading-tight">{aboutData.cta.title}</h2>
          <button onClick={onContactClick} className="inline-flex items-center justify-center px-7 py-3.5 text-[0.95rem] font-medium rounded-xs border border-transparent cursor-pointer transition-all duration-250 bg-white text-brand-primary hover:bg-brand-accent-light hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] active:translate-y-0">
            {aboutData.cta.btnText} <ArrowRight size={18} className="ml-[0.65rem]" />
          </button>
        </div>
      </section>
    </div>
  );
}
