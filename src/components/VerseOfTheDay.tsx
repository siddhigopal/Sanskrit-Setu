import React, { useState } from 'react';
import { Copy, Check, Volume2, RefreshCw, Bookmark, Share2, Sparkles, BookOpen } from 'lucide-react';
import { SANSKRIT_ENTRIES, SanskritEntry } from '../data/sanskritData';

interface VerseOfTheDayProps {
  onBookmarkToggle: (entry: SanskritEntry) => void;
  isBookmarked: (id: string) => boolean;
  onExploreSource: (source: string) => void;
}

export const VerseOfTheDay: React.FC<VerseOfTheDayProps> = ({
  onBookmarkToggle,
  isBookmarked,
  onExploreSource,
}) => {
  // Curated prominent verses for Verse of the Day
  const featuredVerses = SANSKRIT_ENTRIES.filter((e) =>
    ['asato-ma-sadgamaya', 'vasudhaiva-kutumbakam', 'karmanyevadhikaraste', 'sarve-bhavantu-sukhinah', 'satyameva-jayate'].includes(e.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentVerse = featuredVerses[currentIndex] || featuredVerses[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredVerses.length);
    setCopied(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredVerses.length) % featuredVerses.length);
    setCopied(false);
  };

  const handleCopy = () => {
    const textToCopy = `॥ ${currentVerse.title} ॥\n\n${currentVerse.devanagari}\n\nIAST Transliteration:\n${currentVerse.iast}\n\nHindi (भावार्थ):\n${currentVerse.hindi}\n\nEnglish Translation:\n${currentVerse.english}\n\nSource: ${currentVerse.source}\nShared via Sanskrit Setu (KRITI IKS Tech Challenge 2026)`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isPlayingAudio) {
        setIsPlayingAudio(false);
        return;
      }

      setIsPlayingAudio(true);
      const utterance = new SpeechSynthesisUtterance(currentVerse.devanagari);
      utterance.lang = 'hi-IN'; // Devanagari phonetic synthesis
      utterance.rate = 0.85; // Slightly slower, dignified recitation cadence
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="verse-of-day" className="py-16 md:py-20 bg-[#F5EFEB]/60 border-b border-[#E7DECD] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B45309]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>दैनिक सुभाषितम् · Daily Contemplation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1C1917] mt-1">
              Verse of the Day
            </h2>
          </div>

          {/* Selector / Next Carousel Controller */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs text-[#78350F] tabular-nums font-mono mr-2">
              {currentIndex + 1} of {featuredVerses.length}
            </span>
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 text-xs font-medium text-[#44403C] hover:text-[#7F1D1D] bg-white rounded-md border border-[#E7DECD] hover:border-[#B45309] transition-colors cursor-pointer"
              title="Previous verse"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-3 py-1.5 text-xs font-semibold text-[#7F1D1D] hover:text-white hover:bg-[#7F1D1D] bg-white rounded-md border border-[#E7DECD] transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Next Verse</span>
            </button>
          </div>
        </div>

        {/* Illuminated Manuscript Card */}
        <div className="relative bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/40 shadow-xl overflow-hidden p-6 sm:p-10">
          {/* Decorative Corner Ornaments in CSS */}
          <div className="absolute top-2 left-2 text-[#D4AF37]/50 text-xs select-none">✦</div>
          <div className="absolute top-2 right-2 text-[#D4AF37]/50 text-xs select-none">✦</div>
          <div className="absolute bottom-2 left-2 text-[#D4AF37]/50 text-xs select-none">✦</div>
          <div className="absolute bottom-2 right-2 text-[#D4AF37]/50 text-xs select-none">✦</div>

          {/* Top metadata row with clean unboxed text and dot separators */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E7DECD]">
            <div className="flex items-center gap-2 text-xs text-[#78350F]">
              <span className="font-semibold text-[#991B1B]">{currentVerse.category}</span>
              <span aria-hidden="true">·</span>
              <span>{currentVerse.type}</span>
              <span aria-hidden="true">·</span>
              <span className="font-serif italic text-[#44403C]">{currentVerse.source}</span>
            </div>

            {/* Quick Action toolbar */}
            <div className="flex items-center gap-2">
              {/* Text-to-speech recitation */}
              <button
                onClick={handleSpeak}
                className={`p-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isPlayingAudio
                    ? 'bg-[#991B1B] text-white'
                    : 'text-[#78350F] hover:bg-[#F5EFEB] hover:text-[#7F1D1D]'
                }`}
                title="Recite verse aloud"
                aria-label="Listen to pronunciation"
              >
                <Volume2 className="w-4 h-4" />
                <span className="hidden sm:inline">{isPlayingAudio ? 'Speaking...' : 'Listen'}</span>
              </button>

              {/* Bookmark */}
              <button
                onClick={() => onBookmarkToggle(currentVerse)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isBookmarked(currentVerse.id)
                    ? 'text-[#7F1D1D] bg-[#FEF2F2]'
                    : 'text-[#78350F] hover:bg-[#F5EFEB]'
                }`}
                title="Bookmark for later"
                aria-label="Bookmark verse"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked(currentVerse.id) ? 'fill-[#7F1D1D]' : ''}`} />
              </button>

              {/* Working Copy Button */}
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
                  copied
                    ? 'bg-[#15803D] text-white'
                    : 'bg-[#7F1D1D] text-white hover:bg-[#991B1B]'
                }`}
                aria-label="Copy verse to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Verse</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Central Verse Presentation: Sanskrit Devanagari */}
          <div className="py-8 sm:py-10 text-center space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#B45309] font-serif">
              ॥ मूल संस्कृत श्लोकः ॥
            </div>
            <div className="font-devanagari text-2xl sm:text-3xl md:text-4xl font-medium text-[#7F1D1D] leading-relaxed whitespace-pre-line tracking-wide">
              {currentVerse.devanagari}
            </div>

            {/* IAST Roman Transliteration */}
            <div className="font-serif italic text-base sm:text-lg text-[#44403C] tracking-wide whitespace-pre-line pt-2 max-w-3xl mx-auto">
              {currentVerse.iast}
            </div>
          </div>

          {/* Translations Grid: Hindi & English */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E7DECD] bg-[#FAF7F0]/60 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-10">
            {/* Hindi Meaning */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#991B1B] uppercase tracking-wider">
                <span className="font-devanagari">सरल हिंदी भावार्थ</span>
              </div>
              <p className="font-devanagari text-sm sm:text-base text-[#292524] leading-relaxed">
                {currentVerse.hindi}
              </p>
            </div>

            {/* English Translation */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#991B1B] uppercase tracking-wider">
                <span>English Translation</span>
              </div>
              <p className="text-sm sm:text-base text-[#292524] leading-relaxed font-sans-custom">
                "{currentVerse.english}"
              </p>
            </div>

            {/* Philosophical Context & Provenance */}
            <div className="md:col-span-2 pt-4 border-t border-[#E7DECD]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#57534E]">
              <div>
                <span className="font-semibold text-[#78350F]">Epistemological Significance: </span>
                <span>{currentVerse.philosophicalContext}</span>
              </div>
              <button
                onClick={() => onExploreSource(currentVerse.category)}
                className="text-[#991B1B] hover:underline font-semibold whitespace-nowrap shrink-0 flex items-center gap-1"
              >
                <span>Filter {currentVerse.category} in Explorer</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
