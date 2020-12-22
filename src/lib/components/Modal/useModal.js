import { useContext } from 'react';
import { ModalContext } from './ModalContext';
import {
  openError,
  openConfirm,
  openInfo,
  openModal,
  openQuestion,
  openGeneralError,
} from './actions';

export const useModal = () => {
  const [, dispatch] = useContext(ModalContext);
  return {
    openInfo: (children, onClose, eventType) =>
      dispatch(openInfo(children, onClose, eventType)),
    openError: (children, onClose, eventType) =>
      dispatch(openError(children, onClose, eventType)),
    openGeneralError: (statusCode, eventType) =>
      dispatch(openGeneralError(statusCode, eventType)),
    openConfirm: (children, onConfirm, onCancel, eventType) =>
      dispatch(openConfirm(children, onConfirm, onCancel, eventType)),
    openQuestion: (children, onConfirm, onCancel, eventType) =>
      dispatch(openQuestion(children, onConfirm, onCancel, eventType)),
    openModal: props => dispatch(openModal(props)),
  };
};
