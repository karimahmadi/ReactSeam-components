import {
  UPDATE_COLUMN_ORDER,
  UPDATE_SELECTED_ROWS,
  UPDATE_ROWS_COUNT,
} from './constants';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLUMN_ORDER:
      return { ...state, ...action.payload };
    case UPDATE_SELECTED_ROWS:
      return { ...state, selected: action.payload };
    case UPDATE_ROWS_COUNT:
      return { ...state, rowCount: action.payload };
    default:
      return state;
  }
};

export { reducer };
