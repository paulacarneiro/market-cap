import { useState, useEffect, useContext } from 'react';

import { SavedCoinsContext } from '../../contexts/SavedCoinsContext';

import SearchBar from '../../components/search-bar/search-bar';
import SavedCoins from  '../../components/saved-coins/saved-coins';
import SearchResults from '../../components/search-results/search-results';

import { getCoinsByTerm, getCoinPrice } from '../../util/CoinGecko';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { savedCoins, setSavedCoins } = useContext(SavedCoinsContext);

  // handle Search Bar term change
  const handleTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (!term) {
      setIsSearchActive(false);
      return;
    }
    if (!isSearchActive) {
      setIsSearchActive(true);
    }
  }

  // search coins when SearchTerm changes
  useEffect(() => {
    if (!searchTerm) return;
    getCoinsByTerm(searchTerm).then(response => setSearchResults(response.coins));
  }, [searchTerm]);

  // when search is active, listen for clicks. if user clicks outside SearchResults or SearchBar, close SearchResults
   useEffect(() => {
    if (!isSearchActive) return;

    const outsideClick = (event) => {
      const pageElementsNodeList = document.querySelectorAll('[class*="page"]');
      const pageElementsArray = Array.prototype.slice.call(pageElementsNodeList);

      const targetElement = event.target;

      if (pageElementsArray.includes(targetElement)) {
        setSearchTerm('');
        setIsSearchActive(false);
      }
    }

    document.addEventListener('click', outsideClick);
    return () => document.removeEventListener('click', outsideClick);
  }, [isSearchActive]);

  // update the price of saved coins
  const updatePriceOfSavedCoins = async () => {
    const arrayOfIds = savedCoins.map(coin => coin.id);
    const strOfIds = arrayOfIds.join(',');
    const currency = 'eur';

    const prices = await getCoinPrice(strOfIds, currency);

    const updatedSavedCoins = savedCoins.map(coin => {
      return ({...coin, currentPrice: prices[coin.id][currency]});
    });

    setSavedCoins(updatedSavedCoins);
  }

  // whenever a coin is added or removed from savedCoins, update the price of all saved coins
  useEffect(() => {
    if (!savedCoins.length) return;
    updatePriceOfSavedCoins();
  },[savedCoins.length]);

  return (
    <div className='dashboard-page page'>
      <div className='page-header'>
        <SearchBar value={searchTerm} handleTermChange={handleTermChange} />
      </div>
      <div className='page-main'>
        {isSearchActive ? 
          <SearchResults isSearchActive={isSearchActive} searchResults={searchResults} updatePriceOfSavedCoins={updatePriceOfSavedCoins} /> :
          <SavedCoins savedCoins={savedCoins} updatePriceOfSavedCoins={updatePriceOfSavedCoins} />
        }  
      </div>
    </div>
  );
}

export default Dashboard;
