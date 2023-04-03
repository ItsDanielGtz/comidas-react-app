import React from 'react';
import css from "./MealItem.module.css";
import MealItemForm from './MealItemForm';

export default function Page ({
  name,
  description,
  price,
  id,
  addToCartHandler
}) {
  return (
    <li className={css.meal}>
    <div>
      <h3>{name}</h3>
      <div className={css.description}>
        {description}
      </div>
      <div className={css.price}>${price.toFixed(2)}</div>
    </div>
    <div>
      <MealItemForm id={id} onAddToCart={addToCartHandler}/>
    </div>
  </li>
  );
}
