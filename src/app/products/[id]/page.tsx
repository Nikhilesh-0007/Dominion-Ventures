'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Star, CheckCircle2 } from 'lucide-react';

const productDetailsMap: Record<string, {
  title: string;
  category: string;
  image: string;
  badge: string;
  overview: string;
  contentBlocks: {
    heading?: string;
    text?: string;
    bullets?: string[];
  }[];
}> = {
  'ice-cream': {
    title: "Flavorette, The Malt edition icecream",
    category: "Gourmet Confectionery & Desserts",
    image: "/next_gen_ice (2).png",
    badge: "Anatomical Culinary Innovation",
    overview: "ICECREAMS: Redefining Frozen Confectionery Presentation & Experiential Dining.",
    contentBlocks: [
      {
        heading: "Model-1: Sculpted Fruit Gelato Shells",
        text: "In the evolving landscape of global culinary trends, presentation has integrated seamlessly with taste. By encasing rich, natural fruit gelato inside a crisp shell molded precisely to mimic real fruit's anatomy, this frozen treat offers a multi-sensory experience. This concept:",
        bullets: [
          "bridges the gap between pure visual artistry & premium, confectionary engineering."
        ]
      },
      {
        heading: "Model-2: Thick Shake & Falooda Hybrid",
        text: "The thick, semi-liquid dessert is most likely an ice cream THICK SHAKE or a FALOODA. It will have a rich, luscious, and creamy consistency that sits perfectly between a liquid beverage and a solid scoop."
      },
      {
        heading: "Model-3: The 'Artist's Palette' Plating",
        text: "Serving icecream scoops on a painter's palette is a highly visual dessert eating experience. Typically featuring 2, 3, 4, 5 small scoops in various vibrant colors placed directly into palette's \"wells\", transforming taste into a literal art experience. Strawberry, mango, pistachio, blueberry onto the palette to mimic paint blobs."
      }
    ]
  },
  'soda': {
    title: "The Gulp , Pop ( fruit flavoured soda )",
    category: "Active Digestive Beverage",
    image: "/Functional Soda.png",
    badge: "Prebiotic & Probiotic Science",
    overview: "FUNCTIONAL BEVERAGES: Reimagining Carbonated Soft Drinks with Active Health Benefits.",
    contentBlocks: [
      {
        heading: "Market Problem: Health Risks of Regular Soda",
        text: "Consuming regular soda is heavily linked to severe health risks, including a substantially increased risk of type 2 diabetes, cardiovascular disease, non-alcoholic fatty liver disease, tooth decay and weakened bones, due to the presence of high fructose corn syrup and artificial ingredients"
      },
      {
        heading: "The Solution: Enhanced Functional Soda",
        text: "To give an effective alternative and replacement to regular sodas, we are introducing ENHANCED SODA with prebiotic fibres & prebiotic proteins with natural caffeine, low calorie, ingredients everyone can love with real fruit forward inspired flavours like strawberry lemon, lemon lime, orange, watermelon, grape, cherry limeade, wildberry, raspberry rose, berries & cream, cream soda, punch pop, cranberry fizz"
      }
    ]
  },
  'water': {
    title: "Enhance longevity ( Vit+ Min) water",
    category: "Bioactive Cellular Hydration",
    image: "/water (2).png",
    badge: "Vitamins + Minerals Synergy",
    overview: "ENHANCED LONGEVITY WATER INFUSED WITH VITAMINS + MINERALS",
    contentBlocks: [
      {
        heading: "Scientific Foundation & Global Health Study",
        text: "A widely publicized study led by the University of South Australia established a direct casual link between severe nutrient deficiency and early (premature) death worldwide. Similar study is also supported by massive global collaboration-heavily driven by data analyzed at the University of Washington's IHME. This malabsorption results in immune collapse, organ failure, DNA & cellular repair failure resulting in premature death."
      },
      {
        heading: "Bioavailability Mechanism & Synergistic Pairing",
        text: "Water and water-soluble nutrients are absorbed into body much more quickly and easily than the nutrients from solid food, to fill this gap were launching Enhanced longevity water infused with vitamins + minerals that have synergistic relationship, meaning specific pairings enhance each others absorption and effectiveness."
      }
    ]
  },
  'jackfruit-chips': {
    title: "pure crunch Jackfruit chips.",
    category: "Sustainable Agriculture & Snacking",
    image: "/jack_chips (2).png",
    badge: "Vacuum Cooked & GI Tag Sourced",
    overview: "JACKFRUIT CHIPS: Minimizing Crop Waste & Delivering First-Hand Superfood Snacks.",
    contentBlocks: [
      {
        heading: "Product Overview",
        text: "Jackfruit chips are a crispy snack made by thinly slicing unripe (raw) jackfruit and deep frying or vacuum frying the slices in oil. Prized for their natural sweetness or savory crunch, they are heavily seasoned with spices like chili and salt."
      },
      {
        heading: "Crop Waste & Domestic Sourcing Context",
        text: "Jackfruit is mainly produced in Kerala, Tamilnadu, Assam, Bihar. Kerala producing half of Indias total yield & Panruti in Cuddalore district of Tamilnadu holds the Gl tag for its unique quality. But an estimated 65% to 70% of total produce is wasted annually with a total monetary loss of Rs 2000 Crores & in Kerala alone the annual loss stands at Rs 1200 Crore due to lack of cold storage processing facility."
      },
      {
        heading: "Global Opportunity Across 190 Nations",
        text: "On the other hand over 190 nations do not produce jackfruit commercially bcoz the fruit is grown in over 60 humid, tropical and sub tropical countries."
      },
      {
        heading: "The Dominion Ventures Opportunity",
        text: "We, at Dominion Ventures, found this opportunity to fill this gap to comeup with the production of jackfruit chips to coverup with the production that can profit the farmers & industry at domestic level and by exports consumers across 190 nations gets a better alternative to potato chips, first hand"
      }
    ]
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;

  const product = productDetailsMap[productId];

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-serif text-brand-green mb-4">Product Not Found</h1>
        <p className="font-sans text-brand-charcoal/70 mb-8">The requested product page does not exist or has been moved.</p>
        <Link href="/#future-products" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to Home Page
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#future-products"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-brand-green/80 hover:text-brand-gold border border-brand-green/20 rounded-full px-4 py-2 bg-white shadow-sm transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home Page
          </Link>
        </div>

        {/* Top Banner Card */}
        <div className="bg-brand-green-dark text-brand-cream rounded-[2.5rem] p-8 md:p-12 border border-brand-gold/30 shadow-premium-lg relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-green to-brand-green-dark opacity-60 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Heading & Badge */}
            <div className="md:col-span-7 flex flex-col gap-5 text-left">
              <div className="flex gap-2 items-center">
                <span className="inline-block bg-brand-gold text-brand-green text-[9px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-inner">
                  {product.badge}
                </span>
                <span className="text-[10px] text-brand-gold uppercase tracking-wider font-extrabold flex items-center gap-1">
                  <Star size={10} className="fill-current" />
                  Featured Innovation
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-gold font-medium leading-[1.05]">
                {product.title}
              </h1>
              <p className="font-sans text-xs uppercase tracking-widest text-brand-cream/70 font-bold -mt-2">
                {product.category}
              </p>
              <p className="font-sans text-sm text-brand-cream/85 leading-relaxed mt-2 italic border-l-2 border-brand-gold pl-4">
                {product.overview}
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="md:col-span-5 flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[300px] rounded-3xl overflow-hidden bg-brand-green border border-brand-gold/30 shadow-premium-lg p-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Blocks - Verbatim Text Presentation */}
        <div className="flex flex-col gap-8">
          {product.contentBlocks.map((block, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 md:p-10 border border-brand-cream-dark shadow-sm hover:shadow-md transition-shadow text-left"
            >
              {block.heading && (
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-brand-cream-dark">
                  <div className="w-9 h-9 rounded-2xl bg-brand-green/5 text-brand-green flex items-center justify-center font-bold shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-brand-green font-medium">
                    {block.heading}
                  </h2>
                </div>
              )}

              {block.text && (
                <p className="font-sans text-sm md:text-base text-brand-charcoal/85 leading-relaxed">
                  {block.text}
                </p>
              )}

              {block.bullets && (
                <ul className="mt-4 flex flex-col gap-2.5 pl-2">
                  {block.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex gap-3 items-start font-sans text-sm text-brand-charcoal/85 leading-relaxed">
                      <span className="text-brand-gold font-bold text-base leading-none mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
