import './coin-details.scss';

const CoinDetails = ({ coinDetails }) => {
  const { name, marketCap, volumeTraded, logo, description } = coinDetails;

  return (
    <div className='coin-container main-container'>
      <div className='row'>
        <img className='coin-logo' src={logo} alt={`${name} logo`}/>
        <div className='market-data'>
          <div className='market-cap-container'>
            <p className='market-cap-label label'>Market capitalization:</p>
            <p className='market-cap-value value'>&euro; {marketCap && marketCap.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
          </div>
          <div className='volume-traded-container'>
            <p className='volume-traded-label label'>Volume traded:</p>
            <p className='volume-traded-value value'>&euro; {volumeTraded && volumeTraded.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
          </div>
          </div>
      </div>
      <div className='coin-description'>
        <p>{description}</p>
      </div>
      
    </div>
  )
}

export default CoinDetails;
