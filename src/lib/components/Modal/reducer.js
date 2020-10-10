/* eslint-disable default-case */
/*
 *
 * ModalWrapper reducer
 *
 */
import { v4 as uuid } from 'uuid';
import { OPEN_MODAL, CLOSE_MODAL } from './constants';

const modalWrapperReducer = (oldState, action) => {
  let state = [...oldState];
  const target = state.find(({ id }) => id === action.id);
  switch (action.type) {
    case OPEN_MODAL:
      // before open a new dialog remove closed dialog from stack first
      state = state.filter(({ open }) => open);
      state.push({
        id: uuid(),
        open: true,
        ...action,
      });
      break;
    case CLOSE_MODAL:
      if (target) {
        state = state.map(item =>
          item.id === action.id ? { ...item, open: false } : item,
        );
        state.open = !state.open;
        if (target.onClose) {
          target.onClose(action.result);
        }
      }
      break;
  }

  return state;
};

export default modalWrapperReducer;
