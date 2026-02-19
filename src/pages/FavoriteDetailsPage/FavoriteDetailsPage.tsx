import { Link, useParams } from 'react-router-dom';
import './FavoriteDetailsPage.css';
import { useTodos } from '../../store/favorites.store';

export default function FavoriteDetailsPage() {
	const { id } = useParams();
	const todoId = Number(id);
	const todos = useTodos();
	const todo = todos.find(item => item.id === todoId);

	if (!id || Number.isNaN(todoId)) {
		return (
			<section className='details'>
				<div className='details-card'>
					<p className='details-message'>Invalid todo id.</p>
					<Link className='details-back' to='/favorite'>
						← Back to favorites
					</Link>
				</div>
			</section>
		);
	}

	if (!todo) {
		return (
			<section className='details'>
				<div className='details-card'>
					<p className='details-message'>Todo not found.</p>
					<Link className='details-back' to='/favorite'>
						← Back to favorites
					</Link>
				</div>
			</section>
		);
	}

	return (
		<section className='details'>
			<div className='details-card'>
				<header className='details-header'>
					<h2 className='details-title'>{todo.title}</h2>
					<span
						className={
							todo.completed
								? 'details-status details-status--done'
								: 'details-status details-status--pending'
						}
					>
						{todo.completed ? 'Completed' : 'Pending'}
					</span>
				</header>

				<div className='details-body'>
					<p className='details-row'>
						<span className='details-label'>ID:</span>
						<span className='details-value'>{todo.id}</span>
					</p>
					<p className='details-row'>
						<span className='details-label'>User ID:</span>
						<span className='details-value'>{todo.userId ?? '—'}</span>
					</p>
					<p className='details-row'>
						<span className='details-label'>Favorite:</span>
						<span className='details-value'>
							{todo.isFavorite ? '💙 Yes' : '🤍 No'}
						</span>
					</p>
				</div>

				<footer className='details-footer'>
					<Link className='details-back' to='/favorite'>
						← Back to favorites
					</Link>
					<Link className='details-link-home' to='/'>
						Go to Home →
					</Link>
				</footer>
			</div>
		</section>
	);
}
