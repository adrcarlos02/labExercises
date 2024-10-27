import React, { useState } from 'react';
import { Paper, Typography, FormControl, Select, MenuItem, CircularProgress } from '@mui/material';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice'; // Import the custom hook

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  
  // Use the custom hook to fetch the Bitcoin price
  const { bitcoinPrice, loading, error } = useBitcoinPrice(currency);

  return (
    <Paper elevation={3} style={{ padding: '2rem', margin: '2rem' }}>
      <Typography variant="h4" component="h3" gutterBottom>
        Bitcoin Exchange Rate
      </Typography>
      
      <FormControl fullWidth variant="outlined" margin="normal">
        <Typography variant="body1" gutterBottom>
          Choose currency:
        </Typography>
        <Select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          displayEmpty
        >
          {currencies.map((curr) => (
            <MenuItem value={curr} key={curr}>
              {curr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Conditionally render content based on loading and error states */}
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : (
        <Typography variant="h6">
          Current Bitcoin price in {currency}: ${bitcoinPrice}
        </Typography>
      )}
    </Paper>
  );
}

export default BitcoinRates;