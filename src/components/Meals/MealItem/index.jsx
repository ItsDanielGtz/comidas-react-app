import React from 'react';
import Page from './Page';

export default function MealItem ({
  name,
  description,
  price,
  id
}) {
  return (
   <Page
    id={id}
    name={name}
    description={description}
    price={price}
   />
  );
}
