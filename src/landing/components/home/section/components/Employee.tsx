import { EmployeeInterface } from '../../../../interfaces/employees.interface';
import './Employee.css';

interface Props{
	employee: EmployeeInterface
}

export const Employee = ({ employee }: Props) => {
	
	const { description, name, employment, image } = employee;

	return (
		<>
			<div className='employee-info'>
				<p>{description}</p>
				<h3>{name}</h3>
				<span>{employment}</span>
				<div className="employee-container-image">
					<img src={image} alt={name} className='image-employee' />
				</div>
			</div>
		</>
	)
}
