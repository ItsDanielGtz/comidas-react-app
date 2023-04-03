
import React from 'react';
import css from "./Input.module.css";

// eslint-disable-next-line react/display-name
const Page = ({
  label,
  input,
  amountInputRef
}) => {
  return (
    <div className={css.input}>
      <label htmlFor={input.id} >{label}</label>
      <input ref={amountInputRef} type="text" id={input.id} {...input} />
    </div>
  );
};

export default Page;