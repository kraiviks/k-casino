import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IAuthLayoutProps {}

const AuthLayout: FC<IAuthLayoutProps> = ({}) => {
	return (
		<div>
			<header>Header Auth</header>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
