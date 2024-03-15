import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IGamesLayoutProps {}

const GamesLayout: FC<IGamesLayoutProps> = ({}) => {
	return <div>
		<header>Header Games</header>
		<Outlet/>
	</div>;
};

export default GamesLayout;
