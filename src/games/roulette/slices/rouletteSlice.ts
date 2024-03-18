import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export enum RouletteLifecycle {
  READY_TO_START = 'start',
  PLAY = 'play',
  FINISHED = 'finished',
  INFO = 'info',
}

export enum RouletteWinOrLose {
  WIN = 'win',
  LOSE = 'lose',
}
interface IInitialState {
  winBet: number;
  lifecycle: `${RouletteLifecycle}`;
  activeNumber: number | null;
  currentBet: number;
  winOrLose: `${RouletteWinOrLose}` | null;
  highlightBets: boolean;
  highlightNumbers: boolean;
}

const initialState: IInitialState = {
  winBet: 0,
  lifecycle: RouletteLifecycle.READY_TO_START,
  activeNumber: null,
  currentBet: 0,
  winOrLose: null,
  highlightBets: false,
  highlightNumbers: false,
};

const rouletteSlice = createSlice({
  initialState,
  name: 'roulette',
  reducers: {
    setActiveNumber: (state, action: PayloadAction<number>) => {
      state.activeNumber = action.payload;
    },
    setCurrentBet: (state, action: PayloadAction<number>) => {
      if (state.currentBet + action.payload < 0) {
        state.currentBet = 0;
        state.winBet = 0;
      } else {
        state.currentBet = state.currentBet + action.payload;
        state.winBet = state.currentBet * 2;
      }
    },
    setRouletteLifecycle: (state, action: PayloadAction<RouletteLifecycle>) => {
      state.lifecycle = action.payload;
    },
    setRouletteWinOrLose: (state, action: PayloadAction<RouletteWinOrLose | null>) => {
      state.winOrLose = action.payload;
    },

    setRouletteHighlightBets: (state, action: PayloadAction<boolean>) => {
      state.highlightBets = action.payload;
    },
    setRouletteHighlightNumbers: (state, action: PayloadAction<boolean>) => {
      state.highlightNumbers = action.payload;
    },
    clearRoulette: (state) => {
      state.activeNumber = null;
      state.currentBet = 0;
      state.winBet = 0;
    },
  },
});

export const {
  setActiveNumber,
  setCurrentBet,
  setRouletteLifecycle,
  setRouletteWinOrLose,
  setRouletteHighlightBets,
  setRouletteHighlightNumbers,
  clearRoulette,
} = rouletteSlice.actions;

export const selectActiveNumber = (state: RootState) => state.roulette.activeNumber;
export const selectCurrentBet = (state: RootState) => state.roulette.currentBet;
export const selectRouletteLifecycle = (state: RootState) => state.roulette.lifecycle;
export const selectRouletteWinBet = (state: RootState) => state.roulette.winBet;
export const selectRouletteWinOrLose = (state: RootState) => state.roulette.winOrLose;
export const selectRouletteHighlightBets = (state: RootState) => state.roulette.highlightBets;
export const selectRouletteHighlightNumbers = (state: RootState) => state.roulette.highlightNumbers;

export default rouletteSlice.reducer;
