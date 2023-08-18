import { createContext } from "react";

export interface StateContextProp{
	menuOpen: boolean,
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const StateContext = createContext ({} as StateContextProp);