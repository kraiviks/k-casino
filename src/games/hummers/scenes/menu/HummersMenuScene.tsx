import { FC } from 'react';
import { HummerMenuStartButton } from '../../ui/menu/startButton';

const HummersMenuScene: FC = () => {
  return (
    <div>
      <div>
        <div>Balance</div>
        <div>Last score result & level</div>
      </div>
      <HummerMenuStartButton />
    </div>
  );
};

export default HummersMenuScene;
