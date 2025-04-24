import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { CryptoAsset } from '../../types/crypto';
import { initialCryptoData } from '../../data/mockData';
import { RootState } from '../../app/store';

interface CryptoState {
  assets: CryptoAsset[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CryptoState = {
  assets: initialCryptoData,
  status: 'idle',
  error: null,
};

type PriceUpdatePayload = {
  id: string;
  price: number;
  priceChange1h: number;
  priceChange24h: number;
  priceChange7d: number;
  volume24h: number;
  updatedAt: number;
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoPrice: (state, action: PayloadAction<PriceUpdatePayload>) => {
      const { id, price, priceChange1h, priceChange24h, priceChange7d, volume24h, updatedAt } = action.payload;
      const asset = state.assets.find(a => a.id === id);
      if (asset) {
        asset.price = price;
        asset.priceChange1h = priceChange1h;
        asset.priceChange24h = priceChange24h;
        asset.priceChange7d = priceChange7d;
        asset.volume24h = volume24h;
        asset.updatedAt = updatedAt;
      }
    },
  },
});

// Actions
export const { updateCryptoPrice } = cryptoSlice.actions;

// Selectors
export const selectAllCryptoAssets = (state: RootState) => state.crypto.assets;

export const selectCryptoById = createSelector(
  [selectAllCryptoAssets, (_, id: string) => id],
  (assets, id) => assets.find(asset => asset.id === id)
);

export const selectCryptoByRank = createSelector(
  [selectAllCryptoAssets],
  (assets) => [...assets].sort((a, b) => a.rank - b.rank)
);

export default cryptoSlice.reducer;