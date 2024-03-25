import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import bet50 from '../../../../assets/roulette/bet-50.png';
import bet100 from '../../../../assets/roulette/bet-100.png';
import bet200 from '../../../../assets/roulette/bet-200.png';
import bet400 from '../../../../assets/roulette/bet-400.png';
import bet800 from '../../../../assets/roulette/bet-800.png';
import styles from './betsPanel.module.css';
import { sound } from '@pixi/sound';
import {
  selectSlotsCurrentBet,
  selectSlotsHighlightBets,
  setSlotsCurrentBet,
  setSlotsHighlightBets,
} from '../../slices/slotsSlice';
import { selectWalletBalance } from '../../../../entities/wallet/slices/walletSlice';
import { twMerge } from 'tailwind-merge';

const BETS = [
  { value: 50, image: bet50 },
  { value: 100, image: bet100 },
  { value: 200, image: bet200 },
  { value: 400, image: bet400 },
  { value: 800, image: bet800 },
];

const SlotBetsPanel: FC = () => {
  const dispatch = useAppDispatch();
  // const highlightBets = useAppSelector(selectSlotsHighlightBets);
  const currentBet = useAppSelector(selectSlotsCurrentBet);
  const balance = useAppSelector(selectWalletBalance);

  const pickBet = (value: number) => {
    // sound.play(SOUNDS_ROULETTE.BET);
    // dispatch(setSlotsHighlightBets(false));
    if (value + currentBet <= balance) dispatch(setSlotsCurrentBet(value));
  };
  return (
    <div className={`${!'highlightBets' && styles.highlightBets}`}>
      <div className='flex gap-4 items-center'>
        {BETS.map(({ value, image }) => (
          <div
            key={`sb - ${value}`}
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

export default SlotBetsPanel;
