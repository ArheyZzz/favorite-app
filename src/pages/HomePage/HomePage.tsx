import './HomePage.css';
import { useFetchTodos, useIsLoading } from '../../store/favorites.store';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm';
import TodoList from '../../components/TodoList/TodoList';

export default function HomePage() {
	const isLoading = useIsLoading();
	const fetchTodos = useFetchTodos();

	if (isLoading) {
		return (
			<div className='home-page'>
				<div className='home-loading'>Loading...</div>
			</div>
		);
	}

	return (
		<div className='home-page'>
			<header className='home-header'>
				<h1 className='home-title'>Todo Favorites</h1>
				<button className='home-fetch-btn' onClick={fetchTodos}>
					Load todos from internet
				</button>
			</header>

			<section className='home-content'>
				<AddTodoForm />
				<TodoList />
			</section>
		</div>
	);
}
