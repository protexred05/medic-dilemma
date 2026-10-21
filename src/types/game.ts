export type CampaignId = 'ARDENNES_1944' | 'OKINAWA_1945' | 'NORMANDY_1944' | 'DACHAU_1945';

export type ScenarioId = 
  // Campaign 1: Ardennes 1944 (아르덴의 눈보라)
  | 'SCENARIO_1_TRIAGE'
  | 'SCENARIO_1_RESULT'
  | 'SCENARIO_2_CHURCH'
  | 'SCENARIO_2_RESULT'
  | 'SCENARIO_3_BUNKER'
  | 'SCENARIO_3_RESULT'
  | 'SCENARIO_4_REFLECT'
  // Campaign 2: Okinawa 1945 (오키나와의 동굴)
  | 'OKINAWA_1_CAVE'
  | 'OKINAWA_1_RESULT'
  | 'OKINAWA_2_SUPPLY'
  | 'OKINAWA_2_RESULT'
  | 'OKINAWA_3_TRAPPED'
  | 'OKINAWA_3_RESULT'
  | 'OKINAWA_4_REFLECT'
  // Campaign 3: Normandy 1944 (보카주의 맹세)
  | 'NORMANDY_1_ORPHAN'
  | 'NORMANDY_1_RESULT'
  | 'NORMANDY_2_WEAPON'
  | 'NORMANDY_2_RESULT'
  | 'NORMANDY_3_TRIAGE_CIVILIAN'
  | 'NORMANDY_3_RESULT'
  | 'NORMANDY_4_REFLECT'
  // Campaign 4: Dachau 1945 (심연의 잿더미 - 최고 난도 5막 특별 에피소드)
  | 'DACHAU_1_GATES'
  | 'DACHAU_1_RESULT'
  | 'DACHAU_2_TYPHUS'
  | 'DACHAU_2_RESULT'
  | 'DACHAU_3_RETRIBUTION'
  | 'DACHAU_3_RESULT'
  | 'DACHAU_4_RESEARCH'
  | 'DACHAU_4_RESULT'
  | 'DACHAU_5_CREMATORIUM'
  | 'ENDING';

export interface Choice {
  id: number;
  text: string;
  shortLabel: string;
  moralCategory: 
    | 'utilitarian' 
    | 'deontological' 
    | 'compromise' 
    | 'universal' 
    | 'tribal' 
    | 'autonomy' 
    | 'sanctity'
    | 'humanitarian'
    | 'military_duty'
    | 'nonviolence'
    | 'pragmatism';
  scoreImpact: {
    utilitarianVsDeontological: number; // -10 (Deontology/Absolutes) to +10 (Utilitarianism/Consequentialism)
    universalVsTribal: number;          // -10 (Tribalism/Squad/Self) to +10 (Universal Humanitarianism)
    mercyVsSanctity: number;            // -10 (Sanctity/Duty/Rules) to +10 (Mercy/Autonomy/Pragmatic Action)
    squadTrust: number;                 // -10 to +10
  };
  protagonistThought: string;
  lessonTaught: string; // The crucial ethical takeaway/warning resulting from this decision
}

export interface ChoiceHistoryRecord {
  scenarioId: ScenarioId;
  scenarioTitle: string;
  chosenId: number;
  chosenText: string;
  chosenLabel: string;
  timestamp: string;
  consequenceSummary: string;
  lessonTaught: string;
}

export interface GameState {
  selectedCampaign: CampaignId;
  currentScenario: ScenarioId;
  history: ChoiceHistoryRecord[];
  scores: {
    utilitarianVsDeontological: number;
    universalVsTribal: number;
    mercyVsSanctity: number;
    squadTrust: number;
  };
  audioEnabled: boolean;
  typewriterSpeed: 'normal' | 'fast' | 'instant';
}

export interface EndingAnalysis {
  title: string;
  subtitle: string;
  summary: string;
  philosophicalVerdict: string;
  postWarLife: string;
  keyQuote: string;
  archetype: 'GUARDIAN' | 'UTILITARIAN' | 'COMRADE' | 'MARTYR';
  coreLesson: {
    headline: string;
    warning: string;
    insight: string;
  };
}

export interface CampaignMetadata {
  id: CampaignId;
  badge: string;
  title: string;
  subtitle: string;
  theater: string;
  actCount: number;
  isSpecialDepth?: boolean;
  warningNote?: string;
  protagonist: {
    name: string;
    rank: string;
    unit: string;
    serviceNumber: string;
  };
  summary: string;
  dilemmasSummary: string[];
}
