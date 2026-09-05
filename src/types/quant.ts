export type PriorityLevel = "P1" | "P2" | "P3";

export type TopicCategory = 
  | "arithmetic" 
  | "algebra" 
  | "geometry" 
  | "number-systems" 
  | "modern-math";

export type MasteryStatus = "unvisited" | "weak" | "medium" | "strong";

export interface ConceptFormula {
  id: string;
  name: string;
  latex: string;
  explanation: string;
  variableNotes?: string[];
  catUtility: "Must Know" | "Speed Booster" | "Rare/Advanced";
}

export interface ExampleProblem {
  id: string;
  title: string;
  statement: string;
  difficulty: "Easy" | "Moderate" | "CAT Actual";
  source?: string;
  traditionalMethod?: string;
  bestMethod: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  speedTip?: string;
}

export interface ConceptItem {
  id: string;
  slug: string;
  title: string;
  topicCategory: TopicCategory;
  subtopicId: string;
  subtopicName: string;
  priority: PriorityLevel;
  frequencyScore: number; // 1-5 stars historical frequency
  avgQuestionsPerCAT: string; // e.g. "3-4 Qs"

  // 9-Part Concept Template
  simplifiedExplanation: string;
  keyFormulas: ConceptFormula[];
  recognitionPattern: string; // When / how to recognize this question type
  bestApproach: string; // Best CAT solving approach
  shortcut?: {
    name: string;
    description: string;
    rule: string;
    speedMultiplier: string; // e.g. "3x faster"
    condition: string;
  };
  simpleExample: ExampleProblem;
  catLevelExample: ExampleProblem;
  commonTrap: {
    title: string;
    description: string;
    mistakeExample?: string;
    howToAvoid: string;
  };
  examTakeaway: string; // One-line memorable exam takeaway

  tags: string[];
}

export interface SubtopicItem {
  id: string;
  slug: string;
  title: string;
  category: TopicCategory;
  priority: PriorityLevel;
  conceptCount: number;
  estimatedMinutes: number;
  weightageDescription: string;
  summary: string;
  concepts: ConceptItem[];
}

export interface TopicModule {
  id: TopicCategory;
  title: string;
  priority: PriorityLevel;
  badgeText: string;
  color: string;
  iconName: string;
  description: string;
  historicalWeightage: string; // e.g. "8-9 Questions (~40% of QA)"
  subtopics: SubtopicItem[];
}

export interface ShortcutItem {
  id: string;
  title: string;
  category: TopicCategory;
  priority: PriorityLevel;
  technique: string;
  formulaOrRule: string;
  timeSaved: string; // e.g. "45s saved"
  applicableWhen: string;
  workedDemo: {
    question: string;
    conventionalWay: string;
    shortcutWay: string;
    timeDelta: string;
  };
  warningCondition?: string;
}

export interface PYQItem {
  id: string;
  year: number;
  slot: 1 | 2 | 3;
  topic: TopicCategory;
  subtopic: string;
  concept: string;
  pattern: string;
  difficulty: "Easy" | "Medium" | "Hard";
  statement: string;
  options?: string[];
  isTITA?: boolean;
  correctAnswer: string;
  bestSolvingMethod: {
    methodName: string;
    whyThisMethod: string;
    steps: string[];
    solvingTimeMinutes: string;
  };
  commonTrap: string;
  takeaway: string;
}

export interface CommonMistakeItem {
  id: string;
  title: string;
  category: TopicCategory;
  topic: string;
  frequency: "High" | "Extremely High" | "Critical";
  theBlunder: string;
  whyAspirantsFallForIt: string;
  exampleQuestion: string;
  wrongAnswer: string;
  correctAnswer: string;
  correctSolution: string;
  preventionRule: string;
}

export interface UserProgressState {
  mastery: Record<string, MasteryStatus>; // conceptId -> status
  bookmarks: string[]; // conceptId / formulaId / pyqId
  completedRevisionSessions: number;
  totalTimeSpentSeconds: number;
  lastVisitedConceptId?: string;
  notes: Record<string, string>; // conceptId -> custom user note
}
