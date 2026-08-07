export interface ProductSection {
  title: string;
  content?: string;
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Product {
  id: string;
  name: string;
  category: 'Traditional' | 'International';
  description: string;
  nutritionalHighlights: string[];
  nutritionalDetail: {
    calories: string;
    protein: string;
    fiber: string;
    fat: string;
  };
  ingredients: string[];
  color: {
    badge: string;
    bg: string;
    border: string;
  };
  image: string;
  detailedReport: {
    overview: string;
    sections: ProductSection[];
  };
}

export const products: Product[] = [
  {
    id: "makhana",
    name: "Nu trait Makhana",
    category: "Traditional",
    description: "Our flagship superfood collection. Sourced from agricultural heartlands, slow dry-roasted, and infused with premium regional spices.",
    nutritionalHighlights: ["100% Traceable", "Jumbo Kernels", "Gluten Free", "High Protein"],
    nutritionalDetail: { calories: "110 kcal", protein: "3g", fiber: "2.5g", fat: "1.5g" },
    ingredients: ["Premium Makhana (Gorgon Nut)", "Cold-Pressed Ghee / Coconut Oil", "Chef-Crafted Spices", "Pink Himalayan Salt"],
    color: {
      badge: "bg-emerald-100 text-emerald-800",
      bg: "bg-emerald-50/30",
      border: "border-emerald-100/50"
    },
    image: "/makhana (2).png",
    detailedReport: {
      overview: "MAKHANA: A RISING STAR IN THE GLOBAL HEALTH FOOD MARKET\n\nMakhana has evolved from a traditional Indian superfood into a global health phenomenon. At DOMINION VENTURES we bridge the gap between ancient agricultural wisdom and modern food safety standards. The below details our meticulous farm-to-pack process, ensuring every Makhana seed retains its natural nutrients, pristine white color and signature crunch.",
      sections: [
        {
          title: "OUR PROCESSING STANDARDS",
          content: "We transform raw gorgon nut seeds into premium, ready-to-eat makhana through a strict, multi-stage quality control process.",
          bullets: [
            "Ethical Sourcing",
            "Sun Drying",
            "Grading & Sorting",
            "Pre-Heating & Roasting",
            "Manual popping",
            "Polishing"
          ]
        },
        {
          title: "ADVANCED PACKAGING SOLUTIONS",
          content: "To maintain freshness and prevent spoilage, our packaging line utilizes cutting edge food preservation technology.",
          bullets: [
            "Moisture Barriers",
            "Nitrogen Flushing",
            "Custom Sizing",
            "Private Labeling"
          ]
        },
        {
          title: "REGIONAL SOUTH INDIAN FLAVORS & SEASONINGS",
          content: "At Dominion Ventures our goal is to introduce Makhana in five South Indian states Telangana, Andhrapradesh, Tamil Nadu, Kerala & Karnataka with regional flavours & seasonings. Our flagship Savory, Creamy, Aromatic Flavours are as follows.",
          table: {
            headers: ["Flavor Category", "Flavors & Seasonings"],
            rows: [
              ["CLASSIC & SAVORY FLAVORS", "Gunpowder (Podi) Curry leaf & Mustard • Chettinad Spice • Malabar Black Pepper"],
              ["TANGY & CREAMY FLAVORS", "Puliyogare (Tamarind Rice mix) • Coconut Lime • Curd Rice style"],
              ["RICH AND AROMATIC FLAVORS", "Sambar Masala • Rasam powder • Bisi Bele Bhath Spice"]
            ]
          }
        },
        {
          title: "INTERNATIONAL FLAVOURS & SEASONING FOR EXPORT RANGE",
          content: "Leveraging popular gourmet and fast-casual profiles for international markets:",
          table: {
            headers: ["Profile Group", "Target Demographic & Flavor Variants"],
            rows: [
              ["Western Fast-Casual & BBQ Profiles", "These flavours leverage familiar, deeply entrenched Snacking flavours that American & European Consumers already love in potato chips & popcorn: Texas Style Smoky BBQ • Sour Cream & Wild Chive • Sweet Chili & Lime"],
              ["European Herb & Cheese Profiles", "European consumers, particularly in Continental Europe and the UK, highly favor gourmet cheese variations and savory, garden fresh herbs: White Cheddar & Truffle • Mediterranean Sea Salt & Rosemary • French Sour Cream & Onion"],
              ["Trending Global Fusion Profiles", "These Flavours target Millennial and GenZ demographics who actively seek out bold, cross cultural, and spicy flavour experiences: Sriracha Lime • Korean BBQ (Bulgogi) • White Chocolate & Matcha / Salted Caramel Infusion"]
            ]
          }
        },
        {
          title: "OUR ROASTING PHILOSOPHY",
          content: "note: We always roast the makhana in ghee / Coconut oil / olive oil first and then add the spice blends immediately after roasting while the makhana is hot and due to its natural spongy and porous texture seasonings sticks perfectly to the surface."
        }
      ]
    }
  },
  {
    id: "ice-cream",
    name: "Flavorette, The Melt Edition ice cream",
    category: "International",
    description: "Creamy, premium functional desserts featuring sculpted anatomical fruit reproduction and interactive palettes.",
    nutritionalHighlights: ["Zero Refined Sugar", "Anatomically Sculpted", "Plant Protein Options", "Zero Waste Portions"],
    nutritionalDetail: { calories: "140 kcal", protein: "4g", fiber: "1.2g", fat: "2.5g" },
    ingredients: ["Fresh Organic Dairy / Coconut Milk", "Pure Fruit Purees", "Natural Stevia Blend", "Organic Cocoa Butter"],
    color: {
      badge: "bg-pink-100 text-pink-800",
      bg: "bg-pink-50/30",
      border: "border-pink-100/50"
    },
    image: "/next_gen_ice (2).png",
    detailedReport: {
      overview: "NEXT-GEN ICE CREAM CONCEPTS\n\nComprehensive Project Proposal & Engineering Strategy for Modern Confectionery.\nDocument Type: Culinary Innovation & Business Proposal\nTarget Market: Gourmet Cafes, Premium Parlors & Event Catering.\n\nPresentation and experiential dining have integrated seamlessly with taste. Consumers increasingly demand visual artistry alongside premium flavor craft. This proposal outlines serving models engineered to bridge visual aesthetics and confectionery engineering.",
      sections: [
        {
          title: "MODEL 1: SCULPTED FRUIT GELATO & POP SHELLS",
          content: "Model 1 introduces an anatomical fruit reproduction technique. Pure, high-density fruit gelato and sorbet are encased inside a thin, crisp, fruit-flavored or chocolate shell molded precisely to mimic real fruit anatomy down to surface texturing.",
          table: {
            headers: ["Anatomical Shape", "Gelato Core Base", "Outer Shell Finish", "Flavor Profile"],
            rows: [
              ["Strawberry / Raspberry", "Fresh Berry Sorbet", "Matte red with seed pitting detail", "Tart, sweet, aromatic berry blend"],
              ["Blackberry / Grape", "Concord Grape / Acai Gelato", "Soft purple velvet spray finish", "Rich, deep wine-like fruit notes"],
              ["Mango / Citrus", "Alphonso Mango Gelato", "Vibrant glossy yellow-orange shell", "Tropical, creamy citrus profile"],
              ["Blueberry / Plum", "Pastel indigo shell coating", "Wild Blueberry Gelato", "Subtle sweet-tart balance"]
            ]
          }
        },
        {
          title: "MODEL 2: ULTRA-RICH HYBRID BEVERAGE DESSERTS",
          content: "Model 2 bridges liquid beverage and solid scoop categories. Positioned between a classic thick shake and an artisanal falooda, this format leverages commercial-grade, high-viscosity nut pastes and rich cream layers to deliver a decadent, slow-flowing dessert experience.",
          table: {
            headers: ["Application", "Functional Ingredient", "Operational Role in Beverage Construct"],
            rows: [
              ["Base Flavoring", "Pistachio / Hazelnut Paste", "Blended directly with dairy gelato & milk for structural viscosity and deep nut flavor."],
              ["Cup Coating & Rim Decor", "High-Viscosity Cream Spread", "Coated inside transparent cups to create dramatic, slow-dribbling visual layers."],
              ["Falooda Layering", "Dense Nut Paste & Basil Seeds", "Acts as a dense flavor barrier separating sweet rose syrup, basil seeds, and delicate vermicelli."],
              ["Garnish Drizzle", "Warmed Nut Creams", "Warmed drizzled topping over whipped cream or crown scoops, adding temperature-contrast play."]
            ]
          }
        },
        {
          title: "MODEL 3: THE 'ARTIST'S PALETTE' INTERACTIVE EXPERIENCE",
          content: "Model 3 transforms dessert consumption into an interactive art experience. Multiple colorful mini-scoops (typically 3 to 5 distinct flavors) are presented on a painter's palette tray, mimicking paint blobs. Guests use mini spoons or brushes to sample and mix flavors dynamically.",
          table: {
            headers: ["Serving Media Style", "Material & Specs", "Target Venue / Channel"],
            rows: [
              ["Branded Insert Tray", "Rigid Cardboard, fitted paper wells", "Quick-Service, Takeaway, High-Volume Cafes"],
              ["Flat Cutout Palette", "Lightweight Disposable Board", "Pop-Up Events, Fast-Casual Outlets"],
              ["Artisanal Wooden Board", "Reusable Food-Grade Wood, sauce splatters", "Premium Dine-In Lounges & Dessert Bars"]
            ]
          },
          bullets: [
            "Crimson Red: Strawberry or Blood Orange Gelato",
            "Golden Yellow: Alphonso Mango or Passionfruit Sorbet",
            "Pistachio Green: Sicilian Pistachio Gelato",
            "Pastel Purple: Blueberry Lavender Gelato",
            "Rich Brown: Dark Belgian Chocolate or Hazelnut Praline"
          ]
        },
        {
          title: "STRATEGIC RECOMMENDATIONS",
          bullets: [
            "1. Phased Rollout: Launch Model 3 (Artist's Palette) first for dine-in operations to build viral social media awareness, followed by Model 1 (Sculpted Fruit Pops) as the flagship takeaway product.",
            "2. Supply Chain Integration: Secure commercial bulk spreads (Pistachio/Hazelnut 5kg units) to optimize margin and consistency.",
            "3. Custom Packaging Development: Invest in custom die-cut cardboard palette trays featuring brand graphics and leak-proof paper well inserts."
          ]
        }
      ]
    }
  },
  {
    id: "soda",
    name: "The Gulp, pop soda (fruit flavoured)",
    category: "International",
    description: "Enhanced soda line replacing high-fructose syrups with prebiotic fibers, probiotic proteins, and organic juice.",
    nutritionalHighlights: ["Prebiotics & Probiotics", "Low Sugar (5g)", "Botanical Energy Boost", "Real Fruit Bases"],
    nutritionalDetail: { calories: "35 kcal", protein: "1g", fiber: "4.5g", fat: "0g" },
    ingredients: ["Carbonated Water", "Organic Juice Concentrate", "Chicory Root Inulin", "Bacillus Coagulans Probiotics"],
    color: {
      badge: "bg-blue-100 text-blue-800",
      bg: "bg-blue-50/30",
      border: "border-blue-100/50"
    },
    image: "/Functional Soda.png",
    detailedReport: {
      overview: "FUNCTIONAL BEVERAGES PROPOSAL\n\nEnhanced Prebiotic & Probiotic Soda Line Development.\nDocument Type: Product Innovation Proposal\nTarget Market: Health-Conscious Consumers, Gen-Z & Millennials.\n\nConsuming regular soda is heavily linked to severe health risks due to the presence of high fructose corn syrup and artificial ingredients. To provide an effective alternative and replacement to regular sodas, this project introduces an ENHANCED SODA formulated with prebiotic fibers, probiotic proteins, natural caffeine, low-calorie clean ingredients, and real fruit-forward flavors.",
      sections: [
        {
          title: "MARKET PROBLEM: HEALTH RISKS OF REGULAR SODA",
          content: "Traditional carbonated soft drinks rely heavily on high fructose corn syrup (HFCS) and artificial preservatives, leading to well-documented chronic health issues:",
          bullets: [
            "Type 2 Diabetes: High glycemic impact drives insulin resistance.",
            "Cardiovascular Disease: Correlated with increased arterial inflammation and hypertension.",
            "NAFLD: Non-alcoholic fatty liver disease linked to excessive fructose processing in the liver.",
            "Tooth Decay: High acidity and sugars strip enamel and accelerate cavities.",
            "Weakened Bones: Phosphoric acid content negatively affects bone mineral density.",
            "Artificial Additives: Synthetic dyes and chemicals lack nutritional or functional value."
          ]
        },
        {
          title: "THE SOLUTION: ENHANCED FUNCTIONAL SODA",
          content: "Enhanced Soda acts as a guilt-free substitute that delivers the carbonated mouthfeel and nostalgia of traditional pop while offering active wellness benefits:",
          bullets: [
            "Digestive Support: Enriched with Prebiotic Fibers & Probiotic Proteins to feed beneficial gut flora.",
            "Clean Energy: Infused with Natural Caffeine derived from tea/coffee botanical sources.",
            "Calorie-Conscious: Formulated with low-calorie, plant-based sweeteners without artificial aftertaste.",
            "Real Fruit Profile: Uses authentic, fruit-forward juice bases for genuine flavor depth."
          ]
        },
        {
          title: "FLAVOR PORTFOLIO & RANGE",
          table: {
            headers: ["Category", "Flavor Variant", "Flavor Profile & Experience"],
            rows: [
              ["Citrus & Zest", "Lemon Lime, Strawberry Lemon, Orange, Cherry Limeade", "Zesty, bright, classic thirst-quenching profiles with natural citrus oils."],
              ["Berry & Floral", "Wildberry, Raspberry Rose, Cranberry Fizz, Grape", "Aromatic, elevated berry blends infused with natural floral nuances."],
              ["Juicy Fruit", "Watermelon", "Sweet, light, and hydrating summer taste profile."],
              ["Indulgent Classics", "Cream Soda, Berries & Cream, Punch Pop", "Nostalgic soda fountain favorites reimagined with clean, low-sugar ingredients."]
            ]
          }
        },
        {
          title: "BENCHMARKING & BRAND POSITIONS",
          table: {
            headers: ["Brand Model", "Visual Style", "Functional Focus", "Packaging Strategy"],
            rows: [
              ["Poppi Model", "Pop Art: Bright, bold fruit graphics", "Prebiotics & Low Sugar (5g)", "12 oz brightly colored aluminum cans with high visual contrast."],
              ["Olipop Model", "Vintage: Nostalgic soda aesthetic", "Prebiotic Fiber (3g–6g) & Botanicals", "Matte-finish cans featuring vintage typography and illustrations."]
            ]
          }
        },
        {
          title: "STRATEGIC ROADMAP",
          bullets: [
            "1. Formula Optimization: Complete carbonation stability testing for prebiotic fibers and probiotic proteins in aluminum cans.",
            "2. Flagship Flavor Launch: Initial production run focusing on core variants (Strawberry Lemon, Lemon Lime, Raspberry Rose, Cream Soda).",
            "3. Channel Strategy: Leverage direct-to-consumer (DTC) digital campaigns alongside specialty grocery and wellness boutique retail placement."
          ]
        }
      ]
    }
  },
  {
    id: "water",
    name: "Enhanced longevity (Vit+Min) water",
    category: "International",
    description: "Synergistic vitamin and mineral alkaline hydration water, optimized for intestinal absorption and cellular repair.",
    nutritionalHighlights: ["pH 8.5+ Alkaline", "Ionic Trace Minerals", "Active D3 + K2 Synergy", "Zero Sugar & Additives"],
    nutritionalDetail: { calories: "0 kcal", protein: "0g", fiber: "0g", fat: "0g" },
    ingredients: ["Purified Alkaline Water", "Vitamin D3 & K2", "Ionic Zinc & Magnesium Complex", "Organic Fruit Essences"],
    color: {
      badge: "bg-indigo-100 text-indigo-800",
      bg: "bg-indigo-50/30",
      border: "border-indigo-100/50"
    },
    image: "/water (2).png",
    detailedReport: {
      overview: "ENHANCED LONGEVITY WATER\n\nSynergistic Vitamin & Mineral Hydration Formulation.\nDocument Type: Product Innovation & Scientific Proposal\nTarget Market: Health-Conscious Individuals, Biohackers & Active Adults.\n\nGlobal epidemiological data establishes a direct causal link between severe nutrient deficiencies, cellular malabsorption, and premature mortality worldwide. To address this gap, Enhanced Longevity Water is developed as an advanced liquid delivery mechanism infused with synergistically paired vitamins and minerals designed to maximize intestinal absorption, cellular repair, and systemic health span.",
      sections: [
        {
          title: "SCIENTIFIC FOUNDATION & PROBLEM STATEMENT",
          content: "Rigorous global health research highlights the critical impact of micronutrient deficiency on human mortality and cellular decline:",
          bullets: [
            "University of South Australia: Established a direct causal link between severe nutrient deficiency and early (premature) death globally.",
            "IHME Collaboration: Supported by massive global research data analyzed at the University of Washington's Institute for Health Metrics and Evaluation (IHME).",
            "Immune Collapse: Failure of innate and adaptive immune responses.",
            "Organ Failure: Chronic metabolic strain across key vital organ systems.",
            "Repair Degradation: Impaired DNA replication and cellular damage repair."
          ]
        },
        {
          title: "BIOAVAILABILITY MECHANISM & THE SOLUTION",
          content: "Nutrients delivered via solid tablets or pills often suffer from poor bioavailability and slow gastrointestinal breakdown. Water-soluble delivery offers a significantly faster and more complete absorption pathway into the bloodstream.",
          table: {
            headers: ["Primary Nutrient", "Synergistic Partner", "Absorption & Biological Mechanism"],
            rows: [
              ["Vitamin D3", "Magnesium + Vitamin K2", "Magnesium activates Vitamin D enzymes; K2 ensures proper calcium distribution to bones rather than soft tissues."],
              ["Vitamin C", "Zinc + Iron", "Vitamin C converts ferric iron to ferrous iron for rapid intestinal absorption while optimizing immune cellular repair."],
              ["Electrolyte Complex", "Na / K / Ionic Minerals", "Facilitates rapid intracellular hydration and maintains optimal cellular membrane potential."],
              ["B-Complex Vitamins", "Water Hydration Base", "Water-soluble B-vitamins absorb directly across mucosal membranes without requiring complex digestive breakdown."]
            ]
          }
        },
        {
          title: "PACKAGING STRATEGY & BRAND IDENTITY",
          content: "The visual branding leverages modern minimal aesthetics paired with abstract geometric design to reflect scientific precision and lifestyle appeal.",
          table: {
            headers: ["Design Element", "Specification", "Strategic Objective"],
            rows: [
              ["Bottle Vessel", "Sleek, ultra-clear PET/Glass bottle with matte black cap", "Communicates purity, premium positioning, and pharmaceutical-grade quality."],
              ["Label Graphic", "Monochrome dotted patterns with primary color accents", "Visual representation of cellular structure, molecular interaction, and vibrancy."],
              ["Brand Nomenclature", "\"im water\" / Wearable Hydration Concept", "Positions the product as an essential daily personal wellness companion."]
            ]
          }
        },
        {
          title: "STRATEGIC ROADMAP",
          bullets: [
            "1. Formula Stabilization: Finalize micronutrient ionic stability testing to ensure zero degradation under light and ambient storage.",
            "2. Regulatory & Clinical Validation: Complete bioavailability verification trials for water-based synergistic nutrient delivery.",
            "3. Market Rollout: Target premium boutique gyms, longevity clinics, and direct-to-consumer health subscription channels."
          ]
        }
      ]
    }
  },
  {
    id: "jackfruit-chips",
    name: "Pure crunch Jackfruit chips.",
    category: "Traditional",
    description: "Crispy vacuum-cooked jackfruit slices that minimize agricultural post-harvest waste and provide a healthier snacking alternative.",
    nutritionalHighlights: ["Vacuum Cooked", "High Natural Fiber", "GI Tag Sourced", "Low Fat Retention"],
    nutritionalDetail: { calories: "120 kcal", protein: "2g", fiber: "4.5g", fat: "1.8g" },
    ingredients: ["Fresh Ripe Jackfruit Slices", "Cold-Pressed Sunflower Oil", "Sea Salt", "Kerala Spices"],
    color: {
      badge: "bg-orange-100 text-orange-800",
      bg: "bg-orange-50/30",
      border: "border-orange-100/50"
    },
    image: "/jack_chips (2).png",
    detailedReport: {
      overview: "JACKFRUIT CHIPS: MARKET & OPPORTUNITY\n\nJackfruit chips are a crispy snack made by thinly slicing unripe (raw) jackfruit and deep frying or vacuum frying the slices in oil. Prized for their natural sweetness or savory crunch, they are heavily seasoned with spices like chili and salt.",
      sections: [
        {
          title: "CROP WASTE & SOURCING CONTEXT",
          content: "Jackfruit is mainly produced in Kerala, Tamil Nadu, Assam, and Bihar. Kerala produces half of India's total yield, and Panruti in Cuddalore district of Tamil Nadu holds the GI tag for its unique quality.",
          bullets: [
            "An estimated 65% to 70% of total jackfruit produce is wasted annually in India due to lack of cold storage or local processing facilities.",
            "This creates an annual monetary loss of Rs 2,000 Crore across India.",
            "In Kerala alone, the annual post-harvest loss stands at Rs 1,200 Crore.",
            "Conversely, over 190 nations do not produce jackfruit commercially because the crop requires specific humid, tropical climates (currently grown in over 60 countries)."
          ]
        },
        {
          title: "THE DOMINION VENTURES OPPORTUNITY",
          content: "We established this production facility to bridge this gap: stabilizing the domestic market, providing profits directly to farmers and local industries, and delivering a superior potato-chip alternative to consumers across 190 nations.",
          bullets: [
            "Vacuum-frying technology maintains natural tropical color, aroma, and high dietary fiber.",
            "Drastically reduces fat absorption compared to traditional deep frying.",
            "Creates direct direct-to-farm supply chain security for marginalized growers."
          ]
        }
      ]
    }
  }
];
