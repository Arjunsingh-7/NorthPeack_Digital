import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: '01',
    title: 'Web Design',
    description: 'Strategic websites built around clarity, usability and brand identity.',
  },
  {
    id: '02',
    title: 'Web Development',
    description: 'Fast, responsive and maintainable digital experiences built with modern web technology.',
  },
  {
    id: '03',
    title: 'E-Commerce',
    description: 'Conversion-focused storefronts that make discovering and buying products effortless.',
  },
  {
    id: '04',
    title: 'UI/UX Design',
    description: 'Research-led interfaces that make complex products feel simple.',
  },
  {
    id: '05',
    title: 'Performance',
    description: 'Technical optimization focused on speed, accessibility and Core Web Vitals.',
  },
  {
    id: '06',
    title: 'SEO & Growth',
    description: 'Search foundations and growth improvements designed into the experience from day one.',
  }
];

// Memoized icon - defined once at module level, not recreated on render
const ArrowIcon = React.memo(() => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="square" 
    strokeLinejoin="miter"
    className="service-icon"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
));

ArrowIcon.displayName = 'ArrowIcon';

const Services = React.memo(() => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            We combine rigorous strategy with world-class execution to deliver 
            impactful results across the entire digital lifecycle.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <article className="service-item" key={service.id}>
              <a href={`#service-${service.id}`} className="service-link-wrapper">
                <div className="service-number" aria-hidden="true">{service.id}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-action">
                  <ArrowIcon />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;
