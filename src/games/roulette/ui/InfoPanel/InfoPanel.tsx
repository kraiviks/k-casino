import { FC } from 'react';
import { useAppSelector } from '../../../../app/store/hooks';
import { selectActiveNumber, selectCurrentBet } from '../../slices/rouletteSlice';
import { selectWalletBalance } from '../../../../entities/wallet/slices/walletSlice';

interface IInfoPanelProps {}

type Item = {
  id: 'balance' | 'winBet' | 'currentBet' | 'activeNumber';
  title: string;
  icon: string;
};

const ITEMS: Item[] = [
  { id: 'balance', title: 'Balance', icon: '' },
  { id: 'winBet', title: 'Win bet', icon: '' },
  { id: 'currentBet', title: 'Bet', icon: '' },
  { id: 'activeNumber', title: 'Bet number', icon: '' },
];

const InfoPanel: FC<IInfoPanelProps> = ({}) => {
  const balance = useAppSelector(selectWalletBalance);
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);

  return (
    <div className='flex justify-around'>
      {ITEMS.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>
            {item.id === 'balance' && balance}
            {item.id === 'activeNumber' && activeNumber}
            {item.id === 'currentBet' && currentBet}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoPanel;
