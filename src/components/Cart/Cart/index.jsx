import React, { useContext, useEffect } from 'react';
import Page from './Page';
import CartContext from '../../../store/cart-context';

export default function Cart ({
  onCloseCart
}) {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const hasItems = items.length > 0;

  const cartItemRemoveHandler = id => {
    // items.map((item) => {
    //   if (id === item.id) {
    //     return items.pop();
    //   }
    //   return items;
    // });
    removeItem(id);
  };

  const cartItemAddHandler = item => {
    addItem(item);
  };

  useEffect(() => {

  }, [items]);

  return (
    <Page
      onCloseCart={onCloseCart}
      items={items}
      totalAmount={totalAmount}
      hasItems={hasItems}
      onAdd={cartItemAddHandler}
      onRemove={cartItemRemoveHandler}
    />
  );
}