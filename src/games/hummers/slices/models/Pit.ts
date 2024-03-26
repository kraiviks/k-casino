export enum HummersPitState {
  EMPTY = 'empty',
  START = 'start',
  PROCESSING = 'processing',
  READY = 'ready',
}

export interface IHummersPit {
  state: `${HummersPitState}`;
  position: {
    x: number;
    y: number;
  };
}

export const MOCK_PITS: IHummersPit[] = [
  {
    state: HummersPitState.EMPTY,
    position: {
      x: 80,
      y: 250,
    }
  },
  {
    state: HummersPitState.EMPTY,
    position: {
      x: 250,
      y: 250,
    },
  },
  {
    state: HummersPitState.EMPTY,
    position: {
      x: 420,
      y: 250,
    },
  },
  {
    state: HummersPitState.EMPTY,
    position: {
      x: 80,
      y: 380,
    },
  },
  {
    state: HummersPitState.EMPTY,
    position: {
      x: 250,
      y: 380,
    },
  },
  {
    state: HummersPitState.EMPTY,
    position: {
      x: 420,
      y: 380,
    },
  },
  {
    state: HummersPitState.EMPTY,
    position: {
      x: 80,
      y: 510,
    },
  },
  {
    state: HummersPitState.EMPTY,
    position: {
      x: 250,
      y: 510,
    },
  },
  {
    state: HummersPitState.EMPTY,
    position: {
      x: 420,
      y: 510,
    },
  },
]