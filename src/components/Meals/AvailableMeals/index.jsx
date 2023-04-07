import React, { useEffect, useState } from 'react';
import Page from './Page';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://react-http-curso-default-rtdb.firebaseio.com/meals.json");
      // setIsLoading(true);
      if (!response.ok) {
        throw new Error("¡Algo salio mal! :c");
      }

      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    fetchMeals();
  }, []);

  // const DUMMY_MEALS = [
  //   {
  //     id: 'm1',
  //     name: 'Sushi',
  //     description: 'Finest fish and veggies',
  //     price: 22.99,
  //   },
  //   {
  //     id: 'm2',
  //     name: 'Schnitzel',
  //     description: 'A german specialty!',
  //     price: 16.5,
  //   },
  //   {
  //     id: 'm3',
  //     name: 'Barbecue Burger',
  //     description: 'American, raw, meaty',
  //     price: 12.99,
  //   },
  //   {
  //     id: 'm4',
  //     name: 'Green Bowl',
  //     description: 'Healthy...and green...',
  //     price: 18.99,
  //   },
  // ];
  return (
    <Page
      mealList={meals}
      isLoading={isLoading}
      httpError={httpError}
    />
  );
}
