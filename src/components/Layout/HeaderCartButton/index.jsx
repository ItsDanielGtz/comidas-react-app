import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/cart-context';
import Page from './Page';

export default function HeaderCartButton ({
  onShowCart
}) {
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [btnIsHightLighted, setBtnIsHightLighted] = useState(false);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHightLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHightLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Page
    numberOfCartItems={numberOfCartItems}
    onShowCart={onShowCart}
    btnIsHightLighted={btnIsHightLighted}
    />
  );
}
