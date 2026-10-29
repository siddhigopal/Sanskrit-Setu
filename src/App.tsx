import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VerseOfTheDay } from './components/VerseOfTheDay';
import { CategoryCards } from './components/CategoryCards';
import { SanskritExplorer } from './components/SanskritExplorer';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CategoryModal } from './components/CategoryModal';
import { DetailModal } from './components/DetailModal';
import { SavedVersesModal } from './components/SavedVersesModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';
import { CategoryInfo, SanskritEntry, SANSKRIT_ENTRIES } from './data/sanskritData';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [activeCategoryModal, setActiveCategoryModal] = useState<CategoryInfo | null>(null);
  const [activeDetailModal, setActiveDetailModal] = useState<SanskritEntry | null>(null);
  const [savedModalOpen, setSavedModalOpen] = useState(false);
  const [deploymentGuideOpen, setDeploymentGuideOpen] = useState(false);

  // Persistent bookmarks via localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('sanskrit_setu_saved');
      return stored ? JSON.parse(stored) : ['satyameva-jayate', 'vasudhaiva-kutumbakam'];
    } catch {
      return ['satyameva-jayate', 'vasudhaiva-kutumbakam'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sanskrit_setu_saved', JSON.stringify(bookmarkedIds));
    } catch {
      // Ignore local storage write errors
    }
  }, [bookmarkedIds]);

  const isBookmarked = (id: string) => bookmarkedIds.includes(id);

  const toggleBookmark = (entry: SanskritEntry) => {
    setBookmarkedIds((prev) =>
      prev.includes(entry.id) ? prev.filter((id) => id !== entry.id) : [...prev, entry.id]
    );
  };

  const removeBookmark = (id: string) => {
    setBookmarkedIds((prev) => prev.filter((item) => item !== id));
  };

  const clearAllBookmarks = () => {
    setBookmarkedIds([]);
  };

  const savedEntries = SANSKRIT_ENTRIES.filter((e) => bookmarkedIds.includes(e.id));

  // Navigation & Scroll triggers
  const scrollToExplorer = () => {
    const el = document.getElementById('explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSuggestion = (term: string) => {
    setSearchQuery(term);
    setBookmarkedOnly(false);
    scrollToExplorer();
  };

  const handleFilterFromCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setBookmarkedOnly(false);
    scrollToExplorer();
  };

  const handleFilterFromVerseOfDay = (category: string) => {
    setSelectedCategory(category);
    setBookmarkedOnly(false);
    scrollToExplorer();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1C1917] flex flex-col font-sans-custom selection:bg-[#FDE047] selection:text-[#7F1D1D]">
      {/* Top Navbar */}
      <Navbar
        onSearchClick={scrollToExplorer}
        savedCount={bookmarkedIds.length}
        onOpenSaved={() => setSavedModalOpen(true)}
        onOpenDeploymentGuide={() => setDeploymentGuideOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearchSubmit={scrollToExplorer}
          onSelectSuggestion={handleHeroSuggestion}
        />

        {/* 2. Verse of the Day (Prominently placed as featured in requirements) */}
        <VerseOfTheDay
          onBookmarkToggle={toggleBookmark}
          isBookmarked={isBookmarked}
          onExploreSource={handleFilterFromVerseOfDay}
        />

        {/* 3. Interactive Category Cards (5 Pillars of IKS) */}
        <CategoryCards
          onSelectCategory={(cat) => setActiveCategoryModal(cat)}
          onFilterExplorer={handleFilterFromCategory}
          selectedFilter={selectedCategory}
        />

        {/* 4. Sanskrit Explorer (Functional Cross-Script Search & Corpus) */}
        <SanskritExplorer
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onSelectEntryForDetail={(entry) => setActiveDetailModal(entry)}
          onBookmarkToggle={toggleBookmark}
          isBookmarked={isBookmarked}
          bookmarkedOnly={bookmarkedOnly}
          setBookmarkedOnly={setBookmarkedOnly}
        />

        {/* 5. About Section (KRITI IKS Tech Challenge 2026 Context) */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer onOpenDeploymentGuide={() => setDeploymentGuideOpen(true)} />

      {/* Interactive Modals */}
      <CategoryModal
        category={activeCategoryModal}
        onClose={() => setActiveCategoryModal(null)}
        onFilterExplorer={handleFilterFromCategory}
      />

      <DetailModal
        entry={activeDetailModal}
        onClose={() => setActiveDetailModal(null)}
        onBookmarkToggle={toggleBookmark}
        isBookmarked={isBookmarked}
      />

      <SavedVersesModal
        savedEntries={savedEntries}
        isOpen={savedModalOpen}
        onClose={() => setSavedModalOpen(false)}
        onSelectEntry={(entry) => setActiveDetailModal(entry)}
        onRemoveBookmark={removeBookmark}
        onClearAll={clearAllBookmarks}
      />

      <DeploymentGuideModal
        isOpen={deploymentGuideOpen}
        onClose={() => setDeploymentGuideOpen(false)}
      />
    </div>
  );
}
