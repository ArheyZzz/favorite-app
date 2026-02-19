import {
	useDeleteTodo,
	useTodos,
	useToggleComplete,
	useToggleFavorite,
	type ITodo,
} from '../../store/favorites.store';
import './TodoList.css';

export default function TodoList() {
	const handleFavorite = useToggleFavorite();
	const handleComplete = useToggleComplete();
	const handleDelete = useDeleteTodo();
	const todos = useTodos();

	return (
		<div className='todo-container'>
			<h3 className='todo-heading'>Todos</h3>
			<ul className='todo-list'>
				{todos.map((todo: ITodo) => (
					<li className='todo-item' key={todo.id!}>
						<div className='todo-main'>
							<h4 className='todo-title'>{todo.title}</h4>
							<p className='todo-status'>
								Status:{' '}
								<span
									className={
										todo.completed
											? 'todo-status-label todo-status-label--done'
											: 'todo-status-label todo-status-label--pending'
									}
								>
									{todo.completed ? 'Completed' : 'Pending'}
								</span>
							</p>
						</div>

						<div className='todo-actions'>
							<button
								className='todo-btn todo-btn--favorite'
								onClick={() => handleFavorite(todo.id!)}
								title='Toggle favorite'
							>
								{todo.isFavorite ? '💙' : '🤍'}
							</button>
							<button
								className='todo-btn todo-btn--complete'
								onClick={() => handleComplete(todo.id!)}
								title='Toggle complete'
							>
								{todo.completed ? '✅' : '☑️'}
							</button>
							<button
								className='todo-btn todo-btn--delete'
								onClick={() => handleDelete(todo.id!)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
