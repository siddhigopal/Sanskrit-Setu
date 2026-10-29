import React from 'react';
import { BookOpen, Sparkles, ArrowRight, Layers, FileText } from 'lucide-react';
import { CATEGORIES_DATA, CategoryInfo } from '../data/sanskritData';

interface CategoryCardsProps {
  onSelectCategory: (category: CategoryInfo) => void;
  onFilterExplorer: (categoryId: string) => void;
  selectedFilter: string;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  onSelectCategory,
  onFilterExplorer,
  selectedFilter,
}) => {
  // Map category visual assets
  const getImageForCategory = (id: string) => {
    switch (id) {
      case 'Vedas':
        return '/src/assets/images/vedic_heritage_mandala_1793261103670.jpg';
      case 'Ayurveda':
        return '/src/assets/images/ayurveda_botanical_plate_1793261104226.jpg';
      default:
        return null;
    }
  };

  return (
    <section id="categories" className="py-16 md:py-24 border-b border-[#E7DECD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#991B1B]">
            <Layers className="w-3.5 h-3.5 text-[#B45309]" />
            <span>पञ्च ज्ञान स्तम्भाः · The Five Pillars of IKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1C1917] mt-1.5">
            Interactive Knowledge Pillars
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg mt-2 leading-relaxed">
            Delve into the five foundational disciplines of classical Indian civilization.
            Each category links directly to primary Sanskrit treatises, computational metadata, and canonical aphorisms.
          </p>
        </div>

        {/* 5-Card Layout (Responsive Grid: 3 cards top row, 2 cards bottom row or fluid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES_DATA.map((cat, index) => {
            const hasCustomImage = getImageForCategory(cat.id);
            const isActive = selectedFilter === cat.id;

            return (
              <div
                key={cat.id}
                className={`group relative bg-[#FFFDF9] rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${
                  isActive
                    ? 'border-[#7F1D1D] ring-2 ring-[#7F1D1D]/20 bg-[#FAF5EE]'
                    : 'border-[#E7DECD] hover:border-[#B45309]'
                } ${index === 3 ? 'md:col-span-1 lg:col-span-1' : ''}`}
              >
                {/* Top visual banner (for categories with museum imagery) */}
                {hasCustomImage ? (
                  <div className="relative h-44 w-full overflow-hidden bg-[#F5EFEB] border-b border-[#E7DECD]">
                    <img
                      src={hasCustomImage}
                      alt={`${cat.englishName} manuscript illustration`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3.5 text-white">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-amber-200">
                        {cat.period}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Stylized ornamental header for text-centric pillars */
                  <div className="h-24 bg-gradient-to-r from-[#FAF7F0] via-[#F5EFEB] to-[#FAF7F0] border-b border-[#E7DECD] p-4 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#78350F]">
                        {cat.period}
                      </span>
                      <div className="font-heading text-2xl text-[#7F1D1D] opacity-80 mt-0.5">
                        {cat.devanagariName}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-xs font-serif text-[#B45309] bg-white">
                      0{index + 1}
                    </div>
                  </div>
                )}

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed category metadata with clean separators */}
                    <div className="flex items-center gap-2 text-xs text-[#78350F] mb-1">
                      <span>Pillar 0{index + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-[11px]">{cat.id}</span>
                    </div>

                    {/* Titles */}
                    <h3 className="text-xl font-display font-bold text-[#1C1917] group-hover:text-[#7F1D1D] transition-colors flex items-baseline gap-2">
                      <span>{cat.englishName}</span>
                      <span className="font-devanagari font-semibold text-base text-[#991B1B]">
                        ({cat.devanagariName})
                      </span>
                    </h3>

                    <p className="text-xs font-serif italic text-[#78350F] mt-1">
                      {cat.subtitle}
                    </p>

                    <p className="text-sm text-[#57534E] leading-relaxed mt-3 line-clamp-3">
                      {cat.description}
                    </p>
                  </div>

                  {/* Featured canonical quotation snippet */}
                  <div className="p-3 bg-[#F5EFEB]/70 rounded-lg border border-[#E7DECD] space-y-1">
                    <div className="font-devanagari text-xs font-medium text-[#7F1D1D]">
                      {cat.featuredQuote.devanagari}
                    </div>
                    <div className="text-[11px] text-[#44403C] line-clamp-1 italic font-sans-custom">
                      "{cat.featuredQuote.translation}"
                    </div>
                    <div className="text-[10px] text-[#78350F] text-right font-serif">
                      — {cat.featuredQuote.source}
                    </div>
                  </div>

                  {/* Treatises Micro-list */}
                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-[#78350F] uppercase tracking-wider mb-1.5">
                      Key Treatises:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.keyTreatises.slice(0, 3).map((treatise) => (
                        <span
                          key={treatise}
                          className="text-[11px] px-2 py-0.5 bg-white text-[#44403C] border border-[#E7DECD] rounded-sm"
                        >
                          {treatise}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footers */}
                <div className="px-6 py-3.5 bg-[#FAF7F0] border-t border-[#E7DECD] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="text-xs font-semibold text-[#7F1D1D] hover:text-[#991B1B] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Full Dossier</span>
                  </button>

                  <button
                    onClick={() => onFilterExplorer(cat.id)}
                    className="text-xs font-medium text-[#44403C] hover:text-[#7F1D1D] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Filter Corpus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
