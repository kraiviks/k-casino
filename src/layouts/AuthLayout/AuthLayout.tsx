import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
	return (
		<div>
			<header>Header Auth</header>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
