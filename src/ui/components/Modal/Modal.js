import React from 'react';
import './Modal.css';

export const Modal = props => {
  const { activeModal, setActiveModal, children } = props;
  return (
    <div
      className={activeModal ? 'modal modalActive' : 'modal'}
      onClick={() => {
        setActiveModal(false);
      }}
    >
      <div
        className={
          activeModal ? 'modalContant modalContantactive' : 'modalContant'
        }
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
