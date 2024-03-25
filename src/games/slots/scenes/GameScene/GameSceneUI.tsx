import { FC, ReactNode } from 'react';
import SlotEventPanel from '../../ui/EventPanel';
import SlotBetsPanel from '../../ui/BetsPanel';
import SlotInfoPanel from '../../ui/InfoPanel';

interface ISlotGameSceneUIProps {
  children: ReactNode;
}

const SlotGameSceneUI: FC<ISlotGameSceneUIProps> = ({ children }) => {
  return (
    <div className='relative'>
      <div className='absolute left-[50%] bottom-[3%] translate-x-[-50%]'>
        <SlotBetsPanel />
      </div>
      <div className='absolute left-[3%] top-[30%]'>
        <SlotInfoPanel />
      </div>
      <div className='absolute right-[9%] bottom-[15%]'>
        <SlotEventPanel />
      </div>
      {children}
    </div>
  );
};

export default SlotGameSceneUI;
