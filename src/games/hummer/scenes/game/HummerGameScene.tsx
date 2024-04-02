import { FC } from 'react';
import { Stage } from '../../../../app/config/contextBridge';
import PitsPX from '../../pixi/game/pits/PitsPX';
import HummerGameSceneUI from './HummerGameSceneUI';

const [width, height] = [550, 600];

const HummerGameScene: FC = ({}) => {
  return (
    <div>
      <HummerGameSceneUI>
        <Stage width={width} height={height} options={{ backgroundAlpha: 0 }}>
          <PitsPX />
        </Stage>
      </HummerGameSceneUI>
    </div>
  );
};

export default HummerGameScene;
