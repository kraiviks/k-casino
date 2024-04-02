import  { FC } from 'react';
import { Outlet } from 'react-router-dom';

const GamesLayout:FC = ({}) => {
  return (
    <div className="w-full h-screen">
      {/* <div>Header Games</div> */}
      <Outlet />
    </div>
  )
};

export default GamesLayout;