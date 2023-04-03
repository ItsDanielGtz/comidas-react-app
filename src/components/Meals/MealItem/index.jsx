import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import Page from './Page';

export default function MealItem ({
  name,
  description,
  price,
  id
}) {
  const { addItem } = useContext(CartContext);
  const addToCartHandler = amount => {
    addItem({
      id,
      name,
      amount,
      price
    });
  };

  return (
   <Page
    id={id}
    name={name}
    description={description}
    price={price}
    addToCartHandler={addToCartHandler}
   />
  );
}
