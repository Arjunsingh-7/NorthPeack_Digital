import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    quote: "NorthPeak didn't just redesign our storefront; they fundamentally improved how our customers discover and purchase our products. The strategic approach was clear from day one.",
    name: "Elena Rostova",
    role: "Director of Digital",
    company: "Aster & Co."
  },
  {
    id: 2,
    quote: "The technical execution is flawless. Our portfolio now loads instantly and the interactions feel incredibly premium. It perfectly mirrors the quality of our architectural work.",
    name: "Marcus Thorne",
    role: "Principal Architect",
    company: "Forma Studio"
  },
  {
    id: 3,
    quote: "A rare combination of rigorous UX research and high-end aesthetic execution. They understood our complex inventory needs and simplified the entire journey.",
    name: "Sarah Jenkins",
    role: "Head of Growth",
    company: "Fieldwork"
  }
];

// Memoized icon - defined once at module level, not recreated on render
const QuoteIcon = React.memo(() => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="quote-icon"
    aria-hidden="true"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
));

QuoteIcon.displayName = 'QuoteIcon';

const Testimonials = React.memo(() => {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        
        <div className="testimonials-header">
          <h2 className="section-title">Client Perspectives</h2>
          <p className="testimonials-disclaimer">
            * Note: The following quotes are demonstration content created to showcase NorthPeak's editorial layout capabilities.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.id}>
              <div className="quote-mark">
                <QuoteIcon />
              </div>
              <blockquote className="testimonial-quote">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className="testimonial-author">
                <span className="author-name">{testimonial.name}</span>
                <cite className="author-role">
                  {testimonial.role}, <span className="author-company">{testimonial.company}</span>
                </cite>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
