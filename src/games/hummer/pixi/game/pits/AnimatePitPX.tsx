import { FC, useState } from 'react';
import { AnimatedSprite } from '@pixi/react';
import * as PIXI from 'pixi.js';
import { HummerPitState, IHummerPit } from '../../../slices/models/Pit';
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hooks';
import { selectHummerScore, setHummerPits, setHummerScore } from '../../../slices/hummerCoreSlice';
import { useEffect } from 'react';

interface IHummerAnimatePitPXProps {
  frames?: PIXI.Texture<PIXI.Resource>[];
  position: IHummerPit['position'];
  idx: number;
}

const WIN_SCORE = 100;
const LOSE_SCORE = -200;
const INITIAL_SPEED = 5000;

enum SPEEDS {
  LOW = 3000,
  MEDIUM = 1500,
  HARD = 750,
}
const HummerAnimatePitPX: FC<IHummerAnimatePitPXProps> = ({ frames, position, idx }) => {
  const [speedHide, setSpeedHide] = useState(INITIAL_SPEED);
  const score = useAppSelector(selectHummerScore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (score) {
      case 1000:
        setSpeedHide(SPEEDS.LOW);
        break;
      case 2000:
        setSpeedHide(SPEEDS.MEDIUM);
        break;
      case 3000:
        setSpeedHide(SPEEDS.HARD);
        break;
      default:
        setSpeedHide(SPEEDS.LOW);
        break;
    }
  }, [score]);

  useEffect(() => {
    const hideTimeout = setTimeout(() => {
      dispatch(setHummerScore(LOSE_SCORE));
      dispatch(
        setHummerPits({
          currentIndex: idx,
          state: HummerPitState.EMPTY,
        }),
      );
    }, speedHide);

    return () => clearTimeout(hideTimeout);
  }, [speedHide]);

  const onClick = () => {
    dispatch(setHummerScore(WIN_SCORE));
    dispatch(
      setHummerPits({
        currentIndex: idx,
        state: HummerPitState.EMPTY,
      }),
    );
  };

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

export default HummerAnimatePitPX;
