import React, { useState } from 'react';
import { GameState, Choice, ScenarioId, CampaignId } from './types/game';
import {
  SCENARIO_1,
  getScenario1Result,
  SCENARIO_2,
  getScenario2Result,
  SCENARIO_3,
  getScenario3Result,
  SCENARIO_4,
  OKINAWA_1,
  getOkinawa1Result,
  OKINAWA_2,
  getOkinawa2Result,
  OKINAWA_3,
  getOkinawa3Result,
  OKINAWA_4,
  NORMANDY_1,
  getNormandy1Result,
  NORMANDY_2,
  getNormandy2Result,
  NORMANDY_3,
  getNormandy3Result,
  NORMANDY_4,
  DACHAU_1,
  getDachau1Result,
  DACHAU_2,
  getDachau2Result,
  DACHAU_3,
  getDachau3Result,
  DACHAU_4,
  getDachau4Result,
  DACHAU_5,
  ConsequenceScene,
  CAMPAIGNS,
} from './data/narrative';
import { TopBar } from './components/TopBar';
import { NarrativeView } from './components/NarrativeView';
import { ConsequenceView } from './components/ConsequenceView';
import { EndingView } from './components/EndingView';
import { JournalModal } from './components/JournalModal';
import { MoralCompassModal } from './components/MoralCompassModal';
import { HistoricalContextModal } from './components/HistoricalContextModal';
import { CampaignSelectorModal } from './components/CampaignSelectorModal';
import { soundEngine } from './utils/audio';

function getInitialScenarioForCampaign(camp: CampaignId): ScenarioId {
  switch (camp) {
    case 'ARDENNES_1944':
      return 'SCENARIO_1_TRIAGE';
    case 'OKINAWA_1945':
      return 'OKINAWA_1_CAVE';
    case 'NORMANDY_1944':
      return 'NORMANDY_1_ORPHAN';
    case 'DACHAU_1945':
      return 'DACHAU_1_GATES';
    default:
      return 'SCENARIO_1_TRIAGE';
  }
}

function createInitialState(campaign: CampaignId = 'ARDENNES_1944'): GameState {
  return {
    selectedCampaign: campaign,
    currentScenario: getInitialScenarioForCampaign(campaign),
    history: [],
    scores: {
      utilitarianVsDeontological: 0,
      universalVsTribal: 0,
      mercyVsSanctity: 0,
      squadTrust: 0,
    },
    audioEnabled: false,
    typewriterSpeed: 'normal',
  };
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>(() => createInitialState('ARDENNES_1944'));
  const [currentConsequence, setCurrentConsequence] = useState<ConsequenceScene | null>(null);
  const [lastChosenLabel, setLastChosenLabel] = useState<string>('');
  const [crtEffect, setCrtEffect] = useState<boolean>(true);

  // Modals
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [isCompassOpen, setIsCompassOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isCampaignSelectOpen, setIsCampaignSelectOpen] = useState(false);

  const handleToggleAudio = () => {
    const nextState = !gameState.audioEnabled;
    soundEngine.setMuted(!nextState);
    setGameState((prev) => ({ ...prev, audioEnabled: nextState }));
  };

  const handleRestart = () => {
    setGameState(createInitialState(gameState.selectedCampaign));
    setCurrentConsequence(null);
    setLastChosenLabel('');
  };

  const handleSwitchCampaign = (campId: CampaignId) => {
    setGameState(createInitialState(campId));
    setCurrentConsequence(null);
    setLastChosenLabel('');
  };

  const handleSelectChoice = (choice: Choice) => {
    const nextScores = {
      utilitarianVsDeontological:
        gameState.scores.utilitarianVsDeontological + choice.scoreImpact.utilitarianVsDeontological,
      universalVsTribal:
        gameState.scores.universalVsTribal + choice.scoreImpact.universalVsTribal,
      mercyVsSanctity:
        gameState.scores.mercyVsSanctity + choice.scoreImpact.mercyVsSanctity,
      squadTrust:
        gameState.scores.squadTrust + choice.scoreImpact.squadTrust,
    };

    let consequence: ConsequenceScene | null = null;
    let scenarioTitle = '';

    // CAMPAIGN 1: ARDENNES 1944
    if (gameState.currentScenario === 'SCENARIO_1_TRIAGE') {
      scenarioTitle = '제1막: 피 묻은 천막의 저울 (트리아지)';
      consequence = getScenario1Result(choice.id);
    } else if (gameState.currentScenario === 'SCENARIO_2_CHURCH') {
      scenarioTitle = '제2막: 폐허의 성당과 적 (히포크라테스 선서 vs 부족주의)';
      consequence = getScenario2Result(choice.id);
    } else if (gameState.currentScenario === 'SCENARIO_3_BUNKER') {
      scenarioTitle = '제3막: 화염 속의 전우와 마지막 자비 (안락사 vs 생명 신성함)';
      consequence = getScenario3Result(choice.id);
    } else if (gameState.currentScenario === 'SCENARIO_4_REFLECT') {
      scenarioTitle = '제4막: 아르덴의 여명과 심문 (최종 성찰)';
      const historyRecord = {
        scenarioId: gameState.currentScenario,
        scenarioTitle,
        chosenId: choice.id,
        chosenText: choice.text,
        chosenLabel: choice.shortLabel,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        consequenceSummary: choice.protagonistThought,
        lessonTaught: choice.lessonTaught,
      };

      setGameState((prev) => ({
        ...prev,
        currentScenario: 'ENDING',
        scores: nextScores,
        history: [...prev.history, historyRecord],
      }));
      return;
    }

    // CAMPAIGN 2: OKINAWA 1945
    else if (gameState.currentScenario === 'OKINAWA_1_CAVE') {
      scenarioTitle = '제1막: 어둠 속의 울음소리와 침묵 (침묵 강제 vs 아기 보호)';
      consequence = getOkinawa1Result(choice.id);
    } else if (gameState.currentScenario === 'OKINAWA_2_SUPPLY') {
      scenarioTitle = '제2막: 인계철선과 미끼가 된 전우 (부비트랩 전우 구출 vs 팀 보호)';
      consequence = getOkinawa2Result(choice.id);
    } else if (gameState.currentScenario === 'OKINAWA_3_TRAPPED') {
      scenarioTitle = '제3막: 집단 자결의 암굴과 청산가리 (무력 사살 개입 vs 비무장 원칙)';
      consequence = getOkinawa3Result(choice.id);
    } else if (gameState.currentScenario === 'OKINAWA_4_REFLECT') {
      scenarioTitle = '제4막: 태평양의 석양과 심판 (최종 성찰)';
      const historyRecord = {
        scenarioId: gameState.currentScenario,
        scenarioTitle,
        chosenId: choice.id,
        chosenText: choice.text,
        chosenLabel: choice.shortLabel,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        consequenceSummary: choice.protagonistThought,
        lessonTaught: choice.lessonTaught,
      };

      setGameState((prev) => ({
        ...prev,
        currentScenario: 'ENDING',
        scores: nextScores,
        history: [...prev.history, historyRecord],
      }));
      return;
    }

    // CAMPAIGN 3: NORMANDY 1944
    else if (gameState.currentScenario === 'NORMANDY_1_ORPHAN') {
      scenarioTitle = '제1막: 피격된 환자와 발밑의 소총 (비무장 원칙 vs 환자 보호 사격)';
      consequence = getNormandy1Result(choice.id);
    } else if (gameState.currentScenario === 'NORMANDY_2_WEAPON') {
      scenarioTitle = '제2막: 농가의 수술대와 프랑스 소녀 (민간인 고아 vs 아군 분대장)';
      consequence = getNormandy2Result(choice.id);
    } else if (gameState.currentScenario === 'NORMANDY_3_TRIAGE_CIVILIAN') {
      scenarioTitle = '제3막: 밀고자의 핏물과 레지스탕스의 분노 (법치/부역자 보호 vs 사적 제재)';
      consequence = getNormandy3Result(choice.id);
    } else if (gameState.currentScenario === 'NORMANDY_4_REFLECT') {
      scenarioTitle = '제4막: 노르망디의 석양과 증언 (최종 성찰)';
      const historyRecord = {
        scenarioId: gameState.currentScenario,
        scenarioTitle,
        chosenId: choice.id,
        chosenText: choice.text,
        chosenLabel: choice.shortLabel,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        consequenceSummary: choice.protagonistThought,
        lessonTaught: choice.lessonTaught,
      };

      setGameState((prev) => ({
        ...prev,
        currentScenario: 'ENDING',
        scores: nextScores,
        history: [...prev.history, historyRecord],
      }));
      return;
    }

    // CAMPAIGN 4: DACHAU 1945 (심연의 잿더미 - 최고 심도 5막 특별 에피소드)
    else if (gameState.currentScenario === 'DACHAU_1_GATES') {
      scenarioTitle = '제1막: 철조망의 굶주림과 급식 통제 (리피딩 증후군 vs 폭동 위험)';
      consequence = getDachau1Result(choice.id);
    } else if (gameState.currentScenario === 'DACHAU_2_TYPHUS') {
      scenarioTitle = '제2막: 발진티푸스의 격리 병동 (강제 봉쇄 vs 무조건적 간호)';
      consequence = getDachau2Result(choice.id);
    } else if (gameState.currentScenario === 'DACHAU_3_RETRIBUTION') {
      scenarioTitle = '제3막: 보복의 석벽과 즉결 처형 (미군의 보복 난사 저지 vs 묵인)';
      consequence = getDachau3Result(choice.id);
    } else if (gameState.currentScenario === 'DACHAU_4_RESEARCH') {
      scenarioTitle = '제4막: 악마의 연구 일지와 저체온증 (인체 실험 의학 데이터)';
      consequence = getDachau4Result(choice.id);
    } else if (gameState.currentScenario === 'DACHAU_5_CREMATORIUM') {
      scenarioTitle = '제5막: 소각로의 잿더미와 카디시 (최종 신앙과 윤리 서약)';
      const historyRecord = {
        scenarioId: gameState.currentScenario,
        scenarioTitle,
        chosenId: choice.id,
        chosenText: choice.text,
        chosenLabel: choice.shortLabel,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        consequenceSummary: choice.protagonistThought,
        lessonTaught: choice.lessonTaught,
      };

      setGameState((prev) => ({
        ...prev,
        currentScenario: 'ENDING',
        scores: nextScores,
        history: [...prev.history, historyRecord],
      }));
      return;
    }

    if (consequence) {
      const historyRecord = {
        scenarioId: gameState.currentScenario,
        scenarioTitle,
        chosenId: choice.id,
        chosenText: choice.text,
        chosenLabel: choice.shortLabel,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        consequenceSummary: consequence.title,
        lessonTaught: choice.lessonTaught,
      };

      setCurrentConsequence(consequence);
      setLastChosenLabel(choice.shortLabel);
      setGameState((prev) => ({
        ...prev,
        scores: nextScores,
        history: [...prev.history, historyRecord],
      }));
    }
  };

  const handleContinueAfterConsequence = () => {
    if (!currentConsequence) return;
    const nextScenarioId = currentConsequence.nextScenarioId;
    setCurrentConsequence(null);
    setGameState((prev) => ({
      ...prev,
      currentScenario: nextScenarioId,
    }));
  };

  const currentCampMeta = CAMPAIGNS[gameState.selectedCampaign] || CAMPAIGNS.ARDENNES_1944;

  return (
    <div className="min-h-screen bg-[#070b07] text-[#4ade80] font-mono antialiased flex flex-col relative selection:bg-[#00471b] selection:text-[#a3ffbf]">
      {/* Optional CRT scanline overlay */}
      {crtEffect && <div className="crt-overlay fixed inset-0 z-30 pointer-events-none" />}

      {/* Terminal Top Bar */}
      <TopBar
        currentCampaign={gameState.selectedCampaign}
        audioEnabled={gameState.audioEnabled}
        onToggleAudio={handleToggleAudio}
        onOpenJournal={() => setIsJournalOpen(true)}
        onOpenCompass={() => setIsCompassOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenCampaignSelect={() => setIsCampaignSelectOpen(true)}
        onRestart={handleRestart}
        historyCount={gameState.history.length}
        crtEffect={crtEffect}
        onToggleCrt={() => setCrtEffect(!crtEffect)}
      />

      {/* Terminal Main Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        {currentConsequence ? (
          <ConsequenceView
            consequence={currentConsequence}
            chosenLabel={lastChosenLabel}
            onContinue={handleContinueAfterConsequence}
          />
        ) : gameState.currentScenario === 'SCENARIO_1_TRIAGE' ? (
          <NarrativeView
            scene={SCENARIO_1}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'SCENARIO_2_CHURCH' ? (
          <NarrativeView
            scene={SCENARIO_2}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'SCENARIO_3_BUNKER' ? (
          <NarrativeView
            scene={SCENARIO_3}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'SCENARIO_4_REFLECT' ? (
          <NarrativeView
            scene={SCENARIO_4}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'OKINAWA_1_CAVE' ? (
          <NarrativeView
            scene={OKINAWA_1}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'OKINAWA_2_SUPPLY' ? (
          <NarrativeView
            scene={OKINAWA_2}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'OKINAWA_3_TRAPPED' ? (
          <NarrativeView
            scene={OKINAWA_3}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'OKINAWA_4_REFLECT' ? (
          <NarrativeView
            scene={OKINAWA_4}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'NORMANDY_1_ORPHAN' ? (
          <NarrativeView
            scene={NORMANDY_1}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'NORMANDY_2_WEAPON' ? (
          <NarrativeView
            scene={NORMANDY_2}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'NORMANDY_3_TRIAGE_CIVILIAN' ? (
          <NarrativeView
            scene={NORMANDY_3}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'NORMANDY_4_REFLECT' ? (
          <NarrativeView
            scene={NORMANDY_4}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'DACHAU_1_GATES' ? (
          <NarrativeView
            scene={DACHAU_1}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'DACHAU_2_TYPHUS' ? (
          <NarrativeView
            scene={DACHAU_2}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'DACHAU_3_RETRIBUTION' ? (
          <NarrativeView
            scene={DACHAU_3}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'DACHAU_4_RESEARCH' ? (
          <NarrativeView
            scene={DACHAU_4}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : gameState.currentScenario === 'DACHAU_5_CREMATORIUM' ? (
          <NarrativeView
            scene={DACHAU_5}
            onSelectChoice={handleSelectChoice}
            speed={gameState.typewriterSpeed}
            onChangeSpeed={(speed) =>
              setGameState((prev) => ({ ...prev, typewriterSpeed: speed }))
            }
          />
        ) : (
          <EndingView
            state={gameState}
            onRestart={handleRestart}
            onSelectAnotherCampaign={() => setIsCampaignSelectOpen(true)}
          />
        )}
      </main>

      {/* Terminal Status Footer */}
      <footer className="border-t border-[#1e3a1e] py-3 text-center text-[11px] text-stone-500 bg-[#070b07]">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#33ff66] font-bold">TTY1</span>
          <span>::</span>
          <span className="text-stone-400">{currentCampMeta.title}</span>
          <span>::</span>
          <span className="text-amber-400">GENEVA_CONVENTION_1929_ACTIVE</span>
        </div>
      </footer>

      {/* Terminal Modals */}
      <CampaignSelectorModal
        isOpen={isCampaignSelectOpen}
        onClose={() => setIsCampaignSelectOpen(false)}
        selectedCampaign={gameState.selectedCampaign}
        onSelectCampaign={handleSwitchCampaign}
      />

      <JournalModal
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
        history={gameState.history}
      />

      <MoralCompassModal
        isOpen={isCompassOpen}
        onClose={() => setIsCompassOpen(false)}
        scores={gameState.scores}
      />

      <HistoricalContextModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />
    </div>
  );
}
