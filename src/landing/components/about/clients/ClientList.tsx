import { clients } from '../../../data/clientes';
import { cubicBezier, motion } from 'framer-motion';
import './ClientList.css';

export const ClientList = () => {
	return (
		<>
			<section className="section-clients-about container">
				<motion.div
					initial={{ opacity: 0, y: -400 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1,
						ease: cubicBezier(0.6, 0.01, -0.05, 0.75)
					}}
				>
				<h2 className='section-clients__title'>Some of our clients</h2>

				</motion.div>
				<div className="container-grid-clients">
					{
						clients.map(({ image, name }) => {
							return <img 
								className='client-logo-image'
								key={name}
								src={image}
								alt={name}
							/>
						})
					}
				</div>
			</section>
		</>
	)
}
