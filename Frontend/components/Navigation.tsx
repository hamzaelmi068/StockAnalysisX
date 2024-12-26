import React from 'react';
import { ThemeToggle } from './themetoggle';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, History, Brain, Briefcase, BarChart2, LineChart } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Historical', path: '/Historical', icon: History },
  { name: 'AI Insights', path: '/AIInsights', icon: Brain },
  { name: 'Portfolio', path: '/Portfolio', icon: Briefcase },
  { name: 'Market Analysis', path: '/MarketAnalysis', icon: BarChart2 },
  { name: 'Analytics', path: '/Analytics', icon: LineChart },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Stock Analyzer
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
