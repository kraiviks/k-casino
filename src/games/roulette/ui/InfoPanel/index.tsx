import { FC } from 'react';
import { useAppSelector } from '../../../../app/store/hooks';
import {
  selectActiveNumber,
  selectCurrentBet,
  selectRouletteWinBet,
} from '../../slices/rouletteSlice';
import { selectWalletBalance } from '../../../../entities/wallet/slices/walletSlice';
import ScoreWindow from '../../shared/scoreWindow';

export interface IScoreItem {
  id: 'balance' | 'winBet' | 'currentBet' | 'activeNumber';
  title: string;
  icon: string;
}

const ITEMS: IScoreItem[] = [
  { id: 'balance', title: 'Balance', icon: '' },
  { id: 'winBet', title: 'Win bet', icon: '' },
  { id: 'currentBet', title: 'Bet', icon: '' },
  { id: 'activeNumber', title: 'Bet number', icon: '' },
];

const InfoPanel: FC = () => {
  const balance = useAppSelector(selectWalletBalance);
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const winBet = useAppSelector(selectRouletteWinBet);

  return (
    <div className='flex justify-around'>
      {ITEMS.map((item) => (
        <div key={`i - ${item.id}`}>
          <div className='text-gray-400'>{item.title}</div>
          <div>
            {item.id === 'balance' && <ScoreWindow icon='balance'>{balance}</ScoreWindow>}
            {item.id === 'winBet' && (
              <ScoreWindow icon='winBet'>
                <div className='pr-1'>{winBet}</div>
              </ScoreWindow>
            )}
            {item.id === 'currentBet' && <ScoreWindow icon='currentBet'>{currentBet}</ScoreWindow>}
            {item.id === 'activeNumber' && (
              <ScoreWindow icon='activeNumber'>
                <div className='pr-6'>{activeNumber}</div>
              </ScoreWindow>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoPanel;
