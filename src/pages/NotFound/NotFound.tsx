import './NotFound.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NotFound() {
	const [count, setCount] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		if (count <= 0) navigate('/');

		const interval = setInterval(() => {
			setCount(prevCount => prevCount - 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [count, navigate]);

	return (
		<div className='not-found'>
			<div className='not-found-card'>
				<h2 className='not-found-title'>Страница не найдена :(</h2>
				<span className='not-found-text'>
					Вы будете перенаправлены на главную через: <strong>{count}</strong>
				</span>
			</div>
		</div>
	);
}

export default NotFound;
