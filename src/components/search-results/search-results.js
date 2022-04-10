import CoinItem from '../coin-item/coin-item';

import './search-results.scss';

const SearchResults = ({ searchResults, updatePriceOfSavedCoins }) => {
  return (
    <div className='search-results-container coin-list-container main-container'>
      {searchResults.map(coin => (
        <CoinItem coin={coin} key={coin.id} updatePriceOfSavedCoins/>
      ))}
    </div>
  )
}

export default SearchResults;
