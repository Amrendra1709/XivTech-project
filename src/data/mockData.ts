import { CryptoAsset } from '../types/crypto';

export const generateChartData = (): number[] => {
  const data: number[] = [];
  let value = 100 + Math.random() * 50;
  
  for (let i = 0; i < 20; i++) {
    // Random walk algorithm with slight upward bias
    const change = (Math.random() - 0.45) * 10;
    value = Math.max(80, value + change);
    data.push(value);
  }
  
  return data;
};

export const initialCryptoData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
    price: 93759.48,
    priceChange1h: 0.43,
    priceChange24h: 0.93,
    priceChange7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: 19.85,
    maxSupply: 21,
    chartData: generateChartData(),
    updatedAt: Date.now(),
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg',
    price: 1802.46,
    priceChange1h: 0.60,
    priceChange24h: 3.21,
    priceChange7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120.71,
    maxSupply: null,
    chartData: generateChartData(),
    updatedAt: Date.now(),
  },
  {
    id: 'tether',
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Tether_Logo.svg',
    price: 1.00,
    priceChange1h: 0.00,
    priceChange24h: 0.00,
    priceChange7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: 145.27,
    maxSupply: null,
    chartData: generateChartData(),
    updatedAt: Date.now(),
  },
  {
    id: 'xrp',
    rank: 4,
    name: 'XRP',
    symbol: 'XRP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/XRP_Ledger_logo.jpg',
    price: 2.22,
    priceChange1h: 0.46,
    priceChange24h: 0.54,
    priceChange7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58.39,
    maxSupply: 100,
    chartData: generateChartData(),
    updatedAt: Date.now(),
  },
  {
    id: 'bnb',
    rank: 5,
    name: 'BNB',
    symbol: 'BNB',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/BNB%2C_native_cryptocurrency_for_the_Binance_Smart_Chain.svg',
    price: 606.65,
    priceChange1h: 0.09,
    priceChange24h: -1.20,
    priceChange7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140.89,
    maxSupply: 200,
    chartData: generateChartData(),
    updatedAt: Date.now(),
  },
  {
    id: 'solana',
    rank: 6,
    name: 'Solana',
    symbol: 'SOL',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
    price: 151.51,
    priceChange1h: 0.53,
    priceChange24h: 1.26,
    priceChange7d: 14.74,
    marketCap: 78381958631,
    volume24h: 4881674486,
    circulatingSupply: 517.31,
    maxSupply: null,
    chartData: generateChartData(),
    updatedAt: Date.now(),
  }
];