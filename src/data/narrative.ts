import { Choice, EndingAnalysis, GameState, CampaignMetadata } from '../types/game';

// Distinct historical artwork for EVERY SINGLE ACT in every campaign
export const IMAGES = {
  // Ardennes 1944
  ardennesAct1: '/src/assets/images/medic_field_triage_tent_1790777343903.jpg',
  ardennesAct2: '/src/assets/images/medic_ruined_church_winter_1790777357520.jpg',
  ardennesAct3: '/src/assets/images/medic_armband_dogtag_1790777373955.jpg',
  ardennesAct4: '/src/assets/images/ardennes_refugee_road_1792598556935.jpg',

  // Okinawa 1945
  okinawaAct1: '/src/assets/images/pacific_okinawa_cave_1791413109873.jpg',
  okinawaAct2: '/src/assets/images/okinawa_tripwire_trap_1792598392960.jpg',
  okinawaAct3: '/src/assets/images/okinawa_mass_suicide_cave_1792598411375.jpg',
  okinawaAct4: '/src/assets/images/okinawa_sunset_mabuni_1792598588476.jpg',

  // Normandy 1944
  normandyAct1: '/src/assets/images/normandy_sniper_windmill_1792598433270.jpg',
  normandyAct2: '/src/assets/images/normandy_bocage_village_1791413123383.jpg',
  normandyAct3: '/src/assets/images/normandy_town_square_lynch_1792598451342.jpg',
  normandyAct4: '/src/assets/images/normandy_hospital_ship_1792598571643.jpg',

  // Dachau 1945 (심연의 잿더미 - 최고 심도 5막)
  dachauAct1: '/src/assets/images/camp_liberation_wire_1792598468952.jpg',
  dachauAct2: '/src/assets/images/camp_quarantine_typhus_1792598489205.jpg',
  dachauAct3: '/src/assets/images/camp_retribution_wall_1792598510780.jpg',
  dachauAct4: '/src/assets/images/camp_doctor_journal_1792598526150.jpg',
  dachauAct5: '/src/assets/images/camp_crematorium_ash_1792598540338.jpg',
};

export const CAMPAIGNS: Record<string, CampaignMetadata> = {
  DACHAU_1945: {
    id: 'DACHAU_1945',
    badge: '최고 심도 · 5막 특별 에피소드',
    title: '심연의 잿더미: 다하우 수용소의 해방자',
    subtitle: '문명이 자멸한 지옥의 문, 집단 발진티푸스 격리, 즉결 처형의 복수벽, 인체 실험 기록의 딜레마',
    theater: '독일 바이에른 주 다하우(Dachau) 강제 수용소',
    actCount: 5,
    isSpecialDepth: true,
    warningNote: '※ 주의: 가장 비극적이고 파괴적인 실제 역사적 참상을 다룹니다. 감정적 소모와 심대한 정신적 충격을 동반할 수 있습니다.',
    protagonist: {
      name: '벤자민 S. 레빈 (Benjamin S. Levin)',
      rank: '중사 (Tech Sgt.)',
      unit: '미 육군 제45보병사단 제120의무대대 A중대 (유대계 미국인)',
      serviceNumber: '32-944-817',
    },
    summary: '1945년 4월 29일, 나치 최초의 강제수용소 다하우를 해방한 미군 의무대의 실화적 재구성. 굶주림에 미쳐 빵을 집어삼키다 장파열로 죽어가는 수천 명의 생존자들, 발진티푸스 만연 막사를 폐쇄하여 일부를 가둘 것인가의 방역 딜레마, 항복한 SS 수용소 경비병들을 벽에 세우고 기관총을 난사하려는 아군 전우들의 보복 학살 저지, 수백 명의 수감자를 냉동 살해하며 축적된 인체 실험 의학 데이터의 보존 여부, 그리고 소각장 잿더미 앞에서 신과 인간의 존재를 묻는 5막의 장대한 비극입니다.',
    dilemmasSummary: [
      '제1막 철조망의 굶주림: 급식 통제와 폭동 방지 (즉각 배급으로 인한 쇼크사 vs 총구 위협을 통한 통제)',
      '제2막 발진티푸스의 격리 병동: 건강한 자들을 지키기 위한 감염 막사 강제 봉쇄 (인도주의 방임 vs 비정한 격리)',
      '제3막 보복의 석벽: 항복한 나치 친위대원들을 즉결 처형하려는 미군 전우들 (법치와 군율 vs 정당한 응징의 묵인)',
      '제4막 악마의 연구 일지: 얼어 죽은 수백 명의 기록으로 완성된 저체온증 치료 의학 데이터 (소각 파기 vs 미래 인류를 위한 수용)',
      '제5막 잿더미 속의 카디시(Kaddish): 문명이 붕괴된 소각로 앞에서 위생병의 마지막 신앙과 서약의 총화',
    ],
  },
  ARDENNES_1944: {
    id: 'ARDENNES_1944',
    badge: '서부 전선 1944',
    title: '아르덴의 눈보라: 전장의 십자가',
    subtitle: '혹한의 포화 속 트리아지, 부상당한 적군, 그리고 화염 속 전우의 안락사',
    theater: '벨기에 아르덴 숲 · 벌지 전투',
    actCount: 4,
    protagonist: {
      name: '제임스 R. 밴스 (James R. Vance)',
      rank: '하사 (Sgt.)',
      unit: '미 육군 제28보병사단 제112의무대대 1중대',
      serviceNumber: '35-829-104',
    },
    summary: '영하 14도의 혹한과 포위망 속에서, 3,000명의 운명을 쥔 장교와 피 흘리는 어린 병사들 사이의 우선순위 저울질, 부상당한 독일 SS 소년병 치료, 불타는 벙커 속 친구의 안락사 애원 등 원형적 도덕 딜레마를 마주합니다.',
    dilemmasSummary: [
      '트리아지: 사단 작전참모 vs 앳된 사병 3명 (공리주의 vs 의무론)',
      '폐허 성당: 무장해제된 독일 SS 소년병 구호 vs 전우들의 복수심 (선서 vs 부족주의)',
      '무너진 벙커: 산 채로 타죽는 전우의 모르핀 안락사 애원 (존엄사 vs 생명의 신성함)',
    ],
  },
  OKINAWA_1945: {
    id: 'OKINAWA_1945',
    badge: '태평양 전선 1945',
    title: '오키나와의 동굴: 침묵과 부비트랩',
    subtitle: '칠흑의 천연동굴, 유아의 울음소리와 매복, 그리고 독극물 자결 강요의 현장',
    theater: '일본 오키나와 슈리 능선 지하 호 (Cave Tunnels)',
    actCount: 4,
    protagonist: {
      name: '토마스 W. 린우드 (Thomas W. Linwood)',
      rank: '상등병 (Cpl.)',
      unit: '미 육군 제7보병사단 제7의무대대 C중대',
      serviceNumber: '32-710-482',
    },
    summary: '1945년 5월, 열대성 폭우와 진흙탕 속 오키나와 슈리 능선의 석회암 천연동굴. 은신한 아군 부상병들을 살리기 위해 우는 민간인 아기의 입을 막아야 하는가? 동굴 입구 부상병의 몸에 설치된 수류탄 부비트랩의 위험을 무릅쓰고 진입할 것인가? 패잔병과 민간인들에게 집단자결 독극물을 주입하려는 군의관을 막아설 것인가?',
    dilemmasSummary: [
      '침묵의 동굴: 동굴 밖 일본군 수색대와 우는 아기 (전체 은신을 위한 침묵 강요 vs 무고한 생명 보호)',
      '부비트랩의 덫: 인계철선이 감긴 미군 부상병 구호 (팀 전체 폭사 위험 감수 vs 구조 포기)',
      '집단자결의 비극: 민간인들에게 청산가리를 건네는 적군 군의관과 투항 권고 (무력 개입 vs 불간섭)',
    ],
  },
  NORMANDY_1944: {
    id: 'NORMANDY_1944',
    badge: '서부 전선 1944 여름',
    title: '보카주의 맹세: 무기와 민간인',
    subtitle: '노르망디 생로 수풀림, 비무장 원칙의 붕괴와 민간인 외과 수술의 우선권',
    theater: '프랑스 노르망디 생로(Saint-Lô) 외곽 고립 농가',
    actCount: 4,
    protagonist: {
      name: '로버트 E. 헤일 (Robert E. Hale)',
      rank: '일병 (Pfc.)',
      unit: '미 육군 제29보병사단 제115보병연대 의무분대',
      serviceNumber: '33-640-915',
    },
    summary: '1944년 7월, 보카주(Bocage) 관목 숲의 치열한 저격전. 비무장 위생병으로서 환자를 학살하려는 독일 저격수를 죽이기 위해 소총을 집어 들어 비폭력 원칙을 깰 것인가? 파편에 관통된 8세 프랑스 소녀와 당장 전선에 복귀해야 할 분대장 중 누구를 먼저 수술대에 올릴 것인가? 프랑스 레지스탕스 내부의 밀고 혐의 환자를 치료해 증거를 보존할 것인가?',
    dilemmasSummary: [
      '비무장 원칙의 시험: 부상병을 조준 사격하는 저격수와 발밑의 M1 소총 (비폭력 서약 준수 vs 무력 살상 개입)',
      '민간인 vs 아군 분대장: 파편 맞은 프랑스 소녀 vs 돌격 분대장의 흉부 파열 (민간인 구호 의무 vs 군사적 목표)',
      '전선의 증언: 독일군에 부역 혐의로 린치당한 프랑스 통역사 치료 (사적 복수 방관 vs 법적 증언 보존)',
    ],
  },
};

export interface NarrativeScene {
  id: string;
  campaignId: string;
  actTitle: string;
  chapterNumber: string;
  location: string;
  date: string;
  image: string;
  imageCaption: string;
  paragraphs: string[];
  quote?: {
    speaker: string;
    text: string;
  };
  choices: Choice[];
}

export interface ConsequenceScene {
  id: string;
  title: string;
  paragraphs: string[];
  npcReactions: string[];
  lessonMessage: string; // Direct philosophical warning & moral lesson
  nextScenarioId: any;
}

// ==========================================
// CAMPAIGN 1: ARDENNES 1944 (아르덴의 눈보라)
// ==========================================
export const SCENARIO_1: NarrativeScene = {
  id: 'SCENARIO_1_TRIAGE',
  campaignId: 'ARDENNES_1944',
  actTitle: '제1막: 피 묻은 천막의 저울',
  chapterNumber: '01',
  location: '벨기에 아르덴 숲 외곽 · 제112야전후송병원 임시 텐트',
  date: '1944년 12월 18일 04:30',
  image: IMAGES.ardennesAct1,
  imageCaption: '혹한의 포화 속 가스등 하나에 의지한 야전 의무 텐트',
  paragraphs: [
    '천막 밖은 영하 14도의 혹한과 독일군 88mm 야포의 무자비한 십자포화로 얼어붙어 있었습니다. 찢겨진 천막 틈새로 살을 에는 눈보라가 들이칠 때마다, 피비린내와 에테르의 역한 악취가 콧속을 찔렀습니다.',
    '당신은 미 육군 제28보병사단 의무대 소속 위생병, 제임스 R. 밴스(James R. Vance) 하사입니다. 왼쪽 팔에 두른 흰 바탕의 붉은 십자가 완장은 이미 굳어버린 검붉은 피로 얼룩져 본래의 색을 잃은 지 오래였습니다.',
    '그때, 방풍포를 거칠게 젖히며 두 대의 들것이 동시에 밀려 들어왔습니다.',
    '왼쪽 들것 위에는 연대 작전참모인 아서 콜린스(Arthur Collins) 중령이 의식을 잃어가며 흉강 내 출혈로 거친 숨을 몰아쉬고 있었습니다. 그의 옆구리 서류 가방에는 사단 전체 3,000여 명의 철수 경로와 암호화된 반격 계획서가 피에 젖은 채 들어있었습니다. 동행한 참모장교가 당신의 멱살을 잡듯 울부짖었습니다: "위생병! 이분을 지금 당장 개흉 수술하지 않으면 5분도 못 버텨! 중령님이 돌아가시면 우리 연대 3천 명은 눈 덮인 숲에서 독 안에 든 쥐 꼴이 된다고!"',
    '그러나 오른쪽 바닥에는 이제 갓 징집된 열여덟, 열아홉 살의 앳된 사병 세 명—토마스 일병, 밀러 이등병, 잭슨 이등병이 박격포 파편에 사지가 찢긴 채 나뒹굴고 있었습니다. 토마스의 대퇴동맥에서는 붉은 피가 분수처럼 솟구치고 있었고, 밀러는 터져 나온 복부를 부여잡은 채 어머니를 부르며 경련하고 있었습니다. 세 명 모두 지금 즉시 지혈대와 응급 처치를 하지 않는다면, 몇 분 내로 차례로 과다출혈 쇼크로 숨을 거둘 것입니다.',
    '야전 텐트에 남은 지혈 기구와 수술용 혈장은 단 한 조뿐. 군의관 닥터 홀리데이는 떨리는 메스를 든 채 창백한 얼굴로 당신을 응시합니다: "밴스 하사... 어느 쪽에 먼저 손을 대야 하나? 한쪽을 택하면, 다른 쪽은 반드시 죽는다."'
  ],
  quote: {
    speaker: '연대 참모장교의 비명',
    text: '"한 사람의 생명이 아니야! 사단 전체의 목숨이 중령님의 머릿속에 들어있다고!"'
  },
  choices: [
    {
      id: 1,
      text: '콜린스 중령의 개흉 수술에 모든 의료진과 혈장을 집중한다.',
      shortLabel: '콜린스 중령 우선 치료 (공리주의)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: -5 },
      protagonistThought: '전쟁의 냉혹한 산술이다. 중령이 살아야 3,000명의 아군이 살 수 있다. 세 어린 병사의 죽음은 비극이지만, 전선의 괴멸보다는 작다.',
      lessonTaught: '다수의 이익과 전략을 위해 소수를 버리는 계산은 수치상 성공을 낳을지언정, 인간을 소모품으로 전락시키는 죄책감의 굴레를 남긴다.'
    },
    {
      id: 2,
      text: '계급과 전략적 가치를 배제하고, 즉각 처치가 시급한 세 명의 어린 병사들에게 매달린다.',
      shortLabel: '세 사병 우선 지혈 (의무론)',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 5 },
      protagonistThought: '생명에 등급표는 없다. 위생병의 눈앞에서 피를 뿜는 아이들을 두고, 전략적 가치를 따져 사람을 선별하는 것은 의학이 아니라 도살이다.',
      lessonTaught: '개별 생명의 존엄을 절대적으로 지키려는 원칙주의는 숭고하나, 때로는 더 큰 조직과 전선의 연쇄 파멸이라는 거대한 대가를 요구한다.'
    },
    {
      id: 3,
      text: '군의관에게 중령의 압박 지혈을 맡기고, 홀로 세 사병의 동맥에 급속 지혈대를 묶으며 양쪽 모두를 살리려 필사적으로 분투한다.',
      shortLabel: '절망적인 한계 극복 시도 (절충)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '어느 한쪽을 버릴 수는 없다. 인간으로서 할 수 있는 모든 한계를 시험해 보겠다. 비록 둘 다 잃을 위험이 있더라도.',
      lessonTaught: '결단의 순간에 한계를 인정하지 못하고 모두를 건지려 우유부단하게 분산된 욕심은, 결국 아무도 온전히 구하지 못하는 최악의 결과를 낳는다.'
    }
  ]
};

export function getScenario1Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'SCENARIO_1_RESULT',
      title: '차가운 저울의 대가',
      paragraphs: [
        '당신은 메스와 남은 혈장 팩을 쥐고 콜린스 중령의 가슴팍으로 뛰어들었습니다. 갈비뼈를 벌리고 찢겨진 흉막 동맥을 지혈 클램프로 틀어막는 처절한 수술 끝에, 중령의 맥박이 희미하게 되살아났습니다.',
        '그러나 뒤편 흙바닥에서는 소리 없는 비극이 끝을 맺고 있었습니다. 토마스 일병의 대퇴부에서는 더 이상 피가 솟구치지 않았습니다. 이미 흘릴 피가 바닥났기 때문이었습니다. 잭슨과 밀러 역시 차가운 눈바닥 위에서 경련을 멈추고 창백한 백랍 인형처럼 굳어 있었습니다.',
        '콜린스 중령은 살아남았습니다. 다음 날 아침, 그가 쥐고 있던 작전 지도는 사단 1개 연대가 포위망을 뚫고 안전지대로 퇴각하는 데 결정적 역할을 해냈습니다. 당신은 수천 명을 구한 결정을 내렸지만, 천막 바닥에 남겨진 세 청년의 싸늘한 눈동자는 지워지지 않는 낙인이 되었습니다.'
      ],
      npcReactions: [
        '사단 참모본부: 작전 지도를 지켜낸 밴스 하사의 결단을 "전술적 냉철함"이라며 높이 평가함.',
        '소대원들: 동료 사병들을 버리고 장교를 택했다는 사실에 씁쓸한 거리감을 드러냄.'
      ],
      lessonMessage: '교훈: "다수의 생존을 위한 공리주의적 선택은 승리를 가져올 수 있으나, 희생된 개인의 피에 대한 도덕적 면죄부를 주지는 않는다."',
      nextScenarioId: 'SCENARIO_2_CHURCH'
    };
  } else if (choiceId === 2) {
    return {
      id: 'SCENARIO_1_RESULT',
      title: '인간의 존엄, 침묵하는 장교',
      paragraphs: [
        '당신은 장교의 고함 소리를 등 뒤로 밀어내며 세 사병의 곁으로 무릎을 꿇었습니다. 맨손으로 뼈와 근육 사이를 헤집으며 출혈 혈관을 클립으로 집고, 지혈대를 감았습니다. 10분간의 혈투 끝에 기적적으로 세 사병의 호흡이 잦아들며 안정권으로 접어들었습니다.',
        '하지만 반대편 들것에서 컥컥거리던 콜린스 중령의 가슴이 끝내 멎었습니다. 군의관 홀리데이는 고개를 숙인 채 그의 눈을 감겨주었습니다. 중령의 손아귀에서 떨어진 작전 가방 위로 핏물이 흥건히 번져나갔습니다.',
        '중령의 사망으로 퇴각 작전은 혼선에 빠졌고, 아군은 후퇴 과정에서 큰 피해를 입었습니다. 그러나 살아남은 세 어린 사병은 당신의 옷자락을 쥐고 눈물을 흘렸습니다: "고맙습니다, 위생병님..."'
      ],
      npcReactions: [
        '사단 감찰부: 작전참모를 살리지 못한 경위에 대해 엄중한 감찰 기록을 남김.',
        '소대원들: 사병을 차별하지 않고 목숨을 걸고 지켜준 밴스 하사에게 절대적인 신뢰를 보냄.'
      ],
      lessonMessage: '교훈: "개별 생명의 존엄을 지키는 숭고한 원칙주의는, 전체 구조가 무너지는 현실적 참사 앞에서는 무거운 책임을 짊어져야 한다."',
      nextScenarioId: 'SCENARIO_2_CHURCH'
    };
  } else {
    return {
      id: 'SCENARIO_1_RESULT',
      title: '불가능한 균형의 균열',
      paragraphs: [
        '당신은 신이 되고 싶었는지도 모릅니다. 양쪽을 번갈아 뛰며 지혈대를 묶고 흉곽을 압박했습니다. 그러나 전쟁의 신은 교만한 인간의 자비를 비웃었습니다.',
        '지혈대를 완전히 조이지 못한 채 군의관을 도우러 달려간 3분 사이, 토마스와 잭슨은 과다출혈로 숨을 거두었습니다. 중령 역시 너무 늦게 봉합된 탓에 저혈량성 쇼크로 심장이 멈추고 말았습니다.',
        '건져낸 것은 겨우 복부 출혈을 막은 밀러 이등병, 단 한 명뿐이었습니다. 군의관은 피투성이가 된 고무장갑을 벗으며 고개를 저었습니다: "우리는 둘 다 구하려다 셋을 잃었어."'
      ],
      npcReactions: [
        '살아남은 밀러 이등병: 친구들의 시신 옆에서 홀로 살아남았다는 죄책감에 오열함.'
      ],
      lessonMessage: '교훈: "둘 다 놓치지 않겠다는 우유부단함과 무리한 절충은, 결국 양쪽 모두를 파멸시키는 가장 치명적인 독이 된다."',
      nextScenarioId: 'SCENARIO_2_CHURCH'
    };
  }
}

export const SCENARIO_2: NarrativeScene = {
  id: 'SCENARIO_2_CHURCH',
  campaignId: 'ARDENNES_1944',
  actTitle: '제2막: 폐허의 성당과 적',
  chapterNumber: '02',
  location: '프랑스 북동부 국경 마을 · 무너진 고딕 성당',
  date: '1944년 12월 21일 14:15',
  image: IMAGES.ardennesAct2,
  imageCaption: '포격으로 천장이 무너진 성당 제단, 눈보라 사이로 스며드는 차가운 겨울빛',
  paragraphs: [
    '눈보라를 피해 들어선 무너진 성당 제단 뒤편에서, 피투성이가 된 17세 독일 무장친위대(SS) 소년병 하인리히가 쓰러져 있었습니다. 복부 파편상으로 장이 노출된 채 은색 십자가를 쥐고 살려달라 애원하고 있었습니다.',
    '그때 소대원 밀러 상병과 라이언 일병이 M1 개런드 소총을 장전하며 뛰쳐나왔습니다: "밴스! 비켜서! 어제 말메디에서 우리 전우들을 학살한 친위대 놈들이야! 이 살인마 자식 머리통을 날려버리겠어!"',
    '밀러 상병의 총구가 소년병의 이마를 향하고, 적에 대한 전우들의 정당한 증오와 히포크라테스 선서가 충돌합니다.'
  ],
  quote: {
    speaker: '분노에 찬 밀러 상병',
    text: '"밴스, 잊었어? 저 놈들은 괴물이야! 저 놈을 살려두면 내일 또 우리 등을 쏠 거라고!"'
  },
  choices: [
    {
      id: 1,
      text: '적십자 완장을 앞세워 전우들의 총구를 가로막고, 독일 소년병을 정성껏 치료한다.',
      shortLabel: '독일 소년병 치료 (히포크라테스 선서)',
      moralCategory: 'universal',
      scoreImpact: { utilitarianVsDeontological: -5, universalVsTribal: 10, mercyVsSanctity: 5, squadTrust: -10 },
      protagonistThought: '무장을 해제한 환자는 적이 아니다. 고통받는 한 명의 인간일 뿐이다. 전우들의 증오를 사더라도 서약을 지킨다.',
      lessonTaught: '적에게 베푼 보편적 인류애는 인간성의 증거이지만, 고통받은 형제 전우들에게는 씻을 수 없는 배신으로 각인된다.'
    },
    {
      id: 2,
      text: '고개를 돌려 물러선다. 전우들의 슬픔과 전장의 현실을 인정하며 독일군 병사를 방치한다.',
      shortLabel: '방치 및 묵인 (전우애와 부족주의)',
      moralCategory: 'tribal',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: -10, mercyVsSanctity: -5, squadTrust: 10 },
      protagonistThought: '죽은 전우들의 피가 아직 식지 않았다. 전장에선 같은 편의 유대가 먼저다. 적군을 위해 내 형제들과 싸울 수는 없다.',
      lessonTaught: '내 편의 결속과 정서적 공감에 영합하여 적의 비명을 외면하는 순간, 치료자는 전장의 또 다른 방조범이 된다.'
    },
    {
      id: 3,
      text: '밀러의 총구를 내리며 설득한다: "무기를 뺏고 최소한의 지혈만 한다. 이 자는 후방에 넘길 귀중한 정보원이다."',
      shortLabel: '조건부 지혈 및 포로 후송 (절충과 타협)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '전우들의 분노를 가라앉히면서도 눈앞의 살인을 막아야 한다. 정보원이라는 현실적인 명분을 대어 목숨이라도 붙여놓자.',
      lessonTaught: '명분과 타협으로 피 흘림을 피할 수 있지만, 생명을 순수한 인간이 아닌 정보 도구로 바라보게 만드는 냉소를 남긴다.'
    }
  ]
};

export function getScenario2Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'SCENARIO_2_RESULT',
      title: '적십자의 무게, 갈라진 시선',
      paragraphs: [
        '당신은 밀러의 총열을 맨손으로 밀쳐내며 단호하게 소리쳤습니다: "이 자는 비무장 환자다! 제네바 협약을 지키지 않는다면 우린 저들과 무엇이 다른가?" 밀러는 침을 뱉으며 등을 돌렸습니다.',
        '당신은 묵묵히 소년병의 복벽을 꿰매었습니다. 소년병 하인리히는 눈물을 흘리며 당신의 손등에 입을 맞추었습니다. 소년은 살아남았지만, 그날 이후 분대원들은 당신을 투명인간 취급하기 시작했습니다.'
      ],
      npcReactions: [
        '밀러 상병: 당신에 대한 깊은 배신감과 적개심을 품음.',
        '독일 소년 하인리히: 당신을 신의 사자로 기억하며 눈물로 감사함.'
      ],
      lessonMessage: '교훈: "적에게도 자비를 베푸는 보편적 인도주의는 고결하지만, 그 대가로 공동체의 신뢰와 온기를 완전히 잃을 각오를 해야 한다."',
      nextScenarioId: 'SCENARIO_3_BUNKER'
    };
  } else if (choiceId === 2) {
    return {
      id: 'SCENARIO_2_RESULT',
      title: '돌아선 등, 차가운 눈밭',
      paragraphs: [
        '당신은 구급낭을 닫고 한 걸음 물러섰습니다. 독일 소년병의 눈동자에 비친 희망이 절망으로 바뀌었습니다. 성당 문을 닫고 걸어 나오는 등 뒤로, 소년이 어머니를 부르는 마지막 신음이 눈보라 속으로 흩어졌습니다.',
        '분대원들은 당신의 등을 두드리며 동료애를 다졌지만, 당신의 손목에 감긴 적십자 완장은 불붙은 쇠사슬처럼 살갗을 죄어왔습니다.'
      ],
      npcReactions: [
        '밀러 상병 및 소대원: 당신이 전우들의 분노를 헤아려주었다며 동료애를 다짐.'
      ],
      lessonMessage: '교훈: "형제들의 분노와 부족적 유대에 순응하여 눈앞의 약자를 외면하면, 내면의 윤리적 척추는 소리 없이 부러진다."',
      nextScenarioId: 'SCENARIO_3_BUNKER'
    };
  } else {
    return {
      id: 'SCENARIO_2_RESULT',
      title: '얼어붙은 타협, 정보라는 이름의 자비',
      paragraphs: [
        '"밀러, 저 놈이 알고 있는 포병 좌표가 우리 중대 100명을 살릴 수 있어!" 당신은 전술적 실리를 내세워 총구를 내리게 했습니다.',
        '진통제도 마취도 없이 거칠게 피만 멎게 한 뒤 소년병을 헌병대에 넘겼습니다. 살인을 막았고 전우들과의 충돌도 피했지만, "인간을 구한 것이 아니라 심문 도구를 보존했다"는 씁쓸함이 가슴을 짓눌렀습니다.'
      ],
      npcReactions: [
        '소대원들: 전술적 이점을 고려한 합리적인 처사라며 수긍함.'
      ],
      lessonMessage: '교훈: "인도주의를 공리적 실리로 포장하는 타협은 갈등을 봉합하지만, 생명의 고유한 가치를 도구로 전락시킨다."',
      nextScenarioId: 'SCENARIO_3_BUNKER'
    };
  }
}

export const SCENARIO_3: NarrativeScene = {
  id: 'SCENARIO_3_BUNKER',
  campaignId: 'ARDENNES_1944',
  actTitle: '제3막: 화염 속의 전우와 마지막 자비',
  chapterNumber: '03',
  location: '벨기에 아르덴 숲 서부 참호선 · 붕괴된 통나무 벙커',
  date: '1944년 12월 24일 23:45 (성탄 전야)',
  image: IMAGES.ardennesAct3,
  imageCaption: '혹한의 전선에서 피와 재로 물든 군번줄과 모르핀 시렛',
  paragraphs: [
    '성탄 전야의 포격으로 벙커가 무너져 내리며 화염에 휩싸였습니다. 그 불길 속에는 고향 친구이자 가장 소중한 전우인 데이빗 밀러 하사가 수 톤의 불타는 들보에 하반신이 짓눌려 있었습니다.',
    '화염은 이미 그의 다리를 집어삼키고 있었습니다. 어떤 구조도 불가능했습니다. 불길이 그의 얼굴을 덮치기까지 남은 시간은 2분. 데이빗은 피투성이 손으로 당신을 붙잡았습니다.',
    '"제임스... 부탁이야... 불타 죽는 건 못 견디겠어... 네 가방에 모르핀 있잖아... 전부 찔러줘... 내 숨을 끊어줘... 친구잖아...!"',
    '치사량의 모르핀 투여는 명백한 안락사(살인)입니다. 그러나 거절한다면 가장 사랑하는 벗은 산 채로 타오르는 생지옥 속에서 타죽어야 합니다.'
  ],
  quote: {
    speaker: '화염 속 데이빗의 애원',
    text: '"제임스... 널 저주하지 않을게... 제발 날 편하게 해줘... 부탁이야...!"'
  },
  choices: [
    {
      id: 1,
      text: '모르핀 세 개를 모두 그의 목에 주사하여, 고통 없는 죽음(자비로운 안락사)을 안긴다.',
      shortLabel: '치사량 모르핀 투여 (존엄사와 자율성)',
      moralCategory: 'autonomy',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: 5, mercyVsSanctity: 10, squadTrust: 5 },
      protagonistThought: '규율과 율법이 무슨 소용인가. 불타는 지옥에서 벗어나길 원하는 친구의 마지막 절규다. 살인자의 짐은 내가 진다.',
      lessonTaught: '극심한 고통 앞에서의 자비로운 결단은 가장 인간적인 사랑일 수 있지만, 생명을 직접 거두었다는 죄의식은 평생 영혼을 태운다.'
    },
    {
      id: 2,
      text: '거절한다: "안 돼, 데이빗! 난 네 숨을 끊을 수 없어!" 손이 타들어 가더라도 끝까지 잔해를 파헤치며 가망 없는 구조를 시도한다.',
      shortLabel: '안락사 거절 및 필사적 구조 시도 (생명의 신성함)',
      moralCategory: 'sanctity',
      scoreImpact: { utilitarianVsDeontological: -5, universalVsTribal: 0, mercyVsSanctity: -10, squadTrust: -5 },
      protagonistThought: '위생병의 손으로 친구의 숨을 끊을 수는 없다. 어떤 상황에서도 생명을 포기하지 않는 것이 나의 맹세다.',
      lessonTaught: '규율과 교리에 집착한 도덕적 결벽은, 때로 고통받는 타인에게 지옥보다 더 잔혹한 고문과 저주를 강요하는 결과를 낳는다.'
    },
    {
      id: 3,
      text: '모르핀 1회분만 투여해 통증을 완화하고, 친구의 눈을 가린 채 마지막 순간까지 손을 꼭 잡고 기도를 올린다.',
      shortLabel: '통증 완화와 임종 동반 (고통의 분담과 타협)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '살인을 저지를 용기도, 친구를 외면할 비정함도 없다. 고통을 조금이라도 덜어주고 홀로 죽어가지 않도록 곁을 지키겠다.',
      lessonTaught: '완전한 구원도 완전한 결단도 내리지 못하는 어정쩡한 연민은, 비극의 현장에서 무력한 슬픔만을 바치게 만든다.'
    }
  ]
};

export function getScenario3Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'SCENARIO_3_RESULT',
      title: '마지막 침묵, 그리고 구원',
      paragraphs: [
        '당신은 세 개의 모르핀 바늘을 데이빗의 목 혈관에 연거푸 꽂았습니다. 치사량의 약물이 돌자 데이빗의 뒤틀렸던 얼굴이 평온하게 이완되며 미소를 지었습니다: "고마워... 제임스..."',
        '불길이 가슴을 덮치기 직전, 그의 심장은 이미 멎어 있었습니다. 당신은 친구의 마지막 존엄을 지켜주었지만, 살인의 무게를 영혼에 새겼습니다.'
      ],
      npcReactions: [
        '소대원들: 친구의 처참한 비명을 멈춰준 당신의 고통스러운 결단에 숙연함을 금치 못함.'
      ],
      lessonMessage: '교훈: "존엄한 안식을 주는 자비는 친구를 구원하지만, 그 대가로 행위자는 평생 자신이 살인자가 아닌가를 되물어야 한다."',
      nextScenarioId: 'SCENARIO_4_REFLECT'
    };
  } else if (choiceId === 2) {
    return {
      id: 'SCENARIO_3_RESULT',
      title: '타오르는 화염, 끝나지 않는 비명',
      paragraphs: [
        '당신은 거절하고 불붙은 들보를 맨손으로 쥐어뜯었습니다. 그러나 불길은 그의 가슴으로 옮겨붙었고, 데이빗은 3분간 처절하게 울부짖었습니다: "제임스! 왜 날 이렇게 둬! 으아악! 제발 죽여줘!"',
        '친구가 남긴 저주 섞인 마지막 비명은 평생 당신의 고막에서 멎지 않는 지옥의 환청이 되었습니다.'
      ],
      npcReactions: [
        '구조 대원들: 끝까지 친구를 구하려다 화상을 입은 당신을 보며 침묵함.'
      ],
      lessonMessage: '교훈: "살인하지 않는다는 자기 자신의 순결함을 지키려다, 사랑하는 이를 가장 끔찍한 생지옥에 방치하는 독선이 될 수 있다."',
      nextScenarioId: 'SCENARIO_4_REFLECT'
    };
  } else {
    return {
      id: 'SCENARIO_3_RESULT',
      title: '재 속의 기도, 맞잡은 온기',
      paragraphs: [
        '당신은 1회분의 모르핀으로 고통을 덜어주고, 젖은 외투로 그의 눈을 덮은 뒤 타들어가는 손을 꼭 쥐었습니다. 데이빗은 당신의 손을 쥐어짜며 마지막 숨을 거두었습니다.',
        '완전한 구원도 결단도 내리지 못했지만, 당신은 친구가 홀로 어둠 속에 버려져 죽지 않도록 끝까지 곁을 지켰습니다.'
      ],
      npcReactions: [
        '데이빗: 손의 온기 속에서 임종.'
      ],
      lessonMessage: '교훈: "상황을 근본적으로 바꾸지 못할 때 인간이 할 수 있는 최선은, 그 고통의 한복판에서 도망치지 않고 함께 온기를 나누는 것이다."',
      nextScenarioId: 'SCENARIO_4_REFLECT'
    };
  }
}

export const SCENARIO_4: NarrativeScene = {
  id: 'SCENARIO_4_REFLECT',
  campaignId: 'ARDENNES_1944',
  actTitle: '제4막: 아르덴의 여명과 심문',
  chapterNumber: '04',
  location: '벨기에 바스토뉴 근교 · 미 육군 사단 본부 의무감실',
  date: '1945년 1월 3일 09:00',
  image: IMAGES.ardennesAct4,
  imageCaption: '눈 덮인 아르덴 숲 전선 도로, 십자가 묘비 앞을 지나가는 후송 행렬',
  paragraphs: [
    '성탄절의 포위망이 풀리고 연합군의 반격이 시작되었습니다. 눈 덮인 숲 위에는 수천 구의 시신이 얼어붙어 있었습니다.',
    '사단 의무감 해리스 대령은 당신의 핏자국 밴 의무 일지를 내려다보며 묻습니다: "트리아지에서의 결단, 폐허 성당의 적군 대처, 벙커에서의 일까지... 자네의 선택은 단순한 치료를 넘어선 도덕적 시험이었네. 자네는 자신의 선택을 후회하는가?"'
  ],
  quote: {
    speaker: '사단 의무감 해리스 대령',
    text: '"전쟁은 인간을 짐승으로 만들지. 하지만 자네의 그 손은... 과연 무엇을 남겼는가?"'
  },
  choices: [
    {
      id: 1,
      text: '"어떤 경우에도 원칙과 인간 존엄의 무게를 의심하지 않았습니다. 다시 돌아가도 같은 선택을 할 것입니다."',
      shortLabel: '원칙과 신념의 확인 (의무론적 성찰)',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -5, universalVsTribal: 5, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '비록 그 결과로 비난과 상처를 받았을지라도, 생명을 도구로 보지 않았던 나의 신념은 떳떳하다.',
      lessonTaught: '흔들리지 않는 신념은 내면의 존엄을 지켜주지만, 세상과의 타협 없는 단절을 받아들여야 한다.'
    },
    {
      id: 2,
      text: '"전쟁이라는 거대한 비극 속에서, 단 한 명이라도 더 많은 생존과 아군의 안전을 위해 현실적인 결단을 내렸을 뿐입니다."',
      shortLabel: '현실과 결과의 옹호 (공리주의적 성찰)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: -5, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '순결한 이상주의는 전장에서 아무도 구하지 못한다. 나는 결과로써 생명을 지탱하려 했다.',
      lessonTaught: '결과를 중시하는 현실주의는 더 많은 생명을 살리지만, 마음의 메마름을 영원한 흉터로 남긴다.'
    },
    {
      id: 3,
      text: '"정답은 없었습니다. 매 순간 피눈물을 흘리며 내린 선택들이었을 뿐... 저는 그저 평생 속죄하며 살아야 할 한 명의 죄인입니다."',
      shortLabel: '한계와 비극의 고백 (실존적 고뇌)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 5, squadTrust: 0 },
      protagonistThought: '어떤 철학도 그 처절했던 비명과 핏물을 정당화할 수 없다. 나는 그 비극을 가슴에 안고 살아갈 뿐이다.',
      lessonTaught: '정답이 없는 전쟁에서 가장 정직한 자세는, 자신의 한계와 죄책감을 부정하지 않고 겸허히 짊어지는 것이다.'
    }
  ]
};

// ==========================================
// CAMPAIGN 2: OKINAWA 1945 (오키나와의 동굴)
// ==========================================
export const OKINAWA_1: NarrativeScene = {
  id: 'OKINAWA_1_CAVE',
  campaignId: 'OKINAWA_1945',
  actTitle: '제1막: 어둠 속의 울음소리와 침묵',
  chapterNumber: '01',
  location: '일본 오키나와 슈리 능선 지하 · 천연 석회암 종유동',
  date: '1945년 5월 14일 21:00',
  image: IMAGES.okinawaAct1,
  imageCaption: '습기와 곰팡이 냄새 가득한 암흑의 동굴, 기름등 불빛에 드러난 은신처',
  paragraphs: [
    '바깥은 열대성 폭우와 미 해군 함포 사격으로 진흙탕이 되어 있었습니다. 지하 10미터의 축축한 동굴에는 7명의 미군 부상병과 12명의 오키나와 현지 주민들이 숨죽이고 있었습니다.',
    '그때 동굴 밖에서 화염방사기를 든 일본군 수색 분대의 군홧소리가 들려왔습니다. 발각되면 19명 전원이 불타 생매장당합니다.',
    '바로 그 순간, 오키나와인 어머니 품의 생후 8개월 아기가 천둥에 놀라 자지러지게 울기 시작했습니다. 분대원 캘러핸 일병이 단검을 빼 들며 속삭였습니다: "위생병! 저 애 입을 틀어막아! 숨을 못 쉬게 눌러서라도 울음을 멎게 하라고! 열아홉 명이 다 죽을 순 없어!"',
    '입과 코를 강하게 막으면 아기는 몇 초 만에 질식사합니다. 그러나 울음을 두면 전원이 몰살당합니다.'
  ],
  quote: {
    speaker: '분대원 캘러핸 일병의 절박한 속삭임',
    text: '"한 놈의 울음 때문에 여기 있는 열아홉 명이 다 화염방사기에 타죽을 수는 없어!"'
  },
  choices: [
    {
      id: 1,
      text: '다수의 생존을 위해 어머니를 제압하고 아기의 입을 강하게 틀어막아 침묵을 강제한다.',
      shortLabel: '침묵 강제 (19명의 생존을 위한 공리주의)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: -5, mercyVsSanctity: -5, squadTrust: 10 },
      protagonistThought: '비극이지만 19명의 목숨이 걸려 있다. 아기의 울음을 멈추지 못하면 모두가 죽는다. 피할 수 없다.',
      lessonTaught: '다수의 생존을 위해 무고한 유아를 질식시키는 결정은 집단을 살릴지언정, 살아남은 인간들을 영원한 악몽에 가둔다.'
    },
    {
      id: 2,
      text: '캘러핸을 밀쳐내고 아기를 보호한다: 자신의 젖은 거즈와 체온으로 조심스럽게 달래며 기적을 바란다.',
      shortLabel: '아기 보호 및 인도주의 (무고한 생명의 불가침성)',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 10, mercyVsSanctity: 5, squadTrust: -10 },
      protagonistThought: '위생병이 갓난아기를 질식시킬 수는 없다. 다수를 구한다는 핑계로 약자를 살해하는 것은 괴물이 되는 길이다.',
      lessonTaught: '순수한 도덕적 용기는 때로 기적을 부르지만, 집단 전체의 생명을 건 무모한 도박이 될 위험을 내포한다.'
    },
    {
      id: 3,
      text: '가방에서 묽은 진정제 소량을 탈지면에 적셔 아기의 잇몸에 바르고, 동굴 깊숙한 구석으로 주민들을 피신시킨다.',
      shortLabel: '의학적 진정과 차단 (위험한 전문적 절충)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '약물의 위험성이 있지만 질식시키는 것보다는 낫다. 의무병의 약품으로 두 파국을 피해 보자.',
      lessonTaught: '전문적 기지는 최악을 면하게 하지만, 예측할 수 없는 부작용 앞에서 또 다른 사투를 치러야 한다.'
    }
  ]
};

export function getOkinawa1Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'OKINAWA_1_RESULT',
      title: '침묵의 대가, 차가운 작은 손',
      paragraphs: [
        '당신은 가제 뭉치로 아기의 입과 코를 강하게 짓눌렀습니다. 일본군 수색대는 눈치채지 못하고 지나갔습니다.',
        '손을 떼었을 때 아기의 숨은 돌아오지 않았습니다. 어머니는 비명조차 지르지 못한 채 피눈물을 흘렸고, 18명의 목숨을 건졌지만 동굴 안은 생지옥보다 어두웠습니다.'
      ],
      npcReactions: ['분대원들: 살았다는 안도감과 동시에 동굴 안에 감도는 끔찍한 죄책감에 짓눌림.'],
      lessonMessage: '교훈: "공리주의적 계산으로 다수를 구했을지라도, 무고한 생명을 짓밟고 얻은 생존은 영혼의 영구적 파멸을 초래한다."',
      nextScenarioId: 'OKINAWA_2_SUPPLY'
    };
  } else if (choiceId === 2) {
    return {
      id: 'OKINAWA_1_RESULT',
      title: '인간의 온기, 기적의 침묵',
      paragraphs: [
        '당신은 칼을 쳐내고 아기를 품에 안아 체온으로 달랬습니다. 다정한 심장 박동에 아기는 기적처럼 울음을 그쳤고, 수색대는 지나갔습니다.',
        '인간으로서의 존엄을 지켜냈습니다. 그러나 캘러핸은 "네 무모한 도박에 우리 목숨이 날아갈 뻔했다"며 이를 갈았습니다.'
      ],
      npcReactions: ['오키나와 주민들: 인간으로서 자신들을 지켜준 위생병에게 깊은 경의를 표함.'],
      lessonMessage: '교훈: "생명의 불가침성을 지키려는 고결함은 아름다우나, 실패했을 때 전원이 몰살될 수 있다는 공포를 감수해야 한다."',
      nextScenarioId: 'OKINAWA_2_SUPPLY'
    };
  } else {
    return {
      id: 'OKINAWA_1_RESULT',
      title: '위태로운 마취, 어둠 속의 혼수',
      paragraphs: [
        '미량의 진정제를 잇몸에 발라 울음을 멈추었지만, 영아에게는 과도한 마취로 심정지 위기가 찾아왔습니다.',
        '당신은 밤새도록 작은 가슴을 압박하며 가까스로 호흡을 되살렸습니다. 아슬아슬한 절충으로 두 파국을 모두 막아냈습니다.'
      ],
      npcReactions: ['분대원들: 지혜롭게 위기를 넘긴 전문성에 감탄함.'],
      lessonMessage: '교훈: "타협과 지혜는 양극단의 파멸을 막아주지만, 항상 살얼음판을 걷는 위태로운 도박 위에 서 있다."',
      nextScenarioId: 'OKINAWA_2_SUPPLY'
    };
  }
}

export const OKINAWA_2: NarrativeScene = {
  id: 'OKINAWA_2_SUPPLY',
  campaignId: 'OKINAWA_1945',
  actTitle: '제2막: 인계철선과 미끼가 된 전우',
  chapterNumber: '02',
  location: '슈리 능선 제3구역 · 진흙탕 참호 앞 폭격 구덩이',
  date: '1945년 5월 18일 11:30',
  image: IMAGES.okinawaAct2,
  imageCaption: '비바람에 무너진 석회암 능선과 녹슨 철조망, 진흙 속에 반쯤 묻힌 전우',
  paragraphs: [
    '포탄 구덩이에 쓰러진 해리스 상병이 피를 토하며 구조를 애원했습니다. 그러나 그의 발목에는 3식 지뢰와 세열 수류탄으로 이어진 정밀한 인계철선(부비트랩)이 감겨 있었고, 능선 너머엔 저격수가 숨어 있었습니다.',
    '분대장 워커 하사는 당신을 붙잡았습니다: "접근하면 지뢰가 터져 너까지 죽어! 저격수 총알받이가 될 뿐이야!"',
    '전우를 구하러 들어가면 팀 전체가 폭사할 위험이 있고, 물러서면 해리스는 10분 내로 기흉으로 질식사합니다.'
  ],
  quote: {
    speaker: '분대장 워커 하사의 경고',
    text: '"저건 구조 대상이 아니라 우리를 몰살시키려는 함정이야! 함정에 발을 들이지 마!"'
  },
  choices: [
    {
      id: 1,
      text: '적십자 헬멧을 벗어 던지고 포복으로 진입해, 목숨을 걸고 인계철선을 해체하며 해리스를 구출한다.',
      shortLabel: '부비트랩 해체 및 전우 구출 (헌신적 구조)',
      moralCategory: 'universal',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 10, mercyVsSanctity: 5, squadTrust: 5 },
      protagonistThought: '함정이라는 걸 안다고 살아있는 전우를 눈앞에서 버릴 수는 없다. 내가 폭사하더라도 의무병으로서 해보겠다.',
      lessonTaught: '전우를 향한 헌신은 숭고한 영웅주의이지만, 적의 냉혹한 전술적 함정에 스스로 머리를 들이미는 파괴적 결과를 낳을 수 있다.'
    },
    {
      id: 2,
      text: '분대장의 명령에 따라 구출을 단념한다: 더 이상의 팀 피해를 막기 위해 엄폐호를 지킨다.',
      shortLabel: '구출 단념 (팀의 안전을 위한 냉정한 회피)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: -10, mercyVsSanctity: -5, squadTrust: 5 },
      protagonistThought: '미끼에 걸려들면 소대 전체가 저격과 폭발에 노출된다. 차가운 이성으로 손실을 최소화해야 한다.',
      lessonTaught: '합리적인 회피는 추가 피해를 막지만, "내가 다쳐도 버려질 것"이라는 불신과 환멸을 동료들의 가슴에 심는다.'
    },
    {
      id: 3,
      text: '철제 와이어와 밧줄을 던져 원거리에서 안전핀을 건드리지 않고 환자만을 끌어당기는 위험한 우회 시도를 감행한다.',
      shortLabel: '원거리 로프 견인 시도 (도박적 절충)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '직접 들어가는 건 자살행위다. 진흙 속에서 로프를 던져 조심스럽게 시도해 보자.',
      lessonTaught: '안전을 도모한 어중간한 기술적 절충은 부분적 부상을 유발하지만, 파국적인 전멸을 피하는 현실적 방책이 된다.'
    }
  ]
};

export function getOkinawa2Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'OKINAWA_2_RESULT',
      title: '흙먼지 속의 절단, 피로 맺은 구출',
      paragraphs: [
        '당신은 포복으로 기어가 떨리는 손으로 인계철선을 잘라냈습니다. 뇌관이 무력화되는 순간 가슴을 뚫고 지나가던 공포는 말로 다할 수 없었습니다.',
        '해리스의 흉강에 바늘을 꽂아 공기를 빼내고 엄폐호로 끌고 들어왔습니다. 그는 살아남았습니다.'
      ],
      npcReactions: ['해리스 상병: "당신이 내 목숨의 은인"이라 평생 잊지 않겠다고 맹세함.'],
      lessonMessage: '교훈: "불가능해 보이는 희생과 용기가 때로 기적을 일구지만, 전장에서는 한 끗 차이로 전원 폭사의 잿더미가 될 수 있다."',
      nextScenarioId: 'OKINAWA_3_TRAPPED'
    };
  } else if (choiceId === 2) {
    return {
      id: 'OKINAWA_2_RESULT',
      title: '방치된 비명, 침묵의 진흙탕',
      paragraphs: [
        '당신은 눈물을 삼키며 물러섰습니다. 해리스는 15분 동안 울부짖다 숨을 거두었습니다. 팀 누구도 다치지 않았지만, 엄폐호 안은 시체보다 무거운 침묵이 흘렀습니다.'
      ],
      npcReactions: ['분대원들: 살아남았지만 자신들도 버려질 수 있다는 깊은 불안을 느낌.'],
      lessonMessage: '교훈: "냉정한 손실 계산으로 팀을 보존했으나, 피 흘리는 동료를 버린 기억은 남은 자들의 연대감을 서서히 침식시킨다."',
      nextScenarioId: 'OKINAWA_3_TRAPPED'
    };
  } else {
    return {
      id: 'OKINAWA_2_RESULT',
      title: '폭음과 찰나의 희비',
      paragraphs: [
        '와이어로 환자를 당기던 중 지뢰가 터져 파편이 튀었습니다. 해리스의 다리에 중상이 남았으나 목숨만은 건져냈습니다.'
      ],
      npcReactions: ['소대원들: 기지와 순발력으로 파국을 모면했다며 가슴을 쓸어내림.'],
      lessonMessage: '교훈: "완전한 무결을 포기하고 부분적 피해를 감수하는 도박이, 전장에서는 유일하게 가능한 차악의 구원이 된다."',
      nextScenarioId: 'OKINAWA_3_TRAPPED'
    };
  }
}

export const OKINAWA_3: NarrativeScene = {
  id: 'OKINAWA_3_TRAPPED',
  campaignId: 'OKINAWA_1945',
  actTitle: '제3막: 집단 자결의 암굴과 청산가리',
  chapterNumber: '03',
  location: '슈리 남부 해안 절벽 · 제24야전의료소 지하 동굴',
  date: '1945년 5월 27일 16:00',
  image: IMAGES.okinawaAct3,
  imageCaption: '바다 절벽 아래 어둠에 잠긴 일본군 야전병원 동굴, 쓰러진 민간인들과 앰플 병들',
  paragraphs: [
    '함락 직전의 일본군 야전병원 동굴 제단 앞에서, 일본군 의무대위 사토가 청산가리 주사기를 들고 민간인과 어린 여학생들에게 "귀축 미영에게 능욕당하느니 자결하라"며 독극물을 주입하고 있었습니다.',
    '이미 세 명이 독살당했고, 사토는 열두 살 소년의 팔에 주삿바늘을 꽂으려 하고 있었습니다.',
    '홀로 먼저 진입한 당신은 권총을 쥐고 있습니다. 제네바 협약상 비무장 위생병의 서약을 깨고 의사를 사살할 것인가, 맨몸으로 달려들 것인가?'
  ],
  quote: {
    speaker: '일본군 군의관 사토 대위의 광기',
    text: '"우리에겐 굴욕적인 항복 따윈 없다! 이것이 제국의 성스러운 자비다!"'
  },
  choices: [
    {
      id: 1,
      text: '제네바 협약의 비무장 원칙을 깨고, 권총을 꺼내 사토 대위를 사살하여 아이들을 구한다.',
      shortLabel: '즉각 사살 개입 (무력 살상을 통한 집단 학살 저지)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: 5, mercyVsSanctity: 10, squadTrust: 5 },
      protagonistThought: '눈앞에서 아이들이 독살당하고 있다. 협약이 중요한 게 아니다. 내가 살인자가 되더라도 저 광기를 쏴 죽여야 한다.',
      lessonTaught: '더 큰 학살을 막기 위한 무력 살상은 정의로워 보이지만, 치료자 스스로가 생명을 파괴하는 폭력의 주체가 되는 비극을 남긴다.'
    },
    {
      id: 2,
      text: '총을 쏘지 않고 맨몸으로 뛰어들어 사토 대위의 주사기를 낚아채며 몸싸움으로 제압한다.',
      shortLabel: '비무장 육탄 제압 (서약 준수와 신체적 위험 감수)',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -5, universalVsTribal: 10, mercyVsSanctity: -5, squadTrust: 0 },
      protagonistThought: '위생병은 살인하지 않는다. 총을 쏘는 순간 나 역시 군의관과 같은 살인마가 된다. 내 몸을 던져서 막겠다.',
      lessonTaught: '비폭력의 서약을 지키기 위해 자신의 피와 살을 바치는 행위는 거룩하나, 실패했을 때 무방비 상태로 희생당할 수 있다.'
    },
    {
      id: 3,
      text: '일본어 통역 전단을 던지며 외친다: "미군은 민간인을 학살하지 않는다! 치료와 식량을 보장한다!"며 심리적 설득을 시도한다.',
      shortLabel: '투항 권고와 설득 (비폭력적 대화 시도)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 5, mercyVsSanctity: 0, squadTrust: -5 },
      protagonistThought: '진실을 알려 주민들이 스스로 거부하게 만들어야 한다.',
      lessonTaught: '광기에 사로잡힌 살육 현장에서 말과 설득만을 고집하는 우유부단함은, 즉각적인 희생자를 방치하는 결과를 낳는다.'
    }
  ]
};

export function getOkinawa3Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'OKINAWA_3_RESULT',
      title: '방아쇠를 당긴 손, 거두어진 독극물',
      paragraphs: [
        '탕-! 당신은 콜트 권총을 쏘아 사토 대위를 사살했습니다. 독약 주사기가 깨졌고 열다섯 명의 주민과 소년이 살았습니다. 그러나 생명을 살리겠다고 맹세한 위생병의 손으로 사람을 쏴 죽인 모순이 심장을 짓눌렀습니다.'
      ],
      npcReactions: ['살아남은 아이들과 주민들: 공포 속에서도 목숨을 구해준 당신의 손을 잡고 눈물을 흘림.'],
      lessonMessage: '교훈: "무고한 이들을 지키기 위해 무력을 쥐는 순간, 치료자의 순결한 서약은 영원히 파괴된다."',
      nextScenarioId: 'OKINAWA_4_REFLECT'
    };
  } else if (choiceId === 2) {
    return {
      id: 'OKINAWA_3_RESULT',
      title: '깨진 유리와 찔린 어깨',
      paragraphs: [
        '맨몸으로 덮쳐 주사기를 부러뜨렸으나 바늘이 당신의 어깨를 찔렀습니다. 미량의 독극물로 호흡 곤란을 겪었지만 아이들을 구해냈습니다.'
      ],
      npcReactions: ['구조된 민간인들: 자신들을 위해 총 대신 몸을 던진 위생병을 살아있는 보살로 여김.'],
      lessonMessage: '교훈: "무기를 들지 않고 인간성을 지켜낸 희생은 숭고하나, 평생 지워지지 않는 신체적 영구 손상과 고통을 대가로 지불한다."',
      nextScenarioId: 'OKINAWA_4_REFLECT'
    };
  } else {
    return {
      id: 'OKINAWA_3_RESULT',
      title: '절반의 구원과 통한의 비명',
      paragraphs: [
        '당신의 외침에 일부 주민은 물러섰지만, 사토 대위는 비웃으며 소년의 팔에 주사를 찔렀습니다. 절반은 구했으나 소년은 숨을 거두었습니다.'
      ],
      npcReactions: ['살아남은 주민들: 소년의 죽음에 오열함.'],
      lessonMessage: '교훈: "광기 어린 폭력 앞에서 행동하지 않고 말로만 호소하는 유약함은, 눈앞의 희생을 막지 못하는 무력한 슬픔으로 끝난다."',
      nextScenarioId: 'OKINAWA_4_REFLECT'
    };
  }
}

export const OKINAWA_4: NarrativeScene = {
  id: 'OKINAWA_4_REFLECT',
  campaignId: 'OKINAWA_1945',
  actTitle: '제4막: 태평양의 석양과 심판',
  chapterNumber: '04',
  location: '오키나와 마부니 해안 절벽 · 제7사단 임시 야전병원 막사',
  date: '1945년 6월 22일 (전투 종결 선언일)',
  image: IMAGES.okinawaAct4,
  imageCaption: '마부니 해안 절벽에 붉게 타오르는 석양, 흩어진 야전 의무 장비들',
  paragraphs: [
    '82일간의 혈전이 끝나고 마부니 절벽 아래 바다는 검붉은 핏빛으로 물들어 있었습니다. 군의관 매케이브 중령은 묻습니다: "인간성을 말살하는 이 태평양의 지옥도 속에서, 자네는 과연 스스로의 영혼을 지켜냈다고 생각하나?"'
  ],
  quote: {
    speaker: '사단 군의관 매케이브 중령',
    text: '"전쟁은 규칙을 지키는 자를 비웃지. 하지만 자네의 마음에 남은 것은 무엇인가?"'
  },
  choices: [
    {
      id: 1,
      text: '"어떤 참극 앞에서도 생명을 수단으로 삼지 않으려 발버둥 쳤습니다. 후회는 없습니다."',
      shortLabel: '인도주의적 신념 고수 (의무론)',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -5, universalVsTribal: 5, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '지옥 속에서도 인간이기를 포기하지 않았다. 그것만이 전부였다.',
      lessonTaught: '인간성을 끝까지 포기하지 않은 자는 떳떳하나, 그로 인해 전선에서 치러야 했던 수많은 희생의 무게를 평생 짊어진다.'
    },
    {
      id: 2,
      text: '"한 명이라도 더 많은 생존자를 남기기 위해 필요한 비정을 감수했습니다. 그것이 전장의 현실입니다."',
      shortLabel: '생존을 위한 비정 옹호 (공리주의)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: -5, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '깨끗한 손으로 이길 수 있는 전쟁은 없다. 다수를 살렸다면 죄를 감당하겠다.',
      lessonTaught: '전장의 비정을 합리화할수록 생존율은 높아지지만, 돌아온 평화의 세상에서 평범한 인간으로 살아갈 수 없게 된다.'
    },
    {
      id: 3,
      text: '"영혼은 지켜지지 못했습니다. 우리 모두는 이 동굴들 속에서 무언가 소중한 것을 영원히 잃어버렸습니다."',
      shortLabel: '상처와 상실의 애도 (실존적 비탄)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 5, squadTrust: 0 },
      protagonistThought: '태평양의 어둠 속에서 우리는 모두 부서진 파편일 뿐이다.',
      lessonTaught: '전쟁의 비극 앞에서는 승자도 패자도 없으며, 인간성 자체가 회복 불가능하게 파괴되었음을 솔직히 직시해야 한다.'
    }
  ]
};

// ==========================================
// CAMPAIGN 3: NORMANDY 1944 (보카주의 맹세)
// ==========================================
export const NORMANDY_1: NarrativeScene = {
  id: 'NORMANDY_1_ORPHAN',
  campaignId: 'NORMANDY_1944',
  actTitle: '제1막: 피격된 환자와 발밑의 소총',
  chapterNumber: '01',
  location: '프랑스 노르망디 생로(Saint-Lô) 외곽 · 수풀 울타리(Bocage) 오솔길',
  date: '1944년 7월 11일 15:20',
  image: IMAGES.normandyAct1,
  imageCaption: '키 큰 관목 수풀로 둘러싸인 노르망디 보카주 오솔길, 부서진 돌담과 연기',
  paragraphs: [
    '비무장 위생병 로버트 E. 헤일 일병의 눈앞에서, 부상병을 나르던 들것병이 풍차 탑의 독일 저격수에게 사살당했습니다. 저격수는 부상병 깁슨을 미끼 삼아 위생병인 당신이 접근하기만을 노리고 있었습니다.',
    '전사자의 손가락 옆에 장전된 M1 개런드 소총이 떨어져 있습니다. 지금 소총을 들면 저격수를 단번에 사살할 수 있습니다. 그러나 쏘는 순간 평생 지켜온 비폭력 서약은 깨집니다.'
  ],
  quote: {
    speaker: '피를 토하는 깁슨 병장의 절규',
    text: '"헤일! 저 새끼가 우릴 사냥하고 있어! 총을 들어! 저 새끼를 쏴 죽이라고!"'
  },
  choices: [
    {
      id: 1,
      text: 'M1 개런드 소총을 집어 들고 풍차 탑의 독일 저격수를 조준 사살한다.',
      shortLabel: '소총 발사 및 저격수 사살 (환자 보호를 위한 무력 개입)',
      moralCategory: 'military_duty',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: -5, mercyVsSanctity: 10, squadTrust: 10 },
      protagonistThought: '환자를 사냥하는 살인마 앞에서 비무장 원칙은 무의미하다. 저격수를 죽여 환자들을 살린다.',
      lessonTaught: '환자를 지키기 위해 살상을 택하는 순간, 비무장의 순결성은 무너지며 살상과 치료의 경계가 흐려진다.'
    },
    {
      id: 2,
      text: '총을 만지지 않고 연막 수류탄만을 투척한 뒤, 빗발치는 총탄 속으로 몸을 던져 환자들을 엄폐호로 끌어당긴다.',
      shortLabel: '비무장 원칙 고수 (연막탄과 신체 희생을 통한 구조)',
      moralCategory: 'nonviolence',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 10, mercyVsSanctity: -10, squadTrust: 0 },
      protagonistThought: '어떤 이유로도 살상 무기를 잡지 않겠다. 위생병의 본분을 지키며 구조하겠다.',
      lessonTaught: '비폭력 원칙의 순수한 고수는 위대하지만, 총탄이 빗발치는 전장에서는 자신의 목숨을 담보로 하는 극단적 도박이다.'
    },
    {
      id: 3,
      text: '소총 노리쇠를 후퇴시켜 흙먼지를 튀기는 위협 사격만 가해 저격수의 시야를 교란한 뒤 신속히 후퇴한다.',
      shortLabel: '위협 사격과 퇴각 (살상을 피하는 현실적 절충)',
      moralCategory: 'pragmatism',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 5 },
      protagonistThought: '목숨을 빼앗지 않으면서도 적의 조준을 흔들 수 있다. 시간을 벌자.',
      lessonTaught: '살상을 피하는 현실적 요행수는 위기를 모면하게 하지만, 근본적인 위협을 제거하지 못하는 불안을 남긴다.'
    }
  ]
};

export function getNormandy1Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'NORMANDY_1_RESULT',
      title: '깨어진 맹세, 풍차에서 떨어진 그림자',
      paragraphs: [
        '당신은 소총을 낚아채 풍차의 저격수를 사살했습니다. 깁슨 병장은 구했지만, 화약 냄새가 밴 당신의 손은 더 이상 순결한 치료자의 손이 아니었습니다.'
      ],
      npcReactions: ['소대원들: 전우를 위해 주저 없이 방아쇠를 당긴 헤일 일병에게 무한한 신뢰를 보냄.'],
      lessonMessage: '교훈: "동료를 위해 기꺼이 맹세를 깨고 손을 더럽힐 수 있는 용기 역시, 살인자라는 씻을 수 없는 멍에를 동반한다."',
      nextScenarioId: 'NORMANDY_2_WEAPON'
    };
  } else if (choiceId === 2) {
    return {
      id: 'NORMANDY_1_RESULT',
      title: '연막 속의 사투, 꿰뚫린 다리',
      paragraphs: [
        '연막탄을 던지고 몸을 날려 깁슨을 끌어냈습니다. 허벅지에 관통상을 입었으나 끝까지 손에 쥔 것은 소총이 아닌 붕대였습니다.'
      ],
      npcReactions: ['연대 군목: 신념을 저버리지 않고 자신을 희생해 전우를 구한 숭고한 용기라 축복함.'],
      lessonMessage: '교훈: "살상 무기를 거부하는 절대적 신념은 피 흘리는 상처를 낳지만, 인간의 가장 거룩한 불씨를 전장에 지켜낸다."',
      nextScenarioId: 'NORMANDY_2_WEAPON'
    };
  } else {
    return {
      id: 'NORMANDY_1_RESULT',
      title: '흔들린 조준, 찰나의 탈출',
      paragraphs: [
        '상공에 위협 사격을 가해 저격수를 움츠러들게 한 뒤 도랑으로 탈출했습니다. 아슬아슬하게 살인을 피했습니다.'
      ],
      npcReactions: ['깁슨 병장: 영리한 임기응변 덕분에 살아남았다고 감사해함.'],
      lessonMessage: '교훈: "원칙과 무력 사이의 영리한 임기응변은 위기를 넘기지만, 결정적인 시험대에서 또다시 흔들릴 수밖에 없다."',
      nextScenarioId: 'NORMANDY_2_WEAPON'
    };
  }
}

export const NORMANDY_2: NarrativeScene = {
  id: 'NORMANDY_2_WEAPON',
  campaignId: 'NORMANDY_1944',
  actTitle: '제2막: 농가의 수술대와 프랑스 소녀',
  chapterNumber: '02',
  location: '생로 근교 · 버려진 프랑스 석조 농가 헛간',
  date: '1944년 7월 14일 18:40',
  image: IMAGES.normandyAct2,
  imageCaption: '무너진 돌담 농가의 헛간 식탁 위에 차려진 응급 수술대, 촛불 아래 핏자국',
  paragraphs: [
    '헛간 구호소에 1명분의 수술 도구와 혈액 팩만 남은 상황. 내일 돌파 작전을 이끌어야 할 흉막 파열의 벤슨 분대장과, 폭격 파편에 복부가 찢겨 생명이 꺼져가는 여덟 살 프랑스 소녀 클레어가 동시에 누워 있습니다.',
    '분대장은 "분대장이 살아야 내일 분대원 12명이 개죽음을 안 당한다"고 외치고, 프랑스 노인은 무릎을 꿇고 손녀를 살려달라 웁니다.'
  ],
  quote: {
    speaker: '프랑스 농부 노인의 눈물',
    text: '"이 아이는 이제 여덟 살입니다... 전쟁이 뭔지도 모르는 아이란 말입니다...!"'
  },
  choices: [
    {
      id: 1,
      text: '프랑스 소녀 클레어의 긴급 수술을 먼저 집도한다.',
      shortLabel: '어린 소녀 우선 수술 (가장 취약한 민간인 생명 우선)',
      moralCategory: 'humanitarian',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 10, mercyVsSanctity: 5, squadTrust: -10 },
      protagonistThought: '전쟁에 아무 책임도 없는 어린아이다. 군사 작전보다 무고한 생명을 구하는 것이 가장 근원적인 도리다.',
      lessonTaught: '가장 연약한 민간인 아이를 구하는 인간애는 지극히 옳지만, 전선 지휘관의 상실로 내일 아군 형제들이 치러야 할 희생은 커진다.'
    },
    {
      id: 2,
      text: '벤슨 하사의 가슴 봉합 수술을 먼저 집도한다.',
      shortLabel: '분대장 우선 수술 (군사적 임무와 분대 생존 우선)',
      moralCategory: 'military_duty',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: -10, mercyVsSanctity: -5, squadTrust: 10 },
      protagonistThought: '군대의 위생병이다. 분대장이 죽으면 내일 12명이 도륙당한다. 아군의 생존이 우선이다.',
      lessonTaught: '군사적 승리와 전우들의 생존을 위한 차가운 결단은, 무고한 아이를 희생양으로 삼았다는 죄책감을 영원히 새긴다.'
    },
    {
      id: 3,
      text: '마취 없이 소녀의 동맥을 급속 겸자로 집고, 벤슨 하사의 흉강 튜브를 동시 삽관하며 사력을 다해 병행 처치한다.',
      shortLabel: '무마취 병행 지혈 시도 (위험천만한 한계 도전)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '누구도 포기할 수 없다. 둘 다 붙잡아 놓겠다.',
      lessonTaught: '양쪽 모두를 구하려는 필사적인 고투는 기적을 낳을 수도 있지만, 둘 다 온전하지 못한 영구 장애를 남길 수 있다.'
    }
  ]
};

export function getNormandy2Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'NORMANDY_2_RESULT',
      title: '되살아난 작은 숨소리, 멎어버린 지휘관',
      paragraphs: [
        '당신은 소녀를 수술해 살려냈지만, 벤슨 하사는 숨을 거두었습니다. 분대원들은 "네가 우리 분대장을 죽였다"며 분노했습니다.'
      ],
      npcReactions: ['프랑스 주민들: 진정한 해방자이자 구원자로 기억함.'],
      lessonMessage: '교훈: "가장 약한 자를 지키는 숭고한 결단은, 아군 전우들에게는 뼈아픈 원망과 작전 실패의 흉터로 돌아온다."',
      nextScenarioId: 'NORMANDY_3_TRIAGE_CIVILIAN'
    };
  } else if (choiceId === 2) {
    return {
      id: 'NORMANDY_2_RESULT',
      title: '살아난 분대장, 식어버린 아이',
      paragraphs: [
        '벤슨 하사는 살아서 다음 날 벙커를 돌파했습니다. 그러나 헛간 바닥에 남겨진 소녀의 작은 신발 한 짝은 평생 당신의 심장을 도려냈습니다.'
      ],
      npcReactions: ['벤슨 하사와 분대원들: 분대를 구해준 위생병의 결단에 진심으로 감사함.'],
      lessonMessage: '교훈: "전쟁의 승리를 위해 약자를 희생시킨 합리화는, 평화가 찾아온 뒤에도 결코 씻기지 않는 피눈물이 된다."',
      nextScenarioId: 'NORMANDY_3_TRIAGE_CIVILIAN'
    };
  } else {
    return {
      id: 'NORMANDY_2_RESULT',
      title: '절반의 기적, 처절한 비명 속 수술',
      paragraphs: [
        '무마취 사투 끝에 두 사람 모두 목숨은 건졌지만, 소녀에겐 신경 손상이 남았고 하사 역시 후송되었습니다.'
      ],
      npcReactions: ['양측 가족 및 부대원: 불가능에 가까운 상황에서 둘 다 살려낸 헌신에 숙연해짐.'],
      lessonMessage: '교훈: "완벽한 정답이 없는 상황에서 내린 처절한 타협은, 비록 상처를 남길지언정 누구도 포기하지 않았다는 유일한 증거다."',
      nextScenarioId: 'NORMANDY_3_TRIAGE_CIVILIAN'
    };
  }
}

export const NORMANDY_3: NarrativeScene = {
  id: 'NORMANDY_3_TRIAGE_CIVILIAN',
  campaignId: 'NORMANDY_1944',
  actTitle: '제3막: 밀고자의 핏물과 레지스탕스의 분노',
  chapterNumber: '03',
  location: '노르망디 생로 마을 광장 · 반파된 시청 건물 앞',
  date: '1944년 7월 18일 11:00',
  image: IMAGES.normandyAct3,
  imageCaption: '연합군 진주 후 환호와 폭력이 교차하는 프랑스 마을 광장, 피투성이가 된 부역 혐의자',
  paragraphs: [
    '생로 광장에서 레지스탕스들이 독일군 통역관으로 일하며 동포를 밀고했다는 혐의를 받는 프랑스 청년 장을 쇠파이프로 린치하고 있었습니다.',
    '두개골이 함몰된 장은 지금 감압술을 받지 못하면 5분 내로 사망합니다. 장은 "강제로 번역했을 뿐이다. 재판을 받게 해달라"고 애원하고, 레지스탕스는 "우리 동포 30명을 죽인 배신자다. 상관하지 마라!"고 위협합니다.'
  ],
  quote: {
    speaker: '레지스탕스 지휘관 앙리의 고함',
    text: '"배신자에게 인권 따윈 없다! 우리의 피 흘린 형제들을 모욕하지 마라!"'
  },
  choices: [
    {
      id: 1,
      text: '적십자 깃발을 펼쳐 들고 군중을 가로막으며 청년을 들것에 실어 후송한다.',
      shortLabel: '부역 혐의자 보호 및 치료 (법치와 보편적 인권)',
      moralCategory: 'universal',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 10, mercyVsSanctity: 5, squadTrust: -5 },
      protagonistThought: '사적 린치는 정의가 아니다. 죄가 있다면 법정에서 밝혀져야 한다. 방치할 수 없다.',
      lessonTaught: '군중의 분노에 맞서 법치와 인권을 수호하는 것은 문명의 본질이나, 피해자들의 깊은 상처를 무시했다는 적대를 사게 된다.'
    },
    {
      id: 2,
      text: '물러선다: 수년간 나치 치하에서 고통받은 현지인들의 분노와 처벌권을 존중한다.',
      shortLabel: '사적 제재 방관 (지역 공동체의 분노와 부족주의)',
      moralCategory: 'tribal',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: -10, mercyVsSanctity: -5, squadTrust: 5 },
      protagonistThought: '피 맺힌 원한을 외지인인 내가 가로막을 자격이 있는가. 물러서자.',
      lessonTaught: '군중의 사적 복수를 묵인하는 방관은 갈등을 피하게 해주지만, 광기와 린치 앞에서 인간의 존엄을 팔아넘기는 비겁함이다.'
    },
    {
      id: 3,
      text: '미군 헌병(MP)을 소리쳐 부르며, 현장에서 최소한의 뇌압 감압 처치만 한 뒤 헌병대에 신병을 넘긴다.',
      shortLabel: '헌병대 인계 및 현장 응급처치 (제도적 절충)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '헌병대를 개입시켜 법적 절차로 넘겨야 한다. 목숨은 건지되 소요를 막자.',
      lessonTaught: '합법적 제도와 공권력을 끌어들이는 중재는 폭동을 막고 생명을 살리는 가장 현실적인 문명적 해법이다.'
    }
  ]
};

export function getNormandy3Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'NORMANDY_3_RESULT',
      title: '돌팔매질 속의 방패, 법정으로 향한 들것',
      paragraphs: [
        '당신은 날아오는 돌을 맞으며 장을 실어 냈습니다. 장은 전범 재판에서 강요였음이 밝혀져 감형되었습니다. 레지스탕스는 침을 뱉었지만 법치는 살아남았습니다.'
      ],
      npcReactions: ['프랑스 청년 장: 평생의 은인으로 섬김.'],
      lessonMessage: '교훈: "군중의 광기 어린 복수심에 굴하지 않고 법과 인권을 지키는 것이야말로, 전장에서 야만으로 퇴보하지 않는 최후의 방파제다."',
      nextScenarioId: 'NORMANDY_4_REFLECT'
    };
  } else if (choiceId === 2) {
    return {
      id: 'NORMANDY_3_RESULT',
      title: '광장의 침묵, 돌담 아래 끊어진 숨',
      paragraphs: [
        '당신이 돌아서자 쇠파이프가 그의 정수리를 부쉈습니다. 군중은 환호했으나, 재판을 구걸하던 청년의 눈빛은 지워지지 않는 유령이 되었습니다.'
      ],
      npcReactions: ['레지스탕스: 프랑스의 정의를 존중해 주었다며 호의를 표함.'],
      lessonMessage: '교훈: "정의라는 이름으로 자행되는 사적 린치를 묵인하는 순간, 해방자 역시 침략자와 다름없는 야만에 동조하게 된다."',
      nextScenarioId: 'NORMANDY_4_REFLECT'
    };
  } else {
    return {
      id: 'NORMANDY_3_RESULT',
      title: '호각 소리와 질서의 회복',
      paragraphs: [
        '호각을 불어 미 헌병대를 진입시켜 장을 구하고 소요를 진압했습니다. 현명한 통제로 법과 생명을 지켰습니다.'
      ],
      npcReactions: ['지휘부: 현명한 통제력으로 폭동을 방지했다고 치하함.'],
      lessonMessage: '교훈: "감정적 폭력과 맹목적 충돌을 피해 공적 질서를 활용하는 냉철함이, 전선 뒤편의 무질서를 바로잡는 힘이다."',
      nextScenarioId: 'NORMANDY_4_REFLECT'
    };
  }
}

export const NORMANDY_4: NarrativeScene = {
  id: 'NORMANDY_4_REFLECT',
  campaignId: 'NORMANDY_1944',
  actTitle: '제4막: 노르망디의 석양과 증언',
  chapterNumber: '04',
  location: '프랑스 셸부르 항구 · 야전병원 귀환 수송선 갑판',
  date: '1944년 8월 5일',
  image: IMAGES.normandyAct4,
  imageCaption: '셸부르 항구의 안개 낀 부두에 정박한 하얀 병원선과 귀환하는 위생병들',
  paragraphs: [
    '부상병들을 싣고 영국으로 향하는 병원선 갑판 위에서, 선임 군의관 카터 소령이 묻습니다: "총칼이 지배하는 이 야만의 전장에서, 자네는 의무병의 맹세를 지켜냈다고 자부할 수 있겠나?"'
  ],
  quote: {
    speaker: '선임 군의관 카터 소령',
    text: '"전쟁은 모든 원칙을 시험하지. 자네의 그 손은 과연 무엇을 구했는가?"'
  },
  choices: [
    {
      id: 1,
      text: '"비록 상처받고 흔들렸을지라도, 보편적 인도주의와 생명의 평등이라는 본질을 결코 포기하지 않았습니다."',
      shortLabel: '보편적 인도주의의 긍정',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -5, universalVsTribal: 5, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '전쟁의 광기 속에서도 인간 존엄의 불씨를 지켜냈다. 그것이 유일한 긍지다.',
      lessonTaught: '보편적 인도주의를 지켜낸 자는 역사의 심판 앞에서 당당하지만, 치러야 했던 수많은 상실의 빚을 잊지 말아야 한다.'
    },
    {
      id: 2,
      text: '"전쟁은 추상적인 도덕 교과서가 아닙니다. 살릴 수 있는 사람을 현실적으로 살려낸 것만으로 충분합니다."',
      shortLabel: '현실적 성과의 옹호',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: -5, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '완벽한 성자는 없다. 살아남은 결과만이 진실을 말한다.',
      lessonTaught: '현실적 결과에 만족하는 태도는 실리를 주지만, 희생된 이들의 아픔을 쉽게 망각하는 무감각에 빠지기 쉽다.'
    },
    {
      id: 3,
      text: '"맹세를 지켰는지는 신만이 아실 것입니다. 저는 다만 고통받는 이들의 손을 놓지 않으려 발버둥 쳤을 뿐입니다."',
      shortLabel: '겸허한 고백과 수용',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 5, squadTrust: 0 },
      protagonistThought: '나는 그저 내 손으로 만졌던 온기들을 평생 기억할 것이다.',
      lessonTaught: '인간의 한계를 인정하고 겸허히 고통을 기억하는 자세야말로, 전쟁이 남긴 상처를 진정으로 치유하는 출발점이다.'
    }
  ]
};

// =========================================================================
// CAMPAIGN 4: DACHAU 1945 (심연의 잿더미 - 최고 심도 5막 특별 에피소드)
// =========================================================================
export const DACHAU_1: NarrativeScene = {
  id: 'DACHAU_1_GATES',
  campaignId: 'DACHAU_1945',
  actTitle: '제1막: 잿빛 철조망과 굶주림의 폭동',
  chapterNumber: '01',
  location: '독일 바이에른 주 다하우 강제 수용소 정문 철도역',
  date: '1945년 4월 29일 13:00',
  image: IMAGES.dachauAct1,
  imageCaption: '녹슨 이중 철조망과 "노동이 너희를 자유케 하리라" 정문, 해골처럼 앙상한 수감자들의 시선',
  paragraphs: [
    '수용소 정문에 진입하기 전, 선로 위에 멈춰선 39량의 무개화차(화물열차) 안에는 굶주림과 동사로 썩어가는 2,300여 구의 시신이 겹겹이 쌓여 있었습니다. 살과 뼈가 썩는 악취는 숨을 쉴 때마다 폐부를 찔렀습니다.',
    '당신은 미 육군 제45보병사단 제120의무대대 소속 의무중사, 벤자민 S. 레빈(Benjamin S. Levin)입니다. 브루클린의 유대인 랍비 집안에서 태어나 자원입대한 당신의 가슴에는 붉은 십자가와 함께 다윗의 별 펜던트가 걸려 있었습니다.',
    '미군이 "Arbeit Macht Frei(노동이 너희를 자유케 하리라)" 철문을 부수고 진입하자, 수용소 안쪽에서 살아있는 해골 같은 3만여 명의 수감자들이 울부짖으며 정문으로 쇄도했습니다. 그들은 미군의 C-레이션 보급 트럭을 향해 미친 듯이 달려들었습니다.',
    '그러나 의학적으로 수개월간 기아 상태에 있던 사람에게 기름진 통조림과 초콜릿을 즉시 먹이면, 급격한 전해질 불균형과 인산염 고갈로 인한 재섭취 증후군(Refeeding Syndrome) 및 급성 위장 파열로 수 시간 내에 수백 명이 쇼크사합니다.',
    '지금 즉시 음식을 엄격히 통제하고 묽은 소금물과 설탕물만 티스푼으로 제한 배급해야 합니다. 그러나 눈이 뒤집힌 수천 명의 군중은 배급 트럭을 부수며 약탈하려 하고 있습니다. 동행한 미군 소대장이 M1 소총을 장전하며 외쳤습니다: "레빈 중사! 저들이 트럭을 뒤엎으면 우린 다 밟혀 죽어! 총을 쏴서라도 군중을 해산시켜야 하나, 아니면 굶어 죽어가는 저들에게 음식을 그냥 던져줘야 하나?!"'
  ],
  quote: {
    speaker: '미군 경계 소대장의 절규',
    text: '"음식을 주면 쇼크로 죽고, 안 주면 폭동으로 밟혀 죽는다! 위생병, 명령을 내려!"'
  },
  choices: [
    {
      id: 1,
      text: '의학적 치사 위험을 알고 있지만, 굶주린 이들에게 즉각 식량을 개방하여 약탈을 허용한다.',
      shortLabel: '즉각 식량 개방 (즉각적 고통 해소와 자비)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: 0, mercyVsSanctity: 10, squadTrust: -5 },
      protagonistThought: '지옥에서 살아남은 이들에게 총을 겨눌 수는 없다. 배불리 먹다 죽더라도 굶주림의 고통을 당장 끝내주고 싶다.',
      lessonTaught: '이성이 결여된 맹목적인 온정은, 가장 순수한 동기에서 출발했음에도 불구하고 수많은 사람을 죽음의 덫으로 밀어 넣는다.'
    },
    {
      id: 2,
      text: '소총 공포탄을 쏘아 군중을 강제 해산하고, 트럭을 철수시켜 묽은 미음과 소금물만을 통제 배급한다.',
      shortLabel: '무력 위협을 통한 엄격한 통제 배급 (의학적 원칙 준수)',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 0, mercyVsSanctity: -10, squadTrust: 5 },
      protagonistThought: '해방자가 총을 쏘는 비극을 감수하더라도, 의학적 재앙을 막아야 한다. 원칙을 지키는 것만이 저들을 살린다.',
      lessonTaught: '생명을 살리기 위한 차가운 과학적 통제는 불가피할 수 있으나, 해방의 순간에 또 다른 총구를 들이대는 잔혹한 상처를 남긴다.'
    },
    {
      id: 3,
      text: '자신의 헬멧을 벗고 다윗의 별을 꺼내 보이며 히브리어와 이디시어로 외쳐 군중의 이성을 일깨운다: "형제들이여, 멈추십시오! 지금 먹으면 죽습니다!"',
      shortLabel: '정체성과 언어를 통한 인간적 호소 (위험한 영혼의 중재)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 10, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '총포도 배식도 아니다. 같은 고통을 아는 인간의 목소리로 저 굶주린 영혼들을 진정시켜야 한다.',
      lessonTaught: '진심 어린 인간적 유대와 공감은 폭동의 위기를 잠재우지만, 굶주린 군중의 본능 앞에서는 목숨을 건 도박이다.'
    }
  ]
};

export function getDachau1Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'DACHAU_1_RESULT',
      title: '포식의 비극, 터져버린 위장',
      paragraphs: [
        '당신은 배급 트럭의 자물쇠를 풀었습니다. 수천 명이 달려들어 돼지고기 통조림과 버터를 게걸스럽게 씹어 삼켰습니다. 해방의 환호가 수용소 광장을 가득 메웠습니다.',
        '그러나 세 시간 뒤, 천막과 연병장은 생지옥으로 변했습니다. 기름진 음식을 감당하지 못한 수백 명의 수감자들이 심한 복통과 경련을 일으키며 피를 토하고 쓰러졌습니다. 재섭취 증후군으로 인한 심장마비와 장 중첩증이었습니다.',
        '그날 밤에만 180여 명이 배가 부른 채 숨을 거두었습니다. 살리기 위해 준 음식이 독약이 되어버린 참상 앞에서, 당신은 찢어지는 비명을 들으며 바닥에 주저앉았습니다.'
      ],
      npcReactions: [
        '수감자 생존자들: 음식을 준 것에 감사하면서도 눈앞에서 친구들이 급사하자 공포에 질림.',
        '군의관들: 의학적 경고를 무시한 치명적 온정주의였다며 개탄함.'
      ],
      lessonMessage: '교훈: "지식 없는 연민은 악의보다 위험하다. 과학적 현실을 무시한 감정적 자비는 구원이 아닌 또 다른 살육을 낳는다."',
      nextScenarioId: 'DACHAU_2_TYPHUS'
    };
  } else if (choiceId === 2) {
    return {
      id: 'DACHAU_1_RESULT',
      title: '총소리와 철조망, 눈물의 소금물',
      paragraphs: [
        '탕! 탕! 탕! 공포탄이 하늘을 가르자 군중은 비명을 지르며 뒤로 물러섰습니다. 미군 병사들이 총검으로 트럭을 방어하며 군중을 격리했습니다.',
        '수감자들은 울부짖었습니다: "나치 놈들과 다를 게 뭐냐! 우리를 굶겨 죽일 셈이냐!" 눈물 섞인 비난이 쏟아졌지만, 당신은 떨리는 손으로 묽은 소금물과 설탕물만을 배급했습니다.',
        '재섭취 증후군으로 인한 대량 사망은 막아냈습니다. 수백 명의 목숨을 의학적으로 건져냈지만, 해방의 날에 총알받이 취급을 당한 수감자들의 원망 어린 눈빛은 영혼을 베는 가시가 되었습니다.'
      ],
      npcReactions: [
        '미군 소대원들: 질서를 잡고 대량 사망을 막은 냉철한 통제력을 칭찬함.',
        '생존자들: 해방자인 미군에게서 나치와 같은 총검의 위협을 느꼈다며 깊은 배신감을 표함.'
      ],
      lessonMessage: '교훈: "생명을 살리기 위한 차가운 원칙과 통제는 불가피했으나, 약자들의 영혼에 씻을 수 없는 폭력의 기억을 각인시킨다."',
      nextScenarioId: 'DACHAU_2_TYPHUS'
    };
  } else {
    return {
      id: 'DACHAU_1_RESULT',
      title: '광장의 침묵, 맞잡은 뼈마디',
      paragraphs: [
        '당신은 철모를 벗고 가슴의 다윗의 별을 높이 치켜들었습니다: "Breider! Hert oys!(형제들이여, 들으십시오!) 저는 브루클린에서 온 유대인 의무병 벤자민입니다! 지금 저 음식을 삼키면 피가 굳어 죽습니다! 제발 저를 믿으십시오!"',
        '군중 한가운데서 흐느낌이 터져 나왔습니다. 나치 치하에서 같은 언어로 불린 적 없던 따뜻한 목소리에 군중이 멈춰 섰습니다. 노인 한 명이 당신의 손을 잡고 무릎을 꿇었습니다.',
        '폭동 없이 자발적인 제한 배급이 시작되었습니다. 의학과 인간성이 기적적인 조화를 이루어 대규모 쇼크사를 막아냈습니다.'
      ],
      npcReactions: [
        '수감자들: 동포이자 해방자인 위생병에게 눈물 어린 신뢰를 보냄.'
      ],
      lessonMessage: '교훈: "총포의 강제력보다 강한 것은 영혼의 공명이다. 그러나 이러한 기적은 언제나 파멸의 절벽 끝을 걷는 도박 위에 서 있다."',
      nextScenarioId: 'DACHAU_2_TYPHUS'
    };
  }
}

export const DACHAU_2: NarrativeScene = {
  id: 'DACHAU_2_TYPHUS',
  campaignId: 'DACHAU_1945',
  actTitle: '제2막: 발진티푸스의 막사와 붉은 페인트',
  chapterNumber: '02',
  location: '수용소 제7구역 · 감염병 격리 수용 병동 (Revier)',
  date: '1945년 5월 1일 10:30',
  image: IMAGES.dachauAct2,
  imageCaption: '3단 목재 침상에 가득한 발진티푸스 환자들, DDT 방역 분무기를 든 위생병',
  paragraphs: [
    '수용소 해방 사흘째, 끔찍한 전염병인 발진티푸스(Typhus)가 제7구역 4개 막사에서 걷잡을 수 없이 번지기 시작했습니다. 이와 벼룩을 통해 전염되는 이 병은 이미 2,000여 명의 뇌와 혈관을 파괴하고 있었습니다.',
    '사단 방역본부의 명령은 단호했습니다: "제7구역 막사 4동의 모든 출입구를 철조망으로 폐쇄하고 붉은 페인트로 X자를 그어라. 누구도 나오지 못하게 사살 명령을 내린다. 감염자가 수용소 전체 3만 명과 인근 바이에른 마을로 퍼지면 수십만 명이 죽는 대역병이 된다."',
    '그러나 제7구역 막사 안에는 아직 감염되지 않은 어린 소년들과 비감염 수감자 300여 명이 함께 갇혀 있었습니다. 문을 걸어 잠그면 그 300명은 며칠 내로 벼룩에 물려 반드시 발진티푸스로 몰살당합니다.',
    '반대로 문을 열어 선별 검사를 시도하면, 벼룩이 방역선을 뚫고 전 수용소와 미군 부대로 확산될 확률이 80% 이상입니다.',
    '막사 창살 틈으로 어린 폴란드 소년 야콥이 손을 내밀며 울부짖습니다: "의사 선생님! 전 열도 안 나고 건강해요! 여기서 꺼내주세요! 안에 있으면 다 병들어 죽어요!"'
  ],
  quote: {
    speaker: '사단 방역장교의 무전',
    text: '"레빈 중사, 막사를 즉시 영구 봉쇄하라! 감성으로 문을 열면 바이에른 주 전체가 역병의 무덤이 된다!"'
  },
  choices: [
    {
      id: 1,
      text: '명령을 집행한다: 막사 문을 밖에서 빗장 치고 완전 봉쇄하여 수십만 명의 역병 확산을 막는다.',
      shortLabel: '감염 막사 완전 봉쇄 (거시적 방역과 공리주의)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: -5, mercyVsSanctity: -10, squadTrust: 10 },
      protagonistThought: '비감염자가 갇혀 죽더라도 수용소 전체와 민간인 수십만 명의 목숨이 걸려 있다. 잔혹하지만 문을 잠가야 한다.',
      lessonTaught: '전체 사회를 구하기 위한 냉혹한 방역 격리는 통계적으로 옳으나, 격리선 안쪽에 버려진 무고한 이들에게는 사형 선고가 된다.'
    },
    {
      id: 2,
      text: '명령에 불복하고 방역복도 없이 막사 안으로 직접 들어가, 비감염자 300명을 찾아내 밖으로 구출한다.',
      shortLabel: '내부 진입 및 비감염자 구출 (절대적 인도주의와 감염 감수)',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 10, mercyVsSanctity: 10, squadTrust: -10 },
      protagonistThought: '멀쩡한 아이들을 산 채로 역병의 구덩이에 가둘 수는 없다. 내가 감염되어 죽더라도 꺼내야 한다.',
      lessonTaught: '개인의 존엄을 구하기 위한 자기희생적 결단은 고결하나, 치명적 역병을 통제 불능으로 유출시키는 재앙의 방아쇠가 될 수 있다.'
    },
    {
      id: 3,
      text: 'DDT 분무기로 창문을 통해 막사 내부 전체를 집중 소독하고, 임시 야외 격리 텐트를 세워 위험을 분산한다.',
      shortLabel: '야외 임시 격리 텐트 분산 (위험 분산 절충)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '완전 봉쇄도 무방비 개방도 답이 아니다. 방역 약품을 총동원해 야외에서 단계적으로 걸러내자.',
      lessonTaught: '현실적 자원 배분과 기술적 절충은 희생을 최소화하지만, 누구도 완벽하게 보호하지 못하는 중간 지대의 상처를 남긴다.'
    }
  ]
};

export function getDachau2Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'DACHAU_2_RESULT',
      title: '붉은 페인트의 십자가, 봉쇄된 비명',
      paragraphs: [
        '당신은 눈물을 삼키며 제7막사의 두꺼운 철문을 닫고 빗장을 질렀습니다. 붉은 페인트로 거대한 X자를 칠했습니다. 안쪽에서 어린 야콥과 수백 명의 수감자들이 문을 두드리며 절규했습니다: "열어주세요! 살려주세요!"',
        '그 비명은 닷새 동안 이어지다 서서히 멎었습니다. 막사 안의 300명은 고열과 섬망 속에서 전원 발진티푸스로 사망했습니다.',
        '그러나 수용소 본진과 인근 도시로는 단 한 마리의 벼룩도 번지지 않았습니다. 당신은 수만 명의 생명을 방역으로 지켜냈지만, 빗장 친 문 너머로 들려오던 아이의 손톱 긁는 소리는 영원한 지옥의 낙인이 되었습니다.'
      ],
      npcReactions: [
        '사단 방역본부: 대역병을 막아낸 영웅적 결단이라며 훈장을 상신함.',
        '내면의 낙인: "나는 수만 명을 구하기 위해 무고한 300명을 산 채로 독가스실처럼 가두어 죽였다."'
      ],
      lessonMessage: '교훈: "최대 다수의 안전을 위한 냉혹한 격리선은 수치를 지켜내지만, 그 선 안쪽에 갇힌 자들의 피로써 그어진 선이다."',
      nextScenarioId: 'DACHAU_3_RETRIBUTION'
    };
  } else if (choiceId === 2) {
    return {
      id: 'DACHAU_2_RESULT',
      title: '열린 문, 벼룩의 습격과 희생',
      paragraphs: [
        '당신은 명령을 무시하고 문을 박차고 들어갔습니다. 악취와 열기 속에서 야콥을 비롯한 300여 명의 비감염자를 찾아내 야외로 끌어냈습니다. 아이들은 울며 당신을 끌어안았습니다.',
        '그러나 탈출 과정에서 감염된 벼룩들이 인근 제8, 제9막사로 옮겨붙었습니다. 결국 500여 명의 새로운 환자가 발생해 추가로 사망자가 나왔고, 당신 본인 역시 발진티푸스에 감염되어 40도의 고열로 사경을 헤맸습니다.',
        '아이들을 살려냈지만, 그 대가로 방역선이 무너지며 더 많은 이들이 피를 흘렸습니다.'
      ],
      npcReactions: [
        '살아난 아이들: 자신들을 지옥에서 꺼내준 위생병을 생명의 은인으로 받듦.',
        '군의관들: 무모한 독단으로 방역선을 뚫었다며 군사재판 회부를 경고함.'
      ],
      lessonMessage: '교훈: "눈앞의 불의를 참지 못하고 원칙을 깨뜨린 연민은 아름답지만, 예측된 거대한 재앙을 기어이 현실로 불러온다."',
      nextScenarioId: 'DACHAU_3_RETRIBUTION'
    };
  } else {
    return {
      id: 'DACHAU_2_RESULT',
      title: '백색 분말의 장막, 살얼음판의 방역',
      paragraphs: [
        'DDT 가루를 온몸에 뒤집어쓰며 야외 텐트를 급조해 환자들을 분리했습니다. 영하의 밤바람 속에서 감기로 숨진 이들도 있었으나 대량 감염은 차단했습니다.',
        '야콥은 살아남았고 역병도 진정되었습니다. 불철주야로 이어진 사투 끝에 당신은 쓰러졌지만 절충은 최악을 피했습니다.'
      ],
      npcReactions: [
        '의료진: 기적적으로 균형을 잡았다며 안도함.'
      ],
      lessonMessage: '교훈: "극단적 양자택일을 거부하고 자원을 총동원한 분투는 희생을 최소화하지만, 언제 무너질지 모르는 피 말리는 긴장을 수반한다."',
      nextScenarioId: 'DACHAU_3_RETRIBUTION'
    };
  }
}

export const DACHAU_3: NarrativeScene = {
  id: 'DACHAU_3_RETRIBUTION',
  campaignId: 'DACHAU_1945',
  actTitle: '제3막: 피의 석벽과 즉결 처형',
  chapterNumber: '03',
  location: '수용소 석탄 저장소 뒤편 콘크리트 벽 (Dachau Retribution Wall)',
  date: '1945년 5월 2일 15:40',
  image: IMAGES.dachauAct3,
  imageCaption: '총탄 자국 가득한 콘크리트 벽 앞에 두 손을 든 나치 SS 경비병들과 분노에 찬 미군 보병들',
  paragraphs: [
    '다하우 수용소의 시체 더미와 고문실을 목격한 미군 보병들의 이성은 완전히 붕괴되었습니다. I중대 소속 월시 중위와 병사들은 백기를 들고 투항한 독일 SS 수용소 경비병 및 의무관 50여 명을 석탄 벽 앞에 몰아세웠습니다.',
    '병사들의 눈은 피로 물들어 있었습니다. 화물열차의 시신들과 소각로의 뼈를 본 그들에게 나치 친위대는 더 이상 인간이 아니라 도살해야 할 짐승이었습니다. 월시 중위가 M1919 브라우닝 기관총의 탄띠를 걸며 외쳤습니다: "이 살인마 새끼들은 포로 대우를 받을 자격이 없어! 전부 벽에 세우고 갈겨버려!"',
    '친위대원들은 손을 든 채 무릎을 꿇고 벌벌 떨고 있었습니다. 그중에는 인체 실험에 직접 가담하지 않고 며칠 전 징집되어 온 하급 의무병들도 섞여 있었습니다.',
    '그때 기관총 사수가 방아쇠에 손가락을 걸었습니다. 비무장 포로의 즉결 처형은 명백한 전범 행위이자 군법 위반입니다. 그러나 저들은 수만 명의 무고한 유대인과 민간인을 학살한 괴물들의 일원입니다.',
    '유대인 위생병인 당신의 등 뒤에서 생존자 수감자들이 쇠파이프를 쥐고 소리칩니다: "레빈! 쏘게 둬! 저들이 우리 부모와 아이들을 가스실에 쳐넣었단 말이야! 신의 복수를 막지 마!"'
  ],
  quote: {
    speaker: '기관총을 장전하는 월시 중위의 분노',
    text: '"저건 인간이 아니야! 저 악마들에게 제네바 협약을 적용하는 건 전 인류에 대한 모독이다!"'
  },
  choices: [
    {
      id: 1,
      text: '적십자 완장을 찬 몸으로 기관총 총구를 가로막아서며 즉결 처형을 결사 저지한다: "포로는 법정에 세워야 한다!"',
      shortLabel: '즉결 처형 저지 (법치주의와 제네바 협약 수호)',
      moralCategory: 'universal',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 10, mercyVsSanctity: 5, squadTrust: -10 },
      protagonistThought: '저들이 악마라 할지라도 투항한 포로를 학살하면 우리 역시 나치와 다를 바 없다. 법과 문명을 지켜야 한다.',
      lessonTaught: '괴물과 싸우면서 괴물이 되지 않기 위해 법을 지키는 것은 문명의 정수이나, 짓밟힌 희생자들의 피 맺힌 분노에는 차가운 칼날이 된다.'
    },
    {
      id: 2,
      text: '고개를 돌려 묵인한다: 수용소의 참상을 본 자로서 전우들과 희생자들의 당연한 복수와 응징을 막지 않는다.',
      shortLabel: '보복 학살 묵인 (도덕적 응보와 피해자 연대)',
      moralCategory: 'tribal',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: -10, mercyVsSanctity: -10, squadTrust: 10 },
      protagonistThought: '인간으로서 도저히 용서할 수 없는 죄악이다. 저들은 자신이 뿌린 대로 거두는 것뿐이다. 내가 막을 이유가 없다.',
      lessonTaught: '정의라는 이름으로 자행된 사적 학살을 묵인하는 순간, 해방자 역시 가해자와 똑같은 폭력의 늪에 영혼을 빠뜨리게 된다.'
    },
    {
      id: 3,
      text: '기관총 사수의 어깨를 잡고 저지하며 타협안을 제시한다: "장교와 수용소장은 체포해 뉘른베르크 전범재판의 산증인으로 세우고, 무기를 내려놓게 하라."',
      shortLabel: '증거 보존을 명분으로 한 지휘관 설득 (제도적 절충)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '분노를 달래면서 유혈극을 막아야 한다. 재판을 통한 공개적 처벌이라는 실리를 내세우자.',
      lessonTaught: '현실적인 명분을 동원한 중재는 최악의 유혈 참극을 막아내지만, 들끓는 복수심의 불길을 완전히 치유하지는 못한다.'
    }
  ]
};

export function getDachau3Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'DACHAU_3_RESULT',
      title: '총구 앞의 적십자, 침묵한 기관총',
      paragraphs: [
        '당신은 브라우닝 기관총 총구 바로 앞으로 뛰어들었습니다: "사격 중지! 제길, 쏘려거든 나부터 쏴라! 포로를 학살하면 우리가 저 살인마들과 다를 게 무엇인가!"',
        '월시 중위는 욕설을 퍼부으며 공포탄을 허공에 난사했습니다. 전우들은 당신을 향해 "나치 옹호자냐"며 침을 뱉었고, 수감자들은 실망과 분노로 돌아섰습니다.',
        '그러나 당신은 미 육군이 전범 집단으로 전락하는 것을 맨몸으로 막아냈습니다. 독일군 포로들은 군사경찰(MP)로 인계되었습니다. 당신은 법치를 지켰지만 형제들의 증오를 홀로 뒤집어썼습니다.'
      ],
      npcReactions: [
        '월시 중위 및 보병들: 자신들의 정의를 가로막았다며 극심한 적개심을 품음.',
        '생존 수감자들: 같은 유대인이면서 왜 악마들을 살려주었느냐며 눈물로 원망함.'
      ],
      lessonMessage: '교훈: "야만에 맞서 문명의 법치를 지키는 길은 가장 외롭고 가혹하며, 피해자들의 눈물과 분노까지 감내해야 하는 가시밭길이다."',
      nextScenarioId: 'DACHAU_4_RESEARCH'
    };
  } else if (choiceId === 2) {
    return {
      id: 'DACHAU_3_RESULT',
      title: '벽 앞의 뇌우, 핏물로 물든 석탄',
      paragraphs: [
        '당신은 천천히 뒤돌아 걸어 나왔습니다. 등 뒤에서 타타타탕-! 기관총의 굉음이 연이어 울렸습니다. 벽 앞에 서 있던 50여 명의 SS 대원들이 비명을 지르며 쓰러졌습니다.',
        '수감자들은 환호하며 시신을 짓밟았습니다. 병사들은 분풀이를 마쳤지만, 광기가 가라앉은 뒤 찾아온 것은 싸늘한 침묵이었습니다.',
        '미군에 의한 다하우 포로 학살 사건(Dachau Massacre)은 사단 감찰부의 극비 수사 대상이 되었습니다. 학살을 묵인한 당신의 양심은 피로 물들었습니다.'
      ],
      npcReactions: [
        '감찰부: 비무장 포로 즉결 처형에 대한 군사 감찰을 개시함.',
        '내면의 낙인: "나는 악을 벌한다는 핑계로 또 다른 학살을 방관한 공범이다."'
      ],
      lessonMessage: '교훈: "응징이라는 이름의 복수는 일시적 쾌감을 줄지 몰라도, 결국 인간을 자신이 증오하던 괴물의 형상으로 변역시킨다."',
      nextScenarioId: 'DACHAU_4_RESEARCH'
    };
  } else {
    return {
      id: 'DACHAU_3_RESULT',
      title: '간신히 멈춘 방아쇠, 전범 재판의 약속',
      paragraphs: [
        '"중위님! 저들을 쏴 죽이면 시체밖에 안 남습니다! 뉘른베르크 법정에서 전 세계 만방에 저들의 만행을 증언하게 해야 합니다!" 당신의 현실적 설득에 월시 중위는 거칠게 총구를 내렸습니다.',
        '몇 명의 장교가 구타당하긴 했으나 집단 학살은 피했습니다. 살육을 막고 사법의 심판대로 넘기는 절충안을 성사시켰습니다.'
      ],
      npcReactions: [
        '사단 지휘부: 대규모 전범 스캔들을 막아낸 현명한 중재로 평가함.'
      ],
      lessonMessage: '교훈: "복수심에 불타는 군중을 제어하는 최선의 방법은, 사적 처벌보다 더 엄정한 공적 단죄의 길을 제시하는 것이다."',
      nextScenarioId: 'DACHAU_4_RESEARCH'
    };
  }
}

export const DACHAU_4: NarrativeScene = {
  id: 'DACHAU_4_RESEARCH',
  campaignId: 'DACHAU_1945',
  actTitle: '제4막: 얼어붙은 영혼과 악마의 일지',
  chapterNumber: '04',
  location: '수용소 병리학 실험실 · 라셔(Rascher) 박사의 연구실',
  date: '1945년 5월 4일 17:00',
  image: IMAGES.dachauAct4,
  imageCaption: '인체 실험실 책상 위의 가죽 표지 연구 일지, 유리 주사기와 뇌파 측정 도구들',
  paragraphs: [
    '수용소 깊숙한 지하 연구실에서 나치 SS 군의관 지그문트 라셔(Sigmund Rascher)가 남긴 12권의 가죽 장정 인체 실험 연구 일지가 발견되었습니다.',
    '그 기록들은 400여 명의 무고한 수감자들을 얼음물 수조에 강제로 담가 심장이 멎을 때까지 체온 강하를 초 단위로 기록하고, 치명적인 저체온증에서 사람을 되살리는 급속 가온 소생법을 기록한 것이었습니다. 수백 명의 비명과 목숨을 갈아 넣은 피의 일지였습니다.',
    '사단 수석 외과의 스미스 소령이 일지를 넘기며 전율했습니다: "레빈 중사... 이 데이터는 끔찍한 악마의 짓이지만, 의학적으로는 세계 어디에도 없는 유일무이한 저체온증 소생 데이터야. 북대서양에 추락한 우리 미군 조종사들과 해군 선원 수천 명을 저체온증 쇼크사에서 살려낼 수 있는 결정적 열쇠가 들어있네."',
    '그러나 수용소 생존자 위원회는 분노하며 요구했습니다: "저 책은 우리 부모와 형제들의 살을 찢고 얼려 죽인 살인 증거물이다! 저 악마의 기록을 의학으로 활용하는 것은 희생자들의 뼈 위에 과학의 탑을 쌓는 신성모독이다! 당장 소각장에 던져 불태워라!"',
    '사단 정보부는 본국 이송을 원하고, 피해자들은 완전한 소각을 울부짖습니다. 이 피 묻은 데이터를 어떻게 처리해야 합니까?'
  ],
  quote: {
    speaker: '미군 수석 외과의 스미스 소령',
    text: '"데이터 자체에 죄가 있는가? 수백 명이 얼어 죽었지만, 이 데이터로 앞으로 수천 명의 조종사를 살릴 수 있다면...?"'
  },
  choices: [
    {
      id: 1,
      text: '피해자들의 한을 기리며, 연구 일지 원본을 즉시 불태워 파기한다: "살인으로 얻은 지식은 의학이 될 수 없다."',
      shortLabel: '연구 일지 완전 소각 (도덕적 순결성과 신성모독 거부)',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -10, universalVsTribal: 10, mercyVsSanctity: -10, squadTrust: -5 },
      protagonistThought: '지옥의 고문으로 얻은 지식을 의학의 이름으로 정당화할 수는 없다. 악마와의 타협을 불태워 없애야 한다.',
      lessonTaught: '악마적 수단으로 얻은 지식을 거부하는 도덕적 결벽은 숭고하나, 미래에 살아날 수 있었던 다른 생명들의 기회를 닫아버린다.'
    },
    {
      id: 2,
      text: '사단 정보부에 일지를 인계하여 보존한다: "비극은 비극이고, 이 데이터는 앞으로 수많은 생명을 구할 수 있다."',
      shortLabel: '연구 데이터 보존 및 본국 이송 (결과주의와 공리주의)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 10, universalVsTribal: -5, mercyVsSanctity: 10, squadTrust: 5 },
      protagonistThought: '이미 죽은 이들을 되살릴 순 없다. 그러나 그들의 희생으로 남은 데이터가 미래의 선원들을 살린다면 그것이 차악이다.',
      lessonTaught: '결과적 유용성을 위해 학살의 부산물을 수용하는 실용주의는, 인간을 실험 대상으로 삼았던 악마의 논리에 굴복하는 독을 품는다.'
    },
    {
      id: 3,
      text: '뉘른베르크 전범재판 검찰단에 범죄 증거물로만 봉인 기증하고, 전범 단죄가 끝날 때까지 일체의 학술적 인용을 법적으로 금지한다.',
      shortLabel: '전범 증거물로의 봉인 (역사적 단죄와 절충)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '태워 없애서도, 아무렇지 않게 써서도 안 된다. 인류가 저지른 가장 끔찍한 범죄의 증거로 영구 봉인하자.',
      lessonTaught: '범죄의 증거로 보존하여 기억하되 남용을 막는 중재는, 과거의 상처와 미래의 교훈 사이에서 문명이 취할 수 있는 유일한 균형이다.'
    }
  ]
};

export function getDachau4Result(choiceId: number): ConsequenceScene {
  if (choiceId === 1) {
    return {
      id: 'DACHAU_4_RESULT',
      title: '잿더미로 날아간 일지, 순결한 거부',
      paragraphs: [
        '당신은 연구 일지를 소각로 불길 속으로 던져 넣었습니다. 가죽 표지가 오그라들며 악마의 데이터가 하얀 재로 변했습니다. 생존자들은 눈물을 흘리며 당신을 껴안았습니다.',
        '스미스 소령은 머리를 감싸 쥐었습니다: "자네는 방금 바다에서 얼어 죽어갈 수천 명의 생존 열쇠를 태워버렸네." 당신은 윤리적 순결을 지켰지만, 실용적 구원의 가능성을 영원히 소멸시켰습니다.'
      ],
      npcReactions: [
        '생존자 위원회: 희생자들의 존엄을 지켜준 결단에 무한한 경의를 표함.',
        '육군 의무연구소: 귀중한 항공 구명 의학 데이터의 손실을 개탄함.'
      ],
      lessonMessage: '교훈: "악을 원천 거부하는 도덕적 결벽은 영혼을 지켜내지만, 그 데이터가 살려낼 수 있었던 미래의 무고한 목숨들을 희생시킨다."',
      nextScenarioId: 'DACHAU_5_CREMATORIUM'
    };
  } else if (choiceId === 2) {
    return {
      id: 'DACHAU_4_RESULT',
      title: '본국으로 향한 상자, 악마의 유산',
      paragraphs: [
        '당신은 일지를 봉인해 미 육군 항공대 의무연구소로 넘겼습니다. 훗날 이 데이터는 미 해군과 공군의 파일럿 저체온증 소생 매뉴얼의 기초가 되어 실제로 수많은 조종사를 살려냈습니다.',
        '그러나 생존자들은 당신을 "학살자의 연구를 도용한 도둑"이라며 저주했습니다. 당신은 미래의 생명을 구했지만, 고문으로 얼어 죽은 영혼들의 비명을 전리품으로 챙겼다는 자책감에 갇혔습니다.'
      ],
      npcReactions: [
        '생존자들: 희생자들의 피를 지식으로 매매했다며 깊은 상처를 받음.'
      ],
      lessonMessage: '교훈: "학살의 부산물로 일군 과학의 진보는 유용할지라도, 피해자들의 고통을 정당화하는 위험한 도덕적 타락의 문을 연다."',
      nextScenarioId: 'DACHAU_5_CREMATORIUM'
    };
  } else {
    return {
      id: 'DACHAU_4_RESULT',
      title: '뉘른베르크의 봉인, 법정에 선 일지',
      paragraphs: [
        '당신은 일지를 전범 재판의 결정적 증거물로 공식 봉인했습니다. 뉘른베르크 의사 재판(Doctors\' Trial)에서 이 일지는 나치 의료진의 교수형을 이끌어내는 결정타가 되었습니다.',
        '상업적·학술적 도용을 막으면서도 진실을 인류의 기억 속에 남겼습니다. 가장 고통스러운 균형을 찾아냈습니다.'
      ],
      npcReactions: [
        '국제법정 검찰단: 나치의 인체 실험을 입증하는 가장 확실한 법적 증거를 확보했다고 평가함.'
      ],
      lessonMessage: '교훈: "비극의 유산을 폐기하지도 탐욕스럽게 취하지도 않고, 역사의 엄정한 단죄를 위한 증거로 남기는 것이 진정한 책임이다."',
      nextScenarioId: 'DACHAU_5_CREMATORIUM'
    };
  }
}

export const DACHAU_5: NarrativeScene = {
  id: 'DACHAU_5_CREMATORIUM',
  campaignId: 'DACHAU_1945',
  actTitle: '제5막: 소각로의 잿더미와 카디시(Kaddish)',
  chapterNumber: '05',
  location: '다하우 제2소각로(Crematorium X) 뒤편 잿더미 매장지',
  date: '1945년 5월 8일 (유럽 전승 기념일 VE-Day)',
  image: IMAGES.dachauAct5,
  imageCaption: '연기가 멎은 붉은 벽돌 소각장 굴뚝과 고요한 재의 들판, 바닥에 놓인 적십자 철모',
  paragraphs: [
    '라디오에서 마침내 독일의 무조건 항복과 유럽 전쟁의 종결을 알리는 처칠과 트루먼의 승전 방송이 울려 퍼졌습니다. 파리와 런던, 뉴욕에서는 수백만 명의 인파가 종이 꽃가루를 날리며 춤을 추고 있었습니다.',
    '그러나 다하우의 소각로 굴뚝 아래 잿더미 들판에는 오직 차가운 봄바람만이 불고 있었습니다. 그곳에는 이름 모를 수만 명의 인골과 뼛가루가 진흙과 섞여 언덕을 이루고 있었습니다.',
    '당신, 벤자민 S. 레빈 중사는 피와 오물로 물든 붉은 십자가 완장을 벗어 소각로 앞 제단에 올려놓았습니다.',
    '종전의 날, 당신은 뼛가루 들판에 무릎을 꿇었습니다. 굶주림의 폭동, 발진티푸스 격리의 비명, 즉결 처형의 벽, 얼어붙은 실험 일지까지... 인간성이 완전히 소멸된 이 지옥의 한복판에서 당신이 치러낸 선택들은 과연 무엇이었습니까?',
    '바람 속에서 흩날리는 뼛가루를 보며, 당신은 유대교의 죽은 자를 위한 추모 기도문 카디시(Kaddish)를 읊조리며 스스로에게 묻습니다: "신이시여, 문명이 무너진 이곳에서... 과연 인간이란 무엇이며, 저는 무엇을 구했나이까?"'
  ],
  quote: {
    speaker: '잿더미 속 레빈 중사의 마지막 기도',
    text: '"이트가달 베이트카다시 슈메이 라바...(주님의 위대한 이름이 온 세상에 거룩히 빛나기를... 그러나 신이시여, 당신은 왜 이곳에서 침묵하셨나이까.)"'
  },
  choices: [
    {
      id: 1,
      text: '"악의 심연 속에서도 인간 존엄의 불씨를 지키려 끝까지 발버둥 쳤습니다. 인간은 다시 일어설 것입니다."',
      shortLabel: '인간성에 대한 궁극적 신뢰 (숭고한 부활의 맹세)',
      moralCategory: 'deontological',
      scoreImpact: { utilitarianVsDeontological: -5, universalVsTribal: 5, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '지옥을 보았지만, 그 속에서도 타인을 위해 손을 뻗었던 이들이 있었다. 인간의 존엄을 믿는다.',
      lessonTaught: '가장 깊은 어둠 속에서도 인간성에 대한 믿음을 잃지 않는 자만이, 폐허 위에서 진정한 문명을 재건할 수 있다.'
    },
    {
      id: 2,
      text: '"문명은 허상이었습니다. 우리는 모두 환경에 따라 괴물이 될 수 있는 나약하고 잔인한 동물일 뿐입니다."',
      shortLabel: '문명의 붕괴와 허무 직시 (파괴적 실존의 비탄)',
      moralCategory: 'utilitarian',
      scoreImpact: { utilitarianVsDeontological: 5, universalVsTribal: -5, mercyVsSanctity: 0, squadTrust: 0 },
      protagonistThought: '규율도 도덕도 이 잿더미 앞에서는 한 줌 먼지에 불과하다. 인간이라는 종에 대한 환멸을 마주한다.',
      lessonTaught: '문명의 연약함과 인간 내면의 괴물을 냉정하게 직시할 때 비로소, 거짓된 도덕적 오만에 빠지지 않게 된다.'
    },
    {
      id: 3,
      text: '"신도 답을 주지 않았습니다. 저는 다만 평생 이 잿더미의 기억을 증언하며, 살아남은 자의 죄책감을 안고 속죄하겠습니다."',
      shortLabel: '침묵의 기억과 영원한 증언 (살아남은 자의 십자가)',
      moralCategory: 'compromise',
      scoreImpact: { utilitarianVsDeontological: 0, universalVsTribal: 0, mercyVsSanctity: 5, squadTrust: 0 },
      protagonistThought: '판단하지 않겠다. 망각에 맞서 이 비극의 증인이 되는 것만이 내가 짊어질 마지막 의무다.',
      lessonTaught: '비극을 쉽게 합리화하거나 망각하지 않고, 영원한 증언자로서 기억의 십자가를 지는 것이 산 자의 도리다.'
    }
  ]
};

// ==========================================
// ENDING EVALUATION
// ==========================================
export function evaluateEnding(state: GameState): EndingAnalysis {
  const { utilitarianVsDeontological, universalVsTribal } = state.scores;

  if (utilitarianVsDeontological >= 6) {
    return {
      archetype: 'UTILITARIAN',
      title: '차가운 전장의 합리주의자',
      subtitle: 'The Cold Utilitarian Realist · 최대 다수의 생존을 택한 냉철한 영혼',
      summary: '당신은 전장의 참혹한 혼돈 속에서도 감정에 휘둘리지 않고, 수치와 결과로서 더 많은 생명을 구하기 위한 길을 걸었습니다. 지휘관을 살려 부대의 안녕을 도모하고, 냉정한 계산으로 팀의 파멸을 막아냈습니다.',
      philosophicalVerdict: '당신의 윤리는 제러미 벤담과 존 스튜어트 밀의 공리주의(Utilitarianism)에 닿아 있습니다. 당신은 "최대 다수의 최대 행복과 생존"을 위해 개인의 비극을 감내했습니다. 전쟁이라는 극단적 상황에서 당신의 계산은 객관적으로 많은 목숨을 건져냈습니다. 그러나 버려져야 했던 이들의 마지막 시선은 당신이 치러야 했던 영혼의 부채로 남았습니다.',
      postWarLife: '종전 후 고향으로 돌아온 당신은 외과의사가 되어 수많은 응급 환자를 살려냈습니다. 언제나 냉철하고 뛰어난 명의로 존경받았지만, 혼자 있는 서재에서는 결코 불을 끄지 못했습니다. 책상 서랍 깊은 곳에는 피 묻은 야전 의무 일지가 평생 보관되어 있었습니다.',
      keyQuote: '"수학적으로 옳은 선택이었다고 매일 밤 스스로에게 속삭인다. 그러나 왜 거울 속의 나는 이토록 메말라 있는가."',
      coreLesson: {
        headline: '다수의 이익을 추구하는 계산이 무조건 정의로운 것은 아니다',
        warning: '결과적 효용을 위해 소수를 제물로 바치는 습관은, 결국 인간을 숫자로만 취급하는 영혼의 불모지를 만든다.',
        insight: '생존자의 통계 뒤편에 묻힌 희생자들의 이름을 기억하지 않는 공리주의는, 승리한 야만에 불과하다.'
      }
    };
  }

  if (universalVsTribal >= 6 && utilitarianVsDeontological <= -2) {
    return {
      archetype: 'GUARDIAN',
      title: '보편적 인류애의 수호자',
      subtitle: 'The Guardian of Universal Sanctity · 국경과 계급을 넘어 인간을 목적으로 대우한 자',
      summary: '당신은 가장 어두운 광기의 시대 속에서도 적십자의 순결한 서약을 지켜냈습니다. 계급에 따라 생명을 차별하지 않았고, 무고한 민간인과 어린아이, 심지어 린치당하는 적과 부역자 앞에서도 인도주의의 방패가 되었습니다.',
      philosophicalVerdict: '당신의 길은 이마누엘 칸트의 정언명령과 의무론(Deontology), 그리고 고결한 덕 윤리(Virtue Ethics)의 극치였습니다. 당신에게 인간은 결코 다른 목적을 위한 수단이 될 수 없었습니다. 비록 아군 전우들의 오해와 냉대를 감수해야 했지만, 당신은 야만의 전장 한가운데서 인간성이란 무엇인가를 증명한 촛불이었습니다.',
      postWarLife: '전쟁이 끝난 후 당신은 국제적십자위원회(ICRC)의 의료 구호 활동가로 평생을 바쳤습니다. 수십 년 뒤, 당신이 전장에서 살려냈던 아이들과 사람들에게서 날아온 편지들이 당신의 머리맡을 가득 채웠습니다.',
      keyQuote: '"적도, 아군도, 장교도, 졸병도 없었다. 내 앞에는 오직 숨 쉬고 신음하는 하느님의 피조물만이 있었을 뿐이다."',
      coreLesson: {
        headline: '인간 존엄의 절대적 원칙은 가장 혹독한 대가를 치르고서야 증명된다',
        warning: '도덕적 순결을 지키려는 숭고함은, 때로 현실 세계의 냉혹한 반발과 조직의 파멸적 희생을 동반한다.',
        insight: '세상이 아무리 미쳐 돌아가더라도 누군가는 타협 없는 선을 지켜야만, 전쟁이 끝난 후 인류가 돌아갈 고향이 남는다.'
      }
    };
  }

  if (universalVsTribal <= -4) {
    return {
      archetype: 'COMRADE',
      title: '전우들의 피 묻은 방패',
      subtitle: 'The Comrade’s Blood Shield · 법보다 형제애를 먼저 품었던 전장의 수호병',
      summary: '당신은 추상적인 인류애나 차가운 규칙보다, 지금 내 곁에서 함께 피 흘리고 숨 쉬는 전우들의 얼굴을 선택했습니다. 적에겐 비정했고 아군에겐 목숨을 바쳤으며, 동료들의 생존을 위해서라면 기꺼이 자신의 손을 더럽혔습니다.',
      philosophicalVerdict: '당신의 윤리는 진화생물학적 부족주의(Tribalism)와 끈끈한 형제애의 돌봄 윤리(Ethics of Care)를 대변합니다. 당신에게 세계 평화나 보편적 인권은 함께 자란 전우들의 체온보다 무겁지 않았습니다. 당신은 성자가 되는 대신, 동료들의 진정한 형제가 되는 길을 택했습니다.',
      postWarLife: '전쟁 영웅으로 훈장을 받고 제대한 당신은 퇴역 군인 전우회에서 평생 동료들의 복지를 위해 헌신했습니다. 전우들은 매년 당신의 집에 모여 술잔을 기울이며 당신을 "우리의 생명을 지켜준 진짜 위생병"이라 칭송했습니다.',
      keyQuote: '"나는 온 세상을 구할 힘은 없었다. 하지만 내 형제들의 손만큼은 결코 놓지 않았다."',
      coreLesson: {
        headline: '형제애에 매몰된 맹목적 연대는 타인의 비극에 눈멀게 만든다',
        warning: '내 편만을 위하는 편협한 의리는 내부의 결속을 다지지만, 울타리 밖의 모든 생명을 적으로 돌리는 잔혹한 폭력을 정당화한다.',
        insight: '가장 가까운 전우를 지키는 헌신 속에서도, 최소한의 인간적 선을 잃지 않는 균형이야말로 진정한 용기다.'
      }
    };
  }

  return {
    archetype: 'MARTYR',
    title: '고뇌하는 경계의 순교자',
    subtitle: 'The Agonized Border Martyr · 모순된 전쟁의 틈바구니에서 피눈물을 흘린 영혼',
    summary: '당신은 극단적인 어느 한쪽의 이념에 안주하지 못하고, 매 순간 생과 사의 경계선에서 찢어지는 고통을 겪었습니다. 이상과 현실, 자비와 의무 사이에서 절규하며 가장 인간적인 번민을 온몸으로 살아냈습니다.',
    philosophicalVerdict: '당신의 여정은 키르케고르와 카뮈가 말한 실존주의적 고뇌(Existential Anguish)를 보여줍니다. 전쟁이란 어떤 도덕 철학으로도 완전히 해명할 수 없는 부조리 그 자체입니다. 당신은 손쉬운 독단에 빠지지 않았기에 매 순간 가장 큰 상처를 입었습니다. 그러나 바로 그 고뇌와 눈물이야말로, 전쟁 속에서도 마비되지 않은 인간성의 증거였습니다.',
    postWarLife: '전후 당신은 작은 시골 마을에서 조용히 약국을 운영하며 살았습니다. 마을 사람들은 당신이 말이 없고 늘 생각에 잠겨있다고 말하곤 했습니다. 당신은 생애 말년 이렇게 남겼습니다: "환자를 살리는 것은 기술이지만, 어떤 생명도 쉽게 포기하지 못해 흘리는 눈물이야말로 의학의 본질이다."',
    keyQuote: '"신이시여, 왜 저에게 이토록 가혹한 저울을 맡기셨나이까. 나는 다만 피 묻은 인간이었을 뿐입니다."',
    coreLesson: {
      headline: '우유부단한 타협은 양쪽을 파멸시키지만, 고뇌하는 눈물만이 인간을 인간답게 남긴다',
      warning: '양쪽 모두를 구하려는 우유부단한 망설임은 때로 더 큰 참사를 부르며, 어떤 선택도 무결할 수 없음을 가르친다.',
      insight: '정답이 없는 전장에서 우리가 끝까지 지켜야 할 것은 완벽한 결과가 아니라, 죄책감과 고통 앞에서도 마비되지 않는 양심이다.'
    }
  };
}
