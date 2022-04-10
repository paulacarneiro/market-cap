import { createContext, useState } from 'react';

export const SavedCoinsContext = createContext({
	savedCoins: null,
	setSavedCoins: () => null
});

export const SavedCoinsProvider = ({ children }) => {
	const [savedCoins, setSavedCoins] = useState([]);
	const value = { savedCoins, setSavedCoins};
	return <SavedCoinsContext.Provider value={value}>{ children }</SavedCoinsContext.Provider>
};