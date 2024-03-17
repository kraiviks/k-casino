import { Container, Sprite, useTick } from '@pixi/react';
import { FC, useState } from 'react';
import externalCircle from '../../../../assets/roulette/external-circle.png';
import mediumCircle from '../../../../assets/roulette/medium-circle.png';
import internalCircle from '../../../../assets/roulette/internal-circle.png';
import arrow from '../../../../assets/roulette/arrow.png';
import wheel from '../../../../assets/roulette/wheel.png';
import bgRoulette from '../../../../assets/roulette/bg-roulette.png';

import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import {
  selectRouletteSpinRotationInProgress,
  selectRouletteSpinSpeed,
  setRouletteSpinDegressRotation,
  setRouletteSpinSpeed,
} from '../../slices/rouletteSpinSlice';
import { radianToDegress } from '../../../../shared/lib/degress/radianToDegress';
import { RouletteLifecycle, setRouletteLifecycle } from '../../slices/rouletteSlice';
import { sound } from '@pixi/sound';
import { SOUNDS_ROULETTE } from '../../scenes/GameScene/config';

interface IRouletteSpinPXProps {}

const POSITION_SPIN = {
  x: 264,
  y: 285,
};

const POSITION_ARROW = {
  x: 264,
  y: 160,
  rotation: -0.45,
};

const RouletteSpinPX: FC<IRouletteSpinPXProps> = ({}) => {
  const speed = useAppSelector(selectRouletteSpinSpeed);
  const routationInProgress = useAppSelector(selectRouletteSpinRotationInProgress);
  const [rotationMedium, setRotationMedium] = useState(0);
  const [rotationWheel, setRotationWheel] = useState(0);

  const dispatch = useAppDispatch();

  useTick((delta) => {
    if (routationInProgress) {
      const rotation = delta * speed;
      setRotationMedium((prev) => prev + rotation);
      setRotationWheel((prev) => prev - rotation);
      if (speed < 0.005) {
        dispatch(setRouletteSpinSpeed(0));
        dispatch(setRouletteSpinDegressRotation(radianToDegress(rotationMedium % (Math.PI * 2))));
        dispatch(setRouletteLifecycle(RouletteLifecycle.FINISHED));
        sound.stop(SOUNDS_ROULETTE.SPIN);
      } else {
        dispatch(setRouletteSpinSpeed(null));
      }
    }
  });
  return (
    <Container>
      <Sprite image={bgRoulette} x={425} y={500} anchor={1} />
      <Sprite image={externalCircle} x={POSITION_SPIN.x} y={POSITION_SPIN.y} anchor={0.5} />
      <Sprite
        image={mediumCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
        rotation={rotationMedium}
      />
      <Sprite image={internalCircle} x={POSITION_SPIN.x} y={POSITION_SPIN.y} anchor={0.5} />
      <Sprite
        image={wheel}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
        rotation={rotationWheel}
      />
      <Sprite
        image={arrow}
        x={POSITION_ARROW.x}
        y={POSITION_ARROW.y}
        anchor={0.5}
        rotation={POSITION_ARROW.rotation}
      />
    </Container>
  );
};

export default RouletteSpinPX;
