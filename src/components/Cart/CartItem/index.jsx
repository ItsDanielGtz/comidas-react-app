import React from 'react';
import Page from './Page';

export default function CartItem({
  name,
  price,
  amount,
  onRemove,
  onAdd
}) {
  return (
    <Page
      name={name}
      price={price}
      amount={amount}
      onRemove={onRemove}
      onAdd={onAdd}
    />
  );
}
