/**
 *
 * ModalWrapper
 *
 */

import React, { useContext } from 'react';
import Dialog from './Dialog/index';
import { ModalContext } from './ModalContext';
import { CLOSE_MODAL } from './constants';

function ModalWrapper() {
  const [state, dispatch] = useContext(ModalContext);

  const handleClose = (id, result, callback) => event => {
    dispatch({ type: CLOSE_MODAL, id, result });
    if (callback) callback(event);
  };

  const handleConfirm = (id, callback) => event => {
    dispatch({ type: CLOSE_MODAL, id });
    if (callback) callback(event);
  };

  const handleCancel = (id, callback) => event => {
    dispatch({ type: CLOSE_MODAL, id });
    if (callback) callback(event);
  };

  return state.map(dialog => {
    const {
      id,
      children,
      Component,
      ComponentProps,
      onClose,
      onConfirm,
      onCancel,
      ...other
    } = dialog;

    return (
      <Dialog
        key={id}
        onClose={handleClose(id, 'close', onClose)}
        onConfirm={handleConfirm(id, onConfirm)}
        onCancel={handleCancel(id, onCancel)}
        {...other}
      >
        {Component && (
          <Component
            {...ComponentProps}
            close={handleClose(id, 'close', onClose)}
            confirm={handleConfirm(id, onConfirm)}
            cancel={handleCancel(id, onCancel)}
          />
        )}
        {!Component && children}
      </Dialog>
    );
  });
}

ModalWrapper.propTypes = {};

export { ModalWrapper };
