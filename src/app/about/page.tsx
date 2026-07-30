'use client';

import { Compass, Target, Leaf, Sparkles, Star } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <div className="bg-white min-h-screen py-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-[-120px] w-[500px] h-[500px] bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none animate-soft-glow" />
      <div className="absolute bottom-1/4 left-[-120px] w-[500px] h-[500px] bg-brand-green/5 rounded-full filter blur-[120px] pointer-events-none animate-soft-glow" />

      {/* Editorial Header Banner */}
      <section className="bg-brand-cream py-16 lg:py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
              About Dominion Ventures
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-brand-green mt-6 mb-8 max-w-4xl leading-[1.05] tracking-tight">
              Traditional Nutrition. <br />
              <span className="italic text-brand-gold">Modern Innovation.</span>
            </h1>
            <div className="h-[2px] w-28 bg-brand-gold mb-12" />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-10">
              <FadeIn delay={0.2}>
                <p className="font-sans text-lg md:text-2xl text-brand-charcoal/80 leading-relaxed max-w-4xl font-light">
                  At Dominion Ventures, we believe the future of healthy eating begins by rediscovering nature&apos;s finest traditional foods. Our mission is to transform time-tested Indian superfoods into premium, convenient, and globally competitive products through modern food science, advanced processing, and innovative packaging.
                </p>
                <p className="font-sans text-base text-brand-charcoal/70 leading-relaxed max-w-4xl mt-6">
                  From our flagship Premium Makhana to our future portfolio of functional beverages, next-generation desserts, enhanced hydration products, and healthy snack innovations, every product is designed to deliver exceptional quality, authentic taste, and better nutrition for today&apos;s consumers.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section (Luxury Editorial Layout) */}
      <section className="py-16 lg:py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <FadeIn>
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                The Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-2 mb-6 leading-tight">
                Our Story
              </h2>
              <p className="font-sans text-base text-brand-charcoal/80 leading-relaxed">
                Dominion Ventures was founded with a simple vision: to bridge the gap between India&apos;s rich agricultural heritage and the evolving demands of the modern consumer.
              </p>
              <p className="font-sans text-base text-brand-charcoal/80 leading-relaxed mt-4">
                For generations, traditional foods like Makhana have been valued for their natural nutrition and wholesome qualities. We are reimagining these ingredients with world-class processing, premium packaging, and innovative flavour development, creating products that meet international quality standards while preserving their authentic character.
              </p>
              <p className="font-sans text-base text-brand-charcoal/80 leading-relaxed mt-4">
                Our goal is to make healthy snacking more accessible, enjoyable, and suitable for today&apos;s lifestyle without compromising on quality or taste.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn direction="right">
              <div className="aspect-[4/3] rounded-[2.5rem] bg-brand-cream border border-brand-cream-dark p-10 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:shadow-2xl hover:border-brand-gold/40 transition-all duration-500">
                <div className="absolute top-[10%] right-[10%] w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
                <div className="z-10">
                  <span className="font-serif text-lg text-brand-green-dark/60 block mb-2">Established Quality</span>
                  <h3 className="font-serif text-3xl text-brand-green font-medium leading-tight">
                    Preserving the authenticity of nature&apos;s finest ingredients.
                  </h3>
                </div>
                <div className="z-10 border-t border-brand-cream-dark pt-6 mt-6 flex justify-between items-center text-xs font-sans tracking-widest text-brand-gold font-bold uppercase">
                  <span>Farm to Pack</span>
                  <span>Global Standard</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-brand-cream/40 py-16 lg:py-20 px-6 border-y border-brand-cream-dark relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <FadeIn>
            <div className="bg-white p-10 rounded-[2.5rem] border border-brand-cream-dark shadow-sm hover:shadow-xl hover:border-brand-gold/45 transition-all duration-500 h-full flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-green/5 text-brand-green flex items-center justify-center mb-8 group-hover:bg-brand-green group-hover:text-brand-cream transition-colors duration-300">
                  <Compass size={22} />
                </div>
                <h3 className="font-serif text-3xl text-brand-green mb-4 font-medium group-hover:text-brand-gold transition-colors duration-300">Our Vision</h3>
                <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed">
                  To become a globally recognized healthy food company that transforms traditional ingredients into innovative, premium products for consumers around the world.
                </p>
              </div>
              <div className="mt-12 border-t border-brand-cream-dark pt-6 text-xs text-brand-gold font-sans uppercase tracking-[0.2em] font-bold">
                Global Impact • Traditional Values
              </div>
            </div>
          </FadeIn>

          {/* Mission Card */}
          <FadeIn delay={0.2}>
            <div className="bg-white p-10 rounded-[2.5rem] border border-brand-cream-dark shadow-sm hover:shadow-xl hover:border-brand-gold/45 transition-all duration-500 h-full flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-green/5 text-brand-green flex items-center justify-center mb-8 group-hover:bg-brand-green group-hover:text-brand-cream transition-colors duration-300">
                  <Target size={22} />
                </div>
                <h3 className="font-serif text-3xl text-brand-green mb-4 font-medium group-hover:text-brand-gold transition-colors duration-300">Our Mission</h3>
                <ul className="font-sans text-xs text-brand-charcoal/85 space-y-4">
                  {[
                    "Revive traditional Indian superfoods through modern food innovation.",
                    "Deliver premium-quality healthy snacks and beverages.",
                    "Support sustainable sourcing and responsible manufacturing.",
                    "Create products that combine nutrition, taste, and convenience.",
                    "Build globally competitive brands with export-quality standards."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 border-t border-brand-cream-dark pt-6 text-xs text-brand-gold font-sans uppercase tracking-[0.2em] font-bold">
                Purpose Driven • Excellence Focused
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do Section (Product Category Grid) */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                Product Categories
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-brand-green mt-4 mb-6 leading-tight">
                What We Do
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-6" />
              <p className="font-sans text-sm md:text-base text-brand-charcoal/70 leading-relaxed">
                Dominion Ventures develops premium food products focused on health, quality, and innovation. Our current and future product portfolio includes:
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Makhana",
                tagline: "Flagship Product",
                desc: "Our flagship product, crafted using a carefully controlled farm-to-pack process and available in traditional Indian as well as international flavour profiles.",
                badge: "Flagship",
                icon: Star
              },
              {
                title: "Next-Generation Ice Cream",
                tagline: "Future Concept",
                desc: "Innovative frozen desserts featuring sculpted fruit gelato, premium hybrid dessert beverages, and interactive serving concepts.",
                badge: "Pipeline",
                icon: Sparkles
              },
              {
                title: "Functional Beverages",
                tagline: "Gut Wellness",
                desc: "A new generation of prebiotic and probiotic sodas made with clean ingredients and fruit-forward flavours.",
                badge: "Pipeline",
                icon: Compass
              },
              {
                title: "Enhanced Longevity Water",
                tagline: "Bioactive Hydration",
                desc: "Advanced functional hydration formulated with synergistic vitamins and minerals to support everyday wellness.",
                badge: "Pipeline",
                icon: Target
              },
              {
                title: "Jackfruit Chips",
                tagline: "Sustainable Snacking",
                desc: "Premium healthy chips created from one of India's most abundant tropical fruits, helping reduce food waste while providing a nutritious alternative to conventional snacks.",
                badge: "Pipeline",
                icon: Leaf
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-[2.5rem] bg-brand-cream/35 border border-brand-cream-dark hover:border-brand-gold/45 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between group cursor-pointer">
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-brand-gold">
                        {item.tagline}
                      </span>
                      <span className={`text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                        item.badge === 'Flagship' ? 'bg-brand-green text-brand-cream' : 'bg-brand-cream-dark text-brand-charcoal/50'
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-2xl bg-brand-green/5 text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-brand-cream transition-colors duration-300">
                      <item.icon size={16} />
                    </div>

                    <h3 className="font-serif text-2xl text-brand-green mb-3 group-hover:text-brand-gold transition-colors duration-300 font-medium">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-brand-cream/30 py-16 lg:py-20 px-6 border-t border-brand-cream-dark relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left list of focus items */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <FadeIn>
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
                  Our Methodology
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-2 mb-6 leading-tight">
                  Our Approach
                </h2>
                <p className="font-sans text-base text-brand-charcoal/80 leading-relaxed mb-8">
                  Every product begins with carefully selected ingredients and follows a thoughtfully designed journey from sourcing to packaging. Our focus includes:
                </p>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Ethical sourcing", desc: "Sustainable partnership with local farming groups." },
                  { title: "Careful quality inspection", desc: "Rigorous standards for size, purity, and grade." },
                  { title: "Modern food processing", desc: "Advanced systems preserving nutritional core." },
                  { title: "Premium flavour development", desc: "Chef-crafted formulations with clean ingredients." },
                  { title: "Advanced packaging", desc: "Freshness-preserving barriers to lock in crunch." },
                  { title: "Consistent quality standards", desc: "Strict certification testing at every level." }
                ].map((approach, idx) => (
                  <FadeIn key={idx} delay={idx * 0.05}>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-green text-brand-cream shrink-0 flex items-center justify-center text-[10px] font-bold mt-1 shadow-sm border border-brand-gold/20">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-brand-green font-medium">{approach.title}</h4>
                        <p className="font-sans text-xs text-brand-charcoal/60 mt-1 leading-relaxed">{approach.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right highlight block */}
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <div className="rounded-[2.5rem] bg-brand-green-dark p-8 md:p-10 text-brand-cream border border-brand-gold/30 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-green to-brand-green-dark opacity-50" />
                  <div className="relative z-10 flex flex-col gap-6">
                    <span className="font-sans text-xs uppercase tracking-widest text-brand-gold font-bold">Heritage + Science</span>
                    <p className="font-sans text-base text-brand-cream/95 leading-relaxed italic">
                      &quot;By combining traditional food knowledge with modern manufacturing practices, we strive to create products that are both wholesome and enjoyable.&quot;
                    </p>
                    <div className="h-[1px] bg-brand-cream/10 my-2" />
                    <span className="font-serif text-sm text-brand-gold tracking-wider">The Dominion Standard</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Spread: Innovation Meets Tradition */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 text-left">
              <FadeIn>
                <h3 className="font-serif text-4xl lg:text-5xl text-brand-green leading-tight">
                  Innovation <br />
                  <span className="italic text-brand-gold">Meets Tradition</span>
                </h3>
                <div className="h-[2px] w-16 bg-brand-gold mt-6" />
              </FadeIn>
            </div>
            <div className="md:col-span-7 text-left">
              <FadeIn delay={0.2}>
                <p className="font-sans text-base text-brand-charcoal/80 leading-relaxed font-semibold mb-4">
                  We believe traditional foods deserve modern experiences.
                </p>
                <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed mb-4">
                  By combining authentic ingredients with contemporary flavours, premium packaging, and thoughtful product design, Dominion Ventures is building a portfolio that appeals to health-conscious consumers, families, professionals, and international markets alike.
                </p>
                <p className="font-sans text-base text-brand-green font-serif italic mt-4">
                  &quot;Innovation for us is not about replacing tradition—it&apos;s about enhancing it.&quot;
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section: Building the Future of Healthy Snacking */}
      <section className="bg-brand-cream py-16 lg:py-20 px-6 border-t border-brand-cream-dark relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold block mb-6">
              Looking Forward
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-brand-green mb-6 leading-tight">
              Building the Future of Healthy Snacking
            </h2>
            <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-10" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="font-sans text-sm md:text-base text-brand-charcoal/80 leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                As consumer preferences continue to shift toward cleaner ingredients and better nutrition, Dominion Ventures is committed to developing products that reflect these changing lifestyles.
              </p>
              <p>
                From premium healthy snacks to functional beverages and future food innovations, we continue to invest in ideas that promote quality, convenience, and long-term consumer trust.
              </p>
              <p className="font-semibold text-brand-green">
                Our vision is to establish Dominion Ventures as a trusted name in premium healthy foods, bringing the goodness of traditional ingredients to modern consumers across India and global markets.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
