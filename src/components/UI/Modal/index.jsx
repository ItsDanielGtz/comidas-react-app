import React from 'react';
import Page from './Page';

export default function Modal({ children, onCloseCart }) {
  return (
    <Page
    onCloseCart={onCloseCart}
    >
      {children}
    </Page>
  );
}
