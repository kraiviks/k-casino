import { FC, ReactNode } from 'react';
import RouletteTable from '../../ui/RouletteTable/RouletteTable';

interface IGameSceneUIProps {
  children: ReactNode;
}

const GameSceneUI: FC<IGameSceneUIProps> = ({ children }) => {
  return (
    <div className='relative'>
      <div className='absolute right-[5%] top-[50%] text-white'>
        <RouletteTable />
      </div>
      {children}
    </div>
  );
};

export default GameSceneUI;
