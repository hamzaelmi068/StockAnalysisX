import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface StockStore {
  theme: Theme;
  selectedStock: string | null;
  favorites: string[];
  setTheme: (theme: Theme) => void;
  setSelectedStock: (stock: string | null) => void;
  toggleFavorite: (symbol: string) => void;
}

export const useStore = create<StockStore>((set) => ({
  theme: 'light',
  selectedStock: null,
  favorites: [],
  setTheme: (theme) => set({ theme }),
  setSelectedStock: (stock) => set({ selectedStock: stock }),
  toggleFavorite: (symbol) =>
    set((state) => ({
      favorites: state.favorites.includes(symbol)
        ? state.favorites.filter((s) => s !== symbol)
        : [...state.favorites, symbol],
    })),
}));
