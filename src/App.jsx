import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(!cartIsShown);
  }

  return (
      <CartProvider>
        {cartIsShown &&
          <Cart onCloseCart={showCartHandler} />
        }
        <Header
          onShowCart={showCartHandler}
        />
        <main>
          <Meals />
        </main>
      </CartProvider>
  );
}

export default App;