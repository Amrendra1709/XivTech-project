import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface PercentageChangeProps {
  value: number;
  recentlyUpdated?: boolean;
}

const PercentageChange: React.FC<PercentageChangeProps> = ({ value, recentlyUpdated = false }) => {
  const isPositive = value > 0;
  const isNeutral = value === 0;
  
  const baseClasses = "flex items-center font-medium transition-colors";
  const colorClasses = isNeutral 
    ? "text-gray-600" 
    : isPositive 
      ? "text-success-500" 
      : "text-error-500";
  
  // Animation class when data is updated
  const animationClass = recentlyUpdated ? "animate-pulse-once" : "";
  
  return (
    <span className={`${baseClasses} ${colorClasses} ${animationClass}`}>
      {isNeutral ? (
        <span className="mx-1">0.00%</span>
      ) : (
        <>
          {isPositive ? (
            <ArrowUp className="w-4 h-4" />
          ) : (
            <ArrowDown className="w-4 h-4" />
          )}
          <span className="ml-0.5">{Math.abs(value).toFixed(2)}%</span>
        </>
      )}
    </span>
  );
};

export default PercentageChange;