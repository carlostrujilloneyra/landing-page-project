import { clients } from '../../../data/clientes';
import './ClientList.css';

export const ClientList = () => {
	return (
		<>
			<section className="section-clients-about container">
				<h2 className='section-clients__title'>Some of our clients</h2>
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
