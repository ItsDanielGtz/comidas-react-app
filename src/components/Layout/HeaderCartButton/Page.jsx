import React from 'react';
import CartIcon from '../../Cart/CartIcon';
import css from "./HeaderCartButton.module.css";

export default function Page () {
  return (
    <>
      <button className={css.button}>
        <span className={css.icon}>
          <CartIcon/>
        </span>
        <span >Tu carrito</span>
        <span className={css.badge}>3</span>
      </button>
    </>
  );
};
