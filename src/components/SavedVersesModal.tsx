import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { SanskritEntry } from '../data/sanskritData';

interface SavedVersesModalProps {
  savedEntries: SanskritEntry[];
  isOpen: boolean;
  onClose: () => void;
  onSelectEntry: (entry: SanskritEntry) => void;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
}

export const SavedVersesModal: React.FC<SavedVersesModalProps> = ({
  savedEntries,
  isOpen,
  onClose,
  onSelectEntry,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FFFDF9] rounded-2xl border border-[#D6CEBE] max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 space-y-4"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#E7DECD]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#7F1D1D] fill-[#7F1D1D]" />
            <h3 className="font-display font-bold text-xl text-[#1C1917]">
              Saved Contemplations ({savedEntries.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#78350F] hover:text-[#1C1917] rounded-md"
            aria-label="Close saved verses"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedEntries.length === 0 ? (
          <div className="text-center py-12 text-[#78350F] space-y-2">
            <Bookmark className="w-8 h-8 mx-auto text-[#D6CEBE]" />
            <p className="font-serif italic text-sm">No verses saved yet.</p>
            <p className="text-xs">
              Click the bookmark icon on any Sanskrit card to save it for quick study during the KRITI IKS presentation.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs text-[#78350F] px-1">
              <span>Curated study list stored locally in browser</span>
              <button
                onClick={onClearAll}
                className="text-[#991B1B] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear All</span>
              </button>
            </div>

            <div className="divide-y divide-[#E7DECD] border border-[#E7DECD] rounded-xl overflow-hidden bg-white">
              {savedEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="p-4 hover:bg-[#FAF7F0] transition-colors flex items-center justify-between gap-3"
                >
                  <div
                    onClick={() => {
                      onSelectEntry(entry);
                      onClose();
                    }}
                    className="cursor-pointer flex-1 space-y-1"
                  >
                    <div className="flex items-center gap-2 text-[10px] text-[#78350F]">
                      <span className="font-semibold text-[#991B1B]">{entry.category}</span>
                      <span>·</span>
                      <span className="font-serif italic">{entry.source}</span>
                    </div>
                    <div className="font-devanagari font-medium text-sm text-[#7F1D1D] line-clamp-1">
                      {entry.devanagari}
                    </div>
                    <div className="text-xs text-[#44403C] line-clamp-1">
                      {entry.english}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRemoveBookmark(entry.id)}
                      className="p-1.5 text-[#A8A29E] hover:text-[#991B1B] rounded-md transition-colors"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectEntry(entry);
                        onClose();
                      }}
                      className="p-1.5 text-[#7F1D1D] hover:bg-[#F5EFEB] rounded-md"
                      title="Open details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
