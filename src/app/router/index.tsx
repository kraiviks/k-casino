import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import MainPage from '../../pages';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import GamesLayout from '../../layouts/GamesLayout/GamesLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		children: [{ index: true, Component: MainPage }],
	},
	{
		path: 'auth',
		Component: AuthLayout,
		children: [
			{ path: 'login', element: <div>Login page</div> },
			{ path: 'register', element: <div>Register page</div> },
		],
	},
	{
		path: 'games',
		Component: GamesLayout,
		children: [
			{ path: 'roulette', element: <div>Roulete Page</div> },
			{ path: 'slots', element: <div>Slots Page</div> },
			{ path: 'hummers', element: <div>Hummer Page</div> },
		],
	},
]);
