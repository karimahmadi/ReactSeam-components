import React, { useContext } from 'react';
import { ModalContext } from './ModalContext';
import {
  openConfirm,
  openError,
  openGeneralError,
  openInfo,
  openModal,
  openQuestion,
} from './actions';

export const withModal = Component => props => {
  const [, dispatch] = useContext(ModalContext);
  return (
    <Component
      {...props}
      openError={(children, onClose) => dispatch(openError(children, onClose))}
      openGeneralError={statusCode => dispatch(openGeneralError(statusCode))}
      openInfo={(children, onClose) => dispatch(openInfo(children, onClose))}
      openConfirm={(children, onConfirm, onCancel) =>
        dispatch(openConfirm(children, onConfirm, onCancel))
      }
      openQuestion={(children, onConfirm, onCancel) =>
        dispatch(openQuestion(children, onConfirm, onCancel))
      }
      openModal={mProps => dispatch(openModal(mProps))}
    />
  );
};
