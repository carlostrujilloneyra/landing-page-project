import { BenefitContact } from '../../../interfaces/benefits.interface';
import './Detail.css';

interface Props{
	benefit: BenefitContact
}

export const Detail = ({ benefit }: Props) => {
	
	const { image, description } = benefit;

	return (
		<>
			<div className='main-detail__grid'>
				<img className='icon-benefit' src={image} alt="icon-benefit" />
				<p className='detail-paragraph'>{ description }</p>
			</div>
		</>
	)
}
