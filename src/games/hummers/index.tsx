import { FC } from 'react';
import { useAppSelector } from '../../app/store/hooks';
import { HummersScenes, selectHummersScene } from './slices/hummersCoreSlice';
import HummersMenuScene from './scenes/menu/HummersMenuScene';
import HummersGameScene from './scenes/game/HummersGameScene';

const HummersCore: FC = () => {
  const scene = useAppSelector(selectHummersScene);

  switch (scene) {
    case HummersScenes.MENU:
      return <HummersMenuScene />;
    case HummersScenes.GAME:
      return <HummersGameScene />;
    default:
      return <div>Something wrong...</div>;
  }
};

export default HummersCore;
