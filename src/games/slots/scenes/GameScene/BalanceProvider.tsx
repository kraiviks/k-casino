import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import {
  SlotsLifecycle,
  SlotsWinOrLose,
  selectSlotsCurrentBet,
  selectSlotsLifecycle,
  selectSlotsWinOrLose,
} from '../../slices/slotsSlice';
import { setBalance } from '../../../../entities/wallet/slices/walletSlice';

interface IBalanceProviderProps {
  children: ReactNode;
}

const BalanceProvider: FC<IBalanceProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const lifecycle = useAppSelector(selectSlotsLifecycle);
  const win = useAppSelector(selectSlotsWinOrLose);
  const currentBet = useAppSelector(selectSlotsCurrentBet);

  const isPlaying = lifecycle === SlotsLifecycle.PLAY;
  useEffect(() => {
    if (isPlaying) {
      dispatch(setBalance(win === SlotsWinOrLose.WIN ? currentBet * 2 : -currentBet));
    }
  }, [lifecycle]);

  return children;
};

export default BalanceProvider;
