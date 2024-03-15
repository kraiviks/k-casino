import { FC } from 'react';
import { ROULETTE_TABLE_NUMBERS } from './initData';

interface IRouletteTableProps {}

const RouletteTable: FC<IRouletteTableProps> = ({}) => {
  return (
    <div className='flex flex-wrap w-[600px]'>
      {ROULETTE_TABLE_NUMBERS.map(({ number, color }) => (
        <div className='w-[50px] h-[50px] flex justify-center items-center border border-solid border-white text-2xl'>
          {number}
        </div>
      ))}
    </div>
  );
};

export default RouletteTable;
