import { Employee } from './components';
import { employeesHome } from '../../../data/employees';
import './Section.css';

export const Section = () => {
	return (
		<>
			<section className='home-section container'>
				<h2 className='subtitle-section-home'>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
				<div className="container-grid-employees">
					{
						employeesHome.map(employee => {
							return <Employee key={employee.name} employee={employee} />
						})
					}
				</div>
			</section>
		</>
	)
}
