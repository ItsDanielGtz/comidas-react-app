import React from 'react';
import Card from '../../UI/Card';
import MealItem from '../MealItem';
import css from "./AvailableMeals.module.css";

export default function Page({ mealList, isLoading, httpError }) {
  if (isLoading) {
    return (
      <section className={css.MealsLoading}>
        <p>Cargando...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={css.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={css.meals}>
      <Card>
        <ul>
          {mealList.map((meal) => (
            <MealItem
              id={meal.id}
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
