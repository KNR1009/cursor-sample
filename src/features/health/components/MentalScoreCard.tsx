/**
 * @file メンタルスコアカードコンポーネント
 * @description 今日のメンタルスコアを円形プログレスバーで表示
 */
import { MentalScore } from '@/types/health';

type MentalScoreCardProps = {
  score: number;
  stressLevel: string;
  weeklyGoalProgress: number;
};

export function MentalScoreCard({ score, stressLevel, weeklyGoalProgress }: MentalScoreCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">今日のメンタルスコア</h2>
      <div className="flex justify-center items-center mb-4">
        <div className="relative w-32 h-32">
          {/* 円形プログレスバーの実装 */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="none"
            />
            <circle
              className="text-emerald-500 stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="none"
              style={{
                strokeDasharray: '251.2',
                strokeDashoffset: 251.2 - (251.2 * score) / 100,
                transform: 'rotate(-90deg)',
                transformOrigin: '50% 50%',
              }}
            />
            <text
              x="50"
              y="50"
              className="text-3xl font-bold"
              textAnchor="middle"
              dy=".3em"
              fill="currentColor"
            >
              {score}
            </text>
          </svg>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700">{stressLevel}</p>
        <p className="text-sm text-gray-500">
          今週の改善目標 {weeklyGoalProgress}% 達成
        </p>
      </div>
    </div>
  );
}
