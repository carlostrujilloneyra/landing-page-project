import { useNavigate } from 'react-router-dom';
import './Logo.css';

export const Logo = () => {

	const navigate = useNavigate();

	const handleNavigateHome = () => {
		navigate('/');
	}

	return (
		<>
			<img
				className='logo-header'
				src="/assets/logo.svg"
				alt="main-logo-image"
				onClick={handleNavigateHome}
			/>
		</>
	)
}
