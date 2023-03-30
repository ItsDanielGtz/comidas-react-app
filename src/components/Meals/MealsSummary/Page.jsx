import React from 'react';
import css from "./MealsSummary.module.css";

export default function Page () {
  return (
    <section className={css.summary}>
      <h2>Comida deliciosa, entregada a ti</h2>
      <p>
        Elija su comida favorita de nuestra amplia selección de comidas disponibles
        y disfruta de un delicioso almuerzo o cena en casa.
      </p>
      <p>
        Todas nuestras comidas se cocinan con ingredientes de alta calidad, justo a tiempo y
        por supuesto por chefs experimentados!
      </p>
    </section>
  );
}
