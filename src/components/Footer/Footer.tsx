import './Footer.css';

export default function Footer() {
	return (
		<footer className='footer'>
			<p className='footer-text'>
				© {new Date().getFullYear()} My Favorites App
			</p>
		</footer>
	);
}
