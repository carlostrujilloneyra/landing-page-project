import { useNavigate } from 'react-router-dom';
import './Button.css';

export const Button = () => {

	const navigate = useNavigate();

	const handleNavigateContact = () => {
		navigate('/contact');
	}

	return (
		<>
			<button
				className='button-header'
				onClick={handleNavigateContact}
			>
				contact us
			</button>
		</>
	)
}
