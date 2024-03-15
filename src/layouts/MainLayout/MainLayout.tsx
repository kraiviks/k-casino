import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IMainLayoutProps {}

const MainLayout: FC<IMainLayoutProps> = ({}) => {
	return (
		<div>
			<header>Header</header>
			<Outlet />
		</div>
	);
};

export default MainLayout;
