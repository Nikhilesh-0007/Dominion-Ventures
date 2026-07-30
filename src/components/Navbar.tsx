'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Story' },
  { href: '/products', label: 'Products' },
  { href: '/processing', label: 'Processing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-[3px] left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-brand-cream-dark py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center border border-brand-gold/30 transition-transform duration-500 group-hover:rotate-[360deg]">
              <span className="font-serif text-lg font-semibold text-brand-gold">DV</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-brand-green tracking-wide uppercase leading-none">
                Dominion
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold leading-none mt-1">
                Ventures
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${
                    isActive ? 'text-brand-green' : 'text-brand-charcoal/70 hover:text-brand-green'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/products"
              className="group flex items-center gap-2 bg-brand-green text-brand-cream font-sans text-xs uppercase tracking-widest px-5 py-3 rounded-full hover:bg-brand-gold hover:text-brand-green transition-colors duration-300 font-semibold"
            >
              Explore Products
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-green p-1 hover:text-brand-gold transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-30 pt-28 px-8 flex flex-col justify-between pb-10 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-serif text-3xl transition-colors duration-300 ${
                      isActive ? 'text-brand-gold font-medium' : 'text-brand-green hover:text-brand-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-6 border-t border-brand-cream-dark pt-6">
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 bg-brand-green text-brand-cream text-center font-sans text-sm uppercase tracking-widest py-4 rounded-full hover:bg-brand-gold hover:text-brand-green transition-colors duration-300"
              >
                Explore Products
                <ArrowUpRight size={16} />
              </Link>
              <div className="text-center text-xs text-brand-charcoal/50 uppercase tracking-widest">
                © 2026 Dominion Ventures
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
