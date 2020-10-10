import { ADD_FOCUSED, ADD_TO_REF_LIST } from './constants';
export const initalState = {
  ref: [],
  focused: undefined,
  from: '',
  params: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_REF_LIST:
      return { ...state, ref: [...state.ref, action.payload] };
    case ADD_FOCUSED:
      return { ...state, focused: action.payload };
    default:
      return state;
  }
};
