import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl tracking-widest font-semibold text-black">NOIR</a>
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
          <li><a href="#home" className="text-black/80 hover:text-black transition-colors">Home</a></li>
          <li><a href="#products" className="text-black/80 hover:text-black transition-colors">Products</a></li>
          <li><a href="#about" className="text-black/80 hover:text-black transition-colors">About</a></li>
          <li><a href="#contact" className="text-black/80 hover:text-black transition-colors">Contact</a></li>
        </ul>
        <a href="#products" className="md:hidden inline-flex items-center px-3 py-1.5 border border-black/20 text-black text-sm rounded-full hover:bg-black hover:text-white transition-colors">Shop</a>
      </nav>
    </header>
  );
};

export default Navbar;
