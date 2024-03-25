import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export enum SlotsLifecycle {
  READY_TO_START = 'start',
  PLAY = 'play',
  STOPPING = 'stopping',
  STOP = 'stop',
  INFO = 'info',
}
export enum SlotsWinOrLose {
  WIN = 'win',
  LOSE = 'lose',
}

export interface ISlotRow {
  id: number;
  activeItemID: number;
}

interface IInitialState {
  lifecycle: `${SlotsLifecycle}`;
  rows: ISlotRow[];
  winOrLose: `${SlotsWinOrLose}` | null;
  currentBet: number;
  highlightBets: boolean;
}

const initialState: IInitialState = {
  lifecycle: SlotsLifecycle.READY_TO_START,
  rows: [
    { id: 1, activeItemID: 1 },
    { id: 2, activeItemID: 2 },
    { id: 3, activeItemID: 3 },
  ],
  winOrLose: SlotsWinOrLose.LOSE,
  currentBet: 0,
  highlightBets: false,
};

const SlotsSlice = createSlice({
  initialState,
  name: 'slots',
  reducers: {
    setSlotsLifecycle: (state, action: PayloadAction<SlotsLifecycle>) => {
      state.lifecycle = action.payload;
    },
    setSlotsHighlightBets: (state, action: PayloadAction<boolean>) => {
      state.highlightBets = action.payload;
    },

    startSlots: (state) => {
      state.lifecycle = SlotsLifecycle.PLAY;
      state.rows = state.rows.map((row) => ({
        ...row,
        activeItemID: Math.ceil(Math.random() * 12),
      }));
      
      const arrayActiveItemsID = state.rows.map((row) => row.activeItemID);
      const firstItem = arrayActiveItemsID[0];
      const win = arrayActiveItemsID.every((elem) => elem === firstItem);
      state.winOrLose = win ? SlotsWinOrLose.WIN : SlotsWinOrLose.LOSE;
    },

    setSlotsCurrentBet: (state, action: PayloadAction<number>) => {
      if (state.currentBet + action.payload < 0) {
        state.currentBet = 0;
      } else {
        state.currentBet = state.currentBet + action.payload;
      }
    },

    clearSlots: (state) => {
      state.currentBet = 0;
    },
  },
});

export const {
  setSlotsLifecycle,
  startSlots,
  setSlotsCurrentBet,
  setSlotsHighlightBets,
  clearSlots,
} = SlotsSlice.actions;

export const selectSlotsLifecycle = (state: RootState) => state.slots.lifecycle;
export const selectSlotsRows = (state: RootState) => state.slots.rows;
export const selectSlotsCurrentBet = (state: RootState) => state.slots.currentBet;
export const selectSlotsWinOrLose = (state: RootState) => state.slots.winOrLose;
export const selectSlotsHighlightBets = (state: RootState) => state.slots.highlightBets;

export default SlotsSlice.reducer;
