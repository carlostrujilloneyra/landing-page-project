import { useContext } from 'react';
import { StateContext } from '../../../../context/StateContext';
import './Hamburguer.css';

export const Hamburguer = () => {

	const { menuOpen, setMenuOpen } = useContext(StateContext);

	const handleTapIcon = (event: React.TouchEvent) => {
		event.stopPropagation();
		setMenuOpen(!menuOpen);
	}	

	return (
		<>
			<div
				className={`container-main-hamburguer ${menuOpen ? 'container-main-hamburguer--new' : ''}`}
				onTouchStart={handleTapIcon}
			>
			</div>
		</>
	)
}
