import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';
import { IWallet } from '../model/Wallet';

const initialState: IWallet = {
  game_balance: 5000,
};

export const walletSlice = createSlice({
  initialState,
  name: 'wallet',
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.game_balance = state.game_balance + action.payload;
    },
  },
});

export const { setBalance } = walletSlice.actions;

export const selectWalletBalance = (state: RootState) => state.wallet.game_balance;

export default walletSlice.reducer;
