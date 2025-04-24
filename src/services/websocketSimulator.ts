import { AppDispatch } from '../app/store';
import { updateCryptoPrice } from '../features/crypto/cryptoSlice';

const INTERVAL_MS = 1500; // Update every 1.5 seconds

// Returns a random value between min and max
const getRandomValue = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

// Returns a number with the specified precision
const toPrecision = (num: number, precision: number): number => {
  return Number(num.toFixed(precision));
};

// Generate random price change (mostly small, occasionally larger)
const generatePriceChange = (basePrice: number): number => {
  const changePercent = getRandomValue(-0.5, 0.5); // Most changes are within ±0.5%
  
  // Occasionally generate larger changes (10% chance)
  if (Math.random() < 0.1) {
    return basePrice * (1 + getRandomValue(-1.5, 1.5) / 100);
  }
  
  return basePrice * (1 + changePercent / 100);
};

// Generate random percentage change
const generatePercentChange = (prevChange: number): number => {
  // Allow for trend continuation (60% chance) or reversal (40% chance)
  const isTrendContinuation = Math.random() < 0.6;
  
  if (isTrendContinuation) {
    // Continue the trend but dampen it
    const direction = prevChange >= 0 ? 1 : -1;
    const change = getRandomValue(0, 0.2);
    return toPrecision(prevChange + (direction * change), 2);
  } else {
    // Reverse the trend
    const direction = prevChange >= 0 ? -1 : 1;
    const change = getRandomValue(0, 0.3);
    return toPrecision(prevChange + (direction * change), 2);
  }
};

// Simulate WebSocket for real-time updates
export const startWebSocketSimulation = (dispatch: AppDispatch, cryptoAssets: any[]) => {
  const intervalId = setInterval(() => {
    // Randomly select 1-3 assets to update at a time
    const numAssetsToUpdate = Math.floor(getRandomValue(1, 4));
    const assetsToUpdate = [...cryptoAssets]
      .sort(() => 0.5 - Math.random())
      .slice(0, numAssetsToUpdate);
    
    assetsToUpdate.forEach(asset => {
      // Generate new price with precision based on asset value
      const precision = asset.price < 1 ? 4 : asset.price < 100 ? 2 : 2;
      const newPrice = toPrecision(generatePriceChange(asset.price), precision);
      
      // Update percentage changes
      const priceChange1h = generatePercentChange(asset.priceChange1h);
      const priceChange24h = generatePercentChange(asset.priceChange24h);
      const priceChange7d = generatePercentChange(asset.priceChange7d);
      
      // Update volume with 0-2% change
      const volumeChangePercent = getRandomValue(-2, 2);
      const newVolume = Math.floor(asset.volume24h * (1 + volumeChangePercent / 100));
      
      // Dispatch update to Redux
      dispatch(updateCryptoPrice({
        id: asset.id,
        price: newPrice,
        priceChange1h,
        priceChange24h,
        priceChange7d,
        volume24h: newVolume,
        updatedAt: Date.now(),
      }));
    });
  }, INTERVAL_MS);
  
  // Return cleanup function
  return () => clearInterval(intervalId);
};