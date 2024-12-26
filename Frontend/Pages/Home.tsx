import React, { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Routes, Route } from "react-router-dom";
import { useStore } from "../utils/store";
import { Toaster } from "sonner";

// Import pages
import Dashboard from "../components/Dashboard";
import Historical from "../Pages/Historical";

import AIInsights from "../components/AIInsights";
import Portfolio from "./Portfolio";
import MarketAnalysis from "./MarketAnalysis";
import Analytics from "./Analytics";

export default function App() {
  const { theme } = useStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors ${theme}`}>
      <Toaster richColors position="top-right" />
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Historical" element={<Historical />} />
          <Route path="/AIInsights" element={<AIInsights />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/MarketAnalysis" element={<MarketAnalysis />} />
          <Route path="/Analytics" element={<Analytics />} />
        </Routes>
      </main>
    </div>
  );
}