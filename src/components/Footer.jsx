import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import footerData from '../data/footer.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-brand-border pt-18 text-brand-primary">
      <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1.25fr_1fr] gap-10 md:gap-12 lg:gap-16 pb-12 lg:pb-18">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-5 select-none cursor-pointer no-underline" onClick={handleLogoClick}>
            <img src="/sb_logo.png" alt="SB Enterprises Logo" className="h-8 w-auto object-contain block" />
            <span className="text-[1.05rem] font-bold tracking-[0.02em] text-brand-primary">{footerData.brandName}</span>
          </Link>
          <p className="text-gray-500 text-[0.95rem] max-w-[340px] leading-relaxed">
            {footerData.description}
          </p>
        </div>

        {/* Regional Office Column */}
        <div>
          <h4 className="text-[0.75rem] font-semibold tracking-wider uppercase text-gray-500 mb-6">{footerData.office.heading}</h4>
          <div className="flex items-start gap-3 text-[0.95rem] text-brand-primary leading-normal">
            <MapPin size={18} className="text-gray-500 mt-1 shrink-0" />
            <address className="not-italic text-brand-primary opacity-90">
              {footerData.office.addressLines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < footerData.office.addressLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </address>
          </div>
        </div>

        {/* Get in Touch Column */}
        <div>
          <h4 className="text-[0.75rem] font-semibold tracking-wider uppercase text-gray-500 mb-6">{footerData.contact.heading}</h4>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3 text-[0.95rem] text-brand-primary leading-normal">
              <Phone size={18} className="text-gray-500 mt-1 shrink-0" />
              <a href={`tel:${footerData.contact.phone.href}`} className="text-brand-primary opacity-90 hover:text-brand-accent hover:opacity-100 transition-all duration-250 font-medium no-underline">
                {footerData.contact.phone.display}
              </a>
            </div>
            <div className="flex items-start gap-3 text-[0.95rem] text-brand-primary leading-normal">
              <Mail size={18} className="text-gray-500 mt-1 shrink-0" />
              <a href={`mailto:${footerData.contact.email}`} className="text-brand-primary opacity-90 hover:text-brand-accent hover:opacity-100 transition-all duration-250 no-underline">
                {footerData.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="border-t border-brand-border py-7 text-[0.7rem] text-gray-500 tracking-wider uppercase font-medium">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-2 sm:gap-4">
          <p className="opacity-85">
            &copy; {currentYear} {footerData.copyright}
          </p>
          <span className="opacity-80 font-bold">
            {footerData.credit}
          </span>
        </div>
      </div>
    </footer>
  );
}
