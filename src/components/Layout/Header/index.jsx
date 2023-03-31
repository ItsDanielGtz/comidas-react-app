import React from 'react';
import Page from './Page';

export default function Header ({
  onShowCart
}) {
  return (
    <Page
      onShowCart={onShowCart}
    />
  );
}
