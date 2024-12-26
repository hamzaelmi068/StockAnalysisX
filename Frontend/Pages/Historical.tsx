import React from 'react';
import { StockChart } from '../components/StockChart';
import { useStore } from '../utils/store';

export default function Historical() {
  const { selectedStock } = useStore();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Historical Data</h1>
      
      {selectedStock ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {selectedStock} Historical Trends
          </h2>
          <StockChart symbol={selectedStock} />
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">30-Day High</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">Loading...</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">30-Day Low</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">Loading...</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Average Volume</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">Loading...</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            Select a stock to view historical data
          </p>
        </div>
      )}
    </div>
  );
}
