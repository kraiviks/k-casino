import { FC, ReactNode } from 'react';
import ScorePanel from '../../ui/game/scorePanel';
import LosePanel from '../../ui/game/losePanel';

interface IHummerGameSceneUIProps {
  children: ReactNode;
}

const HummerGameSceneUI: FC<IHummerGameSceneUIProps> = ({ children }) => {
  return (
    <div className='relative'>
      <div className='absolute left-0 right-0 top-[5%]'>
        <ScorePanel />
      </div>
      <div className='absolute left-[50%] translate-x-[-50%] top-[10%]'>
        <LosePanel />
      </div>
      {children}
    </div>
  );
};

export default HummerGameSceneUI;
