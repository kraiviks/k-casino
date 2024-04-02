import { FC } from 'react';
import HummerCore from '../../../games/hummer';
import { twMerge } from 'tailwind-merge';
import styles from '../../page.module.css';
import HomeButton from '../../../shared/widgets/HomeButton';

const HummerPage: FC = ({}) => {
  return (
    <div className={twMerge('h-screen flex justify-center items-center', styles.hummer)}>
      <HomeButton />
      <HummerCore />
    </div>
  );
};

export default HummerPage;
