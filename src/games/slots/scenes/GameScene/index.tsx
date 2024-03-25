import { FC } from 'react';
import styles from './gameScene.module.css';
import SlotGameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import RowsPX from '../../pixi/rows/RowsPX';
import SlotLifecycleProvider from './SlotLifecycleProvider';
import BalanceProvider from './BalanceProvider';
import { twMerge } from 'tailwind-merge';
import BodyPX from '../../pixi/body/BodyPX';

const [width, height] = [1150, 500];

const SlotsGameScene: FC = () => {
  return (
    <div style={{ width, height }} className={twMerge('flex flex-col items-center', styles.table)}>
      <SlotLifecycleProvider>
        <BalanceProvider>
          <SlotGameSceneUI>
            <Stage width={width} height={height} options={{ background: 'rgba(46,29, 51, 0.96)' }}>
              <BodyPX />
              <RowsPX />
            </Stage>
          </SlotGameSceneUI>
        </BalanceProvider>
      </SlotLifecycleProvider>
    </div>
  );
};

export default SlotsGameScene;
