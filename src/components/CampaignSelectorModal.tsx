import React from 'react';
import { CampaignId, CampaignMetadata } from '../types/game';
import { CAMPAIGNS } from '../data/narrative';
import { Terminal, MapPin, User, ArrowRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface CampaignSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCampaign: CampaignId;
  onSelectCampaign: (id: CampaignId) => void;
}

export const CampaignSelectorModal: React.FC<CampaignSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedCampaign,
  onSelectCampaign,
}) => {
  if (!isOpen) return null;

  const campaignsList: CampaignMetadata[] = Object.values(CAMPAIGNS);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur font-mono animate-fade-in text-xs">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded border border-[#234b23] bg-[#070d07] text-[#4ade80] shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#1b3b1b] px-4 py-3 bg-[#0a140a]">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-amber-400" />
            <span className="font-bold text-[#86efac]">
              ./select_theater.sh --list-available
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white px-2 py-0.5 rounded hover:bg-[#162916] transition-colors cursor-pointer text-xs"
          >
            [ESC/CLOSE]
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <p className="text-[11px] text-stone-400 leading-relaxed border-b border-[#182e18] pb-2">
            // AVAILABLE OPERATIONAL THEATERS: 각 전역은 고유한 주인공과 상이한 윤리 딜레마로 전개되는 <strong>완전 독립 에피소드</strong>입니다. (제1막부터 시작)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {campaignsList.map((camp) => {
              const isCurrent = camp.id === selectedCampaign;
              const isSpecial = camp.isSpecialDepth;

              return (
                <div
                  key={camp.id}
                  className={`flex flex-col justify-between border p-3.5 rounded transition-all ${
                    isSpecial
                      ? isCurrent
                        ? 'border-amber-400 bg-[#161005] shadow-lg shadow-amber-500/20 ring-1 ring-amber-400'
                        : 'border-amber-700/70 bg-[#110c03] hover:border-amber-500 hover:bg-[#181105]'
                      : isCurrent
                        ? 'border-[#33ff66] bg-[#0c1c0c] shadow-lg shadow-[#00ff44]/10 ring-1 ring-[#33ff66]'
                        : 'border-[#1b331b] bg-[#091109] hover:border-[#2e5d2e] hover:bg-[#0e190e]'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`px-1.5 py-0.5 rounded border font-bold ${
                          isSpecial
                            ? 'bg-red-950/80 text-amber-300 border-amber-600/60'
                            : 'bg-[#162d16] text-amber-300 border-[#2a502a]'
                        }`}>
                          {camp.badge}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-black/50 text-stone-300 border border-stone-700">
                          총 {camp.actCount}막
                        </span>
                      </div>
                      {isCurrent && (
                        <span className="text-[#33ff66] font-bold">
                          [ACTIVE]
                        </span>
                      )}
                    </div>

                    <h4 className={`text-sm sm:text-base font-bold leading-snug ${
                      isSpecial ? 'text-amber-300 term-glow-amber' : 'text-white term-glow'
                    }`}>
                      &gt; {camp.title}
                    </h4>

                    {camp.warningNote && (
                      <div className="border border-red-800/80 bg-red-950/40 p-2 rounded text-[11px] text-red-200 font-semibold space-y-0.5">
                        <div className="text-red-400 font-bold flex items-center gap-1">
                          <span>[심도 경고 // PSYCHOLOGICAL_DEPTH_ADVISORY]</span>
                        </div>
                        <p className="leading-tight">{camp.warningNote}</p>
                      </div>
                    )}

                    <p className="text-[11px] text-stone-400 italic">
                      "{camp.subtitle}"
                    </p>

                    <div className="border-t border-[#162916] pt-2 space-y-1 text-[11px] text-stone-300">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3 text-red-400 shrink-0" />
                        <span className="truncate">{camp.theater}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="h-3 w-3 text-amber-400 shrink-0" />
                        <span className="truncate">{camp.protagonist.rank} {camp.protagonist.name}</span>
                      </div>
                    </div>

                    <div className="space-y-1 pt-1 text-[10px] text-stone-400">
                      <span className="text-[#86efac] font-bold block">
                        // CORE_DILEMMAS:
                      </span>
                      <ul className="space-y-0.5">
                        {camp.dilemmasSummary.map((d, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className={isSpecial ? 'text-amber-400' : 'text-emerald-400'}>[*]</span>
                            <span className="leading-tight">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#162916]">
                    <button
                      onClick={() => {
                        soundEngine.playChoiceCommit();
                        onSelectCampaign(camp.id);
                        onClose();
                      }}
                      className={`w-full py-1.5 px-3 rounded text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                        isCurrent
                          ? isSpecial
                            ? 'bg-amber-400 text-black hover:bg-amber-300'
                            : 'bg-[#22c55e] text-black hover:bg-[#16a34a]'
                          : isSpecial
                            ? 'bg-[#2a1b05] text-amber-200 hover:bg-[#3d2708] border border-amber-600/70'
                            : 'bg-[#142814] text-[#86efac] hover:bg-[#1f3f1f] border border-[#274e27]'
                      }`}
                    >
                      <span>{isCurrent ? 'RESUME_MISSION' : (isSpecial ? 'LAUNCH_DEEP_EPISODE' : 'LOAD_THEATER')}</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1b3b1b] px-4 py-2.5 bg-[#0a140a] flex justify-end">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-[#142814] hover:bg-[#1e3c1e] text-[#86efac] border border-[#2b592b] rounded cursor-pointer transition-colors"
          >
            RETURN_TO_SHELL
          </button>
        </div>
      </div>
    </div>
  );
};
