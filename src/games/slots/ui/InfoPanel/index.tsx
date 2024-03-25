import { FC, useEffect, useState } from 'react';
import {
  SlotsLifecycle,
  selectSlotsCurrentBet,
  selectSlotsLifecycle,
} from '../../slices/slotsSlice';
import { useAppSelector } from '../../../../app/store/hooks';
import { selectWalletBalance } from '../../../../entities/wallet/slices/walletSlice';
import SlotScoreWindow from '../../shared/scoreWindow/ScoreWindow';

const SlotInfoPanel: FC = () => {
  const currentBet = useAppSelector(selectSlotsCurrentBet);
  const walletBalance = useAppSelector(selectWalletBalance);
  const lifecycle = useAppSelector(selectSlotsLifecycle);
  const isInfo = lifecycle === SlotsLifecycle.INFO;

  const [displayBalance, setDisplayBalance] = useState(walletBalance);

  useEffect(() => {
    if (isInfo) {
      setDisplayBalance(walletBalance);
    }
  }, [isInfo, walletBalance]);
  return (
    <div className='flex flex-col gap-8'>
      <SlotScoreWindow icon='balance'>{displayBalance ?? 0}</SlotScoreWindow>
      <SlotScoreWindow icon='bets'>{currentBet ?? 0}</SlotScoreWindow>
    </div>
  );
};

export default SlotInfoPanel;
