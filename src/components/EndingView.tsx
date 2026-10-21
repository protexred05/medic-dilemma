import React, { useState } from 'react';
import { GameState, CampaignId } from '../types/game';
import { evaluateEnding, CAMPAIGNS } from '../data/narrative';
import { RotateCcw, Share2, Award, Compass, FileCheck, Check, Terminal, ArrowRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface EndingViewProps {
  state: GameState;
  onRestart: () => void;
  onSelectAnotherCampaign: (id?: CampaignId) => void;
}

export const EndingView: React.FC<EndingViewProps> = ({ state, onRestart, onSelectAnotherCampaign }) => {
  const ending = evaluateEnding(state);
  const [copied, setCopied] = useState(false);
  const campaignMeta = CAMPAIGNS[state.selectedCampaign] || CAMPAIGNS.ARDENNES_1944;

  const { utilitarianVsDeontological, universalVsTribal, mercyVsSanctity } = state.scores;

  const handleCopySummary = () => {
    const textToCopy = `[MEDIC_TERMINAL // FINAL_DEBRIEF]
THEATER: ${campaignMeta.title} (${campaignMeta.theater})
OPERATOR: ${campaignMeta.protagonist.rank} ${campaignMeta.protagonist.name} (SN: ${campaignMeta.protagonist.serviceNumber})
ARCHETYPE: ${ending.title} - ${ending.subtitle}
VERDICT_QUOTE: ${ending.keyQuote}

=== CORE MORAL LESSON // 선택의 핵심 교훈 ===
[교훈] ${ending.coreLesson.headline}
[경고] ${ending.coreLesson.warning}
[통찰] ${ending.coreLesson.insight}

=== MORAL MATRIX COORDINATES ===
[1] UTILITARIAN vs DEONTOLOGY: ${utilitarianVsDeontological >= 0 ? `+${utilitarianVsDeontological} (Utilitarian)` : `${utilitarianVsDeontological} (Deontology)`}
[2] UNIVERSAL vs TRIBALISM: ${universalVsTribal >= 0 ? `+${universalVsTribal} (Universalism)` : `${universalVsTribal} (Tribalism)`}
[3] AUTONOMY/MERCY vs SANCTITY: ${mercyVsSanctity >= 0 ? `+${mercyVsSanctity} (Mercy/Autonomy)` : `${mercyVsSanctity} (Sanctity)`}

PHILOSOPHICAL VERDICT:
${ending.philosophicalVerdict}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      soundEngine.playTypewriterClick();
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <article className="font-mono text-[#4ade80] space-y-6 animate-fade-in pb-10">
      {/* Terminal Title Banner */}
      <div className="border border-[#1e3a1e] bg-[#0b140b] p-4 text-xs space-y-2">
        <div className="flex items-center justify-between text-[11px] text-[#86efac] border-b border-[#1b331b] pb-2">
          <div className="flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-amber-400 font-bold">&gt;&gt; SYSTEM_DEBRIEF // CAMPAIGN_TERMINATED</span>
          </div>
          <span className="text-stone-400">[{campaignMeta.badge}]</span>
        </div>

        <div className="space-y-1 pt-1">
          <div className="text-amber-400 font-bold text-lg sm:text-xl term-glow-amber">
            &gt; {ending.title}
          </div>
          <div className="text-xs text-stone-300">
            :: {ending.subtitle}
          </div>
        </div>

        {/* Key Quote Monologue */}
        <div className="border-l-2 border-[#33ff66] bg-[#061006] p-2.5 text-xs text-[#bbf7d0] italic">
          {ending.keyQuote}
        </div>
      </div>

      {/* Crucial Moral Takeaway / Core Lesson Section */}
      <section className="border-2 border-amber-500/70 bg-[#161204] p-4 space-y-3 shadow-xl shadow-amber-950/30">
        <div className="flex items-center justify-between border-b border-amber-600/40 pb-2">
          <div className="text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
            <span className="px-1.5 py-0.5 bg-amber-500 text-black font-black text-[10px] rounded">CORE_TAKEAWAY</span>
            <span>&gt;&gt; 플레이어의 선택이 남긴 궁극적 교훈</span>
          </div>
          <span className="text-amber-300/80 text-[10px]">PHILOSOPHICAL_AXIOM</span>
        </div>

        <div className="space-y-2 pt-1">
          <h2 className="text-base sm:text-lg font-bold text-[#fef08a] leading-snug">
            "{ending.coreLesson.headline}"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="border border-red-900/50 bg-[#200d0d] p-2.5 rounded space-y-1">
              <span className="text-red-400 font-bold block text-[11px]">&gt; 뼈아픈 경고 (Warning):</span>
              <p className="text-red-200/90 leading-relaxed text-[11px]">{ending.coreLesson.warning}</p>
            </div>
            <div className="border border-emerald-900/50 bg-[#0a1f0f] p-2.5 rounded space-y-1">
              <span className="text-emerald-400 font-bold block text-[11px]">&gt; 인간성의 통찰 (Insight):</span>
              <p className="text-emerald-200/90 leading-relaxed text-[11px]">{ending.coreLesson.insight}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="border border-[#1e3a1e] bg-[#080e08] p-4 space-y-2 text-xs sm:text-sm">
        <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
          &gt;&gt; 1.0 OPERATIONAL_CONDUCT_EVALUATION
        </div>
        <p className="text-[#dcfce7] leading-relaxed text-justify">
          {ending.summary}
        </p>
      </section>

      {/* Deep Philosophical Analysis */}
      <section className="border border-[#1e3a1e] bg-[#080e08] p-4 space-y-2 text-xs sm:text-sm">
        <div className="text-sky-400 font-bold text-xs uppercase tracking-wider">
          &gt;&gt; 2.0 PHILOSOPHICAL_DIALECTIC_MATRIX
        </div>
        <p className="text-[#dcfce7] leading-relaxed text-justify">
          {ending.philosophicalVerdict}
        </p>
      </section>

      {/* Post-War Trajectory */}
      <section className="border border-[#1e3a1e] bg-[#080e08] p-4 space-y-2 text-xs sm:text-sm">
        <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
          &gt;&gt; 3.0 POST_WAR_EPILOGUE (1945-1970)
        </div>
        <p className="text-[#dcfce7] leading-relaxed text-justify">
          {ending.postWarLife}
        </p>
      </section>

      {/* ASCII Coordinates & Gauge Meters */}
      <section className="border border-[#1e3a1e] bg-[#080e08] p-4 space-y-3.5 text-xs">
        <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
          &gt;&gt; 4.0 MORAL_COORDINATES_VECTOR
        </div>

        {/* Meter 1 */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] text-stone-300">
            <span>[DEONTOLOGY / 원칙주의]</span>
            <span className="text-amber-400 font-bold">
              {utilitarianVsDeontological >= 0 ? `+${utilitarianVsDeontological}` : utilitarianVsDeontological}
            </span>
            <span>[UTILITARIAN / 공리주의]</span>
          </div>
          <div className="h-2 w-full bg-[#051105] border border-[#1b3a1b] relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-stone-600 z-10" />
            <div
              className={`h-full ${utilitarianVsDeontological >= 0 ? 'bg-amber-500' : 'bg-red-500'}`}
              style={{
                marginLeft: utilitarianVsDeontological < 0 ? `${50 + (utilitarianVsDeontological * 2.5)}%` : '50%',
                width: `${Math.abs(utilitarianVsDeontological) * 2.5}%`,
              }}
            />
          </div>
        </div>

        {/* Meter 2 */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] text-stone-300">
            <span>[TRIBALISM / 전우애·부족주의]</span>
            <span className="text-amber-400 font-bold">
              {universalVsTribal >= 0 ? `+${universalVsTribal}` : universalVsTribal}
            </span>
            <span>[UNIVERSALISM / 보편인류애]</span>
          </div>
          <div className="h-2 w-full bg-[#051105] border border-[#1b3a1b] relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-stone-600 z-10" />
            <div
              className={`h-full ${universalVsTribal >= 0 ? 'bg-emerald-500' : 'bg-orange-500'}`}
              style={{
                marginLeft: universalVsTribal < 0 ? `${50 + (universalVsTribal * 2.5)}%` : '50%',
                width: `${Math.abs(universalVsTribal) * 2.5}%`,
              }}
            />
          </div>
        </div>

        {/* Meter 3 */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] text-stone-300">
            <span>[SANCTITY / 생명 신성함]</span>
            <span className="text-amber-400 font-bold">
              {mercyVsSanctity >= 0 ? `+${mercyVsSanctity}` : mercyVsSanctity}
            </span>
            <span>[MERCY & AUTONOMY / 자율성·결단]</span>
          </div>
          <div className="h-2 w-full bg-[#051105] border border-[#1b3a1b] relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-stone-600 z-10" />
            <div
              className={`h-full ${mercyVsSanctity >= 0 ? 'bg-sky-500' : 'bg-rose-500'}`}
              style={{
                marginLeft: mercyVsSanctity < 0 ? `${50 + (mercyVsSanctity * 2.5)}%` : '50%',
                width: `${Math.abs(mercyVsSanctity) * 2.5}%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Decisions Log Ledger */}
      <section className="border border-[#1e3a1e] bg-[#080e08] p-4 space-y-2.5 text-xs">
        <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
          &gt;&gt; 5.0 TRAJECTORY_LEDGER // DECISION_LOGS
        </div>

        <div className="space-y-2">
          {state.history.map((record, idx) => (
            <div key={idx} className="border border-[#1a331a] bg-[#0c160c] p-2.5 space-y-1">
              <div className="flex items-center justify-between text-[11px] text-stone-400">
                <span className="text-emerald-400 font-bold">LOG_0{idx + 1} :: {record.scenarioTitle}</span>
                <span>{record.timestamp}</span>
              </div>
              <div className="text-stone-200">
                COMMAND: <span className="text-amber-300 font-bold">{record.chosenLabel}</span>
              </div>
              <p className="text-[11px] text-stone-400 italic">
                "{record.chosenText}"
              </p>
              {record.lessonTaught && (
                <div className="text-[10px] text-amber-300/90 font-mono bg-[#161205] border border-amber-900/40 p-1.5 rounded mt-1">
                  <span className="text-amber-400 font-bold">&gt;&gt; LESSON:</span> {record.lessonTaught}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Discharge Terminal Certificate (ASCII Form) */}
      <div className="border-2 border-[#2b592b] bg-[#061006] p-4 text-xs space-y-3">
        <div className="text-center border-b border-[#1b381b] pb-2 space-y-0.5">
          <div className="text-[10px] text-stone-500 font-bold">WAR DEPARTMENT · U.S. ARMY MEDICAL CORPS</div>
          <div className="text-sm font-bold text-[#bbf7d0]">OFFICIAL_DISCHARGE_ARCHIVE // DD-214_LOG</div>
          <div className="text-[11px] text-amber-400">SN: {campaignMeta.protagonist.serviceNumber} · {campaignMeta.protagonist.rank} {campaignMeta.protagonist.name}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-300">
          <div>&gt; UNIT: {campaignMeta.protagonist.unit}</div>
          <div>&gt; THEATER: {campaignMeta.theater}</div>
          <div>&gt; MORAL_STATUS: {ending.title}</div>
          <div>&gt; BRASSARD_STATUS: BLOOD_STAINED // ARCHIVED</div>
        </div>
      </div>

      {/* Terminal Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#1e3a1e] text-xs">
        <button
          onClick={handleCopySummary}
          className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0c180c] hover:bg-[#152915] border border-[#274e27] text-stone-200 rounded cursor-pointer transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">COPIED_TO_CLIPBOARD</span>
            </>
          ) : (
            <>
              <Share2 className="h-3.5 w-3.5 text-amber-400" />
              <span>EXPORT_DEBRIEF_LOG</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => onSelectAnotherCampaign()}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 bg-[#122412] hover:bg-[#1b381b] border border-[#2e5d2e] text-[#86efac] rounded cursor-pointer transition-colors"
          >
            <span>SWITCH_THEATER</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => {
              soundEngine.playChoiceCommit();
              onRestart();
            }}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 bg-[#1e4620] hover:bg-[#2b642e] border border-[#33ff66] text-white font-bold rounded cursor-pointer transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>RESTART_SIMULATION</span>
          </button>
        </div>
      </div>
    </article>
  );
};
