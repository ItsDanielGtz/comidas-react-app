import React, { useContext, useEffect, useState } from 'react';
import Page from './Page';
import CartContext from '../../../store/cart-context';

export default function Cart({
  onCloseCart
}) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { items, totalAmount, addItem, removeItem, clearItems } = useContext(CartContext);

  const hasItems = items.length > 0;

  const cartItemRemoveHandler = id => {
    removeItem(id);
  };

  const cartItemAddHandler = item => {
    addItem(item);
  };

  useEffect(() => {

  }, [items]);

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch("https://react-http-curso-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: items
      }),
    });

    if (!response.ok) {
      throw new Error("Algo salio mal, no se pudo enviar tu orden");
    }
    setIsSubmitting(false);
    setDidSubmit(true);
    clearItems();
  };

  return (
    <Page
      onCloseCart={onCloseCart}
      items={items}
      totalAmount={totalAmount}
      hasItems={hasItems}
      onAdd={cartItemAddHandler}
      onRemove={cartItemRemoveHandler}
      orderHandler={orderHandler}
      isCheckout={isCheckout}
      submitOrderHandler={submitOrderHandler}
      isSubmitting={isSubmitting}
      didSubmit={didSubmit}
    />
  );
}