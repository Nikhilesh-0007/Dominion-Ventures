'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 py-20 bg-brand-cream">
        {/* Full-bleed Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_img.png')" }}
        />
        {/* Light Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:from-white/95 lg:via-white/70 lg:to-transparent" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-brand-charcoal">
            <div className="inline-flex items-center gap-2 border border-brand-gold/30 rounded-full px-4 py-1.5 w-fit bg-white/60 backdrop-blur-sm">
              <Sparkles size={14} className="text-brand-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green">
                A New Standard in Snacking
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-brand-green leading-[1.05] tracking-tight">
              Healthy Snacking,<br />
              <span className="italic text-brand-gold">Reimagined.</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-brand-charcoal/80 max-w-lg leading-relaxed">
              Traditional nutrition crafted into premium healthy snacks for today&apos;s lifestyle. Enjoy our signature cold-pressed, slow-roasted Makhana, prepared with chef-crafted spice recipes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/products"
                className="group flex items-center justify-center gap-2 bg-brand-green text-brand-cream font-sans text-xs uppercase tracking-widest px-8 py-4.5 rounded-full hover:bg-brand-gold hover:text-brand-green transition-all duration-300 font-bold shadow-md shadow-brand-green/10"
              >
                Explore Products
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center bg-transparent border border-brand-green/30 text-brand-green font-sans text-xs uppercase tracking-widest px-8 py-4.5 rounded-full hover:border-brand-gold hover:bg-brand-cream-dark transition-all duration-300 font-bold"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero Right Visual */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </section>

      {/* ABOUT DOMINION VENTURES */}
      <section className="py-24 bg-brand-cream/30 px-6 border-b border-brand-cream-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image on the Left */}
            <div className="lg:col-span-5">
              <FadeIn direction="left">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-brand-cream-dark group bg-brand-cream">
                  <img 
                    src="/about section img.png" 
                    alt="About Dominion Ventures" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-green/5 mix-blend-multiply pointer-events-none" />
                </div>
              </FadeIn>
            </div>

            {/* Text and Button on the Right */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <FadeIn>
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
                  About Dominion Ventures
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-3 mb-2 leading-tight">
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
                  <p>
                    Our mission is simple—to make healthier choices more accessible while preserving the authenticity of nature&apos;s finest ingredients.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-brand-green font-semibold font-sans mt-4 pt-6 border-t border-brand-cream-dark">
                  <span>Premium Quality</span>
                  <span className="text-brand-gold">•</span>
                  <span>Traditional Heritage</span>
                  <span className="text-brand-gold">•</span>
                  <span>Modern Innovation</span>
                  <span className="text-brand-gold">•</span>
                  <span>Healthy Future</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 bg-brand-green text-brand-cream font-sans text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-brand-gold hover:text-brand-green transition-all duration-300 font-bold shadow-md shadow-brand-green/10"
                  >
                    Read Our Story
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PORTFOLIO */}
      <section className="py-24 bg-white px-6 border-b border-brand-cream-dark">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
                Our Product Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-4 mb-6">
                Premium cards showing all product categories
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto" />
            </FadeIn>
          </div>

          {/* Grid Layout containing 2 products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Makhana Card - Flagship Green Styling */}
            <FadeIn>
              <div className="bg-brand-green-dark text-brand-cream rounded-[2rem] p-8 md:p-10 border border-brand-gold/30 shadow-xl relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-green/20 transition-all duration-500 h-full flex flex-col justify-between">
                {/* Visual Shimmer/Glow background effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-green to-brand-green-dark opacity-60" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="inline-block bg-brand-gold text-brand-green text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Flagship Collection
                    </span>
                    <span className="text-[10px] text-brand-gold uppercase tracking-wider font-semibold">
                      Featured
                    </span>
                  </div>

                  {/* Product Image Frame */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-brand-green border border-brand-gold/20 mb-6 group-hover:scale-[0.98] transition-transform duration-500">
                    <img 
                      src="/makhana (2).png" 
                      alt="Makhana" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/20 to-transparent" />
                  </div>

                  <h3 className="font-serif text-3xl text-brand-gold mb-1 font-medium">
                    Makhana
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-brand-gold/80 mb-4 font-semibold">
                    Signature Superfood
                  </p>
                  <p className="font-sans text-sm text-brand-cream/80 leading-relaxed mb-6">
                    Sourced directly from agricultural heartlands and popped by traditional roasting masters. Infused with natural gourmet spice recipes for an unmatched, healthy crunch.
                  </p>
                </div>

                <div className="border-t border-brand-cream/10 pt-6 mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {['100% Traceable', 'Jumbo 18-20mm', 'Gluten Free'].map((feat, fidx) => (
                      <span key={fidx} className="text-[10px] font-sans text-brand-gold border border-brand-gold/20 rounded-full px-2.5 py-1 bg-brand-green/30">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Jackfruit Chips Card - Light Cream Styling */}
            <FadeIn delay={0.2}>
              <div className="bg-brand-cream/35 hover:bg-white rounded-[2rem] p-8 md:p-10 border border-brand-cream-dark hover:border-brand-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-cream-dark text-brand-charcoal/60">
                      Upcoming Collection
                    </span>
                    <span className="text-[10px] font-sans text-brand-gold uppercase tracking-wider font-semibold">
                      New Crop
                    </span>
                  </div>

                  {/* Product Image Frame */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-brand-cream-dark border border-brand-cream-dark mb-6 group-hover:scale-[0.98] transition-transform duration-500">
                    <img 
                      src="/jack_chips (2).png" 
                      alt="Jackfruit Chips" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-green/5 mix-blend-multiply pointer-events-none" />
                  </div>

                  <h3 className="font-serif text-3xl text-brand-green mb-1 font-medium group-hover:text-brand-gold transition-colors duration-300">
                    Jackfruit Chips
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-wider text-brand-charcoal/50 mb-4 font-semibold">
                    Vacuum-Cooked Crisp
                  </p>
                  <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed mb-6">
                    Crispy vacuum-cooked jackfruit slices that preserve natural color, vitamins, and sweet tropical flavors using minimal clean oil.
                  </p>
                </div>

                <div className="border-t border-brand-cream-dark pt-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {['Vacuum Cooked', 'High Natural Fiber', 'Zero Preservatives'].map((feat, fidx) => (
                      <span key={fidx} className="text-[10px] font-sans text-brand-charcoal/60 bg-brand-cream-dark/50 rounded-full px-2.5 py-1">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Button to Products Page */}
          <div className="flex justify-center">
            <FadeIn delay={0.3}>
              <Link 
                href="/products"
                className="group flex items-center justify-center gap-2 bg-brand-green text-brand-cream font-sans text-xs uppercase tracking-widest px-8 py-4.5 rounded-full hover:bg-brand-gold hover:text-brand-green transition-all duration-300 font-bold shadow-md shadow-brand-green/10"
              >
                View Products Collection
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DOMINION */}
      <section className="py-24 bg-brand-cream/50 border-y border-brand-cream-dark px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">
                The Dominion Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-4">
                What Sets Our Processing Apart
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-cream-dark shadow-sm">
              <span className="font-serif text-5xl text-brand-gold italic">01</span>
              <h3 className="font-serif text-xl text-brand-green font-medium mt-4 mb-2">Ethical Sourcing</h3>
              <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                Direct integration with farmers in Bihar, providing fair wages and ensuring pure agricultural inputs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-brand-cream-dark shadow-sm">
              <span className="font-serif text-5xl text-brand-gold italic">02</span>
              <h3 className="font-serif text-xl text-brand-green font-medium mt-4 mb-2">Sun Drying</h3>
              <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                Naturally dried on moisture-wicking bamboo beds to lock in kernel density and nutrients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-brand-cream-dark shadow-sm">
              <span className="font-serif text-5xl text-brand-gold italic">03</span>
              <h3 className="font-serif text-xl text-brand-green font-medium mt-4 mb-2">Slow Dry-Roasting</h3>
              <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                Slow wood-fired popping followed by clean hot-air tumbling to secure a light, airy, grease-free crunch.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-brand-cream-dark shadow-sm">
              <span className="font-serif text-5xl text-brand-gold italic">04</span>
              <h3 className="font-serif text-xl text-brand-green font-medium mt-4 mb-2">Nitrogen Flushing</h3>
              <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                Hermetically sealed with clean nitrogen to eliminate oxidation and preserve absolute freshness.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/processing"
              className="group flex items-center gap-2 bg-brand-green text-brand-cream font-sans text-xs uppercase tracking-widest px-8 py-4.5 rounded-full hover:bg-brand-gold hover:text-brand-green transition-all duration-300 font-bold"
            >
              Explore Processing Timeline
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
