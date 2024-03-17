import { FC } from 'react';
import { useAppDispatch } from '../../../../app/store/hooks';
import { setBalance } from '../../../../entities/wallet/slices/walletSlice';

interface IEventPanelProps {}

const EventPanel: FC<IEventPanelProps> = ({}) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setBalance(200));
  };
  return (
    <div>
      <button onClick={onClick}>Start</button>
    </div>
  );
};

export default EventPanel;
