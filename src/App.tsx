import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FavoriteDetailsPage from './pages/FavoriteDetailsPage/FavoriteDetailsPage';
import NotFound from './pages/NotFound/NotFound';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/favorite' element={<FavoritesPage />} />
					<Route path='/favorite/:id' element={<FavoriteDetailsPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
