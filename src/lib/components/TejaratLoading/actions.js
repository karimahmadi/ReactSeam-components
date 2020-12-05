/*
 *
 * ModalWrapper actions
 *
 */

import { HIDE_LOADING, SHOW_LOADING, LOADING } from './constants';

export function loading(state, children) {
  return {
    type: LOADING,
    state,
    children,
  };
}

export function showLoading(children) {
  return {
    type: SHOW_LOADING,
    children,
  };
}

export function hideLoading() {
  return {
    type: HIDE_LOADING,
  };
}
