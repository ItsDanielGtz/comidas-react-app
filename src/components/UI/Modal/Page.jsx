import React from 'react';
import css from "./Modal.module.css";
import { createPortal } from 'react-dom';

function Backdrop ({
  onCloseCart
}) {
  return (
    <div className={css.backdrop} onClick={onCloseCart}/>
  );
}

function ModalOverlay ({
  children
}) {
  return (
    <div className={css.modal}>
      <div className={css.content}>{children}</div>
    </div>

  );
}

const portalElement = document.getElementById("overlays");

export default function Page({
  children,
  onCloseCart
}) {
  return (
    <>
    {createPortal(<Backdrop onCloseCart={onCloseCart} />, portalElement)}
    {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}
