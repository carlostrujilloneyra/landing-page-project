import { useNavigate } from 'react-router-dom';
import './FooterTop.css';

export const FooterTop = () => {

	const navigate = useNavigate();

	const handleNavigateContact = () => {
		navigate('/contact');
	}

	return (
		<>
			<div className="container-footer-top container">
				<h2 className="footer-top-title">Ready to get started?</h2>
				<div className='container-footer-top__button'>
					<button
						onClick={handleNavigateContact}
						className='footer-top__button'>
						contact us
					</button>
				</div>
			</div>
		</>
	)
}
