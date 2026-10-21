import React, { useEffect, useState, useRef } from 'react';
import { NarrativeScene } from '../data/narrative';
import { Choice } from '../types/game';
import { ChoiceCard } from './ChoiceCard';
import { soundEngine } from '../utils/audio';

interface NarrativeViewProps {
  scene: NarrativeScene;
  onSelectChoice: (choice: Choice) => void;
  speed: 'normal' | 'fast' | 'instant';
  onChangeSpeed: (speed: 'normal' | 'fast' | 'instant') => void;
}

export const NarrativeView: React.FC<NarrativeViewProps> = ({
  scene,
  onSelectChoice,
  speed,
  onChangeSpeed,
}) => {
  const [imageError, setImageError] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Progressive terminal line feed
  const [revealedParagraphsCount, setRevealedParagraphsCount] = useState<number>(
    speed === 'instant' ? scene.paragraphs.length : 1
  );

  useEffect(() => {
    setImageError(false);
    setInputVal('');
    if (speed === 'instant') {
      setRevealedParagraphsCount(scene.paragraphs.length);
      return;
    }

    setRevealedParagraphsCount(1);
    const delay = speed === 'fast' ? 550 : 1100;

    const interval = setInterval(() => {
      setRevealedParagraphsCount((prev) => {
        if (prev < scene.paragraphs.length) {
          soundEngine.playTypewriterClick();
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [scene.id, speed]);

  const allParagraphsRevealed = revealedParagraphsCount >= scene.paragraphs.length;

  // Auto focus input when choices are revealed
  useEffect(() => {
    if (allParagraphsRevealed && inputRef.current) {
      inputRef.current.focus();
    }
  }, [allParagraphsRevealed]);

  // Global keydown handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!allParagraphsRevealed) return;
      if (e.target === inputRef.current) return; // handled by input

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= scene.choices.length) {
        const choice = scene.choices[num - 1];
        if (choice) {
          soundEngine.playChoiceCommit();
          onSelectChoice(choice);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scene.choices, onSelectChoice, allParagraphsRevealed]);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputVal.trim();
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 1 && num <= scene.choices.length) {
      const choice = scene.choices[num - 1];
      if (choice) {
        soundEngine.playChoiceCommit();
        onSelectChoice(choice);
      }
    } else {
      soundEngine.playTypewriterClick();
      setInputVal('');
    }
  };

  return (
    <article className="font-mono text-[#4ade80] space-y-6">
      {/* Terminal Window Header / System status */}
      <div className="border border-[#1e3a1e] bg-[#0b140b] p-3 text-xs space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1b331b] pb-2 text-[11px] text-[#86efac]">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">&gt;&gt; SCENE_INIT:</span>
            <span>[{scene.campaignId} // ACT_{scene.chapterNumber}]</span>
            <span className="text-stone-400">{scene.date}</span>
          </div>

          <div className="flex items-center gap-2 text-stone-400">
            <span>PRINT_SPEED:</span>
            {(['normal', 'fast', 'instant'] as const).map((s) => (
              <button
                key={s}
                onClick={() => onChangeSpeed(s)}
                className={`px-1 rounded cursor-pointer ${
                  speed === s ? 'bg-[#22c55e] text-black font-bold' : 'hover:text-stone-200'
                }`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Location & Title */}
        <div className="pt-1">
          <div className="text-[#a7f3d0] font-bold text-sm sm:text-base term-glow">
            # {scene.actTitle}
          </div>
          <div className="text-[11px] text-stone-400 flex items-center gap-1.5 pt-0.5">
            <span className="text-red-400">@LOCATION:</span>
            <span>{scene.location}</span>
          </div>
        </div>
      </div>

      {/* Atmospheric Image Canvas (Terminal HUD visual feed) */}
      {scene.image && (
        <div className="border border-[#1e3a1e] bg-[#080d08] p-2 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono px-1">
            <span>[CAMERA_FEED // OPTICAL_SENSOR_01]</span>
            <button
              onClick={() => setShowImage(!showImage)}
              className="text-[#86efac] hover:underline cursor-pointer"
            >
              [{showImage ? 'HIDE_VISUAL' : 'SHOW_VISUAL'}]
            </button>
          </div>

          {showImage && (
            <div className="relative overflow-hidden rounded border border-[#162a16]">
              {!imageError ? (
                <div className="relative aspect-video w-full">
                  <img
                    src={scene.image}
                    alt={scene.imageCaption || scene.actTitle}
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover filter contrast-110 brightness-85"
                  />
                  {/* Green scanline / HUD overlay */}
                  <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color pointer-events-none" />
                  <div className="absolute top-2 left-2 text-[10px] text-[#33ff66] bg-black/70 px-1.5 py-0.5 border border-[#33ff66]/40">
                    REC ● 1944-45 FIELD_LOG
                  </div>
                  {scene.imageCaption && (
                    <div className="absolute bottom-1.5 left-2 right-2 text-[11px] text-[#dcfce7] bg-black/80 p-1 border-l-2 border-[#33ff66]">
                      &gt; {scene.imageCaption}
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6 text-center text-xs text-stone-500">
                  [VISUAL_DATA_CORRUPTED: {scene.imageCaption}]
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Terminal Text Output (Streamed Paragraphs) */}
      <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#c7f9cc]">
        {scene.paragraphs.slice(0, revealedParagraphsCount).map((p, idx) => (
          <div key={idx} className="flex items-start gap-2 animate-fade-in">
            <span className="text-[#22c55e]/60 select-none shrink-0 font-mono text-[11px] pt-0.5">
              {(idx + 1).toString().padStart(2, '0')}&gt;
            </span>
            <p className="flex-1 text-justify">{p}</p>
          </div>
        ))}

        {!allParagraphsRevealed && (
          <div className="flex items-center gap-2 pt-2 text-xs">
            <span className="text-amber-400">PRINTING_STREAM</span>
            <span className="inline-block w-2 h-4 bg-[#33ff66] term-cursor" />
            <button
              onClick={() => setRevealedParagraphsCount(scene.paragraphs.length)}
              className="text-[11px] text-stone-400 hover:text-white underline ml-3 cursor-pointer"
            >
              [SKIP_TO_END]
            </button>
          </div>
        )}
      </div>

      {/* Dramatic Radio / Direct Speech Intercept */}
      {scene.quote && allParagraphsRevealed && (
        <div className="border-l-2 border-amber-500 bg-[#121c12] p-3 text-xs sm:text-sm space-y-1">
          <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
            &gt;&gt; AUDIO_TRANSCRIPT // {scene.quote.speaker}:
          </div>
          <p className="text-amber-100 italic leading-relaxed">
            {scene.quote.text}
          </p>
        </div>
      )}

      {/* Decisions / Command Prompt */}
      {allParagraphsRevealed && (
        <section className="pt-4 border-t border-[#1e3a1e] space-y-3">
          <div className="flex items-center justify-between text-xs text-amber-400 font-bold">
            <span>&gt; AWAITING_OPERATIONAL_COMMAND:</span>
            <span className="text-[11px] text-stone-400 font-normal">
              키보드 [1, 2, 3] 또는 아래 프롬프트 입력
            </span>
          </div>

          <div className="space-y-2">
            {scene.choices.map((choice, index) => (
              <ChoiceCard
                key={choice.id}
                choice={choice}
                index={index}
                onSelect={onSelectChoice}
              />
            ))}
          </div>

          {/* Interactive CLI Input Line */}
          <form
            onSubmit={handleInputSubmit}
            className="flex items-center gap-2 bg-[#0a120a] border border-[#234b23] p-2 rounded mt-3"
          >
            <span className="text-[#33ff66] font-bold select-none text-xs sm:text-sm">
              user@medic-terminal:~$ execute_choice
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="1, 2, 3 입력 후 Enter..."
              className="flex-1 bg-transparent border-none text-[#dcfce7] font-mono text-xs sm:text-sm focus:outline-none placeholder:text-stone-600"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-[#1e4620] hover:bg-[#2b642e] text-[#86efac] text-xs font-mono rounded cursor-pointer border border-[#33ff66]/40"
            >
              EXECUTE
            </button>
          </form>
        </section>
      )}
    </article>
  );
};
