export type MentalScore = {
  score: number;
  date: string;
  stressLevel: string;
  weeklyGoalProgress: number;
};

export type StressFactors = {
  work: number;
  health: number;
  family: number;
  relationships: number;
};

export type RecommendedAction = {
  title: string;
  description: string;
  duration: string;
  icon: string;
};

export type RelaxationGuide = {
  title: string;
  duration: string;
  type: 'meditation' | 'breathing' | 'stretch';
};

export type SoundMood = {
  title: string;
  type: 'focus' | 'relax' | 'energize';
};
