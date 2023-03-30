import React from 'react';
import css from "./Modal.module.css";
import { createPortal } from 'react-dom';

function Backdrop () {
  return (
    <div className={css.backdrop}/>
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
  children
}) {
  return (
    <>
    {createPortal(<Backdrop/>, portalElement)}
    {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}
