// src/components/BitcoinRates.jsx
import { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  // Fetch Bitcoin price when the currency changes
  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
      } catch (error) {
        console.error('Error fetching the Bitcoin price:', error);
      }
    };

    fetchBitcoinPrice();
  }, [currency]); // Dependency array to refetch data when currency changes

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>Current Bitcoin price in {currency}: {bitcoinPrice ? bitcoinPrice : 'Loading...'}</p>
    </div>
  );
}

export default BitcoinRates;