import { useAppDispatch } from '../../../../../app/store/hooks';
import { HummersScenes, setHummersScene } from '../../../slices/hummersCoreSlice';

export const HummerMenuStartButton = () => {
  const dispatch = useAppDispatch();
  const onStart = () => {
    dispatch(setHummersScene(HummersScenes.GAME));
  }
  return (
    <button onClick={onStart}>
      Start game
    </button>
  );
}