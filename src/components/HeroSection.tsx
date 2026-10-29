import React from 'react';
import { Search, Sparkles, Compass, ArrowRight, ShieldCheck, BookMarked } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit: () => void;
  onSelectSuggestion: (term: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
  onSelectSuggestion,
}) => {
  const suggestions = [
    { label: 'सत्यमेव जयते', category: 'Upanishad' },
    { label: 'वसुधैव कुटुम्बकम्', category: 'Universalism' },
    { label: 'कर्मण्येवाधिकारस्ते', category: 'Gita' },
    { label: 'योगश्चित्तवृत्तिनिरोधः', category: 'Yoga' },
    { label: 'शरीरमाद्यं धर्मसाधनम्', category: 'Ayurveda' },
    { label: 'अहं ब्रह्मास्मि', category: 'Mahavakya' },
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-[#E7DECD]">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FEF3C7]/40 via-[#FAF7F0] to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & Functional Search (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Curatorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#991B1B]">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span>KRITI IKS Tech Challenge 2026</span>
              <span className="text-[#A8A29E]">·</span>
              <span className="text-[#78350F]">Verified Corpus Edition</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1C1917] tracking-tight leading-[1.15] text-balance">
                Sanskrit Setu <br />
                <span className="font-heading font-normal text-[#7F1D1D] text-3xl sm:text-4xl md:text-5xl">
                  संस्कृत सेतु · ज्ञान अन्वेषक
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#57534E] leading-relaxed max-w-2xl text-balance pt-1">
                An intelligent computational gateway to the timeless wisdom of classical Indian Knowledge Systems.
                Explore verified verses from the Vedas, Upanishads, Ayurveda, Yoga, and Indian philosophy with Devanagari script,
                IAST transliteration, anatomical grammatical analysis, and contextual translations.
              </p>
            </div>

            {/* Primary Interactive Search Bar in Hero */}
            <div className="bg-white p-2 rounded-xl shadow-md border border-[#E7DECD] focus-within:border-[#B45309] focus-within:ring-2 focus-within:ring-[#FDE68A] transition-all">
              <div className="flex items-center gap-2">
                <div className="pl-3 text-[#78350F]">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search Sanskrit verses, words (e.g. Satya, Karma, आरोग्य, Yoga)..."
                  className="w-full py-2.5 px-2 text-sm md:text-base text-[#1C1917] placeholder:text-[#A8A29E] bg-transparent focus:outline-hidden"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 text-xs text-[#78350F] hover:text-[#1C1917] px-2 rounded-sm"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={onSearchSubmit}
                  className="px-5 py-2.5 bg-[#7F1D1D] hover:bg-[#991B1B] text-white text-xs md:text-sm font-semibold rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick search suggestions */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#78350F] font-medium">
                <Compass className="w-3.5 h-3.5 text-[#B45309]" />
                <span>Quick Prompts & Classical Aphorisms:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => onSelectSuggestion(item.label)}
                    className="px-3 py-1.5 text-xs bg-[#F5EFEB] hover:bg-[#EBE3D5] text-[#292524] rounded-md border border-[#E7DECD] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="font-devanagari font-medium">{item.label}</span>
                    <span className="text-[10px] text-[#A8A29E]">({item.category})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scholarly Verification Badge */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#78350F]">
              <div className="flex items-center gap-1.5 bg-[#FEF3C7] text-[#92400E] px-2.5 py-1 rounded-sm border border-[#FDE68A] font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Scholarly Verified Quotations</span>
              </div>
              <span>Zero hallucinated verses · Classical canonical citations</span>
            </div>
          </div>

          {/* Right Column: Museum-grade Manuscript Artifact (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] via-[#B45309] to-[#7F1D1D] rounded-2xl opacity-20 blur-xs group-hover:opacity-30 transition-opacity" />
              
              <div className="relative bg-[#FFFDF9] rounded-xl border border-[#D6CEBE] p-3 shadow-lg overflow-hidden">
                <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-[#F5EFEB]">
                  <img
                    src="/src/assets/images/sanskrit_manuscript_hero_1793261103055.jpg"
                    alt="Classical Indian Sanskrit palm-leaf manuscript with Devanagari script and brass diya lamp"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Floating curatorial badge on image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] font-mono tracking-wider uppercase text-amber-200">
                      Archival Accession · IKS-2026-MSS-01
                    </p>
                    <p className="text-xs sm:text-sm font-serif italic text-amber-50">
                      "नमो शिवाय..." Birch-bark & Palm-leaf Grantha Manuscript with Vedic Accents
                    </p>
                  </div>
                </div>

                {/* Curatorial Annotation below image */}
                <div className="mt-3 pt-2 border-t border-[#E7DECD] flex items-center justify-between text-xs text-[#78350F]">
                  <span className="font-serif italic">Manuscript Preservation & Grantha Studies</span>
                  <a
                    href="#categories"
                    className="text-[#991B1B] hover:underline font-medium flex items-center gap-1"
                  >
                    <span>View Treatises</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 5-column IKS Knowledge Strip below hero split */}
        <div className="mt-12 pt-8 border-t border-[#E7DECD]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-white/70 rounded-xl border border-[#E7DECD] shadow-2xs">
              <div className="text-xs text-[#78350F] uppercase tracking-wider font-semibold">01. Vedas (वेद)</div>
              <div className="text-2xl font-bold font-display text-[#1C1917] mt-1 tabular-nums">4 Samhitas</div>
              <div className="text-xs text-[#78350F] mt-0.5">Rig, Sama, Yajur, Atharva</div>
            </div>

            <div className="p-4 bg-white/70 rounded-xl border border-[#E7DECD] shadow-2xs">
              <div className="text-xs text-[#78350F] uppercase tracking-wider font-semibold">02. Upanishads (उपनिषद्)</div>
              <div className="text-2xl font-bold font-display text-[#1C1917] mt-1 tabular-nums">108 Treatises</div>
              <div className="text-xs text-[#78350F] mt-0.5">10 Mukhya Vedanta texts</div>
            </div>

            <div className="p-4 bg-white/70 rounded-xl border border-[#E7DECD] shadow-2xs">
              <div className="text-xs text-[#78350F] uppercase tracking-wider font-semibold">03. Ayurveda (आयुर्वेद)</div>
              <div className="text-2xl font-bold font-display text-[#1C1917] mt-1 tabular-nums">3 Doshas</div>
              <div className="text-xs text-[#78350F] mt-0.5">Vata, Pitta, Kapha balance</div>
            </div>

            <div className="p-4 bg-white/70 rounded-xl border border-[#E7DECD] shadow-2xs">
              <div className="text-xs text-[#78350F] uppercase tracking-wider font-semibold">04. Yoga (योग)</div>
              <div className="text-2xl font-bold font-display text-[#1C1917] mt-1 tabular-nums">8 Limbs</div>
              <div className="text-xs text-[#78350F] mt-0.5">Ashtanga Yoga of Patanjali</div>
            </div>

            <div className="p-4 bg-white/70 rounded-xl border border-[#E7DECD] shadow-2xs col-span-2 sm:col-span-1">
              <div className="text-xs text-[#78350F] uppercase tracking-wider font-semibold">05. Shad Darshana</div>
              <div className="text-2xl font-bold font-display text-[#1C1917] mt-1 tabular-nums">6 Schools</div>
              <div className="text-xs text-[#78350F] mt-0.5">Nyaya, Vaisheshika, Samkhya...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
