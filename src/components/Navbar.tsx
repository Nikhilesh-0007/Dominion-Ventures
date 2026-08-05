'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActiveSection(label);
    setIsOpen(false);

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-md border-b border-brand-cream-dark/60 py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="#top" 
            onClick={(e) => handleNavClick(e, '#top', 'Home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="Dominion Ventures Logo"
              className="w-11 h-11 object-contain transition-transform duration-700 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-extrabold text-brand-green tracking-wide uppercase leading-none">
                Dominion
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold leading-none mt-1">
                Ventures
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items (Home, Products, Contact Us) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.label)}
                  className={`relative font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 cursor-pointer ${isActive ? 'text-brand-green' : 'text-brand-charcoal/70 hover:text-brand-green'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-gold"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-green p-1.5 hover:text-brand-gold transition-colors duration-300 rounded-full hover:bg-brand-cream"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white/98 backdrop-blur-lg z-30 pt-28 px-8 flex flex-col justify-between pb-10 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.label;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.label)}
                    className={`font-serif text-4xl tracking-wide transition-colors duration-300 cursor-pointer ${isActive ? 'text-brand-gold font-medium' : 'text-brand-green hover:text-brand-gold'
                      }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="border-t border-brand-cream-dark pt-8 text-center text-[10px] text-brand-charcoal/40 uppercase tracking-[0.2em] font-bold">
              © 2026 Dominion Ventures
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
