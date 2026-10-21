import React from 'react';
import { History, Terminal } from 'lucide-react';

interface HistoricalContextModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HistoricalContextModal: React.FC<HistoricalContextModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur font-mono animate-fade-in text-xs">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded border border-[#234b23] bg-[#070d07] text-[#4ade80] shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#1b3b1b] px-4 py-3 bg-[#0a140a]">
          <div className="flex items-center gap-2">
            <History className="h-4 w-4 text-amber-400" />
            <span className="font-bold text-[#86efac]">
              man 8 ww2_combat_medic_doctrine
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
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-stone-300">
          <div className="space-y-1.5 border-b border-[#182e18] pb-3">
            <h4 className="text-amber-400 font-bold text-xs uppercase">
              1. 1929 GENEVA CONVENTION (제네바 협약과 비전투원 지위)
            </h4>
            <p className="text-[11px] leading-relaxed text-justify">
              제2차 세계대전 당시 미 육군 전투 위생병은 국제법상 비전투원으로 보호받았습니다. 원칙적으로 공격용 소총을 휴대하지 않았으며, 철모와 팔에 부착된 붉은 십자가(Red Cross) 완장만을 방패 삼아 빗발치는 총탄 속으로 뛰어들었습니다.
            </p>
          </div>

          <div className="space-y-1.5 border-b border-[#182e18] pb-3">
            <h4 className="text-amber-400 font-bold text-xs uppercase">
              2. MORPHINE SYRETTE & FIELD KIT (모르핀 시렛과 장비)
            </h4>
            <p className="text-[11px] leading-relaxed text-justify">
              위생병의 캔버스 구급낭에는 칼라일 압박 붕대, 지혈대, 설파제 분말, 그리고 짜먹는 치약 튜브 형태의 모르핀 시렛이 들어있었습니다. 혹한의 아르덴에서는 주사액이 얼어붙어 입안에 머금고 녹여야 했으며, 치명상 환자에게 고통을 덜어주는 유일한 자비였습니다.
            </p>
          </div>

          <div className="space-y-1.5 border-b border-[#182e18] pb-3">
            <h4 className="text-amber-400 font-bold text-xs uppercase">
              3. TRIAGE DOCTRINE (트리아지 분류의 냉혹한 산술)
            </h4>
            <p className="text-[11px] leading-relaxed text-justify">
              대규모 사상자가 폭주하는 야전에서 의무병은 "가망 없는 자", "즉각 처치로 살릴 수 있는 자", "치료를 미룰 수 있는 자"로 부상병을 선별해야 했습니다. 이는 생명의 가치를 통계와 자원으로 저울질해야 하는 가장 가혹한 윤리적 형벌이었습니다.
            </p>
          </div>

          <div className="space-y-1.5 border-b border-[#182e18] pb-3">
            <h4 className="text-amber-400 font-bold text-xs uppercase">
              4. PACIFIC & EUROPEAN THEATERS (태평양 및 유럽 전선의 특수성)
            </h4>
            <p className="text-[11px] leading-relaxed text-justify">
              유럽 전선(아르덴·노르망디)에서는 상대적으로 제네바 협약이 의식되었으나, 광신적 친위대나 혼전 속에서는 적십자가 표적이 되기도 했습니다. 반면 태평양 전선(오키나와)에서는 적십자 표식이 저격수의 제1 목표가 되어 표식을 떼어내야 했으며, 지하 동굴과 부비트랩, 민간인 집단자결 등 생지옥이 펼쳐졌습니다.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-amber-400 font-bold text-xs uppercase">
              5. DACHAU LIBERATION & NUREMBERG ETHICS (다하우 수용소 해방과 뉘른베르크 강령)
            </h4>
            <p className="text-[11px] leading-relaxed text-justify">
              1945년 4월 29일, 미 육군 제45보병사단과 제42보병사단이 해방한 다하우 강제 수용소는 인류 문명이 자멸한 참상을 적나라하게 드러냈습니다. 극심한 아사 상태 환자들의 리피딩 증후군 쇼크사, 발진티푸스 창궐에 따른 격리 딜레마, 항복한 나치 친위대원을 향한 미군 병사들의 보복 처형 사건(Dachau massacre), 그리고 저체온증 인체 실험 일지 보존 논쟁은 전후 뉘른베르크 강령(Nuremberg Code)과 현대 생명윤리학 태동의 결정적 계기가 되었습니다.
            </p>
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
