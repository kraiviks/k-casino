import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const GamesLayout: FC = () => {
  return (
    <div className='w-full h-screen'>
      <Outlet />
    </div>
  );
};

export default GamesLayout;
