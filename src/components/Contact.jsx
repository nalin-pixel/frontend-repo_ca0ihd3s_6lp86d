import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-semibold">Contact Us</h3>
            <p className="text-black/70">We would love to hear from you. For custom recommendations or order inquiries, send us a message.</p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-black/80">
                <Mail size={18} />
                <span>hello@noirparfum.com</span>
              </div>
              <div className="flex items-center gap-2 text-black/80">
                <Phone size={18} />
                <span>+1 (555) 012-3456</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <a aria-label="Instagram" href="#" className="p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"><Instagram size={18} /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"><Twitter size={18} /></a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="p-6 rounded-2xl border border-black/10 bg-white shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input type="text" required className="w-full px-4 py-2 rounded-md border border-black/20 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/30" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" required className="w-full px-4 py-2 rounded-md border border-black/20 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/30" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm mb-1">Message</label>
              <textarea rows="5" required className="w-full px-4 py-2 rounded-md border border-black/20 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/30" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-black/60">We respond within 24 hours.</div>
              <button className="inline-flex items-center px-6 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black border border-black transition-colors">Send</button>
            </div>
          </motion.form>
        </div>

        <footer className="pt-16 text-center text-sm text-black/60">© {new Date().getFullYear()} NOIR Parfum. All rights reserved.</footer>
      </div>
    </section>
  );
};

export default Contact;
