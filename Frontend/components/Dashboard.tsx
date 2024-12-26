import React from 'react';
import { SearchBar } from './searchBar';
import { StockChart } from './StockChart';
import { AIAnalysis } from './AIAnalysis';
import { useStore } from '../utils/store';
import { Logo } from './Logo';

export function Dashboard() {
  const { selectedStock } = useStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <SearchBar />
      </div>

      {selectedStock && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedStock} Stock Price
            </h2>
            <StockChart symbol={selectedStock} />
          </div>

          <AIAnalysis symbol={selectedStock} />
        </div>
      )}

      {!selectedStock && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Welcome to Stock Analyzer
          </h2>
          <Logo />
          <p className="text-gray-600 dark:text-gray-400">
            Enter a stock symbol above to get started
          </p>
        </div>
      )}
    </div>
  );
}
