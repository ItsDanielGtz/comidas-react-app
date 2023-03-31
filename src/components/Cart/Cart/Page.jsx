import React from 'react';
import Modal from '../../UI/Modal';
import css from "./Cart.module.css";

export default function Page ({
  onCloseCart
}) {
  const cartItems = [{
    id: "c1",
    name: "Sushi",
    amount: 2,
    price: 12.99
  }];

  return (
    <Modal
      onCloseCart={onCloseCart}
    >
      <ul className={css["cart-items"]}>
        {cartItems.map((item) => (
          <li key={item.id} >{item.name}</li>
        ))}
      </ul>
      <div className={css.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={onCloseCart} >Close</button>
        <button className={css.button}>Order</button>
      </div>
    </Modal>
  );
}
