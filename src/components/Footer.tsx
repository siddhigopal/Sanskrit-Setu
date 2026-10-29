import React from 'react';
import { ArrowUp, BookOpen, Heart, Globe, Share2 } from 'lucide-react';

interface FooterProps {
  onOpenDeploymentGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeploymentGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#D6CEBE] pt-16 pb-12 border-t border-[#7F1D1D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#292524]">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#7F1D1D] text-[#FDE047] flex items-center justify-center font-heading text-lg border border-[#D4AF37]/40">
                ॐ
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Sanskrit Setu
              </span>
            </div>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              Intelligent Sanskrit Knowledge Explorer engineered for KRITI IKS Tech Challenge 2026.
              Preserving and computationally indexing the Vedic, Upanishadic, and classical philosophical heritage of India.
            </p>
            <div className="text-xs text-amber-300 font-mono">
              ॥ विद्या ददाति विनयं ॥
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <a href="#home" className="hover:text-amber-200 transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#explorer" className="hover:text-amber-200 transition-colors">
                  Sanskrit Corpus Explorer
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-amber-200 transition-colors">
                  Five Knowledge Pillars
                </a>
              </li>
              <li>
                <a href="#verse-of-day" className="hover:text-amber-200 transition-colors">
                  Verse of the Day
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-200 transition-colors">
                  About KRITI IKS 2026
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Knowledge Pillars */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Knowledge Domains
            </div>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>01. Vedas (Rig, Sama, Yajur, Atharva)</li>
              <li>02. Upanishads & Mahavakyas</li>
              <li>03. Ayurveda & Tridosha Physiology</li>
              <li>04. Patanjali Yoga Sutras</li>
              <li>05. Shad Darshanas (Six Philosophical Systems)</li>
            </ul>
          </div>

          {/* Col 4: Event & Deployment */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Event Deployment
            </div>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              Ready for presentation at tomorrow's KRITI IKS Tech Challenge 2026 showcase.
            </p>
            <button
              onClick={onOpenDeploymentGuide}
              className="px-4 py-2 bg-[#7F1D1D] hover:bg-[#991B1B] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>View Public Link & Guide</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div>
            © 2026 Sanskrit Setu · KRITI IKS Tech Challenge 2026 · Indian Knowledge Systems
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#A8A29E] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
