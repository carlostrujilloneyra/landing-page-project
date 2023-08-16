import { directors } from '../../../data/directors';
import { DirectorCard } from './components';
import { motion } from 'framer-motion';
import './DirectorList.css';

export const DirectorList = () => {
	return (
		<>
			<main className="main-about-container container">
				<h2 className='about-directors__subtitle'>Meet the directors</h2>
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
