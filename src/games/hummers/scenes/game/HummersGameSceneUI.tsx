import { FC, ReactNode } from 'react';
import ScorePanel from '../../ui/game/scorePanel';

interface IHummersGameSceneUIProps {
  children: ReactNode;
};

const HummersGameSceneUI:FC<IHummersGameSceneUIProps> = ({
  children
}) => {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[5%]">
        <ScorePanel />
      </div>
      {children}
    </div>
  )
};

export default HummersGameSceneUI;