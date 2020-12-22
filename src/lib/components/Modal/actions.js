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

export function openInfo(children, onClose, options) {
  return {
    type: OPEN_MODAL,
    title: 'اطلاع',
    confirm: 'تایید',
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    dividers: true,
    onClose,
    children,
    options,
  };
}

export function openError(children, onClose, options) {
  return {
    type: OPEN_MODAL,
    title: 'خطا',
    confirm: 'تایید',
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    dividers: true,
    onClose,
    children,
    options,
  };
}

export function openConfirm(children, onConfirm, onCancel, options) {
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
    options,
  };
}

export function openQuestion(children, onConfirm, onCancel, options) {
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
    options,
  };
}

export function openGeneralError(statusCode, options) {
  return {
    type: OPEN_MODAL,
    title: 'خطای سیستمی',
    confirm: 'بستن',
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    dividers: true,
    children: `خطای سیستمی رخ داده است لطفا با راهبر سامانه تماس حاصل فرمایید . کد خطا : ${statusCode}`,
    options,
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
