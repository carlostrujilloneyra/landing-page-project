import { directors } from '../../../data/directors';
import { DirectorCard } from './components';
import './DirectorList.css';

export const DirectorList = () => {
	return (
		<>
			<main className="main-about-container container">
				<h2 className='about-directors__subtitle'>Meet the directors</h2>
				<div className='about-container__directors'>
					{
						directors.map(director => {
							return <DirectorCard director={director} key={director.name} />
						})
					}
				</div>
			</main>
		</>
	)
}
