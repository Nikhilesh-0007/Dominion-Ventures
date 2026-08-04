'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, BookOpen, Lightbulb, Smile,
  ShieldCheck, Eye, Compass, Heart,
  TrendingUp, Zap, Package, CheckCircle2,
  Users, Target, Award, BarChart3, AlertTriangle,
  Layers, Layers2, FileText, ChevronRight, Check
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';

// IMAGE 1: RUNNING A BRAND - 8 PILLARS WITH SUB-ITEMS
const brandPillars = [
  {
    id: 1,
    title: '1. Brand Story',
    shortDesc: 'Crafting an authentic narrative through heritage, creative assets, and consistent tone of voice.',
    icon: BookOpen,
    badgeColor: 'bg-red-500/10 text-red-700 border-red-200 hover:bg-red-500 hover:text-white',
    dotColor: 'bg-red-500',
    subItems: [
      'Earned Media', 'Shared Media', 'Owned Media', 'Paid Media',
      'Creative Brief', 'Creative Assets', 'Tone of Voice', 'Communication Strategy'
    ]
  },
  {
    id: 2,
    title: '2. Brand Promise',
    shortDesc: 'Defining core values, functional & emotional benefits, and positioning statement.',
    icon: ShieldCheck,
    badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-200 hover:bg-amber-500 hover:text-white',
    dotColor: 'bg-amber-500',
    subItems: [
      'Support', 'Features', 'Emotional Benefits', 'Brand Idea',
      'Functional Benefits', 'Brand Concept', 'Positioning Statement'
    ]
  },
  {
    id: 3,
    title: '3. Consumer Knowledge',
    shortDesc: 'Deep consumer insights, funnel tracking, desired responses, and targeted persona moments.',
    icon: Users,
    badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-200 hover:bg-emerald-500 hover:text-white',
    dotColor: 'bg-emerald-500',
    subItems: [
      'Moments', 'Desired Response', 'Target Consumer',
      'Consumer Insights', 'Funnel Tracking', 'Consumer Enemy'
    ]
  },
  {
    id: 4,
    title: '4. Product Innovation',
    shortDesc: 'Idea pipeline, R&D testing, concept validation, and new product development (NPD).',
    icon: Lightbulb,
    badgeColor: 'bg-purple-500/10 text-purple-700 border-purple-200 hover:bg-purple-500 hover:text-white',
    dotColor: 'bg-purple-500',
    subItems: [
      'NPD Testing', 'NPD Production', 'Idea Pipeline', 'Launch Plan',
      'Concept Testing', 'R&D Plan', 'Brainstorming Ideas', 'Exploration Research'
    ]
  },
  {
    id: 5,
    title: '5. Business Operations',
    shortDesc: 'Strategic planning, supply chain logistics, financial tracking, and production scalability.',
    icon: TrendingUp,
    badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white',
    dotColor: 'bg-blue-500',
    subItems: [
      'Investments', 'Vision', 'Strategic Plan', 'Key Issues',
      'Strategies', 'Supply Chain', 'Financial Tracking', 'Sales Forecast', 'Production', 'Profitability'
    ]
  },
  {
    id: 6,
    title: '6. Purchase Moment',
    shortDesc: 'Retail assortment, buyer relations, customer analytics, shelf space, and e-commerce.',
    icon: Compass,
    badgeColor: 'bg-orange-500/10 text-orange-700 border-orange-200 hover:bg-orange-500 hover:text-white',
    dotColor: 'bg-orange-500',
    subItems: [
      'Customer Prioritization', 'Key Accounts', 'Shelf Space', 'Buyer Relations',
      'Pricing', 'Customer Analytics', 'Assortment', 'Customer Marketing', 'Merchandising', 'E-Commerce'
    ]
  },
  {
    id: 7,
    title: '7. Consumer Experience',
    shortDesc: 'Consumer centricity, seamless customer journey, emotional connection, and personalization.',
    icon: Smile,
    badgeColor: 'bg-teal-500/10 text-teal-700 border-teal-200 hover:bg-teal-500 hover:text-white',
    dotColor: 'bg-teal-500',
    subItems: [
      'Service Systems', 'Consumer Centricity', 'Consistency',
      'Consumer Journey', 'Service Values', 'Emotional Connection', 'Personalization'
    ]
  },
  {
    id: 8,
    title: '8. Brand Culture',
    shortDesc: 'Building company purpose, leadership values, organizational structure, and brand credo.',
    icon: Heart,
    badgeColor: 'bg-pink-500/10 text-pink-700 border-pink-200 hover:bg-pink-500 hover:text-white',
    dotColor: 'bg-pink-500',
    subItems: [
      'Purpose', 'Brand Credo', 'Training', 'Talent',
      'Values', 'Leadership', 'Organization Structure', 'Internal Messages'
    ]
  }
];

// IMAGE 2: PRODUCT IN FMCG - 6 CORE SECTIONS
const fmcgSections = [
  {
    id: 1,
    number: '01',
    title: 'Product Strategy',
    icon: Target,
    colorTheme: 'from-blue-600 to-indigo-700',
    borderColor: 'border-blue-200',
    lightBg: 'bg-blue-50/50',
    tagColor: 'bg-blue-100 text-blue-800',
    points: [
      {
        subtitle: 'Planning & Development',
        desc: 'Identifying market gaps and designing consumer-first products tailored to health trends.'
      },
      {
        subtitle: 'New Product Introduction (NPI)',
        desc: 'Launching innovative variants and extensions to meet evolving consumer demand.'
      },
      {
        subtitle: 'Lifecycle Management',
        desc: 'Optimizing product formulations and SKUs for long-term relevance and profitability.'
      }
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'Product Attributes',
    icon: Award,
    colorTheme: 'from-emerald-600 to-teal-700',
    borderColor: 'border-emerald-200',
    lightBg: 'bg-emerald-50/50',
    tagColor: 'bg-emerald-100 text-emerald-800',
    points: [
      {
        subtitle: 'Quality',
        desc: 'Uncompromising consistency that guarantees repeat customer purchases and brand loyalty.'
      },
      {
        subtitle: 'Design & Packaging',
        desc: 'Attractive, protective, and ergonomically convenient packaging for modern consumers.'
      },
      {
        subtitle: 'Branding & Labelling',
        desc: 'Distinctive visual identity that sets products apart on competitive retail shelves.'
      },
      {
        subtitle: 'SKU Variety',
        desc: 'Flexible pack sizes, delicious flavor options, and versatile format offerings.'
      }
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'Product Lifecycle',
    icon: BarChart3,
    colorTheme: 'from-purple-600 to-violet-700',
    borderColor: 'border-purple-200',
    lightBg: 'bg-purple-50/50',
    tagColor: 'bg-purple-100 text-purple-800',
    stages: [
      { name: 'Introduction', detail: 'Build awareness with targeted marketing', color: 'bg-purple-500' },
      { name: 'Growth', detail: 'Rapid market adoption & rising sales', color: 'bg-emerald-500' },
      { name: 'Maturity', detail: 'Peak sales volume & differentiation', color: 'bg-amber-500' },
      { name: 'Decline', detail: 'Reduced demand; innovate or pivot', color: 'bg-rose-500' }
    ]
  },
  {
    id: 4,
    number: '04',
    title: 'Packaging & Labelling',
    icon: Package,
    colorTheme: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-200',
    lightBg: 'bg-amber-50/50',
    tagColor: 'bg-amber-100 text-amber-800',
    points: [
      {
        subtitle: 'Product Protection',
        desc: 'Protects product against environmental damage, moisture loss, and spoilage.'
      },
      {
        subtitle: 'Eye-Catching Visibility',
        desc: 'Premium shelf appeal designed to attract shopper attention instantly.'
      },
      {
        subtitle: 'Legal & Nutritional Compliance',
        desc: 'Provides mandatory legal info: expiry dates, nutritional facts, and usage instructions.'
      }
    ]
  },
  {
    id: 5,
    number: '05',
    title: 'Positioning & Differentiation',
    icon: Zap,
    colorTheme: 'from-cyan-600 to-blue-700',
    borderColor: 'border-cyan-200',
    lightBg: 'bg-cyan-50/50',
    tagColor: 'bg-cyan-100 text-cyan-800',
    points: [
      {
        subtitle: 'Unique Selling Proposition (USP)',
        desc: 'Highlighting nature-inspired traditional superfoods backed by modern food science.'
      },
      {
        subtitle: 'Value vs. Premium Balancing',
        desc: 'Crafting accessible luxury products that offer superior quality at competitive prices.'
      }
    ]
  },
  {
    id: 6,
    number: '06',
    title: 'FMCG Industry Challenges',
    icon: AlertTriangle,
    colorTheme: 'from-rose-600 to-red-700',
    borderColor: 'border-rose-200',
    lightBg: 'bg-rose-50/50',
    tagColor: 'bg-rose-100 text-rose-800',
    points: [
      {
        subtitle: 'Short Shelf Life & Perishability',
        desc: 'Navigating freshness windows with nitrogen-flushed protective packaging.'
      },
      {
        subtitle: 'Intense Market Competition',
        desc: 'Differentiating against legacy players through innovative taste profiles and clean labels.'
      },
      {
        subtitle: 'Innovation Pressure',
        desc: 'Continuously refining recipes to stay ahead of fast-changing consumer dietary preferences.'
      },
      {
        subtitle: 'Supply Chain Constraints',
        desc: 'Managing raw material procurement directly from farm wetlands to production hubs.'
      }
    ]
  }
];

export default function Processing() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen py-12 relative overflow-hidden">
      {/* Background visual depth elements */}
      <div className="absolute top-1/4 left-[-150px] w-[500px] h-[500px] bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none animate-soft-glow" />
      <div className="absolute bottom-1/4 right-[-150px] w-[500px] h-[500px] bg-brand-green/5 rounded-full filter blur-[120px] pointer-events-none animate-soft-glow" />

      {/* Header Banner */}
      <section className="bg-brand-cream py-16 lg:py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-60" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
              FMCG Brand Architecture & Strategy
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green mt-6 mb-6 max-w-4xl leading-[1.08] tracking-tight">
              Running a Brand <br />
              <span className="italic text-brand-gold">& FMCG Product Strategy</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-brand-charcoal/70 max-w-3xl leading-relaxed mb-8">
              At Dominion Ventures, we combine comprehensive brand building with disciplined FMCG product development—creating traditional superfoods people trust and love every day.
            </p>
            <div className="h-[2px] w-28 bg-brand-gold" />
          </FadeIn>
        </div>
      </section>

      {/* ==========================================
          SECTION 1: EVERYTHING IT TAKES TO RUN A BRAND
         ========================================== */}
      <section className="py-16 lg:py-24 bg-white px-6 border-b border-brand-cream-dark">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                Brand Ecosystem Blueprint
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-green mt-3 mb-6 leading-tight">
                Everything It Takes to Run a Brand
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-6" />
              <p className="font-sans text-sm md:text-base text-brand-charcoal/70 leading-relaxed">
                Running a sustainable brand requires harmony across 8 core pillars—from storytelling and consumer knowledge to operations and brand culture.
              </p>
            </FadeIn>
          </div>

          {/* DESKTOP VIEW: Interactive Central Hub + 8 Surrounding Pillars */}
          <div className="relative w-full max-w-[960px] aspect-square mx-auto hidden lg:flex items-center justify-center mb-12">
            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="-480 -480 960 960">
              <defs>
                <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#062C19" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#C5A880" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {brandPillars.map((_, idx) => {
                const angle = (idx * 360) / 8 - 90;
                const rad = (angle * Math.PI) / 180;
                const x = Math.round(Math.cos(rad) * 360);
                const y = Math.round(Math.sin(rad) * 360);
                return (
                  <motion.line
                    key={idx}
                    x1="0"
                    y1="0"
                    x2={x}
                    y2={y}
                    stroke="url(#hubGrad)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  />
                );
              })}
            </svg>

            {/* Center Hub Node */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-56 h-56 rounded-full bg-brand-green-dark border-4 border-brand-gold text-brand-cream flex flex-col items-center justify-center text-center p-6 shadow-2xl relative z-20"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold mb-2 border border-brand-gold/40">
                <Layers size={20} />
              </div>
              <span className="font-serif text-lg font-bold text-brand-gold uppercase tracking-wider leading-tight">
                Everything <br /> It Takes
              </span>
              <span className="font-sans text-[10px] tracking-widest text-brand-cream/80 uppercase font-semibold mt-1">
                To Run A Brand
              </span>
            </motion.div>

            {/* 8 Surrounding Cards around Center */}
            {brandPillars.map((pillar, idx) => {
              const angle = (idx * 360) / 8 - 90;
              const rad = (angle * Math.PI) / 180;
              const x = Math.round(Math.cos(rad) * 360);
              const y = Math.round(Math.sin(rad) * 360);
              const isActive = activePillar === pillar.id;

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  whileInView={{ x, y, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 50, damping: 14, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  onClick={() => setActivePillar(isActive ? null : pillar.id)}
                  className={`absolute w-64 bg-white border rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 z-10 cursor-pointer ${
                    isActive ? 'border-brand-gold ring-2 ring-brand-gold/30 scale-105' : 'border-brand-cream-dark/80 hover:border-brand-gold/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                      <pillar.icon size={16} />
                    </div>
                    <h3 className="font-serif text-base text-brand-green font-bold leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[11px] text-brand-charcoal/75 leading-snug mb-3">
                    {pillar.shortDesc}
                  </p>

                  {/* Sub-items tag list */}
                  <div className="flex flex-wrap gap-1">
                    {pillar.subItems.slice(0, 4).map((item, i) => (
                      <span
                        key={i}
                        className={`text-[9px] font-sans font-medium px-2 py-0.5 rounded-full border ${pillar.badgeColor} transition-colors`}
                      >
                        {item}
                      </span>
                    ))}
                    {pillar.subItems.length > 4 && (
                      <span className="text-[9px] font-sans text-brand-gold font-bold px-1.5 py-0.5">
                        +{pillar.subItems.length - 4} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* GRID VIEW (For Tablet & Mobile, or expanded reading) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandPillars.map((pillar, idx) => (
              <FadeIn key={pillar.id} delay={idx * 0.05}>
                <div className="bg-white border border-brand-cream-dark rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-brand-gold/50 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-green/5 text-brand-green group-hover:bg-brand-green group-hover:text-brand-cream transition-colors duration-300 flex items-center justify-center">
                        <pillar.icon size={20} />
                      </div>
                      <span className={`w-2.5 h-2.5 rounded-full ${pillar.dotColor}`} />
                    </div>

                    <h3 className="font-serif text-xl text-brand-green font-bold mb-2 group-hover:text-brand-gold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed mb-4">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  {/* Complete Sub-items Tag Cloud */}
                  <div>
                    <div className="w-full h-[1px] bg-brand-cream-dark mb-3" />
                    <span className="font-sans text-[10px] uppercase font-bold text-brand-gold tracking-wider block mb-2">
                      Key Components:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.subItems.map((item, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-sans font-medium px-2 py-0.5 rounded-md border ${pillar.badgeColor}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: PRODUCT IN FMCG (IMAGE 2 REPLICA)
         ========================================== */}
      <section className="py-16 lg:py-24 bg-brand-cream/20 px-6 border-b border-brand-cream-dark">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                FMCG Operational Blueprint
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-green mt-3 mb-4 leading-tight">
                Product in FMCG
              </h2>
              <p className="font-serif text-xl italic text-brand-gold font-medium mb-6">
                Building Products People Trust and Love Every Day
              </p>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-6" />
              <p className="font-sans text-sm md:text-base text-brand-charcoal/70 leading-relaxed">
                In Fast-Moving Consumer Goods (FMCG), product excellence requires a strategic balance between product attributes, lifecycle optimization, packaging compliance, and overcoming supply chain pressures.
              </p>
            </FadeIn>
          </div>

          {/* 6 Core FMCG Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {fmcgSections.map((sec, idx) => (
              <FadeIn key={sec.id} delay={idx * 0.08}>
                <div className={`bg-white rounded-3xl border ${sec.borderColor} shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full group`}>
                  {/* Card Header with gradient */}
                  <div className={`p-6 bg-gradient-to-r ${sec.colorTheme} text-white relative`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white/20 text-white font-sans text-xs font-bold flex items-center justify-center border border-white/30">
                          {sec.number}
                        </span>
                        <h3 className="font-serif text-xl font-bold tracking-wide text-white">
                          {sec.title}
                        </h3>
                      </div>
                      <sec.icon size={22} className="text-white/80" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    {/* Render standard points */}
                    {sec.points && (
                      <div className="space-y-4">
                        {sec.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={12} />
                            </div>
                            <div>
                              <h4 className="font-serif text-sm font-bold text-brand-green">
                                {pt.subtitle}
                              </h4>
                              <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed mt-0.5">
                                {pt.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Render Product Lifecycle visual curve for Section 03 */}
                    {sec.stages && (
                      <div className="space-y-4">
                        <p className="font-sans text-xs text-brand-charcoal/70 mb-3">
                          Managing product trajectory from initial launch to maturity and rebranding:
                        </p>
                        
                        {/* Visual curve timeline badges */}
                        <div className="grid grid-cols-2 gap-2">
                          {sec.stages.map((stg, sIdx) => (
                            <div key={sIdx} className="p-3 rounded-xl bg-brand-cream/40 border border-brand-cream-dark flex flex-col justify-between">
                              <div className="flex items-center gap-1.5 mb-1">
                                <span className={`w-2 h-2 rounded-full ${stg.color}`} />
                                <span className="font-sans text-xs font-bold text-brand-green">
                                  {stg.name}
                                </span>
                              </div>
                              <span className="font-sans text-[10px] text-brand-charcoal/65 leading-tight">
                                {stg.detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Section Tag */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${sec.tagColor}`}>
                        FMCG Pillar {sec.number}
                      </span>
                      <ChevronRight size={16} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* FMCG Banner Quote (Replica of Image 2 Bottom Banner) */}
          <FadeIn>
            <div className="p-8 md:p-12 rounded-3xl bg-brand-green-dark text-brand-cream border border-brand-gold/30 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-4 border border-brand-gold/40">
                  <Sparkles size={22} />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-gold font-medium max-w-2xl leading-snug mb-3">
                  &ldquo;A great product is the foundation of an FMCG brand&apos;s success. Plan smart, innovate constantly, and deliver value always.&rdquo;
                </h3>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-brand-cream/70 font-semibold">
                  Dominion Ventures FMCG Quality Credo
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quality Gate Guarantee Section */}
      <section className="py-14 lg:py-16 px-6 bg-white max-w-5xl mx-auto">
        <div className="p-8 md:p-16 rounded-[2.5rem] bg-brand-cream/50 text-brand-charcoal border border-brand-cream-dark relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold font-extrabold block mb-2">Export Ready Validation</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-8">Our Quality Guarantees</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-cream-dark pt-8">
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={22} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <span className="font-sans font-bold text-sm text-brand-green uppercase tracking-wider block">100% Food Grade Materials</span>
                  <p className="font-sans text-xs text-brand-charcoal/70 mt-1.5 leading-relaxed">Our packaging materials are food-grade and certified for chemical migrations under strict international safety levels.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle2 size={22} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <span className="font-sans font-bold text-sm text-brand-green uppercase tracking-wider block">Direct Wetlands Sourcing</span>
                  <p className="font-sans text-xs text-brand-charcoal/70 mt-1.5 leading-relaxed">We maintain deep roots in local harvesting sites, ensuring 100% batch traceability and farmer empowerment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
