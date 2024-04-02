import { FC } from 'react';
import CoreGameRoulette from '../../../games/roulette';
import styles from '../../page.module.css';
import HomeButton from '../../../shared/widgets/HomeButton';

interface IRoulettePageProps {}

const RoulettePage: FC<IRoulettePageProps> = ({}) => {
  return (
    <div className={styles.roulette}>
      <HomeButton />
      <CoreGameRoulette />
    </div>
  );
};

export default RoulettePage;
