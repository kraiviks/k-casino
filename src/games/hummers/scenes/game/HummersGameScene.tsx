import { FC } from 'react';
import { Stage } from '../../../../app/config/contextBridge';
import HummersGameSceneUI from './HummersGameSceneUI';
import PitsPX from '../../pixi/pits/PitsPX';
import HummerBgPX from '../../pixi/bg/HummersBgPX';

const [width, height] = [550, 700];

const HummersGameScene: FC = () => {
  return (
    <div>
      <HummersGameSceneUI>
        <Stage
          width={width}
          height={height}
          options={{
            backgroundColor: 'green',
          }}
        >
          <HummerBgPX />
          <PitsPX />
        </Stage>
      </HummersGameSceneUI>
    </div>
  );
};

export default HummersGameScene;
