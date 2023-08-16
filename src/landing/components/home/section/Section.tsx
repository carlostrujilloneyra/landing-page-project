import { Employee } from './components';
import { employeesHome } from '../../../data/employees';
import './Section.css';
import { motion } from 'framer-motion';

export const Section = () => {
	return (
		<>
			<motion.section
				initial={{ x: -400 }}
				animate={{ x: 0 }}
				exit={{ x: 0 }}
				transition={{ ease: "easeInOut", duration: 1.8 }}
				className='home-section container'
			>
				<h2 className='subtitle-section-home'>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
				<div className="container-grid-employees">
					{
						employeesHome.map(employee => {
							return <Employee key={employee.name} employee={employee} />
						})
					}
				</div>
			</motion.section>
		</>
	)
}
