import { useContext } from 'react';

import { SavedCoinsContext } from '../../contexts/SavedCoinsContext';
import CoinItem from '../coin-item/coin-item';

const SavedCoins = ({ updatePriceOfSavedCoins }) => {
  const { savedCoins } = useContext(SavedCoinsContext);
  return (
    <div className='saved-coins-container coin-list-container main-container'>
      {savedCoins.map(coin => (
        <CoinItem coin={coin} key={coin.id} updatePriceOfSavedCoins={updatePriceOfSavedCoins} />
      ))}
    </div>
  )
}

export default SavedCoins;
