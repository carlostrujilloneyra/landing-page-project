import { useState } from "react"
import { StateContext } from "./StateContext";

interface Props{
	children: JSX.Element | JSX.Element[]
}

export const StateProvider = ({ children }: Props) => {

	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	return (
		<>
			<StateContext.Provider value={{
				menuOpen,
				setMenuOpen
			}}>
				{children}
			</StateContext.Provider>
		</>
	)
}