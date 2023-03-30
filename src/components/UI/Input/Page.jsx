import React from 'react';
import css from "./Input.module.css";

export default function Page ({
  label,
  input
}) {
  return (
    <div className={css.input}>
      <label htmlFor={input.id} >{label}</label>
      <input type="text" id={input.id} {...input} />
    </div>
  );
}
