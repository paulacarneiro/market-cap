import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import './search-bar.scss';

const SearchBar = ({ value, handleTermChange }) => {
  return (
    <div className='search-bar-container' id='search-bar'>
      <input type='search'
        placeholder='Search coins'
        className='search-input'
        value={value}
        onChange={handleTermChange}
      />
      {/* <button className='search-button' onClick={handleSearch}>
        <SearchIcon className='search-icon'/>
      </button> */}
    </div>
  )
}

export default SearchBar;
