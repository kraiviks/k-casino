import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hooks';
import {
  HummerScenes,
  selectHummerGameOver,
  setHummerScene,
} from '../../../slices/hummerCoreSlice';

interface ILosePanelProps {}

const LosePanel: FC<ILosePanelProps> = ({}) => {
  const gameOver = useAppSelector(selectHummerGameOver);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (gameOver) {
      const loseTimeout = setTimeout(() => {
        dispatch(setHummerScene(HummerScenes.MENU));
      }, 3000);
      return () => clearTimeout(loseTimeout);
    }
  }, [gameOver]);

  return <>{gameOver && <div>Lose!</div>}</>;
};

export default LosePanel;
