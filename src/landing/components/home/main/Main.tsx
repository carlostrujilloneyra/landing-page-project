import { Benefit } from './components';
import { useContext } from 'react';
import { StateContext } from '../../../context/StateContext';
import { infoMainArray } from '../../../data/home-info-main';
import { motion } from 'framer-motion';
import './Main.css';

export const Main = () => {

	const { menuOpen } = useContext(StateContext);

	return (
		<>
			<motion.main
				className={`main container ${menuOpen ? 'main--showOpacity' : ''} `}
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
