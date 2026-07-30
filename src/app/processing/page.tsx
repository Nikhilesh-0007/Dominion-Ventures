'use client';

import { motion } from 'framer-motion';
import { 
  Users, Sun, Filter, Flame, ChevronRight, HardHat, Sparkles, 
  Layers, Zap, Package, Tag, CheckCircle2
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const timelineSteps = [
  {
    icon: Users,
    title: 'Ethical Sourcing',
    desc: 'Our makhana journey begins in the natural freshwater wetlands of Bihar. We partner directly with local harvesting cooperatives, bypass middlemen, and guarantee fair wages to the farmers who harvest the seeds.',
  },
  {
    icon: Sun,
    title: 'Sun Drying',
    desc: 'Harvested seeds are washed thoroughly and spread on elevated bamboo racks to dry naturally under the sun. This process reduces moisture levels to a precise threshold, preparing seeds for sorting.',
  },
  {
    icon: Filter,
    title: 'Grading & Sorting',
    desc: 'Dry seeds are passed through optical sorting grids that separate them by size. Only the largest, premium-grade kernels (18mm to 20mm in size) are qualified for the roasting phase.',
  },
  {
    icon: Flame,
    title: 'Pre-Heating',
    desc: 'Before popping, the graded seeds are heated slowly in large clay pans. This conditions the starch within the seed, enabling a perfect spherical pop and minimizing hard seeds.',
  },
  {
    icon: Flame,
    title: 'Roasting',
    desc: 'Seeds are roasted in traditional wood-fired pans by skilled roasting masters. Precision timing ensures the starch expansion reaches peak capacity without burning the seed shell.',
  },
  {
    icon: HardHat,
    title: 'Manual Popping',
    desc: 'As soon as roasting is complete, master poppers manually strike the hot seeds with a wooden mallet. The shell cracks open immediately, releasing the puffed white kernel (makhana).',
  },
  {
    icon: Sparkles,
    title: 'Polishing',
    desc: 'The popped kernels are lightly polished to remove any remaining black shell fragments, leaving behind clean, bright white spheres ready for seasoning.',
  },
];

const packagingSteps = [
  {
    icon: Layers,
    title: 'Moisture Barrier',
    desc: 'Our snacks are sealed in high-density, multi-layered metallized BOPP/PET bags. This premium material keeps out moisture and prevents oxidation, preserving the natural crunch.',
  },
  {
    icon: Zap,
    title: 'Nitrogen Flushing',
    desc: 'We replace the air inside each package with high-purity nitrogen, reducing oxygen levels to less than 1%. This preserves the natural oils and spices without artificial chemical preservatives.',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    desc: 'We provide various packaging formats, from small snack bags to family bags, designed with a premium matte finish that looks elegant in any pantry.',
  },
  {
    icon: Tag,
    title: 'Private Labelling',
    desc: 'Dominion Ventures offers complete private-label contracts for global retailers. We handle packaging design, phytosanitary compliance, and custom flavor seasoning to your exact specifications.',
  },
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

      {/* Farm to Pack Interactive Timeline */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
              The Seven Gates of Quality
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-4">
              The Farm-to-Pack Timeline
            </h2>
            <p className="font-sans text-sm text-brand-charcoal/60 mt-4 max-w-xl mx-auto">
              Our traditional processing cycle relies on human skill and strict quality gates to deliver unmatched quality.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-brand-cream-dark pl-6 md:pl-12 ml-4 md:ml-8 flex flex-col gap-16">
          {timelineSteps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute left-[-31px] md:left-[-55px] top-0 w-8 h-8 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center text-brand-green transition-transform duration-300 group-hover:scale-110">
                <step.icon size={14} className="text-brand-green" />
              </div>

              {/* Timeline Content */}
              <FadeIn delay={0.1}>
                <div className="bg-brand-cream/30 p-8 rounded-3xl border border-brand-cream-dark hover:border-brand-gold/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-serif text-xs text-brand-gold font-bold uppercase tracking-widest">
                      Step 0{idx + 1}
                    </span>
                    <ChevronRight size={14} className="text-brand-gold/60" />
                    <h3 className="font-serif text-2xl text-brand-green font-medium">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Packaging Technology Process */}
      <section className="bg-brand-cream py-24 px-6 border-t border-brand-cream-dark">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
                Next-Gen Preservations
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-4">
                Advanced Packaging Process
              </h2>
              <p className="font-sans text-sm text-brand-charcoal/60 mt-4">
                We combine high-performance materials with modern machinery to maintain crispness and freshness across global shipping lanes.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packagingSteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-3xl border border-brand-cream-dark shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-brand-cream transition-colors duration-300">
                      <step.icon size={20} />
                    </div>
                    <h3 className="font-serif text-xl text-brand-green font-medium mb-3 group-hover:text-brand-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
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
