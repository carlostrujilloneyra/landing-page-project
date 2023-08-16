import { directors } from '../../../data/directors';
import { DirectorCard } from './components';
import { cubicBezier, motion } from 'framer-motion';
import './DirectorList.css';

export const DirectorList = () => {
	return (
		<>
			<main className="main-about-container container">
				<motion.div
					initial={{ opacity: 0, y: -400 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						ease: cubicBezier(0.6, 0.01, -0.05, 0.75)
					}}
				>
					<h2 className='about-directors__subtitle'>Meet the directors</h2>
				</motion.div>
				<motion.div
					className='about-container__directors'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ ease: 'easeInOut', duration: 1.6 }}
				>
					{
						directors.map(director => {
							return <DirectorCard director={director} key={director.name} />
						})
					}
				</motion.div>
			</main>
		</>
	)
}
