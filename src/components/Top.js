import React, { useState, useEffect } from 'react';

function Top() {
  const [cryptoArr, setCryptoArr] = useState([]);

  useEffect(() => {
    fetch('https://api.coinlore.net/api/tickers/')
      .then((response) => response.json())
      .then((data) => {
        const top10Data = data.data.slice(0, 10);
        setCryptoArr(top10Data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='top-container'>
      <h1>Top 10 Global Crypto Coins</h1>
      <div className='display-container'>
        {cryptoArr.map((crypto, index) => (
          <div className='coin-container' key={crypto.id}>
            <p className='rank-para'>Rank #{index + 1}</p>
            <h3 className='coin-symbol'>{crypto.name} ({crypto.symbol})</h3>
            <p className='price-para'>Price: ${crypto.price_usd}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top;
