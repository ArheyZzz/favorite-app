import './AboutPage.css';

export default function AboutPage() {
	return (
		<section className='about'>
			<div className='about-card'>
				<h2 className='about-title'>About This Project</h2>

				<p className='about-text'>
					This application was created as a practical learning project using{' '}
					<strong>React</strong>, <strong>TypeScript</strong>, and{' '}
					<strong>Zustand</strong> for state management.
				</p>

				<p className='about-text'>
					The goal of the project is to understand how global state, selectors,
					and async actions work in a clean and scalable architecture.
				</p>

				<div className='about-section'>
					<h3 className='about-subtitle'>Technologies Used</h3>
					<ul className='about-list'>
						<li>⚛️ React (with functional components)</li>
						<li>🟦 TypeScript for type safety</li>
						<li>🐻 Zustand for global state management</li>
						<li>🌐 React Router for navigation</li>
						<li>🎨 CSS modules for styling</li>
					</ul>
				</div>

				<div className='about-section'>
					<h3 className='about-subtitle'>Features</h3>
					<ul className='about-list'>
						<li>Add todos</li>
						<li>Toggle complete / favorite</li>
						<li>Delete todos</li>
						<li>Fetch test todos from API</li>
						<li>View favorite items separately</li>
						<li>Detailed view for each favorite</li>
					</ul>
				</div>

				<p className='about-footer'>
					This project is part of learning path to understand React ecosystem
					and manage application state effectively. 🚀
				</p>
			</div>
		</section>
	);
}
