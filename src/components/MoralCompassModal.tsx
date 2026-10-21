import React from 'react';
import { Compass, Terminal, Scale, ShieldAlert, HeartHandshake } from 'lucide-react';

interface MoralCompassModalProps {
  isOpen: boolean;
  onClose: () => void;
  scores: {
    utilitarianVsDeontological: number;
    universalVsTribal: number;
    mercyVsSanctity: number;
    squadTrust: number;
  };
}

export const MoralCompassModal: React.FC<MoralCompassModalProps> = ({
  isOpen,
  onClose,
  scores,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur font-mono animate-fade-in text-xs">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded border border-[#234b23] bg-[#070d07] text-[#4ade80] shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#1b3b1b] px-4 py-3 bg-[#0a140a]">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-[#38bdf8]" />
            <span className="font-bold text-[#86efac]">
              ./bin/analyze_moral_matrix --verbose
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
            // RUNTIME EVALUATION: 위생병의 실시간 윤리 좌표 벡터 분석 (3-AXIS PHILOSOPHICAL ENGINE)
          </p>

          {/* Metric 1 */}
          <div className="border border-[#1a331a] bg-[#0c160c] p-3 space-y-2 rounded">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#38bdf8]">
                [AXIS_01] UTILITARIANISM &lt;---&gt; DEONTOLOGY
              </span>
              <span className="text-amber-400 font-bold">
                SCORE: {scores.utilitarianVsDeontological >= 0 ? `+${scores.utilitarianVsDeontological}` : scores.utilitarianVsDeontological}
              </span>
            </div>

            <div className="h-2 w-full bg-[#051105] border border-[#1b3a1b] relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-stone-600 z-10" />
              <div
                className={`h-full ${scores.utilitarianVsDeontological >= 0 ? 'bg-amber-500' : 'bg-red-500'}`}
                style={{
                  marginLeft: scores.utilitarianVsDeontological < 0 ? `${50 + (scores.utilitarianVsDeontological * 2.5)}%` : '50%',
                  width: `${Math.abs(scores.utilitarianVsDeontological) * 2.5}%`,
                }}
              />
            </div>

            <div className="text-[11px] text-stone-300 space-y-0.5">
              <div>&gt; +10 쪽: 최대 다수의 생존을 위한 전략적 계산 및 비정 감수 (밀·벤담)</div>
              <div>&gt; -10 쪽: 계급을 배제한 생명의 절대적 평등과 규칙 준수 (칸트 정언명령)</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="border border-[#1a331a] bg-[#0c160c] p-3 space-y-2 rounded">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#4ade80]">
                [AXIS_02] UNIVERSAL HUMANISM &lt;---&gt; TRIBALISM
              </span>
              <span className="text-amber-400 font-bold">
                SCORE: {scores.universalVsTribal >= 0 ? `+${scores.universalVsTribal}` : scores.universalVsTribal}
              </span>
            </div>

            <div className="h-2 w-full bg-[#051105] border border-[#1b3a1b] relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-stone-600 z-10" />
              <div
                className={`h-full ${scores.universalVsTribal >= 0 ? 'bg-emerald-500' : 'bg-orange-500'}`}
                style={{
                  marginLeft: scores.universalVsTribal < 0 ? `${50 + (scores.universalVsTribal * 2.5)}%` : '50%',
                  width: `${Math.abs(scores.universalVsTribal) * 2.5}%`,
                }}
              />
            </div>

            <div className="text-[11px] text-stone-300 space-y-0.5">
              <div>&gt; +10 쪽: 적군·민간인·부역자를 막론한 보편적 인도주의 치료 (히포크라테스 선서)</div>
              <div>&gt; -10 쪽: 아군 형제들과 전우들의 신뢰 및 생존 우선 (부족주의적 연대)</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="border border-[#1a331a] bg-[#0c160c] p-3 space-y-2 rounded">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-amber-400">
                [AXIS_03] MERCY & AUTONOMY &lt;---&gt; SANCTITY OF LIFE
              </span>
              <span className="text-amber-400 font-bold">
                SCORE: {scores.mercyVsSanctity >= 0 ? `+${scores.mercyVsSanctity}` : scores.mercyVsSanctity}
              </span>
            </div>

            <div className="h-2 w-full bg-[#051105] border border-[#1b3a1b] relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-stone-600 z-10" />
              <div
                className={`h-full ${scores.mercyVsSanctity >= 0 ? 'bg-sky-500' : 'bg-rose-500'}`}
                style={{
                  marginLeft: scores.mercyVsSanctity < 0 ? `${50 + (scores.mercyVsSanctity * 2.5)}%` : '50%',
                  width: `${Math.abs(scores.mercyVsSanctity) * 2.5}%`,
                }}
              />
            </div>

            <div className="text-[11px] text-stone-300 space-y-0.5">
              <div>&gt; +10 쪽: 극심한 고통의 중단(존엄사)과 위기 속 결단 (자율성·자비)</div>
              <div>&gt; -10 쪽: 어떤 경우에도 인위적 살상 금기 (생명의 불가침적 신성함)</div>
            </div>
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
