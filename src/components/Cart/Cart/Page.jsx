import React from 'react';
import Modal from '../../UI/Modal';
import css from "./Cart.module.css";
import CartItem from '../CartItem';
import Checkout from '../Checkout';

export default function Page({
  onCloseCart,
  items,
  totalAmount,
  hasItems,
  onAdd,
  onRemove,
  orderHandler,
  isCheckout,
  submitOrderHandler,
  isSubmitting,
  didSubmit,
}) {
  // const cartItems = [{
  //   id: "c1",
  //   name: "Sushi",
  //   amount: 2,
  //   price: 12.99
  // }];

  const modalActions = (
    <div className={css.actions}>
      <button className={css["button--alt"]} onClick={onCloseCart} >Close</button>
      {hasItems && (
        <button className={css.button} onClick={orderHandler}>Order</button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
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
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={onCloseCart}/>}
        {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Enviando orden ...</p>;
  const didSubmitModalContent = (
  <>
    <p>Se envío tu orden correctamente</p>
    <div className={css.actions}>
      <button className={css.button} onClick={onCloseCart} >Close</button>
    </div>
  </>
  );

  return (
    <Modal
      onCloseCart={onCloseCart}
    >
      {!isSubmitting && !didSubmit && cartModalContent }
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}
