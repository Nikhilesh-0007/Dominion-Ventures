'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Sparkles, ShieldCheck, Leaf, Flame,
  Zap, Award, Star, Quote, ChevronLeft, ChevronRight
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { products } from '@/data/products';

// Core pillars (floating glass cards)
const corePillars = [
  {
    title: 'Ethical Sourcing',
    desc: 'Direct farm integration in Bihar, securing fair trade wages and traceably pure crop yields.',
    icon: Leaf,
    badge: 'Farm Direct'
  },
  {
    title: 'Gourmet Selection',
    desc: 'Sorting only the largest, premium-grade kernels (18mm to 20mm) for unmatched consistency.',
    icon: Award,
    badge: 'Jumbo Size'
  },
  {
    title: 'Traditional Roasting',
    desc: 'Slow wood-fired dry popping followed by clean tumbling to preserve a light grease-free crunch.',
    icon: Flame,
    badge: 'Wood-Fired'
  },
  {
    title: 'Nitrogen Freshness',
    desc: 'Hermetically sealing packages with nitrogen to eliminate oxidation and preserve natural spices.',
    icon: ShieldCheck,
    badge: '100% Crisp'
  }
];

// Stat list
const statsList = [
  { value: '20+', label: 'Premium Flavours' },
  { value: '5', label: 'Future Product Categories' },
  { value: '100%', label: 'Natural Ingredients' },
  { value: 'Ready', label: 'Export Certified' }
];

// Flavor Showcase Data
const traditionalFlavors = [
  { name: 'Gunpowder (Podi)', tagline: 'Curry Leaf & Mustard', desc: 'Bold south spice blend with toasted sesame oils.', gradient: 'from-amber-600/20 via-orange-500/10 to-transparent', icon: Zap },
  { name: 'Chettinad Spice', tagline: 'Aromatic Black Pepper', desc: 'Infused with roasted star anise and heavy fennel seeds.', gradient: 'from-red-700/20 via-rose-600/10 to-transparent', icon: Flame },
  { name: 'Coconut Lime', tagline: 'Zesty & Tropical', desc: 'Rich toasted coconut flakes tossed with fresh key lime oils.', gradient: 'from-emerald-600/20 via-teal-500/10 to-transparent', icon: Leaf },
  { name: 'Curd Rice Style', tagline: 'Creamy & Cool', desc: 'Mild yogurt base tempered with dry chili and mustard seeds.', gradient: 'from-gray-200/40 via-amber-50/20 to-transparent', icon: Sparkles }
];

const internationalFlavors = [
  { name: 'Texas Smoky BBQ', tagline: 'Fast-Casual Sweet', desc: 'Deep molasses and hickory smoke seasoning with brown sugar notes.', gradient: 'from-orange-600/20 via-red-500/10 to-transparent', icon: Flame },
  { name: 'Sour Cream & Chive', tagline: 'European Herb', desc: 'Gourmet French cream base topped with garden-fresh wild chives.', gradient: 'from-green-600/20 via-emerald-500/10 to-transparent', icon: Leaf },
  { name: 'White Cheddar & Truffle', tagline: 'Rich & Aromatic', desc: 'Aged sharp English cheddar enhanced with Italian white truffles.', gradient: 'from-yellow-500/25 via-amber-400/10 to-transparent', icon: Sparkles },
  { name: 'Sriracha Lime', tagline: 'Spicy Fusion', desc: 'Fermented red chili paste zested with freeze-dried key lime powder.', gradient: 'from-rose-600/25 via-red-500/10 to-transparent', icon: Zap }
];

// Future Products Zig-Zag Data
const futureProducts = [
  {
    title: 'Next-Gen Ice Cream',
    tagline: 'Model 1, 2 & 3 Servings',
    desc: 'Anatomically sculpted fruit gelato shells encasing fresh berry sorbets, ultra-viscous shake layers separating rich pistachio creams, and interactive painter\'s palette plating concepts.',
    image: '/next_gen_ice (2).png',
    gradient: 'from-pink-500/10 via-purple-500/5 to-transparent',
    features: ['Sculpted Fruit Shells', 'Viscous Pistachio Creams', 'Artist Palette Trays']
  },
  {
    title: 'Functional Soda',
    tagline: 'Prebiotic & Probiotic sparkling soda',
    desc: 'Guilt-free alternative to traditional HFCS soft drinks. Formulated with gut-microbiome prebiotic fibers, probiotic proteins, and organic botanical caffeine from tea sources.',
    image: '/Functional Soda.png',
    gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
    features: ['Digestive Prebiotics', 'Probiotic Proteins', 'Zero HFCS / Low Glycemic']
  },
  {
    title: 'Enhanced Longevity Water',
    tagline: 'Bioactive Synergy Hydration',
    desc: 'Advanced water-soluble delivery mechanism infused with scientifically validated synergistic pairings (Vitamin D3 + Magnesium + K2) to optimize cellular repair and systemic health span.',
    image: '/water (2).png',
    gradient: 'from-indigo-500/10 via-blue-500/5 to-transparent',
    features: ['D3 + Magnesium + K2 Synergy', 'Fast Water-Soluble Absorption', 'Ionic Trace Minerals']
  }
];

// Testimonials Data
const testimonials = [
  {
    quote: "Dominion Ventures has reinvented how our gourmet cafes approach healthy snacking. The Gunpowder Podi Makhana became an overnight favorite among our health-conscious clientele.",
    author: "Chef Vikram Adyar",
    title: "Culinary Director, The Southern Table Group",
    stars: 5
  },
  {
    quote: "The visual presentation and high-density nitrogen packaging of their premium collections set a new benchmark for clean label exports. Their batch traceability is second to none.",
    author: "Evelyn Laurent",
    title: "Category Sourcing Buyer, Whole Foods Paris",
    stars: 5
  },
  {
    quote: "Redefining superfoods requires a bridge between agricultural heritage and modern food science. Dominion Ventures has successfully engineered this bridge with extreme precision.",
    author: "Dr. Ramesh Krishnan",
    title: "Longevity Sourcing Specialist, Wellness Club India",
    stars: 5
  }
];

export default function Home() {
  const [activeFlavourTab, setActiveFlavourTab] = useState<'traditional' | 'international'>('traditional');
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const makhanaProduct = products.find(p => p.id === 'makhana');

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col w-full bg-white relative">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] lg:h-[95vh] flex items-center overflow-hidden px-6 py-16 lg:py-20 bg-brand-cream">
        {/* Full-bleed Background Image with subtle parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 transition-transform duration-[10s] ease-out scale-105 pointer-events-none"
          style={{ backgroundImage: "url('/hero_img.png')" }}
        />
        {/* Soft Radial Glow Gradient Behind Product */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[550px] h-[550px] bg-brand-gold/20 rounded-full filter blur-[120px] pointer-events-none animate-soft-glow" />
        {/* Light Overlay Gradient - Left-aligned only */}
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-white/85 to-transparent w-full lg:w-[48%] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-brand-charcoal text-left">
            <div className="inline-flex items-center gap-2 border border-brand-gold/40 rounded-full px-4 py-1.5 w-fit bg-white/70 backdrop-blur-md shadow-premium-sm">
              <Sparkles size={13} className="text-brand-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-brand-green">
                A New Standard in Snacking
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-brand-green leading-[1.05] tracking-tight">
              Healthy Snacking,<br />
              <span className="italic text-brand-gold">Reimagined.</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-brand-charcoal/80 max-w-lg leading-relaxed mt-1">
              Traditional Indian superfoods crafted into premium healthy snacks for today&apos;s lifestyle. Sourced directly from farms, dry-roasted, and infused with gourmet spice recipes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/products"
                className="btn-primary"
              >
                <span>Explore Products</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
              <Link
                href="/about"
                className="btn-secondary"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero Right Visual: Left empty to show background image on the right */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative pointer-events-none" />
        </div>

        {/* Premium Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10 hidden md:flex">
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-charcoal/50 font-bold">Scroll</span>
          <div className="w-[18px] h-[30px] rounded-full border border-brand-charcoal/30 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-brand-gold rounded-full"
            />
          </div>
        </div>
      </section>

      {/* FOUNDER'S VOICE SECTION */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6] px-6 border-b border-brand-cream-dark relative overflow-hidden">
        {/* Subtle decorative background detail */}
        <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[300px] h-[300px] bg-brand-green/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-full text-center">
            <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-brand-charcoal/50 font-bold mb-2 block">
              DOMINION VENTURES
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green tracking-wide uppercase font-medium leading-tight">
              FROM THE FOUNDER&apos;S VOICE
            </h2>
            <div className="w-full border-t border-brand-cream-dark/80 my-8" />
          </div>

          <div className="flex flex-col gap-6 w-full text-brand-charcoal/90">
            <p 
              className="font-sans text-sm md:text-base leading-relaxed text-justify"
              style={{ textAlign: 'justify', textJustify: 'inter-word' }}
            >
              <span className="float-left text-6xl md:text-7xl font-serif text-brand-green mr-3 md:mr-4 leading-[0.75] mt-1.5 font-medium select-none">
                E
              </span>
              very day, millions of people face the same frustrating compromise: choosing between speed and health. In a fast-paced world, finding a meal that is both genuinely nutritious and instantly convenient feels nearly impossible. Most convenient packaged foods are loaded with artificial preservatives, excessive sodium, and empty calories—leaving you feeling sluggish, unsatisfied, and worried about your long-term health.
            </p>

            <div className="bg-brand-green text-brand-cream text-center rounded-none py-6 px-8 my-4 shadow-premium-sm relative overflow-hidden">
              <p className="font-serif italic text-lg md:text-xl text-brand-cream-dark tracking-wide relative z-10">
                We refused to accept that compromise.
              </p>
            </div>

            <p 
              className="font-sans text-sm md:text-base leading-relaxed text-justify"
              style={{ textAlign: 'justify', textJustify: 'inter-word' }}
            >
              <strong className="font-sans font-extrabold tracking-wider text-[11px] md:text-xs text-brand-green mr-2">
                DOMINION VENTURES
              </strong>
              was born to solve this exact dilemma. We reimagined packaged food from the ground up, combining clean, wholesome ingredients with state-of-the-art preservation technology. No chemical shortcuts. No compromise on flavour. This introduces you to a new era of eating—where nourishing your body takes minutes, not hours.
            </p>

            <div className="w-full border-t border-brand-cream-dark/80 my-8" />
            
            <div className="text-center flex flex-col gap-3">
              <p className="font-serif italic text-xl md:text-2xl text-brand-green tracking-wide">
                Welcome to honest, effortless nutrition.
              </p>
              <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-brand-gold/80 font-bold mt-1">
                &mdash; THE FOUNDER &mdash;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="py-16 lg:py-20 bg-white px-6 border-b border-brand-cream-dark relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePillars.map((pillar, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-brand-cream-dark shadow-premium-sm hover:shadow-premium-lg hover:border-brand-gold/45 hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col justify-between">
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-green/5 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-cream group-hover:rotate-[360deg] transition-all duration-700 shadow-inner">
                        <pillar.icon size={20} />
                      </div>
                      <span className="text-[9px] font-sans text-brand-gold uppercase tracking-widest font-bold">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-brand-green mb-3 group-hover:text-brand-gold transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>



      {/* PRODUCT PORTFOLIO SECTION */}
      <section className="py-16 lg:py-20 bg-white px-6 border-b border-brand-cream-dark relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                Brand Core Standards
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-brand-green mt-4 mb-6 leading-tight">
                Our Signature Product Portfolio
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto" />
            </FadeIn>
          </div>

          {/* Centered Single Product Layout (Makhana only) */}
          <div className="max-w-4xl mx-auto mb-16">
            <FadeIn>
              <div className="bg-brand-green-dark text-brand-cream rounded-[2.5rem] p-8 md:p-12 border border-brand-gold/30 shadow-premium-lg relative overflow-hidden group hover:shadow-premium-gold hover:shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-[460px]">
                {/* Subtle Background Radial Shine */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-green to-brand-green-dark opacity-60 pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 w-full my-auto">
                  {/* Left text */}
                  <div className="md:col-span-7 flex flex-col gap-6 text-left">
                    <div className="flex gap-2 items-center">
                      <span className="inline-block bg-brand-gold text-brand-green text-[9px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-inner">
                        Flagship Collection
                      </span>
                      <span className="text-[10px] text-brand-gold uppercase tracking-wider font-extrabold flex items-center gap-1">
                        <Star size={10} className="fill-current" />
                        Featured
                      </span>
                    </div>

                    <h3 className="font-serif text-4xl md:text-5xl text-brand-gold font-medium leading-[1.05]">
                      Makhana
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-brand-gold/80 font-bold -mt-3">
                      Signature Superfood
                    </p>
                    <p className="font-sans text-sm text-brand-cream/80 leading-relaxed">
                      Sourced directly from the clean, pesticide-free wetland ecosystems of Bihar, our premium Phool Makhana is hand-harvested by local farming collectives using heritage agricultural methods. We sort and grade each harvest to select only the largest, 18-20mm jumbo kernels. Popped by traditional roasting masters using slow wood-fired dry popping, our seeds preserve a light, grease-free crunch. Each batch is then dry-tumbled and infused with cold-pressed oils and natural gourmet spice recipes—creating an unmatched sensory experience that honors heritage while optimizing daily longevity and systemic health.
                    </p>

                    <div className="flex flex-wrap gap-2.5 mt-2">
                      {['100% Traceable', 'Jumbo 18-20mm', 'Gluten Free'].map((feat, fidx) => (
                        <span key={fidx} className="text-[10px] font-sans text-brand-gold border border-brand-gold/25 rounded-full px-3 py-1 bg-brand-green/30">
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 w-fit">
                      <button
                        onClick={() => setIsReportModalOpen(true)}
                        className="btn-gold !px-6 !py-3 shadow-premium-gold"
                      >
                        <span>View Sourcing & Quality Report</span>
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300 relative z-10" />
                      </button>
                    </div>
                  </div>

                  {/* Right image with soft zoom */}
                  <div className="md:col-span-5 flex items-center justify-center">
                    <div className="relative aspect-square w-full max-w-[280px] rounded-3xl overflow-hidden bg-brand-green border border-brand-gold/20 shadow-premium-lg group-hover:scale-105 transition-transform duration-700">
                      <img
                        src="/makhana (2).png"
                        alt="Premium Makhana Package"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:rotate-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/20 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Button to Products Page */}
          <div className="flex justify-center mt-12">
            <FadeIn delay={0.3}>
              <Link
                href="/products"
                className="btn-primary"
              >
                <span>View Products Collection</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FLAVOUR SHOWCASE SECTION */}
      <section className="py-16 lg:py-20 bg-brand-cream/15 px-6 border-b border-brand-cream-dark relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                Sensory Experience
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-brand-green mt-4 mb-6 leading-tight">
                Gourmet Flavor Collections
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-8" />

              {/* Category Selector Tabs */}
              <div className="flex gap-2 bg-brand-cream p-1.5 rounded-full border border-brand-cream-dark w-fit mx-auto shadow-premium-sm">
                <button
                  onClick={() => setActiveFlavourTab('traditional')}
                  className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${activeFlavourTab === 'traditional'
                    ? 'btn-tab-active'
                    : 'btn-tab-inactive'
                    }`}
                >
                  Traditional Collection
                </button>
                <button
                  onClick={() => setActiveFlavourTab('international')}
                  className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${activeFlavourTab === 'international'
                    ? 'btn-tab-active'
                    : 'btn-tab-inactive'
                    }`}
                >
                  International Collection
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Flavors Grid with Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {(activeFlavourTab === 'traditional' ? traditionalFlavors : internationalFlavors).map((flav, idx) => (
                <motion.div
                  key={flav.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative p-8 rounded-3xl bg-white border border-brand-cream-dark shadow-premium-sm hover:shadow-premium-lg hover:border-brand-gold/45 hover:-translate-y-2 transition-all duration-500 overflow-hidden group flex flex-col justify-between h-full`}
                >
                  {/* Custom Gradient Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${flav.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div className="relative z-10 text-left">
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-10 h-10 rounded-2xl bg-brand-green/5 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-cream transition-colors duration-300">
                        <flav.icon size={16} />
                      </div>
                      <span className="text-[9px] font-sans text-brand-gold uppercase tracking-wider font-extrabold">
                        Profile
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-brand-green mb-1 group-hover:text-brand-gold transition-colors duration-300 font-medium">
                      {flav.name}
                    </h3>
                    <p className="font-sans text-[10px] uppercase tracking-wider text-brand-charcoal/50 mb-4 font-bold">
                      {flav.tagline}
                    </p>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      {flav.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FUTURE PRODUCTS (ZIG-ZAG SHOWCASE) */}
      <section className="py-16 lg:py-20 bg-white px-6 border-b border-brand-cream-dark relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                Pipeline R&D
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-brand-green mt-4 mb-6 leading-tight">
                Future Product Innovations
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto" />
            </FadeIn>
          </div>

          {/* Alternating Zig-Zag Layout */}
          <div className="flex flex-col gap-14 max-w-6xl mx-auto">
            {futureProducts.map((prod, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={prod.title}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Visual Illustration Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <FadeIn direction={isEven ? 'left' : 'right'}>
                      <div className={`relative aspect-square w-full max-w-[340px] mx-auto rounded-[2rem] overflow-hidden border border-brand-cream-dark p-6 shadow-premium-md hover:shadow-premium-lg transition-shadow duration-500 bg-gradient-to-tr ${prod.gradient} group`}>
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="w-full h-full object-contain animate-float-slow group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </FadeIn>
                  </div>

                  {/* Text details Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col gap-6 text-left`}>
                    <FadeIn delay={0.1}>
                      <div className="flex gap-2 items-center">
                        <span className="inline-block bg-brand-gold/15 text-brand-gold border border-brand-gold/20 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                          {prod.tagline}
                        </span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-brand-green font-medium mt-2">
                        {prod.title}
                      </h3>
                      <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
                        {prod.desc}
                      </p>

                      <div className="flex flex-wrap gap-2.5 mt-2">
                        {prod.features.map((feat, fidx) => (
                          <span key={fidx} className="text-[10px] font-sans text-brand-green border border-brand-green/20 rounded-full px-3 py-1 bg-brand-cream/50">
                            {feat}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4">
                        <Link
                          href="/products"
                          className="btn-primary !px-6 !py-3.5"
                        >
                          <span>Learn More</span>
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300 relative z-10" />
                        </Link>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDITORIAL ABOUT SECTION */}
      <section className="py-16 lg:py-20 bg-brand-cream/30 px-6 border-b border-brand-cream-dark relative overflow-hidden">
        {/* Floating Decorative Leaf Pattern background */}
        <div className="absolute top-10 left-10 opacity-[0.03] rotate-12 scale-125 select-none pointer-events-none hidden xl:block">
          <Leaf size={350} className="text-brand-green" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Overlapping Images on the Left */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <FadeIn direction="left">
                <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-premium-lg border border-brand-cream-dark/60 group bg-brand-cream z-10">
                  <img
                    src="/about section img.png"
                    alt="Dominion Sourcing"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-green/5 mix-blend-multiply pointer-events-none" />
                </div>
                {/* Floating Decorative Statistics Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-4 bg-brand-green-dark border border-brand-gold/30 rounded-3xl p-6 shadow-premium-gold text-brand-cream hidden sm:block z-20 w-48 text-center"
                >
                  <span className="block font-serif text-3xl text-brand-gold font-bold">100%</span>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-cream/80 mt-1 font-bold">Traceable Source</span>
                </motion.div>
              </FadeIn>
            </div>

            {/* Content & Dashboard on the Right */}
            <div className="lg:col-span-7 flex flex-col gap-8 text-left relative z-10">
              <FadeIn>
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                  Our Corporate Mission
                </span>
                <h2 className="text-5xl md:text-6xl font-serif text-brand-green mt-4 leading-[1.1] tracking-tight">
                  Transforming Traditional Nutrition into Modern Healthy Living
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex flex-col gap-4 text-brand-charcoal/80 font-sans text-base leading-relaxed">
                  <p>
                    At Dominion Ventures, we are passionate about redefining the future of healthy snacking. By combining traditional ingredients with modern food innovation, premium processing, and advanced packaging, we create products that deliver exceptional taste, nutrition, and quality.
                  </p>
                  <p>
                    From our flagship Premium Makhana to our upcoming range of functional beverages, innovative desserts, enhanced hydration, and healthy snacks, every product reflects our commitment to natural ingredients, premium craftsmanship, and global-quality standards.
                  </p>
                </div>
              </FadeIn>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-brand-cream-dark">
                {statsList.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-serif text-3xl md:text-4xl text-brand-green font-semibold">
                      {stat.value}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-brand-charcoal/50 mt-1.5 font-bold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <FadeIn delay={0.4}>
                <div className="mt-4">
                  <Link
                    href="/about"
                    className="btn-primary"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SOURCING & PROCESSING CTA SECTION */}
      <section className="py-16 lg:py-20 bg-brand-cream/35 px-6 border-b border-brand-cream-dark relative overflow-hidden">
        {/* Decorative subtle background design elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-60" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
              Traceability & Sourcing Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-4 mb-6 leading-tight">
              Experience the Journey of Sourcing & Innovation
            </h2>
            <p className="font-sans text-base text-brand-charcoal/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover how we combine traditional Indian farming with modern food science and premium processing. Explore our 8-step business ecosystem and product development pipeline from wetland harvesting to nitrogen-sealed packaging.
            </p>
            <div className="flex justify-center">
              <Link
                href="/processing"
                className="btn-primary"
              >
                <span>Explore Sourcing & Processing Timeline</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MAKHANA REPORT MODAL */}
      {isReportModalOpen && makhanaProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsReportModalOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="bg-[#FAF9F6] border border-brand-gold/30 rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[85vh]">
            {/* Header */}
            <div className="bg-brand-green text-brand-cream p-6 md:p-8 flex justify-between items-start relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-green to-brand-green-dark opacity-60 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[9px] font-sans text-brand-gold uppercase tracking-[0.25em] font-extrabold block mb-1">
                  Innovation & Sourcing Report
                </span>
                <h3 className="font-serif text-3xl text-brand-cream font-medium">
                  {makhanaProduct.name} Sourcing Report
                </h3>
              </div>
              <button 
                onClick={() => setIsReportModalOpen(false)}
                className="relative z-10 text-brand-cream/80 hover:text-brand-gold font-sans text-xs tracking-wider uppercase border border-brand-cream/20 rounded-full px-3 py-1 bg-white/5 transition-colors"
              >
                Close
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex flex-col gap-6 text-left font-sans text-brand-charcoal/90 text-sm leading-relaxed">
              {/* Overview */}
              <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed bg-brand-cream p-6 rounded-[1.8rem] border border-brand-cream-dark whitespace-pre-line shadow-inner">
                {makhanaProduct.detailedReport.overview}
              </p>
              
              <div className="border-t border-brand-cream-dark my-2" />
              
              {/* Report Sections */}
              {makhanaProduct.detailedReport.sections.map((sec, sidx) => (
                <div key={sidx} className="mb-4">
                  <h4 className="font-serif text-lg text-brand-green font-bold mb-3 uppercase tracking-wide">
                    {sec.title}
                  </h4>
                  
                  {sec.content && (
                    <p className="font-sans text-xs text-brand-charcoal/80 leading-relaxed mb-3">
                      {sec.content}
                    </p>
                  )}

                  {sec.bullets && (
                    <ul className="list-disc pl-5 flex flex-col gap-2 mb-4">
                      {sec.bullets.map((bullet, bidx) => (
                        <li key={bidx} className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.table && (
                    <div className="overflow-x-auto rounded-2xl border border-brand-cream-dark mt-4 mb-4 shadow-sm">
                      <table className="min-w-full divide-y divide-brand-cream-dark">
                        <thead className="bg-brand-cream">
                          <tr>
                            {sec.table.headers.map((h, hidx) => (
                              <th key={hidx} className="px-4 py-3.5 text-left text-[10px] font-sans font-bold uppercase tracking-wider text-brand-green">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-brand-cream-dark">
                          {sec.table.rows.map((row, ridx) => (
                            <tr key={ridx} className="hover:bg-brand-cream/15 transition-colors duration-250">
                              {row.map((cell, cidx) => (
                                <td key={cidx} className="px-4 py-3.5 text-xs font-sans text-brand-charcoal/85 leading-relaxed">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="bg-brand-cream-dark p-4 md:p-6 border-t border-brand-cream-dark flex flex-col sm:flex-row gap-3 justify-between items-center text-[10px] text-brand-charcoal/50 font-sans font-bold uppercase tracking-widest flex-shrink-0">
              <span>Dominion Ventures Quality Assurance</span>
              <span>Report ID: DV-MX-2026-A</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
