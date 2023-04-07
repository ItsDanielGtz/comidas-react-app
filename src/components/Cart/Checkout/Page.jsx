import React from 'react';
import css from "./Checkout.module.css";

export default function Page({
  onCancel,
  confirmHandler,
  nameInputRef,
  streetInputRef,
  postalInputRef,
  cityInputRef,
  formInputValidity
}) {
  const nameControlClasses = `${css.control} ${formInputValidity.name ? "" : css.invalid}`;
  const streetControlClasses = `${css.control} ${formInputValidity.street ? "" : css.invalid}`;
  const cityControlClasses = `${css.control} ${formInputValidity.city ? "" : css.invalid}`;
  const postalControlClasses = `${css.control} ${formInputValidity.postalCode ? "" : css.invalid}`;

  return (
    <form className={css.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Tu nombre</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputValidity.name && <p>Por favor ingresa un nombre valido</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Calle</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.street && <p>Por favor ingresa una calle valida</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Codigo postal</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputValidity.postalCode && <p className="">Por favor ingresa un codigo valido (5 Caracteres)</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>Ciudad</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputValidity.city && <p>Por favor ingresa una ciudad valido</p>}
      </div>
      <div className={css.actions}>
        <button type='button' onClick={onCancel}>
          Cancelar
        </button>
        <button className={css.submit}>Confirmar</button>
      </div>
    </form>
  );
}
