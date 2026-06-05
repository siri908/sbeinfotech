import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Check, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const services = [
    'General Inquiry',
    'Desktops & Laptops',
    'Server & Storage',
    'Printers & Plotters',
    'CCTV Surveillance',
    'Firewall & Cybersecurity',
    'Facility Essentials'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-[#121829]/60 backdrop-blur-xs z-[2000] flex items-center justify-center p-6 animate-fade-in" onClick={onClose}>
      <div className="bg-white w-full max-w-[900px] rounded-md overflow-hidden shadow-[0_20px_40px_-15px_rgba(18,24,41,0.08)] border border-brand-border relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="absolute top-5 right-5 bg-brand-bg-muted border border-brand-border text-gray-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-all duration-250 z-10 hover:bg-brand-primary hover:text-white hover:border-brand-primary" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.3fr]">
          {/* Left Panel: Info */}
          <div className="hidden md:flex flex-col justify-center bg-brand-primary text-white p-14">
            <h3 className="text-3xl font-bold mb-4 leading-tight">Get in Touch</h3>
            <p className="text-[0.95rem] opacity-80 mb-10 leading-relaxed">
              Have a project or hardware requirement in mind? Reach out to our team, and we'll get back to you shortly.
            </p>

            <div className="flex flex-col gap-7">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-accent mt-[0.2rem] shrink-0" />
                <div>
                  <h4 className="text-[0.75rem] uppercase tracking-wider opacity-65 mb-1">Office Address</h4>
                  <p className="text-[0.95rem] leading-normal opacity-95 block text-white">
                    304, SP Residency, Road Number 1,<br />
                    (Near Uma Beauty Parlour), Medipalli,<br />
                    Hyderabad, Medchal Malkajgiri,<br />
                    Telangana, 500098.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} className="text-brand-accent mt-[0.2rem] shrink-0" />
                <div>
                  <h4 className="text-[0.75rem] uppercase tracking-wider opacity-65 mb-1">Phone Support</h4>
                  <a href="tel:+919393453453" className="text-[0.95rem] leading-normal opacity-95 block no-underline text-white hover:text-brand-accent hover:opacity-100 transition-colors duration-200">
                    +91 93934 53453
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="text-brand-accent mt-[0.2rem] shrink-0" />
                <div>
                  <h4 className="text-[0.75rem] uppercase tracking-wider opacity-65 mb-1">Email Address</h4>
                  <a href="mailto:solutions@sbenterprises.in" className="text-[0.95rem] leading-normal opacity-95 block no-underline text-white hover:text-brand-accent hover:opacity-100 transition-colors duration-200">
                    solutions@sbenterprises.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="p-10 md:p-14 bg-white flex flex-col justify-center min-h-[480px]">
            {submitted ? (
              <div className="flex flex-col items-center text-center animate-fade-in">
                <div className="bg-[#d1fae5] text-[#059669] w-18 h-18 rounded-full flex items-center justify-center mb-6 animate-scale-up">
                  <Check size={36} />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">Message Sent!</h3>
                <p className="text-[0.95rem] text-gray-500 max-w-[320px] leading-relaxed">
                  Thank you for reaching out. A representative from SBEnterprises will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-brand-primary mb-6">Send a Message</h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[0.85rem] font-medium text-brand-primary">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="font-sans text-[0.95rem] px-3.5 py-3 rounded-xs border border-brand-border outline-hidden bg-brand-bg-muted text-brand-primary transition-all duration-250 w-full focus:border-brand-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[0.85rem] font-medium text-brand-primary">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-sans text-[0.95rem] px-3.5 py-3 rounded-xs border border-brand-border outline-hidden bg-brand-bg-muted text-brand-primary transition-all duration-250 w-full focus:border-brand-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[0.85rem] font-medium text-brand-primary">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="font-sans text-[0.95rem] px-3.5 py-3 rounded-xs border border-brand-border outline-hidden bg-brand-bg-muted text-brand-primary transition-all duration-250 w-full focus:border-brand-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Service/Category */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-[0.85rem] font-medium text-brand-primary">Requirement Category</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="font-sans text-[0.95rem] px-3.5 py-3 rounded-xs border border-brand-border outline-hidden bg-brand-bg-muted text-brand-primary transition-all duration-250 w-full focus:border-brand-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] cursor-pointer"
                  >
                    {services.map((svc) => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[0.85rem] font-medium text-brand-primary">How can we help?</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="font-sans text-[0.95rem] px-3.5 py-3 rounded-xs border border-brand-border outline-hidden bg-brand-bg-muted text-brand-primary transition-all duration-250 w-full focus:border-brand-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] resize-none"
                    placeholder="Describe your hardware or solution needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 text-[0.95rem] font-medium rounded-xs border border-transparent cursor-pointer transition-all duration-250 bg-brand-primary text-white hover:bg-brand-primary-light hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(18,24,41,0.15)] active:translate-y-0 disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Submit Request <Send size={16} style={{ marginLeft: '0.5rem' }} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
