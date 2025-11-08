import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'Understated luxury. The scent lingers beautifully without overpowering.',
    name: 'Sophia M.',
  },
  {
    id: 2,
    quote: 'Every detail feels refined. It elevates my daily ritual.',
    name: 'James P.',
  },
  {
    id: 3,
    quote: 'Minimalist, elegant, and unforgettable—just what I was looking for.',
    name: 'Amelia R.',
  },
];

const Testimonials = () => {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold"
        >
          What our clients say
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl border border-black/10 bg-white shadow-sm text-left"
            >
              <div className="flex items-center gap-1 text-black mb-3">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-black/80">“{t.quote}”</p>
              <p className="mt-4 text-sm tracking-wide text-black/60">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
