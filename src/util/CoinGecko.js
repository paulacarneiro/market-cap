// Search coin by name
export const getCoinsByTerm = async (term) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${term}`, requestOptions);
    return await response.json();
  } catch (error) {
    console.log('error: search by name', error);
    return '';
  }
}

// Get coin details by coin id
export const getCoinDetails = async (id) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`, requestOptions);
    return await response.json();
  } catch (error) {
    console.log('error: coin details', error);
    return '';
  }
}

// Get current price by coin id (1+)
export const getCoinPrice = async (ids, currency) => { 
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${currency}`, requestOptions);
    return await response.json();
  } catch (error) {
    console.log('error: current price', error);
    return '';
  }
}
