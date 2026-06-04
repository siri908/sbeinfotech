import React from 'react';

export default function GlobalStyles() {
  return (
    <style>{`
/* --- Header.jsx --- */

      .site-header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background-color: var(--color-bg);
        border-bottom: 1px solid var(--color-border);
        transition: var(--transition-all);
        padding: 1.25rem 0;
      }
      
      .site-header.scrolled {
        padding: 0.85rem 0;
        box-shadow: var(--shadow-sm);
      }

      .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
      }

      /* Logo styling matching screenshots */
      .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        user-select: none;
      }

      .logo-img {
        height: 2rem;
        width: auto;
        object-fit: contain;
        display: block;
      }

        .logo-text {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--color-primary);
        }

        .nav-list {
          display: flex;
          gap: 2.25rem;
        }

        .nav-link {
          background: none;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-primary);
          cursor: pointer;
          padding: 0.5rem 0;
          position: relative;
          transition: var(--transition-all);
          opacity: 0.85;
        }

        .nav-link:hover {
          opacity: 1;
        }

        .nav-link.active {
          color: var(--color-accent);
          opacity: 1;
          font-weight: 600;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--color-accent);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        .nav-link.active::after {
          transform: scaleX(1);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .btn-sm {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
        }

        .mobile-drawer {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-lg);
          padding: 1.5rem;
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
          transition: var(--transition-all);
        }

        .mobile-drawer.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .mobile-nav ul {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-primary);
          width: 100%;
          text-align: left;
          padding: 0.5rem 0;
          cursor: pointer;
        }

        .mobile-nav-link.active {
          color: var(--color-accent);
          font-weight: 600;
        }

        .mobile-cta-btn {
          margin-top: 0.5rem;
          width: 100%;
        }

        @media (max-width: 768px) {
          .desktop-nav, .header-cta {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-drawer {
            display: block;
          }
        }
      

/* --- Footer.jsx --- */

        .site-footer {
          background-color: var(--color-bg);
          border-top: 1px solid var(--color-border);
          padding-top: 4.5rem;
          color: var(--color-text);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1.25fr 1fr;
          gap: 4rem;
          padding-bottom: 4.5rem;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
          .brand-col {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding-bottom: 3rem;
          }
          .brand-col {
            grid-column: span 1;
          }
        }

        .brand-col .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .logo-img {
          height: 2rem;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .logo-text {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--color-primary);
        }

        .footer-desc {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          max-width: 340px;
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }

        .footer-info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1.5;
        }

        .footer-icon {
          color: var(--color-text-muted);
          margin-top: 0.15rem;
        }

        .shrink-0 {
          flex-shrink: 0;
        }

        .footer-address {
          font-style: normal;
          color: var(--color-text);
          opacity: 0.9;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-link {
          color: var(--color-text);
          opacity: 0.9;
          transition: var(--transition-all);
        }

        .footer-link:hover {
          color: var(--color-accent);
          opacity: 1;
        }

        .font-medium {
          font-weight: 500;
        }

        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid var(--color-border);
          padding: 1.75rem 0;
          font-size: 0.7rem;
          color: var(--color-text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .footer-bottom-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }

        .copyright-text {
          opacity: 0.85;
        }

        .account-credit {
          opacity: 0.8;
          font-weight: 600;
        }
      

/* --- ContactModal.jsx --- */

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(18, 24, 41, 0.6);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fade-in 0.25s ease-out;
        }

        .modal-container {
          background-color: var(--color-bg);
          width: 100%;
          max-width: 900px;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          border: 1px solid var(--color-border);
          position: relative;
          animation: slide-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .modal-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background-color: var(--color-bg-muted);
          border: 1px solid var(--color-border);
          color: var(--color-text-muted);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-all);
          z-index: 10;
        }

        .modal-close:hover {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
        }

        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-info-panel {
            display: none; /* Hide info panel on mobile to save space */
          }
        }

        /* Info Panel */
        .modal-info-panel {
          background-color: var(--color-primary);
          color: #ffffff;
          padding: 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .modal-desc {
          font-size: 0.95rem;
          opacity: 0.8;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .modal-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .modal-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .modal-info-icon {
          color: var(--color-accent);
          margin-top: 0.2rem;
        }

        .detail-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.65;
          margin-bottom: 0.2rem;
        }

        .detail-value {
          font-size: 0.95rem;
          line-height: 1.5;
          opacity: 0.95;
          display: block;
        }

        a.detail-value {
          text-decoration: none;
          color: #ffffff;
        }

        .hover-text:hover {
          color: var(--color-accent);
          opacity: 1;
        }

        /* Form Panel */
        .modal-form-panel {
          padding: 3.5rem 3rem;
          background-color: var(--color-bg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 480px;
        }

        @media (max-width: 640px) {
          .modal-form-panel {
            padding: 2.5rem 1.5rem;
          }
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-primary);
        }

        .form-input {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          padding: 0.7rem 0.9rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          outline: none;
          background-color: var(--color-bg-muted);
          color: var(--color-text);
          transition: var(--transition-all);
          width: 100%;
        }

        .form-input:focus {
          border-color: var(--color-accent);
          background-color: var(--color-bg);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .select-input {
          cursor: pointer;
        }

        .textarea-input {
          resize: none;
        }

        .form-submit-btn {
          margin-top: 0.5rem;
          padding: 0.85rem;
        }

        /* Success State */
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          animation: fade-in 0.4s ease-out;
        }

        .success-icon-wrapper {
          background-color: #d1fae5;
          color: #059669;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          animation: scale-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .success-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .success-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          max-width: 320px;
          line-height: 1.5;
        }

        /* Animations */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes scale-up {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      

/* --- Home.jsx --- */

        /* Hero Styling */
        .hero-section {
          padding-top: 6rem;
          padding-bottom: 6rem;
          overflow: hidden;
          background-color: var(--color-bg);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          .hero-content {
            align-items: center;
          }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-primary);
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }

        .hero-desc {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2.25rem;
          max-width: 540px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-visual {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-img-backdrop {
          position: absolute;
          width: 90%;
          height: 90%;
          background: linear-gradient(135deg, var(--color-accent-light) 0%, #e2e8f0 100%);
          border-radius: var(--radius-md);
          z-index: 1;
          transform: rotate(-3deg);
        }

        .hero-img {
          width: 100%;
          max-width: 480px;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          z-index: 2;
          border: 1px solid var(--color-border);
        }

        /* Partners Ribbon */
        .partners-ribbon {
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 2rem 0;
          background-color: var(--color-bg-muted);
          text-align: center;
        }

        .ribbon-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 1.25rem;
        }

        .brands-wrapper {
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
        }
        
        .brands-wrapper::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .brands-list {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
          padding: 0 1rem;
        }

        .brand-item {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.02em;
          opacity: 0.6;
        }

        /* Core Offerings */
        .offerings-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .category-count {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
        }

        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .offerings-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .offerings-grid {
            grid-template-columns: 1fr;
          }
        }

        /* List Card Specific */
        .list-card {
          background-color: var(--color-bg-muted);
          border-style: dashed;
        }

        .list-card-body {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .list-card-title {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
        }

        .essentials-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .essentials-list li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-primary);
        }

        .bullet {
          width: 5px;
          height: 5px;
          background-color: var(--color-accent);
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .btn-text-link {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: var(--transition-all);
        }

        .btn-text-link:hover {
          color: var(--color-primary);
          gap: 0.75rem !important; /* expand chevron margin */
        }

        /* Stats Section */
        .stats-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .stats-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .text-white {
          color: #ffffff !important;
        }

        .text-muted {
          color: var(--color-dark-text-muted) !important;
        }

        .stats-info {
          display: flex;
          flex-direction: column;
        }

        .stats-counters {
          margin-top: 3rem;
          gap: 4rem;
        }

        @media (max-width: 640px) {
          .stats-counters {
            gap: 2rem;
          }
        }

        .counter-num {
          font-size: 3.25rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          display: block;
          margin-bottom: 0.25rem;
        }

        .counter-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-dark-text-muted);
          font-weight: 600;
        }

        /* Clients Card */
        .stats-clients-card {
          background-color: var(--color-dark-bg-card);
          border: 1px solid var(--color-dark-border);
          border-radius: var(--radius-sm);
          padding: 2.25rem;
        }

        .clients-card-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.75rem;
        }

        .client-rows {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .client-row {
          border-bottom: 1px solid var(--color-dark-border);
          padding-bottom: 1.25rem;
        }

        .client-row:last-child {
          border: none;
          padding-bottom: 0;
        }

        .client-name {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .client-desc {
          font-size: 0.85rem;
          color: var(--color-dark-text-muted);
        }

        .clients-footer-note {
          font-size: 0.75rem;
          font-style: italic;
          color: var(--color-dark-text-muted);
          opacity: 0.7;
          border-top: 1px solid var(--color-dark-border);
          padding-top: 1rem;
        }

        /* Testimonials */
        .testimonials-section {
          background-color: var(--color-bg-muted);
        }

        .testimonials-grid {
          gap: 3rem;
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .testimonial-quote {
          font-size: 1.15rem;
          font-style: italic;
          color: var(--color-primary);
          line-height: 1.6;
          font-weight: 400;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-primary);
        }

        .author-role {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      

/* --- About.jsx --- */

        /* Intro Section */
        .about-intro-section {
          padding-bottom: 2.5rem;
          background-color: var(--color-bg);
        }

        .about-header {
          max-width: 900px;
        }

        .about-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-primary);
          letter-spacing: -0.02em;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 2.5rem;
          }
        }

        .about-lead {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }

        /* Details Section */
        .about-details-section {
          background-color: var(--color-bg-muted);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding-top: 4.5rem;
          padding-bottom: 4.5rem;
        }

        .details-grid {
          gap: 6rem;
        }

        @media (max-width: 768px) {
          .details-grid {
            gap: 3rem;
          }
        }

        .detail-block {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .block-title {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-muted);
        }

        .block-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-primary);
          font-weight: 400;
          opacity: 0.95;
        }

        /* Values Section */
        .values-header-title {
          margin-bottom: 3.5rem;
        }

        .values-grid {
          gap: 2rem;
        }

        .value-card {
          border: 1px solid var(--color-border);
          padding: 2.25rem;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          transition: var(--transition-all);
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary-light);
        }

        .value-card-header {
          margin-bottom: 2rem;
        }

        .value-icon {
          color: var(--color-accent);
        }

        .value-num {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-accent);
          opacity: 0.8;
          font-family: var(--font-sans);
        }

        .value-card-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 0.75rem;
        }

        .value-card-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          background-color: var(--color-bg-muted);
          border-top: 1px solid var(--color-border);
          text-align: center;
        }

        .cta-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .cta-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: -0.01em;
          max-width: 600px;
          line-height: 1.2;
        }

        @media (max-width: 640px) {
          .cta-title {
            font-size: 1.75rem;
          }
        }

        .cta-btn {
          padding: 0.85rem 2rem;
        }
      

/* --- Products.jsx --- */

        /* Intro Section */
        .products-intro-section {
          padding-bottom: 2.5rem;
          background-color: var(--color-bg);
        }

        .products-header {
          max-width: 900px;
        }

        .products-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-primary);
          letter-spacing: -0.02em;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .products-title {
            font-size: 2.5rem;
          }
        }

        .products-lead {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }

        /* Core Products Blocks */
        .core-products-section {
          padding-bottom: 5rem;
        }

        .product-block {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
          padding: 3rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .product-block:last-child {
          border-bottom: none;
        }

        .block-img-right {
          grid-template-columns: 0.9fr 1.1fr;
        }

        @media (max-width: 1024px) {
          .product-block, .block-img-right {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .block-img-right .product-block-visual {
            order: -1; /* image on top for all on mobile */
          }
        }

        .product-block-visual {
          width: 100%;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          background-color: var(--color-bg-muted);
          aspect-ratio: 16 / 10;
        }

        .product-block-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-slow);
        }

        .product-block:hover .product-block-img {
          transform: scale(1.03);
        }

        .product-block-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 0;
        }

        .product-block-index {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent);
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          font-family: var(--font-sans);
        }

        .product-block-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 640px) {
          .product-block-title {
            font-size: 1.75rem;
          }
        }

        .product-block-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Other Products Section */
        .other-products-section {
          background-color: var(--color-bg-muted);
          border-top: 1px solid var(--color-border);
        }

        .other-products-header {
          margin-bottom: 3.5rem;
        }

        .other-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .other-products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .other-products-grid {
            grid-template-columns: 1fr;
          }
        }

        .other-product-card {
          background-color: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 2rem 1.75rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: var(--transition-all);
        }

        .other-product-card:not(.blank-card):hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary-light);
        }

        .other-product-bullet {
          width: 6px;
          height: 6px;
          background-color: var(--color-accent);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .other-product-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-primary);
          line-height: 1.4;
        }

        .blank-card {
          background-color: transparent;
          border: none;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .blank-card {
            display: none; /* Hide placeholder card on 2-column or 1-column layouts */
          }
        }
      

/* --- Partners.jsx --- */

        /* Intro Section */
        .partners-intro-section {
          padding-bottom: 2.5rem;
          background-color: var(--color-bg);
        }

        .partners-header {
          max-width: 900px;
        }

        .partners-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-primary);
          letter-spacing: -0.02em;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .partners-title {
            font-size: 2.5rem;
          }
        }

        .partners-lead {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }

        /* Matrix Section */
        .partners-matrix-section {
          padding-bottom: 6rem;
        }

        .matrix-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .matrix-row {
          display: grid;
          grid-template-columns: 0.8fr 2.2fr;
          gap: 3rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 2.5rem;
          align-items: flex-start;
        }

        .matrix-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        @media (max-width: 768px) {
          .matrix-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            padding-bottom: 2rem;
          }
        }

        .matrix-label-wrapper {
          padding-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .matrix-label-wrapper {
            padding-top: 0;
          }
        }

        .matrix-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-muted);
        }

        .matrix-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .matrix-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .matrix-brand-card {
          background-color: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xs);
          padding: 2.5rem 1.5rem;
          text-align: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-all);
        }

        .matrix-brand-card:not(.placeholder-card):hover {
          transform: translateY(-2px);
          border-color: var(--color-primary-light);
          box-shadow: var(--shadow-md);
        }

        .placeholder-card {
          background-color: var(--color-bg-muted);
          border: none;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .placeholder-card {
            display: none; /* Hide placeholder card on smaller screens */
          }
        }

        /* Clients Section */
        .clients-title {
          margin-bottom: 3.5rem;
        }

        .clients-grid {
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .client-display-card {
          background-color: var(--color-dark-bg-card);
          border: 1px solid var(--color-dark-border);
          border-radius: var(--radius-sm);
          padding: 2.25rem;
          transition: var(--transition-all);
        }

        .client-display-card:hover {
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }

        .client-display-name {
          font-size: 1.35rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .client-display-desc {
          font-size: 0.95rem;
          color: var(--color-dark-text-muted);
        }

        .clients-extra-note {
          font-size: 0.8rem;
          font-style: italic;
          color: var(--color-dark-text-muted);
          opacity: 0.7;
          border-top: 1px solid var(--color-dark-border);
          padding-top: 1.25rem;
        }
      

/* --- App.jsx --- */

        .app-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .flex-grow {
          flex-grow: 1;
        }
      


    `}</style>
  );
}
