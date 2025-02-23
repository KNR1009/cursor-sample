/**
 * @file ダッシュボードページ
 * @description 健康管理アプリのメインダッシュボード
 */
import { MentalScoreCard } from '@/features/health/components/MentalScoreCard';
import { StressFactorsChart } from '@/features/health/components/StressFactorsChart';
import { RecommendedActions } from '@/features/health/components/RecommendedActions';
import { RelaxationGuide } from '@/features/health/components/RelaxationGuide';
import type { RelaxationGuide as RelaxationGuideType, SoundMood, StressFactors } from '@/types/health';

export default function DashboardPage() {
  // サンプルデータ
  const mentalScore = {
    score: 72,
    stressLevel: 'ややストレス',
    weeklyGoalProgress: 60,
  };

  const stressFactors: StressFactors = {
    work: 75,
    health: 45,
    family: 30,
    relationships: 25,
  };

  const recommendedActions = [
    {
      title: '5分間の呼吸法',
      description: 'ストレス軽減に効果的な呼吸エクササイズ',
      duration: '5分',
      icon: 'breathing',
    },
    // ... 他のアクション
  ];

  const relaxationGuides: RelaxationGuideType[] = [
    { title: '寝る前の瞑想', duration: '5分', type: 'meditation' as const },
    { title: '運動時の呼吸法', duration: '10分', type: 'breathing' as const },
    { title: 'ストレッチ', duration: '15分', type: 'stretch' as const },
  ];

  const soundMoods: SoundMood[] = [
    { title: '集中', type: 'focus' as const },
    { title: 'リラックス', type: 'relax' as const },
    { title: '元気回復', type: 'energize' as const },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MentalScoreCard {...mentalScore} />
          <StressFactorsChart factors={stressFactors} />
        </div>
        <div className="mt-6">
          <RecommendedActions actions={recommendedActions} />
        </div>
        <div className="mt-6">
          <RelaxationGuide guides={relaxationGuides} moods={soundMoods} />
        </div>
      </div>
    </div>
  );
}
