'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Search, ChevronRight, ArrowUpRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { products, Product } from '@/data/products';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Traditional' | 'International'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on search and selected tab
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen py-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 right-[-100px] w-[450px] h-[450px] bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none animate-soft-glow" />
      <div className="absolute bottom-1/3 left-[-100px] w-[450px] h-[450px] bg-brand-green/5 rounded-full filter blur-[100px] pointer-events-none animate-soft-glow" />

      {/* Header Banner */}
      <section className="bg-brand-cream py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-brand-gold">
              Dominion Signature Collections
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-brand-green mt-6 mb-8 max-w-3xl leading-[1.05] tracking-tight">
              A Taste For Every <br />
              <span className="italic text-brand-gold">Sophisticated Palate.</span>
            </h1>
            <div className="h-[2px] w-28 bg-brand-gold" />
          </FadeIn>
        </div>
      </section>

      {/* Product Grid & Filters */}
      <section className="py-12 lg:py-16 px-6 max-w-[1440px] mx-auto relative z-10">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 border-b border-brand-cream-dark pb-8">
          {/* Category Tabs */}
          <div className="flex gap-2 bg-brand-cream p-1.5 rounded-full border border-brand-cream-dark w-full md:w-auto overflow-x-auto shadow-sm">
            {(['All', 'Traditional', 'International'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-brand-green text-brand-cream shadow-md shadow-brand-green/10'
                    : 'text-brand-charcoal/70 hover:text-brand-green'
                }`}
              >
                {cat === 'All' ? 'All Flavours' : `${cat} Collection`}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search flavours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-cream border border-brand-cream-dark rounded-full pl-12 pr-4 py-3.5 text-xs text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:border-brand-gold focus:bg-white transition-all duration-300 shadow-inner"
            />
            <Search size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-gold" />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <FadeIn key={product.id} delay={(idx % 3) * 0.1}>
              <div 
                onClick={() => setSelectedProduct(product)}
                className={`p-8 rounded-[2.5rem] bg-white border ${product.color.border} shadow-sm hover:shadow-2xl hover:border-brand-gold/45 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full group cursor-pointer`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className={`text-[9px] uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full ${product.color.badge} shadow-sm`}>
                      {product.category}
                    </span>
                    <span className="text-[9px] text-brand-charcoal/40 font-bold uppercase tracking-widest">
                      Premium Grade
                    </span>
                  </div>

                  {/* Gourmet Product Visual */}
                  <div className={`h-56 w-full rounded-[1.8rem] ${product.color.bg} flex items-center justify-center border border-brand-cream-dark mb-8 relative overflow-hidden transition-transform duration-700 shadow-inner`}>
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-[90%] h-[90%] object-contain transition-all duration-750 group-hover:scale-105 group-hover:rotate-1"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md border border-brand-cream-dark transition-transform duration-500 group-hover:rotate-12">
                        <span className="font-serif text-sm font-bold text-brand-green text-center px-2">
                          {product.name}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <h3 className="font-serif text-3xl text-brand-green mb-3 group-hover:text-brand-gold transition-colors duration-300 font-medium">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/70 mb-8 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Read More button to attract clicking */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="btn-primary !w-full !py-3 !text-[10px] mb-6"
                  >
                    <span>Read Innovation Report</span>
                    <ChevronRight size={12} className="relative z-10" />
                  </button>

                  <div className="border-t border-brand-cream-dark pt-6 flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/50">
                    <div className="flex gap-2">
                      <span className="text-brand-charcoal">{product.nutritionalDetail.protein}</span>
                      <span>Protein</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-brand-charcoal">{product.nutritionalDetail.calories}</span>
                      <span>Calories</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <span className="font-serif text-3xl text-brand-charcoal/40">No flavours found matching your criteria.</span>
          </div>
        )}
      </section>

      {/* DETAIL MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-[2.5rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-brand-cream-dark/60"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-brand-cream hover:bg-brand-cream-dark text-brand-green transition-colors duration-300 z-10 border border-brand-cream-dark shadow-sm"
              >
                <X size={18} />
              </button>

              <div className="p-8 md:p-12">
                {/* Header Category and Title */}
                <div className="mb-8">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full ${selectedProduct.color.badge} shadow-sm`}>
                    {selectedProduct.category} Collection
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-6 mb-2 font-medium">
                    {selectedProduct.name}
                  </h2>
                  <div className="h-[2px] w-12 bg-brand-gold mt-4" />
                </div>

                {/* Product Image */}
                {selectedProduct.image && (
                  <div className={`aspect-video w-full rounded-[2rem] ${selectedProduct.color.bg} border border-brand-cream-dark overflow-hidden mb-8 flex items-center justify-center shadow-inner p-6`}>
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-[75%] h-[75%] object-contain"
                    />
                  </div>
                )}

                {/* Description */}
                <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                {/* Nutritional Specs Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-brand-cream/50 p-4 rounded-2xl border border-brand-cream-dark text-center shadow-inner">
                    <span className="block text-[9px] text-brand-charcoal/50 uppercase tracking-widest font-extrabold mb-1.5">Calories</span>
                    <span className="font-serif text-xl text-brand-green font-bold">{selectedProduct.nutritionalDetail.calories}</span>
                  </div>
                  <div className="bg-brand-cream/50 p-4 rounded-2xl border border-brand-cream-dark text-center shadow-inner">
                    <span className="block text-[9px] text-brand-charcoal/50 uppercase tracking-widest font-extrabold mb-1.5">Protein</span>
                    <span className="font-serif text-xl text-brand-green font-bold">{selectedProduct.nutritionalDetail.protein}</span>
                  </div>
                  <div className="bg-brand-cream/50 p-4 rounded-2xl border border-brand-cream-dark text-center shadow-inner">
                    <span className="block text-[9px] text-brand-charcoal/50 uppercase tracking-widest font-extrabold mb-1.5">Dietary Fiber</span>
                    <span className="font-serif text-xl text-brand-green font-bold">{selectedProduct.nutritionalDetail.fiber}</span>
                  </div>
                  <div className="bg-brand-cream/50 p-4 rounded-2xl border border-brand-cream-dark text-center shadow-inner">
                    <span className="block text-[9px] text-brand-charcoal/50 uppercase tracking-widest font-extrabold mb-1.5">Fat Content</span>
                    <span className="font-serif text-xl text-brand-green font-bold">{selectedProduct.nutritionalDetail.fat}</span>
                  </div>
                </div>

                {/* Key Selling Highlights */}
                <div className="mb-8">
                  <span className="block text-xs uppercase tracking-widest font-bold text-brand-gold mb-3.5">Product Highlights</span>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProduct.nutritionalHighlights.map((highlight, idx) => (
                      <span key={idx} className="bg-emerald-50/60 border border-emerald-100 text-emerald-800 text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-sans font-medium">
                        <ShieldCheck size={12} className="text-emerald-600" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ingredients List */}
                <div className="mb-8">
                  <span className="block text-xs uppercase tracking-widest font-bold text-brand-gold mb-3.5">Clean Ingredients</span>
                  <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed bg-brand-cream p-5 rounded-2xl border border-brand-cream-dark shadow-inner">
                    {selectedProduct.ingredients.join(', ')}
                  </p>
                </div>

                {/* Detailed Spec / Innovation Report */}
                {selectedProduct.detailedReport && (
                  <div className="mt-10 pt-10 border-t border-brand-cream-dark text-left">
                    <span className="block text-xs uppercase tracking-widest font-extrabold text-brand-gold mb-4">
                      Innovation & Sourcing Report
                    </span>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed bg-brand-cream p-6 rounded-[1.8rem] border border-brand-cream-dark whitespace-pre-line mb-8 shadow-inner">
                      {selectedProduct.detailedReport.overview}
                    </p>

                    {selectedProduct.detailedReport.sections.map((sec, sidx) => (
                      <div key={sidx} className="mb-8">
                        <h4 className="font-serif text-xl text-brand-green font-bold mb-3">
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
                )}


              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
