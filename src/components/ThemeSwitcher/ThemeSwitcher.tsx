import { useTheme, useToggleTheme } from '../../store/theme.store';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
	const theme = useTheme();
	const toggleTheme = useToggleTheme();

	const isDark = theme === 'dark';

	return (
		<button
			type='button'
			className='theme-switcher'
			onClick={toggleTheme}
			aria-label='Toggle theme'
		>
			<span className='theme-switcher-icon'>{isDark ? '🌙' : '☀️'}</span>
			<span className='theme-switcher-label'>{isDark ? 'Dark' : 'Light'}</span>
		</button>
	);
}
