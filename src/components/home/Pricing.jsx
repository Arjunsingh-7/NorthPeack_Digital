import React from 'react';
import './Pricing.css';

const pricingData = [
  {
    id: '01',
    name: 'Starter',
    price: 'From $1,500',
    description: 'For founders and small businesses establishing a strong digital presence.',
    features: [
      'Up to 5 pages',
      'Responsive development',
      'Basic SEO foundation',
      'Contact form',
      'Performance optimization'
    ],
    popular: false
  },
  {
    id: '02',
    name: 'Growth',
    price: 'From $3,500',
    description: 'For growing brands that need a stronger conversion-focused website.',
    features: [
      'Up to 10 pages',
      'Custom UI/UX',
      'CMS integration',
      'Advanced interactions',
      'SEO foundations',
      'Performance optimization'
    ],
    popular: true
  },
  {
    id: '03',
    name: 'Scale',
    price: 'Custom',
    description: 'For ambitious businesses requiring a larger digital platform.',
    features: [
      'Custom scope',
      'E-commerce / advanced functionality',
      'Design system',
      'Integrations',
      'Performance audit',
      'Ongoing support'
    ],
    popular: false
  }
];

// Memoized icon - defined once at module level, not recreated on render
const CheckIcon = React.memo(() => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="square" 
    strokeLinejoin="miter"
    className="check-icon"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
));

CheckIcon.displayName = 'CheckIcon';

const Pricing = React.memo(() => {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        
        <div className="pricing-header">
          <h2 className="section-title">Pricing & Packages</h2>
          <p className="pricing-subtitle">
            Transparent pricing structures for engagements of all sizes.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingData.map((tier) => (
            <article 
              key={tier.id} 
              className={`pricing-tier ${tier.popular ? 'tier-popular' : ''}`}
            >
              <div className="tier-header">
                {tier.popular && <span className="tier-badge">Most Popular</span>}
                <div className="tier-meta">
                  <span className="tier-number">{tier.id}</span>
                  <h3 className="tier-name">{tier.name}</h3>
                </div>
                <div className="tier-price">{tier.price}</div>
                <p className="tier-description">{tier.description}</p>
              </div>

              <div className="tier-content">
                <ul className="tier-features">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tier-action">
                <a 
                  href="#contact" 
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'} full-width`}
                >
                  Start a Conversation
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
