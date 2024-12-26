import React from 'react';
import { AIAnalysis } from '../components/AIAnalysis';
import { useStore } from '../utils/store';

export default function AIInsights() {
  const { selectedStock } = useStore();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Insights</h1>
      
      {selectedStock ? (
        <div className="space-y-6">
          <AIAnalysis symbol={selectedStock} />
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Popular Questions
            </h2>
            <div className="space-y-2">
              <button
                className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                onClick={() => {}}
              >
                What's the growth potential for this stock?
              </button>
              <button
                className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                onClick={() => {}}
              >
                How does it compare to industry competitors?
              </button>
              <button
                className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                onClick={() => {}}
              >
                What are the key risk factors?
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            Select a stock to view AI insights
          </p>
        </div>
      )}
    </div>
  );
}
