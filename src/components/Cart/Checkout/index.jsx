import React, { useRef, useState } from 'react';
import Page from './Page';

const isEmpty = value => value.trim() === "";
const isFiveChars = value => value.trim().length !== 5;

export default function Checkout({ onCancel, onConfirm }) {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = !isFiveChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      // eslint-disable-next-line no-useless-return
      return;
    }
    onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  // submit Cart Data
  return (
    <Page
      onCancel={onCancel}
      confirmHandler={confirmHandler}
      nameInputRef={nameInputRef}
      streetInputRef={streetInputRef}
      postalInputRef={postalInputRef}
      cityInputRef={cityInputRef}
      formInputValidity={formInputValidity}
    />
  );
}
