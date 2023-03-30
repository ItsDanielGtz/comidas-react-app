import React from 'react';
import css from "./Card.module.css";

export default function Page ({ children }) {
  return (
    <div className={css.card}>{children}</div>
  );
}
