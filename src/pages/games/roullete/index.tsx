import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';

interface IRoulletePageProps {}

const RoulletePage: FC<IRoulletePageProps> = ({}) => {
  return (
    <div>
      <Link to={ROUTES.main}>return to Main Page</Link>
      <div>RoulletePage</div>
    </div>
  );
};

export default RoulletePage;
