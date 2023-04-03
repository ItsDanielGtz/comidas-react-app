import React from 'react';
import css from "./CartItem.module.css";

export default function Page({
  name,
  price,
  amount,
  onRemove,
  onAdd
}) {
  return (
    <li className={css['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={css.summary}>
          <span className={css.price}>${price.toFixed(2)}</span>
          <span className={css.amount}>x {amount}</span>
        </div>
      </div>
      <div className={css.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
}
