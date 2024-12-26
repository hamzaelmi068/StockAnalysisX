import React from 'react';
import { useStore } from '../utils/store';
import { StockChart } from '../components/StockChart';
import { Star } from 'lucide-react';

export default function Portfolio() {
  const { favorites, toggleFavorite } = useStore();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
      
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((symbol) => (
            <div key={symbol} className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {symbol}
                </h2>
                <button
                  onClick={() => toggleFavorite(symbol)}
                  className="text-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  <Star className="w-6 h-6 fill-current" />
                </button>
              </div>
              <StockChart symbol={symbol} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            No favorite stocks yet. Add some by clicking the star icon when viewing a stock.
          </p>
        </div>
      )}
    </div>
  );
}
