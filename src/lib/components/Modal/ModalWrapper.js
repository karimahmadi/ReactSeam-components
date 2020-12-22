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

  const handleClose = (id, result, callback, options) => event => {
    dispatch({ type: CLOSE_MODAL, id, result });
    if (callback) callback(event);
    if (options && options.eventType) {
      document.dispatchEvent(
        new CustomEvent(options.eventType, {
          detail: { ...options.data, action: 'close' },
        }),
      );
    }
  };

  const handleConfirm = (id, callback, options) => event => {
    dispatch({ type: CLOSE_MODAL, id });
    if (callback) callback(event);
    if (options && options.eventType) {
      document.dispatchEvent(
        new CustomEvent(options.eventType, {
          detail: { ...options.data, action: 'confirm' },
        }),
      );
    }
  };

  const handleCancel = (id, callback, options) => event => {
    dispatch({ type: CLOSE_MODAL, id });
    if (callback) callback(event);
    if (options && options.eventType) {
      document.dispatchEvent(
        new CustomEvent(options.eventType, {
          detail: { ...options.data, action: 'cancel' },
        }),
      );
    }
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
      options,
      ...other
    } = dialog;

    return (
      <Dialog
        key={id}
        onClose={handleClose(id, 'close', onClose, options)}
        onConfirm={handleConfirm(id, onConfirm, options)}
        onCancel={handleCancel(id, onCancel, options)}
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
