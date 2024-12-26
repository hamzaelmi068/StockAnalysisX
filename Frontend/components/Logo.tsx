import React from 'react';
import { useStore } from '../utils/store';

export function Logo() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-48 h-48 animate-float">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-blue-500 dark:stroke-blue-400"
            strokeWidth="2"
            opacity="0.2"
          />

          {/* Inner circle with gradient */}
          <circle
            cx="50"
            cy="50"
            r="35"
            className={`${isDark ? 'stroke-blue-400' : 'stroke-blue-500'}`}
            strokeWidth="2"
            strokeDasharray="220"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="220"
              to="0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Stock chart line */}
          <path
            d="M25,65 Q35,35 45,55 T65,35 L75,45"
            className={`${isDark ? 'stroke-blue-400' : 'stroke-blue-500'}`}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          >
            <animate
              attributeName="d"
              values="
                M25,65 Q35,35 45,55 T65,35 L75,45;
                M25,55 Q35,45 45,35 T65,45 L75,35;
                M25,65 Q35,35 45,55 T65,35 L75,45
              "
              dur="8s"
              repeatCount="indefinite"
            />
          </path>

          {/* Candlesticks */}
          <g className={`${isDark ? 'stroke-green-400' : 'stroke-green-500'}`} strokeWidth="2">
            <line x1="30" y1="40" x2="30" y2="60" />
            <rect x="28" y="45" width="4" height="10" className="fill-current" />
          </g>
          <g className={`${isDark ? 'stroke-red-400' : 'stroke-red-500'}`} strokeWidth="2">
            <line x1="40" y1="35" x2="40" y2="55" />
            <rect x="38" y="35" width="4" height="10" className="fill-current" />
          </g>
          <g className={`${isDark ? 'stroke-green-400' : 'stroke-green-500'}`} strokeWidth="2">
            <line x1="50" y1="45" x2="50" y2="65" />
            <rect x="48" y="50" width="4" height="10" className="fill-current" />
          </g>

          {/* Dollar symbol */}
          <text
            x="50"
            y="52"
            className={`text-2xl font-bold ${isDark ? 'fill-gray-200' : 'fill-gray-700'}`}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            $
          </text>
        </svg>
      </div>
    </div>
  );
}