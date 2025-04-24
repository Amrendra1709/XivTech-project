import React, { useEffect, useState } from 'react';
import { formatCurrency } from '../../utils/formatters';

interface PriceChangeProps {
  price: number;
  previousPrice?: number;
}

const PriceChange: React.FC<PriceChangeProps> = ({ price, previousPrice }) => {
  const [animate, setAnimate] = useState<'increase' | 'decrease' | null>(null);
  
  useEffect(() => {
    if (previousPrice !== undefined && price !== previousPrice) {
      setAnimate(price > previousPrice ? 'increase' : 'decrease');
      
      const timer = setTimeout(() => {
        setAnimate(null);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [price, previousPrice]);
  
  const formatPrice = (value: number) => {
    // Adjust precision based on price value
    const precision = value < 1 ? 4 : value < 100 ? 2 : 2;
    return formatCurrency(value, precision);
  };
  
  return (
    <span 
      className={`font-medium transition-colors ${
        animate === 'increase' 
          ? 'text-success-500' 
          : animate === 'decrease' 
            ? 'text-error-500' 
            : 'text-gray-800'
      }`}
    >
      {formatPrice(price)}
    </span>
  );
};

export default PriceChange;