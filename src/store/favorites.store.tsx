import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ITodo {
	id: number | null;
	title: string;
	completed: boolean;
	userId: number | null;
	isFavorite: boolean;
}

// Тип под ответ API (без isFavorite)
interface ApiTodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

interface IInitialState {
	todos: ITodo[];
	isLoading: boolean;
}

interface IActions {
	fetchTodos: () => Promise<void>;
	toggleFavorite: (id: number) => void;
	toggleComplete: (id: number) => void;
	deleteTodo: (id: number) => void;
	addTodo: (todo: ITodo) => void;
}

interface IFavoriteStore extends IInitialState, IActions {}

const initialState: IInitialState = {
	todos: [],
	isLoading: false,
};

const useFavoriteStore = create<IFavoriteStore>()(
	persist(
		set => ({
			...initialState,

			fetchTodos: async () => {
				// ставим loading
				set({ isLoading: true });

				try {
					const res = await fetch(
						'https://jsonplaceholder.typicode.com/todos?_limit=10'
					);
					const data: ApiTodo[] = await res.json();

					const newData: ITodo[] = data.map(todo => ({
						...todo,
						isFavorite: false,
					}));

					set({ todos: newData, isLoading: false });
				} catch (error) {
					console.error('Error fetching todos:', error);
					set({ isLoading: false });
				}
			},

			toggleFavorite: (id: number) => {
				set(state => ({
					todos: state.todos.map(todo =>
						todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo
					),
				}));
			},

			toggleComplete: (id: number) => {
				set(state => ({
					todos: state.todos.map(todo =>
						todo.id === id ? { ...todo, completed: !todo.completed } : todo
					),
				}));
			},

			deleteTodo: (id: number) => {
				set(state => ({
					todos: state.todos.filter(todo => todo.id !== id),
				}));
			},

			addTodo: (todo: ITodo) => {
				set(state => ({
					todos: [...state.todos, todo],
				}));
			},
		}),
		{
			name: 'favorite-todos-storage', // имя в хранилище
		}
	)
);

// селекторы
export const useTodos = () => useFavoriteStore(state => state.todos);
export const useIsLoading = () => useFavoriteStore(state => state.isLoading);
export const useFetchTodos = () => useFavoriteStore(state => state.fetchTodos);

export const useToggleFavorite = () =>
	useFavoriteStore(state => state.toggleFavorite);
export const useToggleComplete = () =>
	useFavoriteStore(state => state.toggleComplete);
export const useDeleteTodo = () => useFavoriteStore(state => state.deleteTodo);
export const useAddTodo = () => useFavoriteStore(state => state.addTodo);
