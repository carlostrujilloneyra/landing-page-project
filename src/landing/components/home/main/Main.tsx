import { motion } from 'framer-motion';
import { infoMainArray } from '../../../data/home-info-main';
import { Benefit } from './components';
import './Main.css';

export const Main = () => {
	return (
		<>
			<motion.main
				className='main container'
			>
				<h2 className='subtitle-main'>Build & manage distributed teams like no one else.</h2>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{opacity: 1}}
					transition={{ ease: 'easeInOut', duration: 1.6 }}
					className="list-benefits"
				>
					{
						infoMainArray.map(benefit => {
							return <Benefit key={benefit.id} benefit={benefit} />
						})
					}
				</motion.div>

			</motion.main>
		</>
	)
}
