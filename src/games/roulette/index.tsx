import { FC, useState } from 'react';
import RouletteGameScene from './scenes/GameScene';
import { sound } from '@pixi/sound';

const CoreGameRoulette: FC = () => {
  const [playSound, setPlaySound] = useState(true);

  const toggleSound = () => {
    if (playSound) {
      sound.toggleMuteAll();
      setPlaySound(false);
    } else {
      sound.toggleMuteAll();
      setPlaySound(true);
    }
  };
  return (
    <div>
      <RouletteGameScene />
      <div
        onClick={toggleSound}
        className='border-white border-2 rounded-md p-1 relative w-[max-content] left-[24%] text-white cursor-pointer hover:bg-gray-700'
      >
        SOUND
      </div>
    </div>
  );
};

export default CoreGameRoulette;
