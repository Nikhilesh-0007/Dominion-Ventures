'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-green text-brand-cream pt-20 pb-10 relative overflow-hidden">
      {/* Editorial Watermark Logo */}
      <div className="absolute right-[-100px] bottom-[-50px] opacity-[0.03] select-none pointer-events-none hidden xl:block">
        <span className="font-serif text-[28vw] font-bold leading-none uppercase">DV</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-brand-cream/10">
          
          {/* Brand Pitch */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-12 h-12 rounded-full bg-brand-green-dark flex items-center justify-center border border-brand-gold/30">
                <span className="font-serif text-xl font-semibold text-brand-gold">DV</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-brand-cream tracking-wide uppercase leading-none">
                  Dominion
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-gold font-bold leading-none mt-1">
                  Ventures
                </span>
              </div>
            </Link>
            
            <p className="font-sans text-sm text-brand-cream/70 max-w-sm leading-relaxed">
              Elevating traditional nutrition and functional foods into premium, globally celebrated snacking experiences. Crafted with integrity, backed by science.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 items-center">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">
              Company
            </span>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold transition-colors duration-300">Home</Link>
              <Link href="/about" className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold transition-colors duration-300">Our Story</Link>
              <Link href="/products" className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold transition-colors duration-300">Products</Link>
              <Link href="/processing" className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold transition-colors duration-300">Processing</Link>
              <Link href="/contact" className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold transition-colors duration-300">Contact</Link>
            </nav>
          </div>

          {/* Newsletter / Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">
                Subscribe to Dominion Circle
              </span>
              <p className="font-sans text-xs text-brand-cream/60">
                Receive private reserve crop updates and exclusive luxury product launch news.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-2 mt-2 w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-brand-green-dark border border-brand-cream/10 rounded-full px-4 py-2.5 text-xs text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-brand-gold text-brand-green rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-green transition-colors duration-300 flex items-center justify-center gap-1"
                >
                  Join <ArrowRight size={12} />
                </button>
              </form>

              {subscribed && (
                <p className="text-brand-gold text-xs font-medium mt-1 animate-fade-in">
                  Welcome. You have joined the Dominion Circle.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 text-xs text-brand-cream/60 border-t border-brand-cream/10 pt-4">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-brand-gold" />
                <a href="mailto:info@dominionventures.in" className="hover:text-brand-gold transition-colors duration-300">info@dominionventures.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-brand-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={12} className="text-brand-gold mt-0.5 shrink-0" />
                <span>Executive Office, Level 4, Brigade Signature Towers, Katamanallur Cross, Old Madras Rd, Bengaluru, Karnataka - 560049</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-brand-cream/40 uppercase tracking-widest font-semibold">
          <div>
            © 2026 Dominion Ventures. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
