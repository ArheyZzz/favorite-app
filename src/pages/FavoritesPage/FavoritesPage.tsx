import { Link } from 'react-router-dom';
import { useTodos } from '../../store/favorites.store';
import './FavoritesPage.css';

export default function FavoritesPage() {
	const todos = useTodos();
	const favoritesTodo = todos.filter(todo => todo.isFavorite);

	return (
		<section className='favorites'>
			<header className='favorites-header'>
				<h2 className='favorites-title'>My Favorite Todos</h2>
				<p className='favorites-subtitle'>
					Here you&apos;ll see all todos that you&apos;ve marked as favorites.
				</p>
			</header>

			{favoritesTodo.length === 0 ? (
				<p className='favorites-empty'>
					You don&apos;t have any favorites yet. Mark a todo with 💙 to see it
					here.
				</p>
			) : (
				<ul className='favorites-list'>
					{favoritesTodo.map(todo => (
						<li className='favorites-item' key={todo.id!}>
							<Link className='favorites-link' to={`/favorite/${todo.id}`}>
								<div className='favorites-item-main'>
									<span className='favorites-item-title'>{todo.title}</span>
									<span
										className={
											todo.completed
												? 'favorites-status favorites-status--done'
												: 'favorites-status favorites-status--pending'
										}
									>
										{todo.completed ? 'Completed' : 'Pending'}
									</span>
								</div>
								<span className='favorites-item-chevron'>›</span>
							</Link>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
