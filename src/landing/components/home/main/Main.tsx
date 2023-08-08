import { infoMainArray } from '../../../data/home-info-main';
import { Benefit } from './components';
import './Main.css';

export const Main = () => {
	return (
		<>
			<main className='main container'>
				<h2>Build & manage distributed teams like no one else.</h2>

				<div className="list-benefits">
					{
						infoMainArray.map(benefit => {
							return <Benefit key={benefit.id} benefit={benefit} />
						})
					}
				</div>

			</main>
		</>
	)
}
