import React, { useState } from 'react';
import { Search, Bookmark, Share2, HelpCircle, Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenDeploymentGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchClick,
  savedCount,
  onOpenSaved,
  onOpenDeploymentGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#E7DECD] shadow-xs">
      {/* Top micro ribbon for KRITI IKS Tech Challenge */}
      <div className="bg-[#7F1D1D] text-[#FEF3C7] py-1 px-4 text-xs font-medium text-center tracking-wide border-b border-[#991B1B]/40 flex items-center justify-center gap-3">
        <span className="font-semibold tracking-wider text-amber-300">KRITI IKS TECH CHALLENGE 2026</span>
        <span className="hidden sm:inline text-amber-200/60">·</span>
        <span className="hidden sm:inline text-amber-100">Intelligent Sanskrit Knowledge Systems Initiative</span>
        <span className="text-amber-200/60">·</span>
        <button
          onClick={onOpenDeploymentGuide}
          className="text-amber-300 hover:text-white underline underline-offset-2 cursor-pointer transition-colors"
        >
          Event Deployment & Public URL
        </button>
      </div>

      {/* Main Top Bar Contract: 3 zones (Brand wordmark, nav links, primary action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-[#7F1D1D] text-[#FDE047] flex items-center justify-center font-heading text-xl shadow-xs border border-[#D4AF37]/50 group-hover:scale-105 transition-transform">
            ॐ
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl sm:text-2xl text-[#7F1D1D] tracking-tight whitespace-nowrap">
              Sanskrit Setu
            </span>
            <span className="font-devanagari text-xs text-[#B45309] font-medium tracking-wide -mt-1">
              संस्कृत सेतु · ज्ञान मंजूषा
            </span>
          </div>
        </a>

        {/* Zone 2: Single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#44403C]">
          <a
            href="#home"
            className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0"
          >
            Home
          </a>
          <a
            href="#explorer"
            className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0"
          >
            Sanskrit Explorer
          </a>
          <a
            href="#categories"
            className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0"
          >
            Five Pillars
          </a>
          <a
            href="#verse-of-day"
            className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0"
          >
            Verse of the Day
          </a>
          <a
            href="#about"
            className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0"
          >
            About IKS 2026
          </a>
        </nav>

        {/* Zone 3: Primary Action & Utilities */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSaved}
            className="relative p-2 text-[#78350F] hover:text-[#7F1D1D] hover:bg-[#F5EFEB] rounded-lg transition-colors cursor-pointer"
            title="Saved Verses"
            aria-label="View Saved Verses"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#7F1D1D] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={onSearchClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#7F1D1D] hover:bg-[#991B1B] rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap shrink-0 border border-[#991B1B] cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search Shlokas</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#44403C] hover:text-[#7F1D1D] hover:bg-[#F5EFEB] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F0] border-b border-[#E7DECD] px-4 pt-2 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#292524]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F5EFEB] hover:text-[#7F1D1D]"
            >
              Home
            </a>
            <a
              href="#explorer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F5EFEB] hover:text-[#7F1D1D]"
            >
              Sanskrit Explorer
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F5EFEB] hover:text-[#7F1D1D]"
            >
              Five Knowledge Pillars
            </a>
            <a
              href="#verse-of-day"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F5EFEB] hover:text-[#7F1D1D]"
            >
              Verse of the Day
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F5EFEB] hover:text-[#7F1D1D]"
            >
              About KRITI IKS Challenge
            </a>
          </nav>
          <div className="pt-2 border-t border-[#E7DECD] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSearchClick();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-white bg-[#7F1D1D] rounded-lg"
            >
              <Search className="w-4 h-4" />
              <span>Search Explorer</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeploymentGuide();
              }}
              className="py-2 px-3 text-xs font-medium text-[#78350F] bg-[#F5EFEB] rounded-lg border border-[#D6CEBE]"
            >
              Share Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
