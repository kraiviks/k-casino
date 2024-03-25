import { FC } from 'react';
import CoreGameSlots from '../../../games/slots';
import { twMerge } from 'tailwind-merge';
import styles from '../../page.module.css';
import titleImg from '../../../assets/slot/title.svg';

const SlotsPage: FC = () => {
  return (
    <div className={twMerge('h-screen flex justify-center items-center relative', styles.slots)}>
      <div className='absolute top-[5%] left-[50%] translate-x-[-50%] z-10'>
        <img src={titleImg} alt='titleImg' />
      </div>
      <CoreGameSlots />
    </div>
  );
};

export default SlotsPage;
