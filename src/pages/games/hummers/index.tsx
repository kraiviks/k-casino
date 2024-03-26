import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import HummersCore from '../../../games/hummers';

const HummersPage: FC = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div>
        <Link to={ROUTES.main}>return to Main Page</Link>
        <HummersCore />
      </div>
    </div>
  );
};

export default HummersPage;
