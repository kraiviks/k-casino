import { FC, useState } from 'react';
import { useAppDispatch } from '../../../../../app/store/hooks';
import { HummerScenes, clearHummer, setHummerScene } from '../../../slices/hummerCoreSlice';
import startBtn1 from '../../../../../assets/hummer/mole-001.svg';
import startBtn2 from '../../../../../assets/hummer/mole-004.svg';
import styles from './startButton.module.css';

export const HummerMenuStartButton: FC = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useAppDispatch();
  const onStart = () => {
    dispatch(clearHummer());
    dispatch(setHummerScene(HummerScenes.GAME));
  };
  return (
    <div
      className={styles.lightButton}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button className={styles.bt} onClick={onStart}>
        <div className={styles.lightHolder}>
          <div className={styles.dot}></div>
          <div className={styles.light}></div>
        </div>
        <div className={styles.buttonHolder}>
          {!hover ? (
            <img src={startBtn1} alt='' />
          ) : (
            <>
              <img src={startBtn2} alt='' />
              <p>START</p>
            </>
          )}
        </div>
      </button>
    </div>
  );
};
