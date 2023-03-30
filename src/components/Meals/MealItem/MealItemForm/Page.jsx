import React from 'react';
import Input from '../../../UI/Input';
import css from "./MealItemForm.module.css";

export default function Page ({
  id
}) {
  return (
    <form className={css.form}>
      <Input
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
    </form>
  );
}
