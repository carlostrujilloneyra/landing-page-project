import { Director } from '../../../../interfaces/directors.interface'
import './DirectorCard.css';

interface Props{
	director: Director
}

export const DirectorCard = ({director}: Props) => {
	return (
		<>
			<div className='director-card'>
				<img className='director-card__image' src={director.image} alt={director.name} />
				<h3 className='director-card__name'>{ director.name }</h3>
				<span className='director-card__role'>{director.role}</span>
				<div className="director-card__social">
					<img src="/assets/social-networks/icon-twitter.svg" alt="icon-twitter" />
					<img src="/assets/social-networks/icon-linkedin.svg" alt="icon-linkedin" />
				</div>
			</div>
		</>
	)
}
