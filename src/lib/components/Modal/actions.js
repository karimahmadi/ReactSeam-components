/*
 *
 * ModalWrapper actions
 *
 */

import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export function openModal(props) {
  return {
    type: OPEN_MODAL,
    ...props,
  };
}

export function openInfo(children, onClose) {
  return {
    type: OPEN_MODAL,
    title: 'اطلاع',
    confirm: 'تایید',
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    dividers: true,
    onClose,
    children,
  };
}

export function openError(children, onClose) {
  return {
    type: OPEN_MODAL,
    title: 'خطا',
    confirm: 'تایید',
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    dividers: true,
    onClose,
    children,
  };
}

export function openConfirm(children, onConfirm, onCancel) {
  return {
    type: OPEN_MODAL,
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    dividers: true,
    title: 'هشدار',
    confirm: 'تایید',
    cancel: 'انصراف',
    onConfirm,
    onCancel,
    children,
  };
}

export function openQuestion(children, onConfirm, onCancel) {
  return {
    type: OPEN_MODAL,
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    dividers: true,
    title: 'سوال',
    confirm: 'بله',
    cancel: 'خیر',
    onConfirm,
    onCancel,
    children,
  };
}

export function openProgress(children) {
  return {
    type: OPEN_MODAL,
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    children,
  };
}

export function closeModal(id, result) {
  return {
    type: CLOSE_MODAL,
    id,
    result,
  };
}
