import React from 'react';
import { Volume2, VolumeX, BookOpen, Compass, Info, RotateCcw, Terminal, Layers } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { CampaignId } from '../types/game';
import { CAMPAIGNS } from '../data/narrative';

interface TopBarProps {
  currentCampaign: CampaignId;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  onOpenJournal: () => void;
  onOpenCompass: () => void;
  onOpenHistory: () => void;
  onOpenCampaignSelect: () => void;
  onRestart: () => void;
  historyCount: number;
  crtEffect: boolean;
  onToggleCrt: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentCampaign,
  audioEnabled,
  onToggleAudio,
  onOpenJournal,
  onOpenCompass,
  onOpenHistory,
  onOpenCampaignSelect,
  onRestart,
  historyCount,
  crtEffect,
  onToggleCrt,
}) => {
  const campaignMeta = CAMPAIGNS[currentCampaign] || CAMPAIGNS.ARDENNES_1944;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1e3a1e] bg-[#070b07]/95 backdrop-blur font-mono text-xs text-[#4ade80]">
      {/* Terminal Title Bar / Prompt */}
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-3 sm:px-6">
        {/* Terminal Header Prompt */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-[#0e190e] border border-[#274e27] px-2 py-1 rounded text-[11px]">
            <Terminal className="h-3.5 w-3.5 text-[#33ff66]" />
            <span className="text-[#86efac] font-bold tracking-tight">MEDIC_OS</span>
            <span className="text-[#3b82f6]">v2.4.1</span>
          </div>

          {/* Campaign Selector Trigger */}
          <button
            onClick={() => {
              soundEngine.playTypewriterClick();
              onOpenCampaignSelect();
            }}
            className="flex items-center gap-1 px-2 py-1 bg-[#102210] hover:bg-[#193619] border border-[#2e5d2e] rounded text-[#4ade80] transition-colors cursor-pointer text-[11px]"
            title="작전 전역 변경 (1막부터 시작)"
          >
            <span className="text-amber-400">[{campaignMeta.badge}]</span>
            <span className="hidden md:inline text-stone-400">변경</span>
            <span className="text-[9px] text-[#22c55e]">▼</span>
          </button>
        </div>

        {/* Console Action Links */}
        <nav className="flex items-center gap-2 sm:gap-4 font-mono text-[11px]">
          <button
            onClick={onOpenJournal}
            className="flex items-center gap-1 hover:text-white px-1.5 py-1 rounded hover:bg-[#142614] transition-colors cursor-pointer"
            title="작전 일지 로그 열람"
          >
            <BookOpen className="h-3 w-3 text-amber-400" />
            <span className="hidden sm:inline">LOGS</span>
            <span>일지</span>
            {historyCount > 0 && (
              <span className="text-[#86efac] text-[10px]">[{historyCount}]</span>
            )}
          </button>

          <button
            onClick={onOpenCompass}
            className="flex items-center gap-1 hover:text-white px-1.5 py-1 rounded hover:bg-[#142614] transition-colors cursor-pointer"
            title="윤리 나침반 매트릭스"
          >
            <Compass className="h-3 w-3 text-[#38bdf8]" />
            <span className="hidden sm:inline">MATRIX</span>
            <span>윤리</span>
          </button>

          <button
            onClick={onOpenHistory}
            className="hidden sm:flex items-center gap-1 hover:text-white px-1.5 py-1 rounded hover:bg-[#142614] transition-colors cursor-pointer"
            title="역사적 군사 의무 배경"
          >
            <Info className="h-3 w-3 text-stone-400" />
            <span>배경</span>
          </button>
        </nav>

        {/* Toggles (Audio, CRT, Restart) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* CRT scanline toggle */}
          <button
            onClick={onToggleCrt}
            className={`px-1.5 py-1 rounded border text-[10px] font-mono transition-colors cursor-pointer ${
              crtEffect
                ? 'border-[#22c55e] bg-[#0f2e14] text-[#86efac]'
                : 'border-[#1e3a1e] bg-[#0c140c] text-stone-500 hover:text-stone-300'
            }`}
            title="CRT 브라운관 주사선 효과 토글"
          >
            CRT
          </button>

          {/* Audio toggle */}
          <button
            onClick={() => {
              soundEngine.playTypewriterClick();
              onToggleAudio();
            }}
            className={`flex items-center gap-1 px-2 py-1 rounded border text-[10px] font-mono transition-colors cursor-pointer ${
              audioEnabled
                ? 'border-amber-500/80 bg-amber-950/40 text-amber-300'
                : 'border-[#1e3a1e] bg-[#0c140c] text-stone-400 hover:text-stone-200'
            }`}
            title={audioEnabled ? '사운드 끄기' : '사운드 켜기 (포격·환경음)'}
          >
            {audioEnabled ? (
              <>
                <Volume2 className="h-3 w-3 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline">SND_ON</span>
              </>
            ) : (
              <>
                <VolumeX className="h-3 w-3" />
                <span className="hidden sm:inline">MUTE</span>
              </>
            )}
          </button>

          {/* Reset */}
          <button
            onClick={() => {
              if (window.confirm('> RESET_SIMULATION: 현재 전역을 1막부터 리셋하시겠습니까?')) {
                onRestart();
              }
            }}
            className="p-1 rounded border border-[#1e3a1e] bg-[#0c140c] hover:bg-[#1e3a1e] text-stone-400 hover:text-white transition-colors cursor-pointer"
            title="시뮬레이션 처음부터 리셋"
          >
            <RotateCcw className="h-3 w-3" />
          </button>
        </div>
      </div>
    </header>
  );
};
