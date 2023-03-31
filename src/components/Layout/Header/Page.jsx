import React from 'react';
import css from "./Header.module.css";

import mealsImg from "../../../assets/meals.jpg";
import HeaderCartButton from '../HeaderCartButton';

export default function Page ({
  onShowCart
}) {
  return (
    <>
      <header className={css.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={css["main-image"]}>
        <img src={mealsImg} alt="A table full of delicius food!" />
      </div>
    </>
  );
}
