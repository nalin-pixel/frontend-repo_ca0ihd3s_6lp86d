import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Jean Paul Gaultier – Le Male Elixir', price: 129, image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Tom Ford – Black Orchid', price: 165, image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Dior – Sauvage', price: 145, image: 'https://images.unsplash.com/photo-1676305982764-0867908969b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKZWFuJTIwUGF1bCUyMEdhdWx0aWVyJTIwJUUyJTgwJTkzfGVufDB8MHx8fDE3NjI1ODA1ODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, name: 'Chanel – Bleu', price: 155, image: 'https://images.unsplash.com/photo-1676305982764-0867908969b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKZWFuJTIwUGF1bCUyMEdhdWx0aWVyJTIwJUUyJTgwJTkzfGVufDB8MHx8fDE3NjI1ODA1ODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 5, name: 'YSL – La Nuit de L’Homme', price: 135, image: 'https://images.unsplash.com/photo-1676305982764-0867908969b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKZWFuJTIwUGF1bCUyMEdhdWx0aWVyJTIwJUUyJTgwJTkzfGVufDB8MHx8fDE3NjI1ODA1ODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, name: 'Maison Margiela – Jazz Club', price: 138, image: 'https://images.unsplash.com/photo-1676305982764-0867908969b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKZWFuJTIwUGF1bCUyMEdhdWx0aWVyJTIwJUUyJTgwJTkzfGVufDB8MHx8fDE3NjI1ODA1ODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-black/10 shadow-sm"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-sm tracking-wider">{product.name}</p>
          <p className="text-lg font-medium mt-1">${product.price}</p>
        </div>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center px-4 py-2 rounded-full bg-white text-black hover:bg-black hover:text-white border border-white/20">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <section id="products" className="relative py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Featured Perfumes</h2>
            <p className="text-black/60 mt-2">Minimalist design. Maximum allure.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors">View All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
