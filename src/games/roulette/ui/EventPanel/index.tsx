import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import {
  selectRouletteSpinCurrentNumber,
  setRouletteSpinStartSpeed,
} from '../../slices/rouletteSpinSlice';
import {
  RouletteLifecycle,
  RouletteWinOrLose,
  selectActiveNumber,
  selectCurrentBet,
  selectRouletteLifecycle,
  selectRouletteWinOrLose,
  setRouletteHighlightBets,
  setRouletteHighlightNumbers,
  setRouletteLifecycle,
} from '../../slices/rouletteSlice';
import RouletteStartButton from '../../shared/button/RouletteStartButton';
import { sound } from '@pixi/sound';
import { SOUNDS_ROULETTE } from '../../scenes/GameScene/config';

const EventPanel: FC = () => {
  const dispatch = useAppDispatch();
  const lifeCycle = useAppSelector(selectRouletteLifecycle);
  const winOrLose = useAppSelector(selectRouletteWinOrLose);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
  const betNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);

  const onStart = () => {
    if (!!betNumber && !!currentBet) {
      sound.play(SOUNDS_ROULETTE.SPIN);
      dispatch(setRouletteSpinStartSpeed());
      dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY));
    }
    if (!betNumber) {
      dispatch(setRouletteHighlightNumbers(true));
    }
    if (!currentBet) {
      dispatch(setRouletteHighlightBets(true));
    }
  };

  return (
    <div>
      {lifeCycle === RouletteLifecycle.READY_TO_START && <RouletteStartButton onClick={onStart} />}
      {lifeCycle === RouletteLifecycle.PLAY && <div>Play...</div>}
      {lifeCycle === RouletteLifecycle.FINISHED && <div>Calculating...</div>}
      {lifeCycle === RouletteLifecycle.INFO && (
        <div className='flex gap-4'>
          {winOrLose === RouletteWinOrLose.WIN && 'Win'}
          {winOrLose === RouletteWinOrLose.LOSE && 'Lose'}
          <div>{currentNumber}</div>
        </div>
      )}
    </div>
  );
};

export default EventPanel;
