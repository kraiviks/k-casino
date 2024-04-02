import { FC, useEffect } from 'react';
import { useAppSelector } from '../../app/store/hooks';
import { HummerScenes, selectHummerScene } from './slices/hummerCoreSlice';
import HummerMenuScene from './scenes/menu/HummerMenuScene';
import HummerGameScene from './scenes/game/HummerGameScene';
import { sound } from '@pixi/sound';

const HummerCore: FC = ({}) => {
  const scene = useAppSelector(selectHummerScene);

  useEffect(() => {
    sound.stopAll();
  }, []);

  switch (scene) {
    case HummerScenes.MENU:
      return <HummerMenuScene />;

    case HummerScenes.GAME:
      return <HummerGameScene />;

    default:
      return <div>Something wrong...</div>;
  }
};

export default HummerCore;
