// src/hooks/useBitcoinPrice.js
import { useEffect, useReducer } from 'react';

// Initial state
const initialState = {
  bitcoinPrice: null,
  loading: false,
  error: null,
};

// Reducer function to manage state transitions
function bitcoinPriceReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, bitcoinPrice: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      throw new Error('Unhandled action type');
  }
}

// Custom hook to fetch Bitcoin price
export function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(bitcoinPriceReducer, initialState);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: data.bitcoin[currency.toLowerCase()],
        });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', error: 'Failed to fetch data' });
      }
    };

    fetchBitcoinPrice();
  }, [currency]);

  return state; // Return the state to be used by the component
}