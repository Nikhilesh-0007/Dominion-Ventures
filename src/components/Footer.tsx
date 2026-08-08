import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-green-dark text-brand-cream pt-16 pb-10 relative overflow-hidden border-t-2 border-brand-gold/30">
      {/* Editorial Watermark Logo */}
      <div className="absolute right-[-60px] bottom-[-40px] opacity-[0.03] select-none pointer-events-none hidden xl:block">
        <span className="font-serif text-[26vw] font-bold leading-none uppercase tracking-tighter">DV</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-10 border-b border-brand-cream/10">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <img
                src="/logo.png"
                alt="Dominion Ventures Logo"
                className="w-11 h-11 object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <img
                src="/logo_text.png"
                alt="Dominion Ventures"
                className="h-10 md:h-11 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </Link>

            <p className="font-sans text-sm text-brand-cream/70 max-w-md leading-relaxed">
              Elevating traditional nutrition and functional foods into premium, globally celebrated snacking experiences. Crafted with integrity, backed by science.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 items-center mt-2">
              <a
                href="https://www.instagram.com/dominion_ventures_official_?igsh=YWtreThubWhlZGcz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-cream/15 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold font-extrabold">
              Contact Us
            </span>
            <div className="flex flex-col gap-4 text-xs text-brand-cream/70">
              <a
                href="mailto:dominionventuresofficial@gmail.com?subject=Inquiry%20-%20Dominion%20Ventures"
                target="_top"
                className="flex items-center gap-3 group w-fit hover:text-brand-gold transition-colors duration-300 cursor-pointer"
              >
                <Mail size={15} className="text-brand-gold shrink-0 transition-transform group-hover:scale-110" />
                <span>dominionventuresofficial@gmail.com</span>
              </a>
              <a
                href="tel:+919391214224"
                className="flex items-center gap-3 group w-fit hover:text-brand-gold transition-colors duration-300 cursor-pointer"
              >
                <Phone size={15} className="text-brand-gold shrink-0 transition-transform group-hover:scale-110" />
                <span>+91 9391214224</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-gold mt-0.5 shrink-0" />
                <span className="leading-relaxed">DOMINION VENTURES, H.No:7-46, Old Malkajgiri, Malkajgiri, Medchel, Telangana - India.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-[10px] text-brand-cream/40 uppercase tracking-[0.2em] font-bold">
          © 2026 Dominion Ventures. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

