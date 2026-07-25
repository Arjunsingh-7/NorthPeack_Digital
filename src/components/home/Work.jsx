import React from 'react';
import './Work.css';

const projects = [
  {
    id: '01',
    category: 'E-Commerce Redesign',
    title: 'Aster & Co.',
    description: 'A complete overhaul of a premium lifestyle brand\'s digital storefront, focusing on seamless discovery and a frictionless checkout experience.',
    metric: '+42% conversion',
    image: '/images/aster.webp',
    alt: 'Aster and Co. luxury fashion e-commerce homepage displayed in a browser window'
  },
  {
    id: '02',
    category: 'Digital Experience',
    title: 'Forma',
    description: 'An immersive, highly-performant portfolio for an award-winning architecture studio, built to highlight their spatial design philosophy.',
    metric: '1.4s load time',
    image: '/images/forma.webp',
    alt: 'Forma architecture studio portfolio homepage displayed in a browser window'
  },
  {
    id: '03',
    category: 'Platform Engineering',
    title: 'Fieldwork',
    description: 'A robust outdoor equipment e-commerce platform engineered for scale, featuring advanced filtering and inventory synchronization.',
    metric: '+67% qualified enquiries',
    image: '/images/fieldwork.webp',
    alt: 'Fieldwork outdoor equipment e-commerce homepage displayed in a browser window'
  }
];

const Work = React.memo(() => {
  return (
    <section className="section work" id="work">
      <div className="container">
        
        <div className="work-header">
          <h2 className="section-title">Selected Work</h2>
          <p className="work-disclaimer">
            * Note: NorthPeak Digital is a fictional agency. The following projects and metrics are demonstration content designed to showcase our structural capabilities.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="project-item" key={project.id}>
              
              <figure className="project-visual">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="project-image"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "low"}
                  width="1600"
                  height="900"
                  decoding="async"
                />
              <figcaption className="sr-only">Concept website homepage for {project.title}</figcaption>
              </figure>
              
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-number">{project.id}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-result">
                  <span className="result-label">Key Result</span>
                  <span className="result-metric">{project.metric}</span>
                </div>
              </div>
              
            </article>
          ))}
        </div>

        <aside className="stats-strip" aria-label="Agency Capabilities">
          <h3 className="sr-only">Key Agency Metrics</h3>
          <div className="stat-item">
            <span className="stat-value">25+</span>
            <span className="stat-label">Demo Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">1.8s</span>
            <span className="stat-label">Target Load Time</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">90+</span>
            <span className="stat-label">Lighthouse Target</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">3</span>
            <span className="stat-label">Disciplines</span>
          </div>
        </aside>

      </div>
    </section>
  );
});

Work.displayName = 'Work';

export default Work;


