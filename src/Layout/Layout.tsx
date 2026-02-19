import { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useTheme } from '../store/theme.store';
import './layout.css';
import { Outlet } from 'react-router';

export default function Layout() {
	const theme = useTheme();

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<div className='layout'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
