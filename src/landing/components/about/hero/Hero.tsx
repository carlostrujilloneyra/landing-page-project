import { cubicBezier, motion } from 'framer-motion';
import './Hero.css';

export const Hero = () => {
	return (
		<>
			<div
				className="container-hero-about container"
			>
				<motion.div
					initial={{ opacity: 0, x: -400 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1,
						ease: cubicBezier(0.6, 0.01, -0.05, 0.75)
					}}
				>
					<h1 className='title-about'>About</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 400 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1,
						ease: cubicBezier(0.6, 0.01, -0.05, 0.75)
					}}
				>
					<p className='paragraph-about'>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
				</motion.div>
			</div>
		</>
	)
}
