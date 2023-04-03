import React from 'react';
import Input from '../../../UI/Input';
import css from "./MealItemForm.module.css";

export default function Page ({
  id,
  amountInputRef,
  amountIsValid,
  submitHandler
}) {
  return (
    <form className={css.form} onSubmit={submitHandler}>
      <Input
        amountInputRef={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1"
        }}
      />
      <button >+ Add</button>
      {!amountIsValid && <p>Por Favor seleccione una cantidad valida (1-5)</p>}
    </form>
  );
}
