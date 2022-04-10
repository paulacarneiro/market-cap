import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ReturnArrow } from '../../assets/circle-left.svg';
import CoinDetails from "../../components/coin-details/coin-details";
import { getCoinDetails } from "../../util/CoinGecko";

import './coin-page.scss';

const CoinInfo = () => {
  const [coinDetails, setCoinDetails] = useState({
    id: '',
    name: '',
    symbol: '',
    marketCap: '',
    volumeTraded: '',
    logo: '',
    description: '',
  });

  const coinId = window.location.pathname.match(/[^/]+$/)[0];

  useEffect(() => {
    getCoinDetails(coinId).then(response => {
      const details = {
        name: response.name,
        symbol: response.symbol,
        marketCap: response.market_data.market_cap.eur,
        volumeTraded: response.market_data.total_volume.eur,
        logo: response.image.large,
        description: response.description.en
      };
      setCoinDetails(details);
    });
  }, [coinId]);

  return (
    <div className='coin-page page'>
      <div className='page-header'>
        <div className='return-arrow-wrapper'>
          <Link to='/'>
            <ReturnArrow className='return-arrow-icon'/>
          </Link>
        </div>
        <div className='coin-header'>
          <h2>{coinDetails.symbol.toLocaleUpperCase()}</h2>
          <h3>{coinDetails.name}</h3>
        </div>
      </div>
      <div className='page-main'>
         <CoinDetails coinDetails={coinDetails} />
      </div>
    </div>
  )
}

export default CoinInfo;
