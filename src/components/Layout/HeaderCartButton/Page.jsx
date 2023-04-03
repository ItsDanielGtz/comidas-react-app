import React from 'react';
import CartIcon from '../../Cart/CartIcon';
import css from "./HeaderCartButton.module.css";

export default function Page ({
  onShowCart,
  numberOfCartItems,
  btnIsHightLighted
}) {
  const btnClasses = `${css.button} ${btnIsHightLighted && css.bump}`;

  return (
    <>
      <button className={btnClasses} onClick={onShowCart}>
        <span className={css.icon}>
          <CartIcon/>
        </span>
        <span >Tu carrito</span>
        <span className={css.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};
