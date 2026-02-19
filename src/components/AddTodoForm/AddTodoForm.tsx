import { useState } from 'react';

import './AddTodoForm.css';
import { useAddTodo } from '../../store/favorites.store';

export default function AddTodoForm() {
	const [title, setTitle] = useState('');

	const addTodo = useAddTodo();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		addTodo({
			id: Date.now(),
			title: title,
			completed: false,
			userId: null,
			isFavorite: false,
		});

		setTitle('');
	};

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			<input
				className='todo-input'
				name='title'
				value={title}
				onChange={handleChange}
				placeholder='Enter todo title'
				required
			/>

			<button className='todo-submit-btn' type='submit'>
				Add Todo
			</button>
		</form>
	);
}
