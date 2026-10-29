import React, { useState } from 'react';
import { X, Globe, Copy, Check, ExternalLink, ShieldCheck, Laptop, Share2 } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [copiedDev, setCopiedDev] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const devUrl = 'https://ais-dev-vuch2hiwpbczqtozwu4uyt-989523989013.asia-southeast1.run.app';
  const shareUrl = 'https://ais-pre-vuch2hiwpbczqtozwu4uyt-989523989013.asia-southeast1.run.app';

  const copyToClipboard = (text: string, isShare: boolean) => {
    navigator.clipboard.writeText(text).then(() => {
      if (isShare) {
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2200);
      } else {
        setCopiedDev(true);
        setTimeout(() => setCopiedDev(false), 2200);
      }
    });
  };

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
              <Globe className="w-3.5 h-3.5 text-[#B45309]" />
              <span>Event Deployment & Public Sharing Guide</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-[#1C1917] mt-1">
              KRITI IKS Tech Challenge 2026 Presentation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#78350F] hover:text-[#1C1917] hover:bg-[#F5EFEB] rounded-lg cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Public Shareable URL Card */}
        <div className="p-4 bg-[#FEF3C7]/50 rounded-xl border-2 border-[#D4AF37] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#92400E] uppercase tracking-wider flex items-center gap-1.5">
              <Share2 className="w-4 h-4" />
              <span>Shareable Public URL (For Judges & Audience)</span>
            </span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
              Live & Accessible
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-[#E7DECD]">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="text-xs sm:text-sm font-mono text-[#1C1917] w-full bg-transparent outline-hidden select-all"
            />
            <button
              onClick={() => copyToClipboard(shareUrl, true)}
              className="px-3 py-1.5 bg-[#7F1D1D] hover:bg-[#991B1B] text-white text-xs font-semibold rounded-md flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
            >
              {copiedShare ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedShare ? 'Copied!' : 'Copy Link'}</span>
            </button>
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#78350F] hover:text-[#1C1917] rounded-md hover:bg-[#F5EFEB]"
              title="Open link in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-[#78350F] leading-relaxed">
            Anyone with this link can open and evaluate your live application without needing credentials or signing in.
          </p>
        </div>

        {/* Development URL Card */}
        <div className="p-4 bg-white rounded-xl border border-[#E7DECD] space-y-2">
          <span className="text-xs font-semibold text-[#57534E] uppercase tracking-wider">
            Development Preview URL (For Active Editing)
          </span>
          <div className="flex items-center gap-2 bg-[#FAF7F0] p-2 rounded-lg border border-[#E7DECD]">
            <input
              type="text"
              readOnly
              value={devUrl}
              className="text-xs font-mono text-[#57534E] w-full bg-transparent outline-hidden select-all"
            />
            <button
              onClick={() => copyToClipboard(devUrl, false)}
              className="px-2.5 py-1 bg-white hover:bg-[#F5EFEB] text-[#44403C] text-xs font-medium rounded-md border border-[#D6CEBE] flex items-center gap-1 shrink-0"
            >
              {copiedDev ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedDev ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Presentation & Deployment Checklist for Tomorrow */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#78350F] flex items-center gap-1.5">
            <Laptop className="w-4 h-4 text-[#B45309]" />
            <span>Key Steps for Tomorrow's Presentation at KRITI IKS:</span>
          </h4>

          <div className="space-y-2 text-xs text-[#44403C]">
            <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#E7DECD] flex items-start gap-2.5">
              <span className="font-bold text-[#7F1D1D] tabular-nums">1.</span>
              <div>
                <strong className="text-[#1C1917]">Verify Build:</strong> Run{' '}
                <code className="bg-white px-1.5 py-0.5 rounded-sm border border-[#D6CEBE] font-mono text-[#991B1B]">
                  npm run build
                </code>{' '}
                to ensure production compilation is 100% clean with zero TypeScript errors.
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#E7DECD] flex items-start gap-2.5">
              <span className="font-bold text-[#7F1D1D] tabular-nums">2.</span>
              <div>
                <strong className="text-[#1C1917]">Projector / Display Mode:</strong> Open the Shared URL in Chrome and press{' '}
                <kbd className="bg-white px-1.5 py-0.5 rounded-sm border border-[#D6CEBE] font-mono">F11</kbd> (Fullscreen) for a clean, distraction-free stage presentation.
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#E7DECD] flex items-start gap-2.5">
              <span className="font-bold text-[#7F1D1D] tabular-nums">3.</span>
              <div>
                <strong className="text-[#1C1917]">Offline & Demo Resilience:</strong> All Sanskrit data and images are bundled locally within the app; no third-party APIs or external fonts will break if convention WiFi drops.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#E7DECD] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#7F1D1D] hover:bg-[#991B1B] text-white text-xs font-semibold rounded-lg cursor-pointer"
          >
            Got It, Ready for Event!
          </button>
        </div>
      </div>
    </div>
  );
};
