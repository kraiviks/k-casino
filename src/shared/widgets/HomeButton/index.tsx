import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import HomeBtn from '../../../assets/home.svg';
import { useAppDispatch } from '../../../app/store/hooks';
import {
  HummerScenes,
  clearHummer,
  setHummerScene,
} from '../../../games/hummer/slices/hummerCoreSlice';
import { clearSlots } from '../../../games/slots/slices/slotsSlice';
import { clearRoulette } from '../../../games/roulette/slices/rouletteSlice';
import { sound } from '@pixi/sound';

const HomeButton: FC = () => {
  const dispatch = useAppDispatch();

  const clearStates = () => {
    dispatch(clearRoulette());
    dispatch(clearSlots());
    dispatch(clearHummer());
    dispatch(setHummerScene(HummerScenes.MENU));
    sound.stopAll();
  };
  return (
    <Link to={ROUTES.main} className='absolute top-5 right-5'>
      <img
        src={HomeBtn}
        alt='returm home'
        width={50}
        height={50}
        className='hover:drop-shadow-home transition-all'
        onClick={clearStates}
      />
    </Link>
  );
};

export default HomeButton;
