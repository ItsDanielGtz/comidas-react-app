import React from 'react';
import Page from './Page';

export default function Cart ({
  onCloseCart
}) {
  return (
    <Page
      onCloseCart={onCloseCart}
    />
  );
}