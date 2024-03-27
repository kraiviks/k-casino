import React from 'react';
import { useAppDispatch } from '../../../../../app/store/hooks';
import { HummerScenes, setHummerScene } from '../../../slices/hummerCoreSlice';

type HummerMenuStartButtonProps = {}

export const HummerMenuStartButton = ({}: HummerMenuStartButtonProps) => {
  const dispatch = useAppDispatch();
  const onStart = () => {
    dispatch(setHummerScene(HummerScenes.GAME));
  }
  return (
    <button onClick={onStart}>
      Start game
    </button>
  );
}