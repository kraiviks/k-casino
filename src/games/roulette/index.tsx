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
    <div className='flex flex-col justify-center  h-full'>
      <div>
        <RouletteGameScene />
        <div
          onClick={toggleSound}
          className='border-t-0 rounded-t-none border-2 rounded-md p-1 relative w-[max-content] left-[23.8%] text-white cursor-pointer hover:bg-gray-700'
        >
          SOUND {playSound ? 'ON' : 'OFF'}
        </div>
      </div>
    </div>
  );
};

export default CoreGameRoulette;
