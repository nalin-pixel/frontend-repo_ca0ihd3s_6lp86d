import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      if (id && id.startsWith('#') && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="font-sans bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold">Elevated minimalism</h2>
            <p className="mt-3 text-black/70">Crafted with intention. Designed for those who appreciate quiet luxury and modern refinement.</p>
          </div>
        </section>
        <Testimonials />
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl border border-black/10 p-8">
              <h3 className="text-2xl font-semibold">Join our newsletter</h3>
              <p className="mt-2 text-black/70">Be the first to know about new releases and limited editions.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input type="email" required placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-md border border-black/20 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/30" />
                <button className="px-6 py-3 rounded-md bg-black text-white hover:bg-white hover:text-black border border-black transition-colors">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
};

export default App;
