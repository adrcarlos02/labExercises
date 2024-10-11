// src/components/BitcoinRates.jsx
import { useState } from 'react';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice'; // Import the custom hook

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  
  // Use the custom hook to fetch the Bitcoin price
  const { bitcoinPrice, loading, error } = useBitcoinPrice(currency);

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

      {/* Conditionally render content based on loading and error states */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Current Bitcoin price in {currency}: {bitcoinPrice}</p>
      )}
    </div>
  );
}

export default BitcoinRates;