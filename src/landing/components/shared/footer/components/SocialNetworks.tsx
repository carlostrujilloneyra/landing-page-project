import { arraySocialNetworks } from '../../../../data/social-networks';
import './SocialNetworks.css';

export const SocialNetworks = () => {
	return (
		<>
			<div className='container-social-networks'>
				{
					arraySocialNetworks.map(({id,url}) => {
						return <img key={id} src={url} alt="image-social-network" />
					})
				}
			</div>
		</>
	)
}
