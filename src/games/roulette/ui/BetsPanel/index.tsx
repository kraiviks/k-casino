import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import {
  selectCurrentBet,
  selectRouletteHighlightBets,
  setCurrentBet,
  setRouletteHighlightBets,
} from '../../slices/rouletteSlice';
import bet50 from '../../../../assets/roulette/bet-50.png';
import bet100 from '../../../../assets/roulette/bet-100.png';
import bet200 from '../../../../assets/roulette/bet-200.png';
import bet400 from '../../../../assets/roulette/bet-400.png';
import bet800 from '../../../../assets/roulette/bet-800.png';
import styles from './betsPanel.module.css';
import { SOUNDS_ROULETTE } from '../../scenes/GameScene/config';
import { sound } from '@pixi/sound';
import { selectWalletBalance } from '../../../../entities/wallet/slices/walletSlice';
import { twMerge } from 'tailwind-merge';

const BETS = [
  { value: 50, image: bet50 },
  { value: 100, image: bet100 },
  { value: 200, image: bet200 },
  { value: 400, image: bet400 },
  { value: 800, image: bet800 },
];

const BetsPanel: FC = () => {
  const dispatch = useAppDispatch();
  const highlightBets = useAppSelector(selectRouletteHighlightBets);
  const currentBet = useAppSelector(selectCurrentBet);
  const balance = useAppSelector(selectWalletBalance);

  const pickBet = (value: number) => {
    if (value + currentBet <= balance) {
      sound.play(SOUNDS_ROULETTE.BET);
      dispatch(setCurrentBet(value));
      dispatch(setRouletteHighlightBets(false));
    }
  };
  return (
    <div className={`${styles.wrapper} ${highlightBets && styles.highlightBets}`}>
      <div className='flex gap-4 items-center'>
        {BETS.map(({ value, image }) => (
          <div
            key={`b - ${value}`}
            onClick={() => pickBet(value)}
            onContextMenu={(e) => {
              e.preventDefault();
              pickBet(-value);
            }}
            className={twMerge(
              'cursor-pointer hover:scale-[1.05] transition-all',
              value + currentBet > balance && 'opacity-50',
            )}
          >
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetsPanel;
