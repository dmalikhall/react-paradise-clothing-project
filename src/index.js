import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { CartProvider } from './contexts/cart_context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>
    <CartProvider>
      <App />

    </CartProvider>



  </AppProvider>

);

