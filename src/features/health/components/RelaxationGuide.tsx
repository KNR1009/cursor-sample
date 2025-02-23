/**
 * @file リラクゼーションガイドコンポーネント
 * @description クイックメニューとサウンド&ムードを表示
 */
import type { RelaxationGuide as RelaxationGuideType, SoundMood } from '@/types/health';
import { ClockIcon } from '@heroicons/react/24/outline';

type RelaxationGuideProps = {
  guides: RelaxationGuideType[];
  moods: SoundMood[];
};

export function RelaxationGuide({ guides, moods }: RelaxationGuideProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">リラクゼーションガイド</h2>
      <div className="mb-6">
        <h3 className="font-medium mb-3">クイックメニュー</h3>
        <div className="grid grid-cols-3 gap-4">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <ClockIcon className="w-6 h-6 mx-auto mb-2" />
              <p className="font-medium">{guide.duration}</p>
              <p className="text-sm text-gray-600">{guide.title}</p>
              <button className="mt-2 px-4 py-1 text-sm text-emerald-500 border border-emerald-500 rounded-full hover:bg-emerald-50">
                開始
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-3">サウンド & ムード</h3>
        <div className="grid grid-cols-3 gap-4">
          {moods.map((mood, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <p className="font-medium">{mood.title}</p>
              <button className="mt-2 px-4 py-1 text-sm text-emerald-500 border border-emerald-500 rounded-full hover:bg-emerald-50">
                再生
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
