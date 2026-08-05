'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Sparkles, ShieldCheck, Leaf, Flame,
  Zap, Award, Star, Quote, ChevronLeft, ChevronRight,
  Package, CheckCircle2, Sun, MapPin, Check
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { products } from '@/data/products';
import { ensureInfographicImages } from '@/app/actions';

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
// Makhana Processing Standards
const processingSteps = [
  { step: '01', title: 'Ethical Sourcing', desc: 'Direct farm integration securing fair trade wages and traceably pure crop yields.' },
  { step: '02', title: 'Sun Drying', desc: 'Elevated natural drying to preserve starch density and kernel structure.' },
  { step: '03', title: 'Grading & Sorting', desc: 'Sorting only the largest, premium-grade kernels (18mm to 20mm) for unmatched consistency.' },
  { step: '04', title: 'Pre-Heating & Roasting', desc: 'Conditioning starches for slow wood-fired dry popping to achieve a light, grease-free crunch.' },
  { step: '05', title: 'Manual popping', desc: 'Hand-crafted by traditional roasting masters using wooden mallets.' },
  { step: '06', title: 'Polishing', desc: 'Clean tumbling to preserve crunch and remove shell fragments.' }
];

// Advanced Packaging Solutions
const packagingSolutions = [
  { title: 'Moisture Barriers', desc: 'High-density multi-layered protection preventing humidity degradation.' },
  { title: 'Nitrogen Flushing', desc: 'Hermetically sealing packages with nitrogen to eliminate oxidation and preserve natural spices.' },
  { title: 'Custom Sizing', desc: 'Customized retail bags, sharing packs, and commercial bulk boxes.' },
  { title: 'Private Labeling', desc: 'Bespoke branding and seasoning contract manufacturing.' }
];

const southStates = ['Telangana', 'Andhra Pradesh', 'Tamil Nadu', 'Kerala', 'Karnataka'];

const regionalFlavors = {
  savory: [
    'Gunpowder (Podi) Curry leaf & Mustard',
    'Chettinad Spice',
    'Malabar Black Pepper'
  ],
  creamy: [
    'Puliyogare (Tamarind Rice mix)',
    'Coconut Lime',
    'Curd Rice style'
  ],
  aromatic: [
    'Sambar Masala',
    'Rasam powder',
    'Bisi Bele Bhath Spice'
  ]
};

const internationalExportProfiles = [
  {
    category: 'Western Fast-Casual & BBQ Profiles',
    desc: 'These flavours leverage familiar, deeply entrenched Snacking flavours that American & European Consumers already love in potato chips & popcorn.',
    flavors: ['Texas Style Smoky BBQ', 'Sour Cream & Wild Chive', 'Sweet Chili & Lime']
  },
  {
    category: 'European Herb & Cheese Profiles',
    desc: 'European consumers, particularly in Continental Europe and the UK, highly favor gourmet cheese variations and savory, garden fresh herbs.',
    flavors: ['White Cheddar & Truffle', 'Mediterranean Sea Salt & Rosemary', 'French Sour Cream & Onion']
  },
  {
    category: 'Trending Global Fusion Profiles',
    desc: 'These Flavours target Millennial and GenZ demographics who actively seek out bold, cross cultural, and spicy flavour experiences.',
    flavors: ['Sriracha Lime', 'Korean BBQ (Bulgogi)', 'White Chocolate & Matcha / Salted Caramel Infusion']
  }
];

const roastingPhilosophyNote = "note: We always roast the makhana in ghee / Coconut oil / olive oil first and then add the spice blends immediately after roasting while the makhana is hot and due to its natural spongy and porous texture seasonings sticks perfectly to the surface.";

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

// Future Products 4-Grid Data
const futureProducts = [
  {
    id: 'ice-cream',
    title: 'Flavorette, The Malt edition icecream',
    tagline: 'Model 1, 2 & 3 Servings',
    desc: 'Anatomically sculpted fruit gelato shells encasing fresh berry sorbets, ultra-viscous shake layers separating rich pistachio creams, and interactive painter\'s palette plating concepts.',
    image: '/next_gen_ice (2).png',
    gradient: 'from-pink-500/10 via-purple-500/5 to-transparent',
    features: ['Sculpted Fruit Shells', 'Viscous Creams', 'Artist Palette']
  },
  {
    id: 'soda',
    title: 'The Gulp , Pop ( fruit flavoured soda )',
    tagline: 'Prebiotic & Probiotic Soda',
    desc: 'Guilt-free alternative to traditional HFCS soft drinks. Formulated with gut-microbiome prebiotic fibers, probiotic proteins, and organic botanical caffeine from tea sources.',
    image: '/Functional Soda.png',
    gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
    features: ['Digestive Prebiotics', 'Probiotic Proteins', 'Real Fruit Flavors']
  },
  {
    id: 'water',
    title: 'Enhance longevity ( Vit+ Min) water',
    tagline: 'Bioactive Synergy Hydration',
    desc: 'Advanced water-soluble delivery mechanism infused with scientifically validated synergistic pairings (Vitamin D3 + Magnesium + K2) to optimize cellular repair and systemic health span.',
    image: '/water (2).png',
    gradient: 'from-indigo-500/10 via-blue-500/5 to-transparent',
    features: ['D3 + Magnesium + K2 Synergy', 'Fast Water Absorption', 'Ionic Trace Minerals']
  },
  {
    id: 'jackfruit-chips',
    title: 'pure crunch Jackfruit chips.',
    tagline: 'Vacuum-Cooked Sustainable Snack',
    desc: 'Crispy vacuum-cooked jackfruit slices that minimize agricultural post-harvest waste and provide a healthier, low-fat alternative to traditional potato chips across 190 nations.',
    image: '/jack_chips (2).png',
    gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
    features: ['Vacuum Cooked', 'GI Tag Sourced', 'Zero Waste']
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
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedInfographic, setSelectedInfographic] = useState<{ title: string; image: string } | null>(null);

  useEffect(() => {
    ensureInfographicImages();
  }, []);

  const makhanaProduct = products.find(p => p.id === 'makhana');

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="top" className="flex flex-col w-full bg-white relative">
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

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-brand-green leading-[1.08] tracking-tight">
              <span className="inline-block whitespace-nowrap">Modern Nourishment,</span><br />
              <span className="italic text-brand-gold">Reimagined.</span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-brand-charcoal/90 max-w-xl leading-relaxed tracking-normal mt-1">
              Our new range of organic, traditional snacks and functional beverages blends time-honoured culinary heritage with modern wellness science to nourish your body and soul. Every bite and sip delivers authentic, wholesome flavours crafted from pure, sustainably sourced ingredients designed to fuel your active daily lifestyle.
            </p>
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

      {/* BRAND & FMCG FRAMEWORK INFOGRAPHICS SECTION */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6] px-6 border-b border-brand-cream-dark relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                Strategic Foundation
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-green mt-3 mb-6 leading-tight">
                Frameworks Driving Our Growth
              </h2>
              <p className="font-sans text-sm md:text-base text-brand-charcoal/75 leading-relaxed">
                At Dominion Ventures, our product engineering and brand execution follow systematic FMCG principles and end-to-end consumer journey strategies.
              </p>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto mt-6" />
            </FadeIn>
          </div>

          {/* 2-Column Infographics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Framework 1: Product in FMCG */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-cream-dark shadow-sm hover:shadow-premium-lg transition-all duration-500 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-block bg-brand-green/10 text-brand-green border border-brand-green/20 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                      FMCG Strategy
                    </span>
                    <span className="text-[10px] text-brand-gold font-sans uppercase tracking-wider font-extrabold">
                      Click to Enlarge
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-medium mb-3">
                    Product In FMCG
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed mb-6">
                    Building products people trust and love every day — encompassing Strategy, Product Attributes, Lifecycle, Packaging & Labelling, Positioning, and Supply Chain Resilience.
                  </p>

                  <div 
                    onClick={() => setSelectedInfographic({ title: 'Product In FMCG Framework', image: '/fmcg_product_framework.jpg' })}
                    className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-brand-cream-dark bg-brand-cream/30 shadow-inner cursor-pointer group-hover:border-brand-gold/50 transition-all duration-500"
                  >
                    <img
                      src="/fmcg_product_framework.jpg"
                      alt="Product in FMCG Infographic"
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-brand-green text-brand-gold text-xs font-sans font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                        View Full Screen
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Framework 2: Running a Brand */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-cream-dark shadow-sm hover:shadow-premium-lg transition-all duration-500 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-block bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                      Brand Operations
                    </span>
                    <span className="text-[10px] text-brand-gold font-sans uppercase tracking-wider font-extrabold">
                      Click to Enlarge
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-medium mb-3">
                    Running A Brand
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed mb-6">
                    Comprehensive operational ecosystem — connecting Brand Story, Brand Promise, Consumer Knowledge, Product Innovation, Operations, Purchase Moments, Experience & Culture.
                  </p>

                  <div 
                    onClick={() => setSelectedInfographic({ title: 'Running A Brand Framework', image: '/running_a_brand_framework.jpg' })}
                    className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-brand-cream-dark bg-brand-cream/30 shadow-inner cursor-pointer group-hover:border-brand-gold/50 transition-all duration-500"
                  >
                    <img
                      src="/running_a_brand_framework.jpg"
                      alt="Running A Brand Infographic"
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-brand-green text-brand-gold text-xs font-sans font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                        View Full Screen
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PRODUCT PORTFOLIO SECTION */}
      <section id="products" className="py-16 lg:py-20 bg-white px-6 border-b border-brand-cream-dark relative">
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
                      Nu trait Makhana
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-brand-gold/80 font-bold -mt-3">
                      Signature Superfood
                    </p>
                    <p className="font-sans text-sm text-brand-cream/80 leading-relaxed">
                      Makhana has evolved from a traditional Indian superfood into a global health phenomenon. At DOMINION VENTURES, we bridge the gap between ancient agricultural wisdom and modern food safety standards. Our meticulous farm-to-pack process ensures every Makhana seed retains its natural nutrients, pristine white color, and signature crunch.
                    </p>

                    <div className="flex flex-wrap gap-2.5 mt-2">
                      {['100% Traceable', 'Jumbo 18-20mm', 'Gluten Free'].map((feat, fidx) => (
                        <span key={fidx} className="text-[10px] font-sans text-brand-gold border border-brand-gold/25 rounded-full px-3 py-1 bg-brand-green/30">
                          {feat}
                        </span>
                      ))}
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

          {/* OUR PROCESSING STANDARDS */}
          <div className="mt-16 pt-16 border-t border-brand-cream-dark">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <FadeIn>
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                  Quality Control Process
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-brand-green mt-3 mb-4 leading-tight">
                  OUR PROCESSING STANDARDS
                </h3>
                <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed">
                  We transform raw gorgon nut seeds into premium, ready-to-eat makhana through a strict, multi-stage quality control process.
                </p>
                <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-6" />
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processingSteps.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.08}>
                  <div className="bg-brand-cream/40 rounded-3xl p-7 border border-brand-cream-dark hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-serif text-3xl font-bold text-brand-gold/60 group-hover:text-brand-gold transition-colors">
                          {step.step}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-cream transition-colors">
                          <CheckCircle2 size={16} />
                        </div>
                      </div>
                      <h4 className="font-serif text-xl text-brand-green font-medium mb-2 group-hover:text-brand-gold transition-colors">
                        {step.title}
                      </h4>
                      {step.desc && (
                        <p className="font-sans text-xs text-brand-charcoal/75 leading-relaxed">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* ADVANCED PACKAGING SOLUTIONS */}
          <div className="mt-16 pt-16 border-t border-brand-cream-dark">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <FadeIn>
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                  Preservation Technology
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-brand-green mt-3 mb-4 leading-tight">
                  ADVANCED PACKAGING SOLUTIONS
                </h3>
                <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed">
                  To maintain freshness and prevent spoilage, our packaging line utilizes cutting edge food preservation technology.
                </p>
                <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-6" />
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packagingSolutions.map((pack, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-brand-green text-brand-cream rounded-3xl p-7 border border-brand-gold/20 shadow-md hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 rounded-2xl bg-white/10 text-brand-gold flex items-center justify-center mb-5 group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
                        <Package size={18} />
                      </div>
                      <h4 className="font-serif text-xl text-brand-gold font-medium mb-2">
                        {pack.title}
                      </h4>
                      {pack.desc && (
                        <p className="font-sans text-xs text-brand-cream/80 leading-relaxed">
                          {pack.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* REGIONAL SOUTH INDIAN FLAVORS & SEASONINGS */}
          <div className="mt-16 pt-16 border-t border-brand-cream-dark">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <FadeIn>
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                  Regional Flavor Launch
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-brand-green mt-3 mb-4 leading-tight">
                  REGIONAL SOUTH INDIAN FLAVORS & SEASONINGS
                </h3>
                <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                  At Dominion Ventures our goal is to introduce Makhana in five South Indian states Telangana, Andhrapradesh, Tamil Nadu, Kerala & Karnataka with regional flavours & seasonings. Our flagship Savory, Creamy, Aromatic Flavours are as follows.
                </p>

                {/* State Badges */}
                <div className="flex flex-wrap justify-center gap-3 mt-6 mb-8">
                  {southStates.map((state, sidx) => (
                    <span key={sidx} className="inline-flex items-center gap-1.5 bg-brand-cream border border-brand-gold/40 text-brand-green text-xs font-sans font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-premium-sm">
                      <MapPin size={12} className="text-brand-gold" />
                      {state}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Flavor Categories Grid (3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Classic & Savory */}
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-3xl p-7 border border-brand-cream-dark shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-brand-cream-dark">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
                      <Flame size={20} />
                    </div>
                    <div>
                      <span className="text-[9px] font-sans text-brand-gold uppercase tracking-widest font-extrabold block">Category 01</span>
                      <h4 className="font-serif text-xl text-brand-green font-medium">CLASSIC & SAVORY FLAVORS</h4>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {regionalFlavors.savory.map((item, fidx) => (
                      <div key={fidx} className="flex gap-3 items-center p-3.5 rounded-2xl bg-brand-cream/30 border border-brand-cream-dark/60">
                        <div className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-green flex items-center justify-center text-xs font-bold shrink-0">
                          ✓
                        </div>
                        <span className="font-sans text-xs font-semibold text-brand-green">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Tangy & Creamy */}
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-3xl p-7 border border-brand-cream-dark shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-brand-cream-dark">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center font-bold">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <span className="text-[9px] font-sans text-brand-gold uppercase tracking-widest font-extrabold block">Category 02</span>
                      <h4 className="font-serif text-xl text-brand-green font-medium">TANGY & CREAMY FLAVORS</h4>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {regionalFlavors.creamy.map((item, fidx) => (
                      <div key={fidx} className="flex gap-3 items-center p-3.5 rounded-2xl bg-brand-cream/30 border border-brand-cream-dark/60">
                        <div className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-green flex items-center justify-center text-xs font-bold shrink-0">
                          ✓
                        </div>
                        <span className="font-sans text-xs font-semibold text-brand-green">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Rich & Aromatic */}
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-3xl p-7 border border-brand-cream-dark shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-brand-cream-dark">
                    <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-700 flex items-center justify-center font-bold">
                      <Zap size={20} />
                    </div>
                    <div>
                      <span className="text-[9px] font-sans text-brand-gold uppercase tracking-widest font-extrabold block">Category 03</span>
                      <h4 className="font-serif text-xl text-brand-green font-medium">RICH AND AROMATIC FLAVORS</h4>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {regionalFlavors.aromatic.map((item, fidx) => (
                      <div key={fidx} className="flex gap-3 items-center p-3.5 rounded-2xl bg-brand-cream/30 border border-brand-cream-dark/60">
                        <div className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-green flex items-center justify-center text-xs font-bold shrink-0">
                          ✓
                        </div>
                        <span className="font-sans text-xs font-semibold text-brand-green">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* INTERNATIONAL FLAVOURS & SEASONING FOR EXPORT RANGE */}
          <div className="mt-16 pt-16 border-t border-brand-cream-dark">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <FadeIn>
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                  Global Export Range
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-brand-green mt-3 mb-4 leading-tight">
                  INTERNATIONAL FLAVOURS & SEASONING FOR EXPORT RANGE
                </h3>
                <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-6" />
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {internationalExportProfiles.map((prof, pidx) => (
                <FadeIn key={pidx} delay={pidx * 0.1}>
                  <div className="bg-brand-green-dark text-brand-cream rounded-3xl p-8 border border-brand-gold/30 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-sans text-brand-gold uppercase tracking-widest font-extrabold block mb-2">
                        Export Profile 0{pidx + 1}
                      </span>
                      <h4 className="font-serif text-2xl text-brand-gold font-medium mb-3">
                        {prof.category}
                      </h4>
                      <p className="font-sans text-xs text-brand-cream/80 leading-relaxed mb-6">
                        {prof.desc}
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {prof.flavors.map((item, fidx) => (
                          <div key={fidx} className="flex gap-2.5 items-center bg-white/5 border border-brand-gold/20 rounded-xl px-3.5 py-2.5">
                            <Star size={12} className="text-brand-gold shrink-0 fill-current" />
                            <span className="font-sans text-xs font-semibold text-brand-cream">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* OUR ROASTING PHILOSOPHY NOTE */}
          <div className="mt-16 pt-12">
            <FadeIn>
              <div className="bg-brand-cream p-8 md:p-10 rounded-[2.5rem] border border-brand-gold/40 shadow-inner text-left max-w-4xl mx-auto">
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold block mb-2">
                  Culinary Philosophy
                </span>
                <p className="font-sans text-sm md:text-base text-brand-charcoal/90 leading-relaxed italic">
                  {roastingPhilosophyNote}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FUTURE PRODUCTS (4-GRID SHOWCASE) */}
      <section id="future-products" className="py-16 lg:py-20 bg-white px-6 border-b border-brand-cream-dark relative">
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

          {/* Horizontal 4-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureProducts.map((prod, idx) => (
              <FadeIn key={prod.id} delay={idx * 0.1}>
                <div className="bg-brand-cream/30 rounded-3xl p-6 border border-brand-cream-dark shadow-sm hover:shadow-premium-lg hover:border-brand-gold/45 transition-all duration-500 flex flex-col justify-between h-full group">
                  <div>
                    {/* Visual Card Image */}
                    <div className={`relative aspect-square w-full rounded-2xl overflow-hidden border border-brand-cream-dark/60 p-4 mb-6 bg-gradient-to-tr ${prod.gradient} flex items-center justify-center`}>
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <span className="inline-block bg-brand-gold/15 text-brand-gold border border-brand-gold/20 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">
                      {prod.tagline}
                    </span>

                    <h3 className="font-serif text-2xl text-brand-green font-medium mb-3 group-hover:text-brand-gold transition-colors">
                      {prod.title}
                    </h3>

                    <p className="font-sans text-xs text-brand-charcoal/75 leading-relaxed mb-4 line-clamp-3">
                      {prod.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prod.features.map((feat, fidx) => (
                        <span key={fidx} className="text-[9px] font-sans font-medium text-brand-green border border-brand-green/20 rounded-full px-2.5 py-0.5 bg-brand-cream">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link
                    href={`/products/${prod.id}`}
                    className="btn-gold !w-full !justify-center !py-2.5 text-xs shadow-premium-gold"
                  >
                    <span>Read More</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300 relative z-10" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
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

      {/* INFOGRAPHIC LIGHTBOX MODAL */}
      {selectedInfographic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedInfographic(null)}
          />
          <div className="bg-[#FAF9F6] border border-brand-gold/30 rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col">
            <div className="bg-brand-green text-brand-cream p-5 md:p-6 flex justify-between items-center shrink-0">
              <h3 className="font-serif text-2xl text-brand-gold font-medium">
                {selectedInfographic.title}
              </h3>
              <button
                onClick={() => setSelectedInfographic(null)}
                className="text-brand-cream/80 hover:text-brand-gold font-sans text-xs tracking-wider uppercase border border-brand-cream/20 rounded-full px-4 py-1.5 bg-white/10 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
            <div className="p-4 md:p-6 overflow-y-auto flex items-center justify-center bg-black/5">
              <img
                src={selectedInfographic.image}
                alt={selectedInfographic.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
