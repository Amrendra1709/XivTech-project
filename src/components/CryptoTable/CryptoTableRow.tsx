import React, { useEffect, useRef, useState } from 'react';
import { CryptoAsset } from '../../types/crypto';
import PercentageChange from './PercentageChange';
import PriceChange from './PriceChange';
import MiniChart from './MiniChart';
import { formatLargeNumber, formatSupply } from '../../utils/formatters';
import { Star } from 'lucide-react';

interface CryptoTableRowProps {
  asset: CryptoAsset;
}

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ asset }) => {
  const [previousPrice, setPreviousPrice] = useState(asset.price);
  const [wasUpdated, setWasUpdated] = useState(false);
  const lastUpdateTimeRef = useRef(asset.updatedAt);
  
  useEffect(() => {
    // Check if this is a new update
    if (asset.updatedAt !== lastUpdateTimeRef.current) {
      setPreviousPrice(previousPrice);
      setWasUpdated(true);
      lastUpdateTimeRef.current = asset.updatedAt;
      
      // Reset the updated flag after animation completes
      const timer = setTimeout(() => {
        setWasUpdated(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [asset.updatedAt, asset.price, previousPrice]);
  
  // Determine the chart color based on 7d performance
  const chartColor = asset.priceChange7d >= 0 ? '#16C784' : '#EA3943';
  
  return (
    <tr className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${wasUpdated ? 'bg-blue-50' : ''}`}>
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-yellow-500 transition-colors">
            <Star size={18} />
          </button>
          <span className="ml-3 text-gray-500">{asset.rank}</span>
        </div>
      </td>
      
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img src={asset.logo} alt={asset.name} className="w-8 h-8 mr-3" />
          <div>
            <div className="font-medium text-gray-900">{asset.name}</div>
            <div className="text-gray-500 text-sm">{asset.symbol}</div>
          </div>
        </div>
      </td>
      
      <td className="px-4 py-4 whitespace-nowrap">
        <PriceChange 
          price={asset.price} 
          previousPrice={wasUpdated ? previousPrice : undefined} 
        />
      </td>
      
      <td className="px-4 py-4 whitespace-nowrap">
        <PercentageChange 
          value={asset.priceChange1h} 
          recentlyUpdated={wasUpdated} 
        />
      </td>
      
      <td className="px-4 py-4 whitespace-nowrap">
        <PercentageChange 
          value={asset.priceChange24h} 
          recentlyUpdated={wasUpdated} 
        />
      </td>
      
      <td className="px-4 py-4 whitespace-nowrap">
        <PercentageChange 
          value={asset.priceChange7d} 
          recentlyUpdated={wasUpdated} 
        />
      </td>
      
      <td className="px-4 py-4 whitespace-nowrap">
        <span className="text-gray-800">
          {formatLargeNumber(asset.marketCap)}
        </span>
      </td>
      
      <td className="px-4 py-4 whitespace-nowrap">
        <span className={`text-gray-800 ${wasUpdated ? 'animate-pulse-once' : ''}`}>
          {formatLargeNumber(asset.volume24h)}
        </span>
      </td>
      
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex flex-col">
          <span className="text-gray-800">
            {formatSupply(asset.circulatingSupply, asset.symbol)}
          </span>
          {asset.maxSupply && (
            <div className="mt-1 bg-gray-200 h-1.5 w-24 rounded-full overflow-hidden">
              <div 
                className="bg-primary-500 h-full rounded-full"
                style={{ 
                  width: `${(asset.circulatingSupply / asset.maxSupply) * 100}%` 
                }}
              ></div>
            </div>
          )}
        </div>
      </td>
      
      <td className="px-4 py-4 whitespace-nowrap">
        <MiniChart data={asset.chartData} color={chartColor} />
      </td>
    </tr>
  );
};

export default CryptoTableRow;