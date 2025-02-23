/**
 * @file おすすめアクションコンポーネント
 * @description 今日のおすすめアクションを表示
 */
import { RecommendedAction } from '@/types/health';
import { ClockIcon } from '@heroicons/react/24/outline';

type RecommendedActionsProps = {
  actions: RecommendedAction[];
};

export function RecommendedActions({ actions }: RecommendedActionsProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">今日のおすすめアクション</h2>
      <div className="space-y-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex-1">
              <h3 className="font-medium">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>所要時間: {action.duration}</span>
              </div>
            </div>
            <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
              開始する
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
