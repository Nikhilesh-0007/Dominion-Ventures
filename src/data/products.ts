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
}

export const products: Product[] = [
  {
    id: "makhana",
    name: "Makhana",
    category: "Traditional",
    description: "Our flagship product, crafted using a carefully controlled farm-to-pack process and available in traditional Indian as well as international flavour profiles. Gently roasted and seasoned with gourmet chef-crafted spices.",
    nutritionalHighlights: ["100% Traceable", "Jumbo Kernels", "Gluten Free", "High Protein"],
    nutritionalDetail: { calories: "110 kcal", protein: "3g", fiber: "2.5g", fat: "1.5g" },
    ingredients: ["Premium Makhana (Gorgon Nut)", "Cold-Pressed Sunflower Oil", "Chef-Crafted Organic Spices", "Pink Himalayan Salt"],
    color: {
      badge: "bg-emerald-100 text-emerald-800",
      bg: "bg-emerald-50/30",
      border: "border-emerald-100/50"
    },
    image: "/makhana (2).png"
  },
  {
    id: "jackfruit-chips",
    name: "Jackfruit Chips",
    category: "Traditional",
    description: "Premium healthy chips created from one of India's most abundant tropical fruits. Crisp vacuum-cooked jackfruit slices that preserve natural color, vitamins, and sweet tropical flavor using minimal clean oil.",
    nutritionalHighlights: ["Vacuum Cooked", "High Natural Fiber", "Zero Preservatives", "Low Fat"],
    nutritionalDetail: { calories: "120 kcal", protein: "2g", fiber: "4.5g", fat: "1.8g" },
    ingredients: ["Fresh Ripe Jackfruit Slices", "Cold-Pressed Sunflower Oil", "Sea Salt"],
    color: {
      badge: "bg-orange-100 text-orange-800",
      bg: "bg-orange-50/30",
      border: "border-orange-100/50"
    },
    image: "/jack_chips (2).png"
  }
];
