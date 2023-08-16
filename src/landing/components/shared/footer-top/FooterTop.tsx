import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FooterTop.css';

const item = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0
	}
}

export const FooterTop = () => {

	const navigate = useNavigate();

	const handleNavigateContact = () => {
		navigate('/contact');
	}

	return (
		<>
			<motion.div
				className="container-footer-top container"
				initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={item}
        transition={{ duration: 1.8 }}
			>
				<h2 className="footer-top-title">Ready to get started?</h2>
				<div className='container-footer-top__button'>
					<button
						onClick={handleNavigateContact}
						className='footer-top__button'>
						contact us
					</button>
				</div>
			</motion.div>
		</>
	)
}
