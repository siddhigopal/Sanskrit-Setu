import React from 'react';
import { ShieldCheck, BookOpen, Cpu, Sparkles, Award, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#E7DECD] bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Vision (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#991B1B]">
              <Award className="w-4 h-4 text-[#B45309]" />
              <span>About Sanskrit Setu & KRITI IKS 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1C1917] leading-tight">
              Bridging Millennia of Wisdom with Modern Computational Linguistics
            </h2>

            <p className="text-base text-[#57534E] leading-relaxed">
              <strong>Sanskrit Setu (संस्कृत सेतु)</strong> was conceived for the{' '}
              <strong>KRITI IKS Tech Challenge 2026</strong> under the Indian Knowledge Systems (IKS) division,
              aiming to make the foundational corpus of classical Sanskrit accessible, verifiable, and computationally structured.
            </p>

            <p className="text-sm text-[#57534E] leading-relaxed">
              Traditional Sanskrit repositories often suffer from lack of standardized morphological breakdowns,
              opaque transliteration, or inaccurate attributions. Sanskrit Setu resolves this by combining
              rigid Paninian grammatical analysis (Padacheda) with contextual multilingual translations (Hindi & English)
              and rigorous canonical citations across the Vedas, Upanishads, Ayurveda, Yoga, and the Shad Darshanas.
            </p>

            {/* Three Foundational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-[#E7DECD] space-y-1.5 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#92400E] flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-[#1C1917]">
                  Scholarly Provenance
                </h4>
                <p className="text-xs text-[#78350F] leading-normal">
                  Strict zero-hallucination policy. Every shloka and aphorism cites its exact classical locus.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E7DECD] space-y-1.5 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#92400E] flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-[#1C1917]">
                  Morphological Parsing
                </h4>
                <p className="text-xs text-[#78350F] leading-normal">
                  Word-by-word grammatical dissection (Padacheda) clarifying sandhi, vibhakti, and lakara.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E7DECD] space-y-1.5 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#92400E] flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-[#1C1917]">
                  Multi-Script Access
                </h4>
                <p className="text-xs text-[#78350F] leading-normal">
                  Bilingual devanagari & standardized IAST diacritics with real-time browser audio recitation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Specifications & Event Brief (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FFFDF9] rounded-2xl border border-[#D6CEBE] p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#E7DECD] text-[#7F1D1D] font-display font-bold text-lg">
                <Cpu className="w-5 h-5 text-[#B45309]" />
                <span>Technical Specifications</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-[#E7DECD]/60">
                  <span className="text-[#78350F]">Framework:</span>
                  <span className="font-semibold text-[#1C1917]">React 19 + TypeScript + Vite</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7DECD]/60">
                  <span className="text-[#78350F]">Design System:</span>
                  <span className="font-semibold text-[#1C1917]">Tailwind CSS (Heritage Palette)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7DECD]/60">
                  <span className="text-[#78350F]">Typography:</span>
                  <span className="font-semibold text-[#1C1917]">Noto Serif Devanagari & Cinzel</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7DECD]/60">
                  <span className="text-[#78350F]">Data Verification:</span>
                  <span className="font-semibold text-[#1C1917]">Canonical Samhitas & Upanishads</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7DECD]/60">
                  <span className="text-[#78350F]">Phonetic Engine:</span>
                  <span className="font-semibold text-[#1C1917]">Client-side SpeechSynthesis API</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#78350F]">Event Target:</span>
                  <span className="font-semibold text-[#991B1B]">KRITI IKS Tech Challenge 2026</span>
                </div>
              </div>

              {/* Event Pledge */}
              <div className="p-3 bg-[#FEF3C7] rounded-lg border border-[#FDE68A] text-xs text-[#92400E] space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>KRITI IKS Integrity Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Developed in accordance with the National Education Policy (NEP 2020) vision for Indian Knowledge Systems.
                  No artificial or hallucinated Sanskrit has been introduced into this index.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
