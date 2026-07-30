'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, Sparkles, BookOpen, Lightbulb, Smile, 
  Settings, ShieldCheck, Eye, Compass, Heart, 
  TrendingUp, Zap, Package, ArrowUpRight, CheckCircle2 
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const ecosystemCards = [
  {
    title: 'Brand Story',
    desc: 'Traditional Indian foods reimagined through modern food innovation and premium craftsmanship.',
    icon: BookOpen
  },
  {
    title: 'Product Innovation',
    desc: 'Developing healthier snacks, functional beverages, and next-generation food concepts inspired by nature.',
    icon: Lightbulb
  },
  {
    title: 'Consumer Experience',
    desc: 'Creating products that combine exceptional taste, nutrition, premium quality, and memorable experiences.',
    icon: Smile
  },
  {
    title: 'Business Operations',
    desc: 'Ethical sourcing, quality control, modern processing, advanced packaging, and efficient distribution.',
    icon: Settings
  },
  {
    title: 'Brand Promise',
    desc: 'Delivering premium-quality products that consumers can trust every day.',
    icon: ShieldCheck
  },
  {
    title: 'Consumer Insights',
    desc: 'Understanding changing lifestyles to create healthier alternatives for modern consumers.',
    icon: Eye
  },
  {
    title: 'Purchase Journey',
    desc: 'From farm to shelf, every product is designed for convenience, freshness, and satisfaction.',
    icon: Compass
  },
  {
    title: 'Brand Culture',
    desc: 'Driven by innovation, sustainability, quality, and continuous improvement.',
    icon: Heart
  }
];

const processSteps = [
  {
    step: 'Step 1',
    title: 'Product Strategy',
    desc: 'Identify market opportunities, emerging food trends, and develop innovative healthy products.',
    icon: TrendingUp
  },
  {
    step: 'Step 2',
    title: 'Product Development',
    desc: 'Design recipes, optimize ingredients, develop flavors, and ensure nutritional excellence.',
    icon: Zap
  },
  {
    step: 'Step 3',
    title: 'Quality & Testing',
    desc: 'Test consistency, taste, texture, safety, and consumer acceptance before production.',
    icon: ShieldCheck
  },
  {
    step: 'Step 4',
    title: 'Processing & Packaging',
    desc: 'Use modern processing techniques together with nitrogen flushing and premium packaging to preserve freshness and quality.',
    icon: Package
  },
  {
    step: 'Step 5',
    title: 'Brand Positioning',
    desc: 'Develop premium branding, packaging design, and product presentation that reflects Dominion Ventures\' identity.',
    icon: Sparkles
  },
  {
    step: 'Step 6',
    title: 'Market Launch',
    desc: 'Launch products across retail, wholesale, export, and online distribution channels while continuously improving through customer feedback.',
    icon: ArrowUpRight
  }
];

export default function Processing() {
  return (
    <div className="bg-white min-h-screen py-12">
      {/* Header Banner */}
      <section className="bg-brand-cream py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
              Traceability & Process Blueprint
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green mt-6 mb-8 max-w-3xl leading-tight">
              Crafting Excellence, <br />
              <span className="italic text-brand-gold">From Wetland to Package.</span>
            </h1>
            <div className="h-[2px] w-28 bg-brand-gold" />
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1: DOMINION VENTURES BUSINESS ECOSYSTEM */}
      <section className="py-24 bg-brand-cream/10 px-6 border-b border-brand-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
                Business Ecosystem
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-4 mb-6">
                Building a Brand That Inspires Healthy Living
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-6" />
              <p className="font-sans text-base text-brand-charcoal/70 leading-relaxed">
                At Dominion Ventures, every product follows a carefully designed journey—from ethical sourcing and product innovation to premium packaging, consumer experience, and long-term brand growth.
              </p>
            </FadeIn>
          </div>

          {/* DESKTOP VIEW: Circular Interactive Infographic */}
          <div className="relative w-full max-w-[900px] aspect-square mx-auto hidden lg:flex items-center justify-center">
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="-450 -450 900 900">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#062C19" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C5A880" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {ecosystemCards.map((_, idx) => {
                const angle = (idx * 360) / 8 - 90; // offset by 90deg to start at top
                const rad = (angle * Math.PI) / 180;
                const x = Math.round(Math.cos(rad) * 330);
                const y = Math.round(Math.sin(rad) * 330);
                return (
                  <motion.line
                    key={idx}
                    x1="0"
                    y1="0"
                    x2={x}
                    y2={y}
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                );
              })}
            </svg>

            {/* Central Circle Element */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-52 h-52 rounded-full bg-brand-green-dark border-2 border-brand-gold text-brand-cream flex flex-col items-center justify-center text-center p-6 shadow-2xl relative z-20"
            >
              <span className="font-serif text-2xl font-semibold tracking-wide text-brand-gold">Dominion</span>
              <span className="font-serif text-lg font-light tracking-widest text-brand-gold/90 -mt-1">Ventures</span>
              <div className="w-10 h-[1px] bg-brand-gold/40 my-3" />
              <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-brand-cream/80 max-w-[130px] leading-relaxed">
                Traditional Nutrition • Modern Innovation
              </span>
            </motion.div>

            {/* 8 Circular Surrounding Cards */}
            {ecosystemCards.map((card, idx) => {
              const angle = (idx * 360) / 8 - 90;
              const rad = (angle * Math.PI) / 180;
              const x = Math.round(Math.cos(rad) * 330);
              const y = Math.round(Math.sin(rad) * 330);
              return (
                <motion.div
                  key={idx}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.8 }}
                  whileInView={{ x, y, opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 60, damping: 15, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="absolute w-60 bg-white/80 backdrop-blur-md border border-brand-cream-dark rounded-2xl p-5 shadow-md hover:shadow-2xl hover:border-brand-gold/40 transition-all duration-300 group z-10"
                >
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-green/5 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-cream transition-colors duration-300 shrink-0">
                      <card.icon size={16} />
                    </div>
                    <h4 className="font-serif text-base text-brand-green font-medium group-hover:text-brand-gold transition-colors duration-300">
                      {card.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* TABLET VIEW: 2-Column Responsive Grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 max-w-4xl mx-auto relative px-4">
            {ecosystemCards.map((card, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="bg-white/80 backdrop-blur-sm border border-brand-cream-dark rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group h-full flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/5 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-cream transition-colors duration-300 shrink-0">
                    <card.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brand-green font-medium group-hover:text-brand-gold transition-colors duration-300 mb-2">
                      {card.title}
                    </h4>
                    <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* MOBILE VIEW: Vertical Timeline connected with animated lines */}
          <div className="flex md:hidden flex-col gap-8 relative pl-6 border-l-2 border-brand-gold/30 mx-4">
            {ecosystemCards.map((card, idx) => (
              <div key={idx} className="relative">
                {/* Connector Dot */}
                <span className="absolute -left-[31px] top-2.5 w-4 h-4 rounded-full bg-brand-green border-2 border-brand-gold z-10" />
                <FadeIn delay={idx * 0.05}>
                  <div className="bg-white/95 border border-brand-cream-dark rounded-2xl p-5 shadow-sm group">
                    <div className="flex gap-3 items-center mb-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-green/5 text-brand-green flex items-center justify-center shrink-0">
                        <card.icon size={16} />
                      </div>
                      <h4 className="font-serif text-base text-brand-green font-medium">
                        {card.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCT DEVELOPMENT PROCESS */}
      <section className="py-24 bg-white px-6 border-b border-brand-cream-dark">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
                Product Development Process
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-4 mb-6">
                From Idea to Premium Product
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-6" />
              <p className="font-sans text-base text-brand-charcoal/70 leading-relaxed">
                Every Dominion Ventures product follows a carefully structured development process focused on innovation, quality, and consumer satisfaction.
              </p>
            </FadeIn>
          </div>

          {/* DESKTOP VIEW: Horizontal Timeline */}
          <div className="relative hidden lg:block mb-16">
            {/* Animated Progress Line */}
            <div className="absolute top-[80px] left-8 right-8 h-[2px] bg-brand-cream-dark z-0">
              <motion.div 
                className="h-full bg-brand-gold origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>

            <div className="grid grid-cols-6 gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.15}>
                  <div className="flex flex-col items-center group h-full">
                    {/* Circle Node Container */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full bg-white border border-brand-cream-dark group-hover:border-brand-gold flex items-center justify-center text-brand-green shadow-md group-hover:shadow-lg transition-all duration-300 z-10 relative">
                        <step.icon size={22} className="group-hover:text-brand-gold transition-colors duration-300" />
                      </div>
                      {/* Step Number Badge */}
                      <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-brand-green text-brand-gold font-sans text-[10px] font-bold flex items-center justify-center border border-brand-gold/30">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Step Card */}
                    <div className="bg-white rounded-2xl p-5 border border-brand-cream-dark group-hover:border-brand-gold/40 shadow-sm hover:shadow-xl transition-all duration-500 text-center flex-grow flex flex-col justify-between">
                      <div>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-brand-gold font-bold block mb-2">
                          {step.step}
                        </span>
                        <h4 className="font-serif text-lg text-brand-green font-medium mb-3 group-hover:text-brand-gold transition-colors duration-300">
                          {step.title}
                        </h4>
                        <p className="font-sans text-[11px] text-brand-charcoal/70 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* TABLET VIEW: Two-Column Grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 px-4">
            {processSteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-[2rem] p-6 border border-brand-cream-dark hover:border-brand-gold/40 shadow-sm hover:shadow-lg transition-all duration-300 group flex gap-4 h-full">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-green/5 border border-brand-cream-dark text-brand-green flex items-center justify-center">
                      <step.icon size={18} />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-green text-brand-gold font-sans text-[9px] font-bold flex items-center justify-center border border-brand-gold/30">
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-widest text-brand-gold font-bold block mb-1">
                      {step.step}
                    </span>
                    <h4 className="font-serif text-base text-brand-green font-medium mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* MOBILE VIEW: Vertical Timeline with connected steps */}
          <div className="flex md:hidden flex-col gap-8 relative pl-6 border-l-2 border-brand-gold/30 mx-4 mb-16">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] top-2.5 w-4 h-4 rounded-full bg-brand-green border-2 border-brand-gold z-10" />
                
                <FadeIn delay={idx * 0.05}>
                  <div className="bg-white border border-brand-cream-dark rounded-2xl p-5 shadow-sm group">
                    <div className="flex gap-3 items-center mb-3">
                      <div className="w-9 h-9 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center shrink-0">
                        <step.icon size={14} />
                      </div>
                      <div>
                        <span className="font-sans text-[9px] uppercase tracking-widest text-brand-gold font-bold block">
                          {step.step}
                        </span>
                        <h4 className="font-serif text-base text-brand-green font-medium">
                          {step.title}
                        </h4>
                      </div>
                    </div>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Gate Check Section */}
      <section className="py-24 px-6 bg-white max-w-5xl mx-auto">
        <div className="p-8 md:p-12 rounded-[2rem] bg-brand-green-dark text-brand-cream border border-brand-gold/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-green to-brand-green-dark opacity-50" />
          
          <div className="relative z-10">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">Export Ready Validation</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-8 text-brand-gold">Our Quality Guarantees</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-brand-cream/10 pt-8">
              <div className="flex gap-3 items-start">
                <CheckCircle2 size={18} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wider block text-brand-cream">100% Food Grade Materials</span>
                  <p className="font-sans text-xs text-brand-cream/60 mt-1">Our packaging materials are food-grade and certified for chemical migrations.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <CheckCircle2 size={18} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wider block text-brand-cream">Direct Wetlands Sourcing</span>
                  <p className="font-sans text-xs text-brand-cream/60 mt-1">We maintain deep roots in local harvesting sites, ensuring 100% batch traceability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
