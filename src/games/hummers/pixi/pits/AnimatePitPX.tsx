import { FC } from 'react';
import { AnimatedSprite } from '@pixi/react';
import * as PIXI from 'pixi.js';
import { HummersPitState, IHummersPit } from '../../slices/models/Pit';
import { setHummersPits } from '../../slices/hummersCoreSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../app/store/hooks';

interface IHummerAnimatePitPXProps {
  frames?: PIXI.Texture<PIXI.Resource>[];
  position: IHummersPit['position'];
  idx: number;
}

const HummersAnimatePitPX: FC<IHummerAnimatePitPXProps> = ({ frames, position, idx }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const hideTimeout = setTimeout(() => {
      dispatch(
        setHummersPits({
          currentIndex: idx,
          state: HummersPitState.EMPTY,
        }),
      );
    }, 5000);

    return () => clearTimeout(hideTimeout);
  }, []);

  const onClick = () => {
    dispatch(
      setHummersPits({
        currentIndex: idx,
        state: HummersPitState.EMPTY,
      }),
    );
  };

  if (!frames?.length) {
    return <></>;
  }
  return (
    <AnimatedSprite
      animationSpeed={0.05}
      isPlaying={true}
      textures={frames}
      anchor={{
        x: 0.5,
        y: 1,
      }}
      position={position}
      loop={false}
      interactive={true}
      onmousedown={onClick}
    />
  );
};

export default HummersAnimatePitPX;
