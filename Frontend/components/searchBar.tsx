import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useStore } from '../utils/store';
import { toast } from 'sonner';

export function SearchBar() {
  const [input, setInput] = useState('');
  const { setSelectedStock } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error('Please enter a stock symbol');
      return;
    }
    setSelectedStock(input.toUpperCase());
    toast.success(`Loading data for ${input.toUpperCase()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter stock symbol (e.g., AAPL)"
          className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </form>
  );
}
