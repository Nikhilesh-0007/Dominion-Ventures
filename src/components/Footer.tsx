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
    <footer className="bg-brand-green-dark text-brand-cream pt-16 pb-10 relative overflow-hidden border-t-2 border-brand-gold/30">
      {/* Editorial Watermark Logo */}
      <div className="absolute right-[-60px] bottom-[-40px] opacity-[0.03] select-none pointer-events-none hidden xl:block">
        <span className="font-serif text-[26vw] font-bold leading-none uppercase tracking-tighter">DV</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-10 border-b border-brand-cream/10">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <img
                src="/logo.png"
                alt="Dominion Ventures Logo"
                className="w-12 h-12 object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-brand-cream tracking-wide uppercase leading-none">
                  Dominion
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-gold font-bold leading-none mt-1.5">
                  Ventures
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-brand-cream/70 max-w-sm leading-relaxed">
              Elevating traditional nutrition and functional foods into premium, globally celebrated snacking experiences. Crafted with integrity, backed by science.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 items-center mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/15 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold hover:scale-110 transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/15 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold hover:scale-110 transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/15 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold hover:scale-110 transition-all duration-300">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold font-extrabold">
              Navigation
            </span>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold hover:translate-x-1 transition-all duration-300">Home</Link>
              <Link href="/about" className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold hover:translate-x-1 transition-all duration-300">Our Story</Link>
              <Link href="/products" className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold hover:translate-x-1 transition-all duration-300">Products</Link>
              <Link href="/processing" className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold hover:translate-x-1 transition-all duration-300">Processing</Link>
            </nav>
          </div>

          {/* Column 3: Newsletter & Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-8">


            <div className="flex flex-col gap-3 text-xs text-brand-cream/60 border-t border-brand-cream/10 pt-6">
              <div className="flex items-center gap-3">
                <Mail size={12} className="text-brand-gold shrink-0" />
                <a href="mailto:info@dominionventures.in" className="hover:text-brand-gold transition-colors duration-300">info@dominionventures.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={12} className="text-brand-gold shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={12} className="text-brand-gold mt-0.5 shrink-0" />
                <span className="leading-relaxed">Executive Office, Level 4, Brigade Signature Towers, Katamanallur Cross, Old Madras Rd, Bengaluru, Karnataka - 560049</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 text-[10px] text-brand-cream/40 uppercase tracking-[0.2em] font-bold">
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
