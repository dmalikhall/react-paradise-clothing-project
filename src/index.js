import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/styles/Navbar.css';
import '../src/styles/Submenu.css';
import '../src/styles/Home.css';
import '../src/styles/ShoppingCart.css';
import '../src/styles/ShopallPage.css';
import '../src/styles/SinglePage.css';
import '../src/styles/Footer.css';
import '../src/styles/Error.css'

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

