import React from 'react';
import AvailableMeals from '../AvailableMeals';

import MealsSummary from '../MealsSummary';
// import css from "./Meals.module.css";

export default function Page () {
  return (
    <>
      <MealsSummary/>
      <AvailableMeals/>
    </>
  );
}
