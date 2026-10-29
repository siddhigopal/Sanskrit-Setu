import React from 'react';
import { X, BookOpen, Layers, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CategoryInfo } from '../data/sanskritData';

interface CategoryModalProps {
  category: CategoryInfo | null;
  onClose: () => void;
  onFilterExplorer: (categoryId: string) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  category,
  onClose,
  onFilterExplorer,
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FFFDF9] rounded-2xl border border-[#D6CEBE] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E7DECD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#991B1B] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#B45309]" />
              <span>IKS Canonical Dossier · {category.period}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1C1917] mt-1 flex items-baseline gap-2">
              <span>{category.englishName}</span>
              <span className="font-heading font-normal text-xl text-[#7F1D1D]">
                ({category.devanagariName})
              </span>
            </h2>
            <p className="font-serif italic text-sm text-[#78350F] mt-0.5">
              {category.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#78350F] hover:text-[#1C1917] hover:bg-[#F5EFEB] rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78350F]">
            Epistemological Overview
          </h4>
          <p className="text-sm text-[#44403C] leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Canonical Treatises */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78350F]">
            Primary Classical Treatises (ग्रन्थ सूची)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {category.keyTreatises.map((treatise) => (
              <div
                key={treatise}
                className="flex items-center gap-2 p-2.5 bg-[#FAF7F0] rounded-lg border border-[#E7DECD] text-xs font-medium text-[#292524]"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
                <span>{treatise}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Ontological Concepts */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78350F]">
            Fundamental Concepts & Principles
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.coreConcepts.map((concept) => (
              <span
                key={concept}
                className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] rounded-md text-xs font-medium"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Canonical Aphorism */}
        <div className="p-4 bg-[#F5EFEB] rounded-xl border border-[#D6CEBE] space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#991B1B]">
            Featured Canonical Sutra
          </span>
          <div className="font-devanagari text-lg sm:text-xl font-medium text-[#7F1D1D]">
            {category.featuredQuote.devanagari}
          </div>
          <div className="font-serif italic text-xs text-[#44403C]">
            {category.featuredQuote.iast}
          </div>
          <p className="text-xs text-[#292524] font-sans-custom">
            "{category.featuredQuote.translation}"
          </p>
          <div className="text-[10px] text-[#78350F] text-right font-serif">
            — {category.featuredQuote.source}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-[#E7DECD] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#44403C] hover:bg-[#F5EFEB] rounded-lg cursor-pointer"
          >
            Close Dossier
          </button>

          <button
            onClick={() => {
              onFilterExplorer(category.id);
              onClose();
            }}
            className="px-5 py-2.5 bg-[#7F1D1D] hover:bg-[#991B1B] text-white text-xs font-semibold rounded-lg shadow-2xs hover:shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Filter Explorer by {category.englishName}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
