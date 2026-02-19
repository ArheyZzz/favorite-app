import { NavLink } from 'react-router-dom';
import './Header.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export default function Header() {
	return (
		<div className='header'>
			<h2>My Favorites Application</h2>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/favorite'>Favorite</NavLink>
				<NavLink to='/about'>About</NavLink>
			</nav>
			<ThemeSwitcher />
		</div>
	);
}
