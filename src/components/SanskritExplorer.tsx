import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Volume2,
  Copy,
  Check,
  Bookmark,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  BookMarked,
  Sparkles,
  Info,
  X,
} from 'lucide-react';
import { SANSKRIT_ENTRIES, SanskritEntry, IAST_GUIDE } from '../data/sanskritData';

interface SanskritExplorerProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onSelectEntryForDetail: (entry: SanskritEntry) => void;
  onBookmarkToggle: (entry: SanskritEntry) => void;
  isBookmarked: (id: string) => boolean;
  bookmarkedOnly: boolean;
  setBookmarkedOnly: (val: boolean) => void;
}

export const SanskritExplorer: React.FC<SanskritExplorerProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onSelectEntryForDetail,
  onBookmarkToggle,
  isBookmarked,
  bookmarkedOnly,
  setBookmarkedOnly,
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [expandedBreakdownId, setExpandedBreakdownId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [showIastGuide, setShowIastGuide] = useState<boolean>(false);

  const categories = [
    'All',
    'Vedas',
    'Upanishads',
    'Ayurveda',
    'Yoga',
    'Indian Philosophy',
    'Subhashitas',
  ];

  const types = ['All', 'Shloka', 'Mahavakya', 'Sutra', 'Term'];

  // Filter logic
  const filteredEntries = useMemo(() => {
    return SANSKRIT_ENTRIES.filter((entry) => {
      // Bookmark filter
      if (bookmarkedOnly && !isBookmarked(entry.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && entry.category !== selectedCategory) {
        return false;
      }

      // Type filter
      if (selectedType !== 'All' && entry.type !== selectedType) {
        return false;
      }

      // Search query filter (matches Devanagari, IAST, title, Hindi, English, tags, or source)
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesDevanagari = entry.devanagari.toLowerCase().includes(q);
        const matchesIast = entry.iast.toLowerCase().includes(q);
        const matchesTitle = entry.title.toLowerCase().includes(q);
        const matchesHindi = entry.hindi.toLowerCase().includes(q);
        const matchesEnglish = entry.english.toLowerCase().includes(q);
        const matchesSource = entry.source.toLowerCase().includes(q);
        const matchesTags = entry.tags.some((t) => t.toLowerCase().includes(q));

        return (
          matchesDevanagari ||
          matchesIast ||
          matchesTitle ||
          matchesHindi ||
          matchesEnglish ||
          matchesSource ||
          matchesTags
        );
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedType, bookmarkedOnly, isBookmarked]);

  const handleCopy = (entry: SanskritEntry) => {
    const text = `॥ ${entry.title} ॥\n${entry.devanagari}\n\nTransliteration (IAST):\n${entry.iast}\n\nHindi: ${entry.hindi}\nEnglish: ${entry.english}\nSource: ${entry.source}\n(via Sanskrit Setu - KRITI IKS Tech Challenge 2026)`;
    
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(entry.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleSpeak = (entry: SanskritEntry) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (playingId === entry.id) {
        setPlayingId(null);
        return;
      }

      setPlayingId(entry.id);
      const cleanDev = entry.devanagari.replace(/[॥।\n]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanDev);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.85;
      utterance.onend = () => setPlayingId(null);
      utterance.onerror = () => setPlayingId(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleBreakdown = (id: string) => {
    setExpandedBreakdownId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="explorer" className="py-16 md:py-24 border-b border-[#E7DECD] bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#991B1B]">
              <Search className="w-3.5 h-3.5 text-[#B45309]" />
              <span>ज्ञान अन्वेषक · Computational Corpus Search</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1C1917] mt-1">
              Sanskrit Knowledge Explorer
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] mt-2 max-w-2xl">
              Query canonical verses with instant cross-script indexing. Search in Sanskrit Devanagari,
              IAST Roman transliteration, Hindi meanings, or English philosophical keywords.
            </p>
          </div>

          {/* Utility toggle: IAST Diacritic Guide & Saved view */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarkedOnly(!bookmarkedOnly)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                bookmarkedOnly
                  ? 'bg-[#7F1D1D] text-white border-[#7F1D1D]'
                  : 'bg-white text-[#44403C] border-[#E7DECD] hover:border-[#B45309]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarkedOnly ? 'fill-white' : ''}`} />
              <span>Saved Only</span>
            </button>

            <button
              onClick={() => setShowIastGuide(!showIastGuide)}
              className="px-3.5 py-2 text-xs font-semibold text-[#78350F] bg-[#FAF7F0] hover:bg-[#F5EFEB] rounded-lg border border-[#E7DECD] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Info className="w-3.5 h-3.5" />
              <span>IAST Pronunciation Key</span>
            </button>
          </div>
        </div>

        {/* Collapsible IAST Diacritics Pronunciation Guide */}
        {showIastGuide && (
          <div className="mb-8 p-5 bg-[#FAF7F0] rounded-xl border border-[#D6CEBE] shadow-xs animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7DECD]">
              <div className="text-xs font-bold text-[#7F1D1D] uppercase tracking-wider">
                IAST (International Alphabet of Sanskrit Transliteration) Reference
              </div>
              <button
                onClick={() => setShowIastGuide(false)}
                className="text-[#78350F] hover:text-[#1C1917]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
              {IAST_GUIDE.map((item) => (
                <div key={item.char} className="p-2.5 bg-white rounded-md border border-[#E7DECD] text-xs">
                  <div className="font-serif font-bold text-[#991B1B] text-sm">{item.char}</div>
                  <div className="text-[11px] text-[#44403C] mt-0.5">{item.sound} ({item.devanagari})</div>
                  <div className="text-[10px] text-[#78350F] italic font-serif mt-0.5">e.g. {item.example}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Filters & Search Bar Control Ribbon */}
        <div className="bg-[#FAF7F0] p-4 sm:p-5 rounded-2xl border border-[#E7DECD] shadow-xs space-y-4 mb-8">
          {/* Search Row */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#78350F]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Devanagari (सत्य, कर्म, योग), IAST (Satya, Ahimsa), Hindi, English, or Source..."
              className="w-full pl-10 pr-10 py-3 bg-white text-sm md:text-base text-[#1C1917] rounded-xl border border-[#E7DECD] focus:outline-hidden focus:border-[#B45309] focus:ring-2 focus:ring-[#FDE68A] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#78350F] hover:text-[#1C1917]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills (Functional Segmented Buttons) */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#78350F] flex items-center gap-1.5">
              <Filter className="w-3 h-3 text-[#B45309]" />
              <span>Knowledge Categories:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#7F1D1D] text-white shadow-2xs font-semibold'
                      : 'bg-white text-[#44403C] hover:text-[#7F1D1D] border border-[#E7DECD] hover:bg-[#FAF7F0]'
                  }`}
                >
                  {cat === 'All' ? 'All Knowledge' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E7DECD]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#78350F]">Format Type:</span>
              <div className="flex items-center gap-1">
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                      selectedType === t
                        ? 'bg-[#B45309] text-white font-medium'
                        : 'text-[#44403C] hover:bg-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Count Display */}
            <div className="text-xs text-[#78350F] font-mono tabular-nums">
              Showing <span className="font-bold text-[#1C1917]">{filteredEntries.length}</span> of {SANSKRIT_ENTRIES.length} entries
            </div>
          </div>
        </div>

        {/* Empty state when no matches found */}
        {filteredEntries.length === 0 && (
          <div className="text-center py-16 bg-[#FAF7F0] rounded-xl border border-dashed border-[#D6CEBE] p-8">
            <p className="text-lg font-serif italic text-[#44403C]">
              No verses found matching "{searchQuery}".
            </p>
            <p className="text-xs text-[#78350F] mt-1">
              Try searching with common terms such as "Satya", "Karma", "Yoga", "सत्य", or "Upanishad".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedType('All');
                setBookmarkedOnly(false);
              }}
              className="mt-4 px-4 py-2 bg-[#7F1D1D] text-white text-xs font-semibold rounded-lg hover:bg-[#991B1B] cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Entries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEntries.map((entry) => {
            const isExpanded = expandedBreakdownId === entry.id;
            const isPlaying = playingId === entry.id;
            const isSaved = isBookmarked(entry.id);

            return (
              <div
                key={entry.id}
                className="bg-[#FFFDF9] rounded-xl border border-[#E7DECD] hover:border-[#B45309] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div>
                  {/* Metadata Row: Clean Unboxed Text with Separators */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#E7DECD] text-xs text-[#78350F]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#991B1B]">{entry.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-[11px]">{entry.type}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-serif italic truncate max-w-[180px] sm:max-w-xs">
                        {entry.source}
                      </span>
                    </div>

                    {/* Quick Card Controls */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleSpeak(entry)}
                        className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                          isPlaying
                            ? 'bg-[#991B1B] text-white'
                            : 'text-[#78350F] hover:bg-[#F5EFEB] hover:text-[#7F1D1D]'
                        }`}
                        title="Pronounce Sanskrit text"
                        aria-label="Speak pronunciation"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleCopy(entry)}
                        className="p-1.5 rounded-md text-[#78350F] hover:bg-[#F5EFEB] hover:text-[#7F1D1D] transition-colors cursor-pointer"
                        title="Copy verse"
                        aria-label="Copy verse"
                      >
                        {copiedId === entry.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => onBookmarkToggle(entry)}
                        className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                          isSaved
                            ? 'text-[#7F1D1D] bg-[#FEF2F2]'
                            : 'text-[#78350F] hover:bg-[#F5EFEB]'
                        }`}
                        title="Save to bookmarks"
                        aria-label="Bookmark verse"
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#7F1D1D]' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Primary Devanagari Verse Presentation */}
                  <div className="pt-4 pb-2">
                    <h3 className="font-devanagari text-xl sm:text-2xl font-medium text-[#7F1D1D] leading-relaxed whitespace-pre-line tracking-wide">
                      {entry.devanagari}
                    </h3>
                    <p className="font-serif italic text-sm text-[#44403C] mt-2 whitespace-pre-line">
                      {entry.iast}
                    </p>
                  </div>

                  {/* Multilingual Meanings */}
                  <div className="space-y-3 pt-3 border-t border-[#E7DECD]">
                    <div>
                      <span className="text-[11px] font-semibold text-[#991B1B] uppercase tracking-wider block mb-0.5">
                        हिंदी भावार्थ:
                      </span>
                      <p className="font-devanagari text-xs sm:text-sm text-[#292524] leading-relaxed">
                        {entry.hindi}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold text-[#78350F] uppercase tracking-wider block mb-0.5">
                        English Translation:
                      </span>
                      <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-sans-custom">
                        {entry.english}
                      </p>
                    </div>
                  </div>

                  {/* Anatomical Grammatical Breakdown (Toggleable) */}
                  {isExpanded && (
                    <div className="mt-4 p-3 bg-[#FAF7F0] rounded-lg border border-[#E7DECD] text-xs space-y-2">
                      <div className="font-semibold text-[#7F1D1D] flex items-center justify-between">
                        <span>पदच्छेद एवं व्याकरण (Morphological Breakdown)</span>
                        <span className="text-[10px] text-[#78350F] font-mono">Paninian Parsing</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-[#E7DECD] text-[11px] text-[#78350F]">
                              <th className="py-1 pr-2 font-devanagari">पद (Word)</th>
                              <th className="py-1 px-2 font-serif">IAST</th>
                              <th className="py-1 px-2">Grammar</th>
                              <th className="py-1 pl-2">Meaning</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#E7DECD]/60 text-[11px]">
                            {entry.breakdown.map((row, idx) => (
                              <tr key={idx} className="hover:bg-white/60">
                                <td className="py-1 pr-2 font-devanagari font-medium text-[#7F1D1D]">
                                  {row.word}
                                </td>
                                <td className="py-1 px-2 font-serif italic text-[#44403C]">
                                  {row.transliteration}
                                </td>
                                <td className="py-1 px-2 text-[#78350F]">{row.grammar}</td>
                                <td className="py-1 pl-2 text-[#292524]">{row.meaning}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Strip */}
                <div className="pt-3 border-t border-[#E7DECD] flex items-center justify-between text-xs">
                  <button
                    onClick={() => toggleBreakdown(entry.id)}
                    className="font-medium text-[#78350F] hover:text-[#7F1D1D] flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Grammar' : 'View Padacheda'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onSelectEntryForDetail(entry)}
                    className="font-semibold text-[#7F1D1D] hover:text-[#991B1B] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Deep Philosophical Context</span>
                    <ExternalLink className="w-3 h-3" />
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
