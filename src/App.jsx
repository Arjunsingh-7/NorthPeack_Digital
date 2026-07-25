import React, { Suspense } from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Footer from './components/layout/Footer';

// Code splitting: lazy-load below-fold sections to reduce initial bundle
const Services = React.lazy(() => import('./components/home/Services'));
const Work = React.lazy(() => import('./components/home/Work'));
const Testimonials = React.lazy(() => import('./components/home/Testimonials'));
const Pricing = React.lazy(() => import('./components/home/Pricing'));
const Contact = React.lazy(() => import('./components/home/Contact'));

// Lightweight fallback component
const SectionFallback = () => null;

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        {/* 3. Services — exactly 6 services */}
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>

        {/* 4. Selected results/work */}
        <Suspense fallback={<SectionFallback />}>
          <Work />
        </Suspense>

        {/* 5. Testimonials */}
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>

        {/* 6. Pricing — exactly 3 tiers */}
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>

        {/* 7. Contact form */}
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default App;
