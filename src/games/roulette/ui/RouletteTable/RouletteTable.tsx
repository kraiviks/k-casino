import { FC } from 'react';
import { ROULETTE_TABLE_NUMBERS } from './initData';
import { twMerge } from 'tailwind-merge';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { selectActiveNumber, selectRouletteHighlightNumbers, setActiveNumber, setRouletteHighlightNumbers } from '../../slices/rouletteSlice';
import { sound } from '@pixi/sound';
import { SOUNDS_ROULETTE } from '../../scenes/GameScene/config';
import styles from './rouletteTable.module.css';

interface IRouletteTableProps {}

const RouletteTable: FC<IRouletteTableProps> = ({}) => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const highlightNumbers = useAppSelector(selectRouletteHighlightNumbers);
  const dispatch = useAppDispatch();
  const handleClick = (number: number) => {
    sound.play(SOUNDS_ROULETTE.NUMBER);
    dispatch(setActiveNumber(number));
    dispatch(setRouletteHighlightNumbers(false));
  };

  return (
    <div className={`flex flex-wrap w-[600px] ${highlightNumbers && styles.highlightNumbers}`}>
      {ROULETTE_TABLE_NUMBERS.map(({ number, color }, index) => (
        <div
          key={index}
          onClick={() => handleClick(number)}
          className={twMerge(
            'w-[50px] h-[50px] flex justify-center items-center border border-solid border-white text-xl font-medium cursor-pointer hover:border-yellow',
            color === 'red' && 'bg-red',
            color === 'black' && 'bg-black',
            activeNumber === number && 'border-yellow border-2',
          )}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default RouletteTable;
