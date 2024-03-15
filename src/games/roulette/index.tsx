import { FC } from 'react';
import RouletteGameScane from './scenes/GameScene';

interface ICoreGameRouletteProps {}

const CoreGameRoulette: FC<ICoreGameRouletteProps> = ({}) => {
  return (
    <div>
      <RouletteGameScane />
    </div>
  );
};

export default CoreGameRoulette;
