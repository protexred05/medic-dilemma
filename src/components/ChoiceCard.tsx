import React from 'react';
import { Choice } from '../types/game';
import { soundEngine } from '../utils/audio';

interface ChoiceCardProps {
  choice: Choice;
  index: number;
  onSelect: (choice: Choice) => void;
  disabled?: boolean;
}

export const ChoiceCard: React.FC<ChoiceCardProps> = ({
  choice,
  index,
  onSelect,
  disabled = false,
}) => {
  const choiceNumber = index + 1;

  const handleClick = () => {
    if (disabled) return;
    soundEngine.playChoiceCommit();
    onSelect(choice);
  };

  return (
    <div
      onMouseEnter={() => soundEngine.playTypewriterClick()}
      className="group relative font-mono text-xs sm:text-sm border border-[#1b381b] bg-[#091109] hover:bg-[#0f240f] hover:border-[#33ff66] transition-colors p-3 rounded"
    >
      <button
        onClick={handleClick}
        disabled={disabled}
        className="w-full text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#33ff66]"
      >
        <div className="flex items-start gap-2.5">
          {/* CLI input prompt */}
          <span className="text-[#33ff66] font-bold select-none shrink-0 group-hover:text-amber-400">
            [{choiceNumber}]&gt;
          </span>

          <div className="flex-1 space-y-1">
            {/* Short Tag */}
            <div className="flex items-center gap-2 text-[11px] text-[#86efac]">
              <span className="text-amber-400 font-semibold">::{choice.shortLabel}</span>
              <span className="text-[#22c55e]/60">// KEY_{choiceNumber}</span>
            </div>

            {/* Choice Text */}
            <p className="text-[#dcfce7] leading-relaxed group-hover:text-white">
              {choice.text}
            </p>

            {/* Medic internal computation / monologue */}
            <div className="pt-1.5 text-[11px] text-stone-400 border-t border-[#1a311a]">
              <span className="text-[#4ade80] mr-1">/* MED_LOG:</span>
              <span className="italic">"{choice.protagonistThought}"</span>
              <span className="text-[#4ade80] ml-1">*/</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
