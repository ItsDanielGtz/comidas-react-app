import React, { useRef, useState } from 'react';
import Page from './Page';

export default function MealItemForm({
  id,
  onAddToCart
}) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <Page
      id={id}
      amountInputRef={amountInputRef}
      amountIsValid={amountIsValid}
      submitHandler={submitHandler}
    />
  );
}
