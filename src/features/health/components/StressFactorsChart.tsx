'use client';

/**
 * @file ストレス要因分析チャートコンポーネント
 * @description 各ストレス要因の水平バーチャートを表示
 */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StressFactors } from '@/types/health';

type StressFactorsChartProps = {
  factors: StressFactors;
};

export function StressFactorsChart({ factors }: StressFactorsChartProps) {
  const data = [
    { name: '仕事', value: factors.work },
    { name: '健康', value: factors.health },
    { name: '家庭', value: factors.family },
    { name: '人間関係', value: factors.relationships },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">ストレス要因分析</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" width={80} />
            <Tooltip />
            <Bar dataKey="value" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
