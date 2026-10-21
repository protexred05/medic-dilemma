import React from 'react';
import { ChoiceHistoryRecord } from '../types/game';
import { X, Terminal } from 'lucide-react';

interface JournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: ChoiceHistoryRecord[];
}

export const JournalModal: React.FC<JournalModalProps> = ({
  isOpen,
  onClose,
  history,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur font-mono animate-fade-in text-xs">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded border border-[#234b23] bg-[#070d07] text-[#4ade80] shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#1b3b1b] px-4 py-3 bg-[#0a140a]">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-amber-400" />
            <span className="font-bold text-[#86efac]">
              cat /var/log/medic_combat_journal.log
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
          <div className="text-[11px] text-stone-400 border-b border-[#182e18] pb-2">
            // FIELD LOG BUFFER: {history.length} ENTRIES RECORDED
          </div>

          {history.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              [EMPTY_LOG_STREAM: 아직 기록된 결단이 없습니다.]
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#1a331a] bg-[#0c160c] p-3 space-y-1.5 rounded"
                >
                  <div className="flex items-center justify-between text-[11px] text-stone-400">
                    <span className="font-bold text-amber-400">
                      ENTRY_{index + 1} :: {item.scenarioTitle}
                    </span>
                    <span className="text-stone-400">{item.timestamp}</span>
                  </div>

                  <div className="text-stone-100">
                    &gt; SELECTED: <span className="text-[#33ff66] font-bold">{item.chosenLabel}</span>
                  </div>

                  <p className="text-[11px] text-stone-300 italic">
                    "{item.chosenText}"
                  </p>

                  <div className="text-[10px] text-stone-400 border-t border-[#162916] pt-1">
                    <span className="text-amber-400 font-semibold mr-1">OUTCOME:</span>
                    {item.consequenceSummary}
                  </div>

                  {item.lessonTaught && (
                    <div className="text-[10px] text-amber-300 font-mono bg-[#161205] border border-amber-900/40 p-1.5 rounded">
                      <span className="text-amber-400 font-bold">&gt;&gt; LESSON:</span> {item.lessonTaught}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
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
