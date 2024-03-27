import React, { FC } from 'react';
import { Stage } from '../../../../app/config/contextBridge';
import HummerBgPX from '../../pixi/game/bg/HummerBgPX';
import PitsPX from '../../pixi/game/pits/PitsPX';
import HummerGameSceneUI from './HummerGameSceneUI';
import { Text } from '@pixi/react';

interface IHummerGameSceneProps {}

const [width, height] = [550, 700];

const HummerGameScene: FC<IHummerGameSceneProps> = ({}) => {
  return (
    <div>
      <HummerGameSceneUI>
        <Stage
          width={width}
          height={height}
          options={{
            background: 'green',
          }}
        >
          <HummerBgPX />
          <PitsPX />
        </Stage>
      </HummerGameSceneUI>
    </div>
  );
};

export default HummerGameScene;
