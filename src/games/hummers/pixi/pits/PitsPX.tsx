import { FC, useEffect, useState } from 'react';
import { Container } from '@pixi/react';
import { HummersPitState } from '../../slices/models/Pit';
import HummersPitPX from './PitPX';
import { Assets, Texture, Resource, Spritesheet } from 'pixi.js';
import spritesheet from '../../../../assets/hummers/sprite-mole.json';
import { selectHummersPits, setHummersPits } from '../../slices/hummersCoreSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';

const PitsPX: FC = () => {
  const [frames, setFrames] = useState<Texture<Resource>[]>();
  const pits = useAppSelector(selectHummersPits);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const algoritmInternal = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 9);
      dispatch(
        setHummersPits({
          currentIndex: randomIndex,
          state: HummersPitState.PROCESSING,
        }),
      );
    }, 2000);

    return () => clearInterval(algoritmInternal);
  }, []);

  useEffect(() => {
    Assets.load(JSON.stringify(spritesheet)).then((loader, resources) => {
      const names = ['mole-001.svg', 'mole-002.svg', 'mole-003.svg'];
      const genFrames = names.map((name) => {
        return Texture.from(name);
      });
      setFrames(genFrames);
    });
  }, []);
  return (
    <Container x={25} y={50}>
      {pits.map((pit, idx) => (
        <HummersPitPX key={`pit${idx}`} frames={frames} idx={idx} {...pit} />
      ))}
    </Container>
  );
};

export default PitsPX;
