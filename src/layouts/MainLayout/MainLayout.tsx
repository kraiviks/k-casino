import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC= () => {
	return (
		<div>
			<header>Header</header>
			<Outlet />
		</div>
	);
};

export default MainLayout;
