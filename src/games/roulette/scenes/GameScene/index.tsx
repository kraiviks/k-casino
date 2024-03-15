import { FC } from 'react';
import { Stage } from '@pixi/react';
import RouletteSpinPX from '../../pixi/RouletteSpin/RouletteSpinPX';
import GameSceneUI from './GameSceneUI';

interface IRouletteGameScaneProps {}

const [width, height] = [1100, 500];

const RouletteGameScane: FC<IRouletteGameScaneProps> = ({}) => {
  return (
    <div className='flex flex-col items-center'>
      <div>Title game</div>
      <GameSceneUI>
        <Stage width={width} height={height} options={{ background: 'green' }}>
          <RouletteSpinPX />
        </Stage>
      </GameSceneUI>
    </div>
  );
};

export default RouletteGameScane;
