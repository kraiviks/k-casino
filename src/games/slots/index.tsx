import { FC, useEffect } from 'react';
import SlotsGameScene from './scenes/GameScene';
import { sound } from '@pixi/sound';

const CoreGameSlots: FC = () => {
  useEffect(() => {
    sound.stopAll();
  }, []);

  return (
    <div>
      <SlotsGameScene />
    </div>
  );
};

export default CoreGameSlots;
