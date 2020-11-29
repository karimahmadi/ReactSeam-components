/* eslint-disable default-case */
/*
 *
 * ModalWrapper reducer
 *
 */
import { SHOW_LOADING, HIDE_LOADING, LOADING } from './constants';

const tejaratLoadingReducer = (state, action) => {
  let count = state.count || 0;
  switch (action.type) {
    case LOADING:
      if (action.state) count += 1;
      else count -= 1;
      break;
    case SHOW_LOADING:
      count += 1;
      break;
    case HIDE_LOADING:
      count -= 1;
      break;
  }

  return { ...state, loading: count > 0, count };
};

export default tejaratLoadingReducer;
