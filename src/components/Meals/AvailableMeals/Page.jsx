import React from 'react';
import Card from '../../UI/Card';
import MealItem from '../MealItem';
import css from "./AvailableMeals.module.css";

export default function Page ({ mealList }) {
  return (
    <section className={css.meals}>
      <Card>
        <ul>
          {mealList.map((meal) => (
            <MealItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
            // <li key={meal.id} >{meal.name}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
