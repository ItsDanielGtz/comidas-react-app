import React from 'react';
import css from "./AvailableMeals.module.css";

export default function Page ({ mealList }) {
  return (
    <section className={css.meals}>
      <ul>
        {mealList.map((meal) => (
           <li key={meal.id} >{meal.name}</li>
        ))}
      </ul>
    </section>
  );
}
