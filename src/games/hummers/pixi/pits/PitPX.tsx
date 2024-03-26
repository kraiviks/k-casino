import { FC } from 'react';
import { Sprite } from '@pixi/react';
import { HummersPitState, IHummersPit } from '../../slices/models/Pit';
import pitEmpty from '../../../../assets/hummers/item.svg';
import * as PIXI from 'pixi.js';
import HummerAnimatePitPX from './AnimatePitPX';

interface IHummersPitPXProps extends IHummersPit {
  frames?: PIXI.Texture<PIXI.Resource>[];
  idx: number;
}

const HummersPitPX: FC<IHummersPitPXProps> = ({ position, state, frames, idx }) => {
  return (
    <>
      {state === HummersPitState.EMPTY && (
        <Sprite
          position={position}
          image={pitEmpty}
          anchor={{
            x: 0.5,
            y: 1,
          }}
        />
      )}
      {state === HummersPitState.PROCESSING && (
        <HummerAnimatePitPX position={position} frames={frames} idx={idx} />
      )}
    </>
  );
};

export default HummersPitPX;
