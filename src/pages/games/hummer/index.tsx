import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';

const HummerPage: FC = () => {
  return (
    <div>
      <Link to={ROUTES.main}>return to Main Page</Link>
      <div>HummerPage</div>
    </div>
  );
};

export default HummerPage;
