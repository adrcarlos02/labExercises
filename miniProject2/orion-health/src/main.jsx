import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Your global styles
import { BrowserRouter } from 'react-router-dom'; // For routing
import AppContextProvider from './context/AppContext.jsx'; // Your context provider

// Create a root element and render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);