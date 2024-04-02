import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../app/router/utils';
import { useAppSelector } from '../app/store/hooks';
import { selectUserNickname } from '../entities/user/slices/userSlice';
import { useGetUserQuery } from '../entities/user/api/userApi';

import RouletteImg from '../assets/main/roulette.jpg';
import SlotsImg from '../assets/main/slots.jpg';
import HummersImg from '../assets/main/hummers.jpg';

const MainPage: FC = ({}) => {
  const nickname = useAppSelector(selectUserNickname);

  const { data: users } = useGetUserQuery({
    userId: 13,
  });
  return (
    <div className='flex justify-center items-center  gap-8 flex-col h-[100vh]'>
      <div className='text-white text-lg'>{nickname}</div>
      <div className='flex gap-8 justify-center items-center flex-wrap'>
        <Link to={ROUTES.games.roulette}>
          <img
            src={RouletteImg}
            alt=''
            className='rounded-3xl hover:shadow-roulette transition-shadow'
          />
        </Link>

        <Link to={ROUTES.games.slots}>
          <img src={SlotsImg} alt='' className='rounded-3xl hover:shadow-slots transition-shadow' />
        </Link>
        <Link to={ROUTES.games.hummer}>
          <img
            src={HummersImg}
            alt=''
            className='rounded-3xl hover:shadow-hummers transition-shadow'
          />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
