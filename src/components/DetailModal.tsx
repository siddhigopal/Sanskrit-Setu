import React, { useState } from 'react';
import { X, Volume2, Copy, Check, Bookmark, BookOpen, ShieldCheck, Tag } from 'lucide-react';
import { SanskritEntry } from '../data/sanskritData';

interface DetailModalProps {
  entry: SanskritEntry | null;
  onClose: () => void;
  onBookmarkToggle: (entry: SanskritEntry) => void;
  isBookmarked: (id: string) => boolean;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  entry,
  onClose,
  onBookmarkToggle,
  isBookmarked,
}) => {
  if (!entry) return null;

  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCopy = () => {
    const text = `॥ ${entry.title} ॥\n\n${entry.devanagari}\n\nIAST:\n${entry.iast}\n\nHindi:\n${entry.hindi}\n\nEnglish:\n${entry.english}\n\nSource: ${entry.source}\nSignificance: ${entry.philosophicalContext}\n\n(via Sanskrit Setu - KRITI IKS Tech Challenge 2026)`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isPlaying) {
        setIsPlaying(false);
        return;
      }

      setIsPlaying(true);
      const cleanDev = entry.devanagari.replace(/[॥।\n]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanDev);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.85;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FFFDF9] rounded-2xl border border-[#D6CEBE] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E7DECD]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#78350F] mb-1">
              <span className="font-semibold text-[#991B1B]">{entry.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-[11px]">{entry.type}</span>
              <span aria-hidden="true">·</span>
              <span className="font-serif italic">{entry.source}</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-[#1C1917]">
              {entry.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onBookmarkToggle(entry)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isBookmarked(entry.id)
                  ? 'bg-[#FEF2F2] border-[#FCA5A5] text-[#7F1D1D]'
                  : 'bg-white border-[#E7DECD] text-[#78350F] hover:bg-[#FAF7F0]'
              }`}
              title="Bookmark verse"
              aria-label="Bookmark"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked(entry.id) ? 'fill-[#7F1D1D]' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#78350F] hover:text-[#1C1917] hover:bg-[#F5EFEB] rounded-lg transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central Verse Box */}
        <div className="p-6 bg-[#FAF7F0] rounded-xl border border-[#D4AF37]/40 text-center space-y-3">
          <div className="font-devanagari text-2xl sm:text-3xl font-medium text-[#7F1D1D] leading-relaxed whitespace-pre-line tracking-wide">
            {entry.devanagari}
          </div>
          <div className="font-serif italic text-base text-[#44403C] whitespace-pre-line">
            {entry.iast}
          </div>

          {/* Quick Toolbar */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={handleSpeak}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer flex items-center gap-1.5 transition-colors ${
                isPlaying ? 'bg-[#991B1B] text-white' : 'bg-white text-[#78350F] border border-[#E7DECD]'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isPlaying ? 'Reciting...' : 'Listen Pronunciation'}</span>
            </button>

            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors ${
                copied ? 'bg-[#15803D] text-white' : 'bg-[#7F1D1D] text-white hover:bg-[#991B1B]'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Full Note!' : 'Copy Verse'}</span>
            </button>
          </div>
        </div>

        {/* Multilingual Meanings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg border border-[#E7DECD] space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#991B1B] font-devanagari">
              सरल हिंदी भावार्थ
            </span>
            <p className="font-devanagari text-sm text-[#292524] leading-relaxed">
              {entry.hindi}
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-[#E7DECD] space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78350F]">
              English Philosophical Meaning
            </span>
            <p className="text-sm text-[#44403C] leading-relaxed font-sans-custom">
              {entry.english}
            </p>
          </div>
        </div>

        {/* Morphological Breakdown Table */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78350F]">
            Anatomical Grammatical Breakdown (पदच्छेद एवं शब्दार्थ)
          </h4>
          <div className="overflow-x-auto border border-[#E7DECD] rounded-lg">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-[#F5EFEB] text-[#78350F]">
                <tr className="border-b border-[#E7DECD]">
                  <th className="py-2 px-3 font-devanagari">पद (Sanskrit)</th>
                  <th className="py-2 px-3 font-serif">IAST</th>
                  <th className="py-2 px-3">Grammatical Category</th>
                  <th className="py-2 px-3">English Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7DECD] bg-white">
                {entry.breakdown.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F0]">
                    <td className="py-2 px-3 font-devanagari font-semibold text-[#7F1D1D]">
                      {row.word}
                    </td>
                    <td className="py-2 px-3 font-serif italic text-[#44403C]">
                      {row.transliteration}
                    </td>
                    <td className="py-2 px-3 text-[#78350F]">{row.grammar}</td>
                    <td className="py-2 px-3 text-[#292524]">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Philosophical Context & Provenance */}
        <div className="p-4 bg-[#FEF3C7]/40 rounded-xl border border-[#FDE68A] space-y-1 text-xs text-[#57534E]">
          <div className="flex items-center gap-1.5 font-semibold text-[#92400E]">
            <ShieldCheck className="w-4 h-4" />
            <span>Classical Epistemic Context & Citation</span>
          </div>
          <p className="leading-relaxed text-[#44403C] mt-1">
            {entry.philosophicalContext}
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#78350F]">
            Canonical Citation: {entry.source} ({entry.sourceDe})
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 pt-2 border-t border-[#E7DECD] text-xs">
          <Tag className="w-3.5 h-3.5 text-[#78350F]" />
          <span className="text-[#78350F] font-medium">Index Terms:</span>
          <div className="flex flex-wrap gap-1">
            {entry.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-[#F5EFEB] text-[#44403C] rounded-sm text-[11px]">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
