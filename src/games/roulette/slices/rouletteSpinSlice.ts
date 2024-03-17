import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export const ROULETTE_NUMBERS = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14,
  31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

interface IInitialState {
  readonly stepCircle: number;
  readonly rouletteNumbers: number[];
  speed: number;
  rotationInProgress: boolean;
  degreesRotation: number;
  currentNumber: number | null;
}

const initialState: IInitialState = {
  stepCircle: 360 / ROULETTE_NUMBERS.length,
  rouletteNumbers: ROULETTE_NUMBERS,
  speed: 0,
  rotationInProgress: false,
  degreesRotation: 0,
  currentNumber: null,
};

const rouletteSpinSlice = createSlice({
  initialState,
  name: 'rouletteSpin',
  reducers: {
    setRouletteSpinStartSpeed: (state) => {
      const randomSpeed = 1 + Math.random() * 0.1;
      state.speed = randomSpeed;
      state.rotationInProgress = true;
    },
    setRouletteSpinSpeed: (state, action: PayloadAction<number | null>) => {
      const speed = action.payload;
      if (speed === 0) {
        state.rotationInProgress = false;
        state.speed = 0;
      } else {
        state.speed = state.speed - state.speed / 150;
      }
    },
    setRouletteSpinDegressRotation: (state, action: PayloadAction<number>) => {
      state.degreesRotation = action.payload;
      const deltaIndex = Math.floor((action.payload + state.stepCircle / 2) / state.stepCircle);
      const currentIndex = state.rouletteNumbers.length - deltaIndex;
      state.currentNumber = state.rouletteNumbers[currentIndex];
    },
    clearRouletteSpin: (state) => {
      state.currentNumber = null;
    },
  },
});

export const {
  setRouletteSpinSpeed,
  setRouletteSpinStartSpeed,
  setRouletteSpinDegressRotation,
  clearRouletteSpin,
} = rouletteSpinSlice.actions;

export const selectRouletteSpinSpeed = (state: RootState) => state.rouletteSpin.speed;
export const selectRouletteSpinCurrentNumber = (state: RootState) =>
  state.rouletteSpin.currentNumber;
export const selectRouletteSpinRotationInProgress = (state: RootState) =>
  state.rouletteSpin.rotationInProgress;

export default rouletteSpinSlice.reducer;
