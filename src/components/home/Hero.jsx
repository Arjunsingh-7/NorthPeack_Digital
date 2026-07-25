import React from 'react';
import './Hero.css';

const Hero = React.memo(() => {
  return (
    <section className="section hero">
      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              Independent Digital Studio — Strategy / Design / Development
            </div>
            
            <h1 className="hero-headline">
              Digital experiences<br/>
              built to move<br/>
              business forward.
            </h1>
          </div>

          <div className="hero-secondary">
            <p className="hero-copy">
              NorthPeak partners with ambitious brands to design and build fast, thoughtful digital experiences that turn attention into measurable growth.
            </p>
            
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">Start a Project</a>
              <a href="#work" className="btn btn-secondary">Explore Our Work</a>
            </div>
            
            <div className="hero-decorative" aria-hidden="true">
              <div className="decorative-number">01</div>
              <div className="decorative-line"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
