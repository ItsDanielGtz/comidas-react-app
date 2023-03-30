import React from 'react';
import css from "./MealItem.module.css";

export default function Page ({
  name,
  description,
  price
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

    </div>
  </li>
  );
}
