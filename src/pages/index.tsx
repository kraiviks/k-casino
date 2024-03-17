import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../app/router/utils';
import { useAppSelector } from '../app/store/hooks';
import { selectUserNickname } from '../entities/user/slices/userSlice';
import { useGetUserQuery } from '../entities/user/api/userApi';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const nickname = useAppSelector(selectUserNickname);

  const { data: users } = useGetUserQuery({ userId: 21 });

  return (
    <div className='flex gap-4'>
      {nickname}
      <Link to={ROUTES.games.roulette}>Roullete</Link>
      <Link to={ROUTES.games.slots}>Slots</Link>
      <Link to={ROUTES.games.hummer}>Hummers</Link>
    </div>
  );
};

export default MainPage;
