import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { IHummersPit, MOCK_PITS } from "./models/Pit";

export enum HummersScenes {
  MENU = 'menu',
  GAME = 'game'
}

const DEFAULT_SCORE = 1000;
const START_HEALTH = 3;

interface IHummer {
  scene: `${HummersScenes}`;
  pits: IHummersPit[];
  score: number;
  health: number;
}

const initialState: IHummer = {
  scene: HummersScenes.MENU,
  pits: MOCK_PITS,
  score: DEFAULT_SCORE,
  health: START_HEALTH,
}

const hummersCoreSlice = createSlice({
  initialState,
  name: 'hummersCoreSlice',
  reducers: {
    setHummersScene: (state, action: PayloadAction<HummersScenes>) => {
      state.scene = action.payload;
    },
    setHummersPits: (state, action: PayloadAction<{
      currentIndex: number;
      state: IHummersPit['state'];
    }>) => {
      const newPitsState = state.pits.map((pit, pitIndex) => {
        if (action.payload.currentIndex === pitIndex) {
          return ({
            ...pit,
            state: action.payload.state,
          });
        } else {
          return pit;
        }
      });

      state.pits = [...newPitsState];
    }
  }
});

export const {
  setHummersScene,
  setHummersPits,
} = hummersCoreSlice.actions;

export const selectHummersScene = (state:RootState) => state.hummersCore.scene
export const selectHummersPits = (state:RootState) => state.hummersCore.pits;
export const selectHummersHealth = (state:RootState) => state.hummersCore.health;
export const selectHummersScore = (state:RootState) => state.hummersCore.score;

export default hummersCoreSlice.reducer;