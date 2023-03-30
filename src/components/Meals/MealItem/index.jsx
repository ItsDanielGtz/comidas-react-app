import React from 'react';
import Page from './Page';

export default function MealItem ({
  name,
  description,
  price
}) {
  return (
   <Page
    name={name}
    description={description}
    price={price}
   />
  );
}
