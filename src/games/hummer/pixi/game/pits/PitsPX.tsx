import { FC, useEffect } from 'react';
import { Container, Text } from '@pixi/react';
import { HummerPitState } from '../../../slices/models/Pit';
import HummerPitPX from './PitPX';
import * as PIXI from 'pixi.js';

import spritesheet from '../../../../../assets/hummer/sprite-mole.json';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hooks';
import { selectHummerPits, setHummerPits } from '../../../slices/hummerCoreSlice';

const PitsPX: FC = ({}) => {
  const [frames, setFrames] = useState<PIXI.Texture<PIXI.Resource>[]>();
  const pits = useAppSelector(selectHummerPits);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const algoritmInternal = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 9);
      dispatch(
        setHummerPits({
          currentIndex: randomIndex,
          state: HummerPitState.PROCESSING,
        }),
      );
    }, 1000);

    return () => clearInterval(algoritmInternal);
  }, []);

  useEffect(() => {
    PIXI.Assets.load(JSON.stringify(spritesheet)).then(() => {
      const names = ['mole-001.svg', 'mole-002.svg', 'mole-003.svg'];
      const genFrames = names.map((name) => {
        return PIXI.Texture.from(name);
      });
      setFrames(genFrames);
    });
  }, []);

  if (!frames?.length) {
    return <Text text='Loading...' x={210} y={300} />;
  }
  return (
    <Container x={25} y={50}>
      {pits.map((pit, idx) => (
        <HummerPitPX key={`pit${idx}`} frames={frames} idx={idx} {...pit} />
      ))}
    </Container>
  );
};

export default PitsPX;
