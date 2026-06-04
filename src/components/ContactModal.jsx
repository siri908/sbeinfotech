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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div className="modal-grid">
          {/* Left Panel: Info */}
          <div className="modal-info-panel">
            <h3 className="modal-title">Get in Touch</h3>
            <p className="modal-desc">
              Have a project or hardware requirement in mind? Reach out to our team, and we'll get back to you shortly.
            </p>

            <div className="modal-details-list">
              <div className="modal-detail-item">
                <MapPin size={20} className="modal-info-icon shrink-0" />
                <div>
                  <h4 className="detail-label">Office Address</h4>
                  <p className="detail-value">
                    304, SP Residency, Road Number 1,<br />
                    (Near Uma Beauty Parlour), Medipalli,<br />
                    Hyderabad, Medchal Malkajgiri,<br />
                    Telangana, 500098.
                  </p>
                </div>
              </div>

              <div className="modal-detail-item">
                <Phone size={20} className="modal-info-icon" />
                <div>
                  <h4 className="detail-label">Phone Support</h4>
                  <a href="tel:+919393453453" className="detail-value hover-text">
                    +91 93934 53453
                  </a>
                </div>
              </div>

              <div className="modal-detail-item">
                <Mail size={20} className="modal-info-icon" />
                <div>
                  <h4 className="detail-label">Email Address</h4>
                  <a href="mailto:solutions@sbenterprises.in" className="detail-value hover-text">
                    solutions@sbenterprises.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="modal-form-panel">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon-wrapper">
                  <Check size={36} className="success-icon" />
                </div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-text">
                  Thank you for reaching out. A representative from SBEnterprises will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send a Message</h3>

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Service/Category */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Requirement Category</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="form-input select-input"
                  >
                    {services.map((svc) => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">How can we help?</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input textarea-input"
                    placeholder="Describe your hardware or solution needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit-btn w-full"
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
