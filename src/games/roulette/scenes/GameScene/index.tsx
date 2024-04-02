import { FC, useEffect } from 'react';
import RouletteSpinPX from '../../pixi/RouletteSpin/RouletteSpinPX';
import GameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import GameSceneActionsProvider from './GameSceneActionsProvider';
import BgPX from '../../pixi/bg/bgPX';
import styles from './gameScene.module.css';
import soundBet from '../../../../assets/sounds/roulette/bet.mp3';
import soundNumber from '../../../../assets/sounds/roulette/number.mp3';
import soundRouletteSpin from '../../../../assets/sounds/roulette/spin.mp3';
import { sound } from '@pixi/sound';
import { SOUNDS_ROULETTE } from './config';

const [width, height] = [1150, 500];

const RouletteGameScene: FC = () => {
  sound.add(SOUNDS_ROULETTE.BET, soundBet);
  sound.add(SOUNDS_ROULETTE.NUMBER, soundNumber);
  sound.add(SOUNDS_ROULETTE.SPIN, soundRouletteSpin);

  return (
    <div className='flex items-center justify-center'>
      <div className={styles.table}>
        <GameSceneActionsProvider>
          <GameSceneUI>
            <Stage width={width} height={height} options={{ background: 'green' }}>
              <BgPX />
              <RouletteSpinPX />
            </Stage>
          </GameSceneUI>
        </GameSceneActionsProvider>
      </div>
    </div>
  );
};

export default RouletteGameScene;
