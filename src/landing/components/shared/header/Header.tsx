import { useContext } from 'react';
import { StateContext } from '../../../context/StateContext';
import { Hamburguer, Logo, Nav } from './components';
import './Header.css';

export const Header = () => {

	const { menuOpen } = useContext(StateContext);	

	return (
		<>
			<header
				className={`main-header ${menuOpen ? 'main-header--showOpacity' : ''} container`}>

				<Logo />

				{/* Barra de navegación */}
				<Nav />

				{/* Menú hamburguesa */}
				<Hamburguer />


			</header>
		</>
	)
}
