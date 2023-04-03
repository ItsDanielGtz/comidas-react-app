import React from 'react';
import Modal from '../../UI/Modal';
import css from "./Cart.module.css";
import CartItem from '../CartItem';

export default function Page ({
  onCloseCart,
  items,
  totalAmount,
  hasItems,
  onAdd,
  onRemove,
}) {
  // const cartItems = [{
  //   id: "c1",
  //   name: "Sushi",
  //   amount: 2,
  //   price: 12.99
  // }];

  return (
    <Modal
      onCloseCart={onCloseCart}
    >
      <ul className={css["cart-items"]}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={onAdd.bind(null, item)}
            onRemove={onRemove.bind(null, item.id)}
          />
          // <li key={item.id} >{item.name}</li>
        ))}
      </ul>
      <div className={css.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={onCloseCart} >Close</button>
        {hasItems && (
          <button className={css.button}>Order</button>
        )}
      </div>
    </Modal>
  );
}
