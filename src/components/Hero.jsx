import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-white text-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="tracking-widest text-xs uppercase text-black/60">Signature Highlight</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Jean Paul Gaultier
            <span className="block text-black/70">Le Male Elixir</span>
          </h1>
          <p className="text-black/70 max-w-xl">Experience a modern classic: warm vanilla, vibrant woods, and irresistible spice. A statement of luxury in every note.</p>
          <div className="flex items-center gap-6">
            <span className="text-2xl font-medium tracking-tight">$129</span>
            <a href="#products" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black transition-colors">Shop Now</a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-black/60">
            <span className="h-px w-10 bg-black/20" />
            <span>Free worldwide shipping</span>
            <span className="h-px w-10 bg-black/20" />
            <span>30-day returns</span>
          </div>
        </motion.div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;
