import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MarketAnalysis() {
  // Placeholder data for market indices
  const marketData = [
    { name: 'S&P 500', value: 4500 },
    { name: 'NASDAQ', value: 14000 },
    { name: 'DOW', value: 35000 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Market Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {marketData.map((index) => (
          <div key={index.name} className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {index.name}
            </h2>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {index.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Market Sectors Performance
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={[]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#F3F4F6',
                }}
              />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Market News
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Market news feed coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
