import React from 'react';
import Page from './Page';

export default function HeaderCartButton ({
  onShowCart
}) {
  return (
    <Page
    onShowCart={onShowCart}
    />
  );
}
