import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AddSymbol} from '../../assets/plus.svg';
import { ReactComponent as RemoveSymbol} from '../../assets/minus.svg';

import { SavedCoinsContext } from '../../contexts/SavedCoinsContext';

import './coin-item.scss';

const CoinItem = ({ coin, updatePriceOfSavedCoins }) => {
  const { id, name, symbol, thumb, currentPrice } = coin;
  
  const [isSaved, setIsSaved] = useState(false);
  const { savedCoins, setSavedCoins } = useContext(SavedCoinsContext);

  useEffect(() => {
    const findId = savedCoins.find(coin => coin.id === id);
    if (findId) {
      setIsSaved(true);
    }
  }, []);

  const toggleSaved = () => {
    if (isSaved) {
      setSavedCoins(prevSavedCoins => prevSavedCoins.filter(savedCoin => savedCoin.id !== coin.id));
      setIsSaved(false);
    } else {
      setSavedCoins(prevSavedCoins => [...prevSavedCoins, coin]);
      setIsSaved(true);
    }    
  };

  return (
    <div className='coin-item-container'>
      <img className='coin-thumb' src={thumb} alt={`${name} logo`}/>
      <Link className='coin-link' to={`/${coin.id}`}>
        <span className='coin-symbol'>{symbol}</span>
        <span className='coin-name'>{name}</span>
      </Link>
      {currentPrice && <span className='coin-price'>&euro; {currentPrice && currentPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>}
      <button className='button-toggleSaved' onClick={toggleSaved}>
        {isSaved ? <RemoveSymbol className='toggle-icon' /> : <AddSymbol className='toggle-icon' />}
      </button>
    </div>
  )
}

export default CoinItem;
