import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useStore } from '../utils/store';

export function ThemeToggle() {
  const { theme, setTheme } = useStore();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-800" />
      ) : (
        <Sun className="w-5 h-5 text-gray-200" />
      )}
    </button>
  );
}

