import { useContext } from 'react';
import { ModalContext } from './ModalContext';
import {
  openError,
  openConfirm,
  openInfo,
  openModal,
  openQuestion,
} from './actions';

export const useModal = () => {
  const [, dispatch] = useContext(ModalContext);
  return {
    openInfo: (children, onClose) => dispatch(openInfo(children, onClose)),
    openError: (children, onClose) => dispatch(openError(children, onClose)),
    openConfirm: (children, onConfirm, onCancel) =>
      dispatch(openConfirm(children, onConfirm, onCancel)),
    openQuestion: (children, onConfirm, onCancel) =>
      dispatch(openQuestion(children, onConfirm, onCancel)),
    openModal: props => dispatch(openModal(props)),
  };
};
