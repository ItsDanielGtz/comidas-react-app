import React from 'react';
import Page from './Page';

// eslint-disable-next-line react/display-name
const Input = ({
  label,
  input,
  amountInputRef,
}) => {
  return (
    <Page
      amountInputRef={amountInputRef}
      label={label}
      input={input}
    />
  );
};

export default Input;