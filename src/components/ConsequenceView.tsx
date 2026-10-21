import React, { useEffect, useRef } from 'react';
import { ConsequenceScene } from '../data/narrative';
import { ArrowRight, Terminal } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface ConsequenceViewProps {
  consequence: ConsequenceScene;
  chosenLabel: string;
  onContinue: () => void;
}

export const ConsequenceView: React.FC<ConsequenceViewProps> = ({
  consequence,
  chosenLabel,
  onContinue,
}) => {
  const continueBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    soundEngine.playHeartbeat();
    continueBtnRef.current?.focus();
  }, []);

  // Enter or Space key advances
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        soundEngine.playChoiceCommit();
        onContinue();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onContinue]);

  return (
    <article className="font-mono text-[#4ade80] space-y-6 animate-fade-in">
      {/* Consequence Log Header */}
      <div className="border border-[#1e3a1e] bg-[#0b140b] p-3 text-xs space-y-1.5">
        <div className="flex items-center justify-between text-[11px] text-[#86efac] border-b border-[#1b331b] pb-2">
          <div className="flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-amber-400 font-bold">&gt;&gt; EXECUTION_RESULT:</span>
            <span className="text-stone-300">[{chosenLabel}]</span>
          </div>
          <span className="text-emerald-400 font-bold">STATUS: RESOLVED</span>
        </div>

        <div className="pt-1">
          <h1 className="text-sm sm:text-base font-bold text-[#bbf7d0] term-glow">
            &gt; {consequence.title}
          </h1>
        </div>
      </div>

      {/* Terminal Consequence Stream */}
      <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#c7f9cc]">
        {consequence.paragraphs.map((p, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-[#22c55e]/60 select-none shrink-0 font-mono text-[11px] pt-0.5">
              OUT_{(idx + 1).toString().padStart(2, '0')}&gt;
            </span>
            <p className="flex-1 text-justify">{p}</p>
          </div>
        ))}
      </div>

      {/* Repercussions / System feedback */}
      {consequence.npcReactions && consequence.npcReactions.length > 0 && (
        <section className="border border-[#1f3a1f] bg-[#0c170c] p-3 text-xs space-y-2">
          <div className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">
            &gt;&gt; REPERCUSSIONS_MATRIX // NETWORK_STATUS:
          </div>

          <div className="space-y-1.5 text-stone-300">
            {consequence.npcReactions.map((r, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <span className="text-[#33ff66] shrink-0 font-bold">[*]</span>
                <span className="leading-relaxed">{r}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Crucial Ethical Lesson / Core Warning Taught By Choice */}
      {consequence.lessonMessage && (
        <section className="border border-amber-500/60 bg-[#161204] p-3 text-xs space-y-1.5 shadow-lg shadow-amber-950/20">
          <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-bold uppercase tracking-wider">
            <span className="text-amber-400 font-black">&gt;&gt; CORE_LESSON_TAUGHT // 선택이 남긴 뼈아픈 교훈:</span>
          </div>
          <p className="text-[#fef08a] font-medium leading-relaxed pl-2 border-l-2 border-amber-400">
            {consequence.lessonMessage}
          </p>
        </section>
      )}

      {/* Command prompt to continue */}
      <div className="pt-4 border-t border-[#1e3a1e] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span className="text-stone-400">
          Press [Enter] or [Space] to proceed to next sequence...
        </span>

        <button
          ref={continueBtnRef}
          onClick={() => {
            soundEngine.playChoiceCommit();
            onContinue();
          }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[#1b3d1b] hover:bg-[#255725] text-[#bbf7d0] font-bold border border-[#33ff66] rounded cursor-pointer transition-colors"
        >
          <span>CONTINUE_SEQUENCE &gt;&gt;</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
};
