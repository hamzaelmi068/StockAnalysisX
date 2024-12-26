import React from 'react';
import { useStore } from '../utils/store';

export default function Analytics() {
  const { selectedStock } = useStore();

  const metrics = [
    { name: 'P/E Ratio', value: 'Loading...' },
    { name: 'Market Cap', value: 'Loading...' },
    { name: 'Dividend Yield', value: 'Loading...' },
    { name: 'Beta', value: 'Loading...' },
    { name: '52 Week High', value: 'Loading...' },
    { name: '52 Week Low', value: 'Loading...' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
      
      {selectedStock ? (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {selectedStock} Key Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.name} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {metric.name}
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Technical Indicators
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-600 dark:text-gray-400">RSI (14)</span>
                <span className="font-semibold text-gray-900 dark:text-white">Loading...</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-600 dark:text-gray-400">MACD</span>
                <span className="font-semibold text-gray-900 dark:text-white">Loading...</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-600 dark:text-gray-400">Moving Average (50)</span>
                <span className="font-semibold text-gray-900 dark:text-white">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            Select a stock to view analytics
          </p>
        </div>
      )}
    </div>
  );
}
