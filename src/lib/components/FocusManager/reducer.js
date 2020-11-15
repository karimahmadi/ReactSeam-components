import { ADD_TO_REF_LIST } from './constants';
export const initalState = {
  ref: [],
  refEx: [],
};
export const reducer = (state, action) => {
  const { type, payload, disabled, readOnly, skip } = action;
  let { tabindex } = action;
  let refList = [];
  let refExList = [];
  let index = -1;
  switch (type) {
    case ADD_TO_REF_LIST:
      index = state.refEx.findIndex(item => item.ref === payload);
      refList = state.ref;
      refExList = state.refEx;

      if (index > -1) {
        ({ tabindex } = state.refEx[index]);
        refList = state.ref.filter(item => item !== payload);
        refExList = state.refEx.filter(item => item.ref !== payload);
      }

      if (!tabindex) {
        tabindex = state.refEx.length;
      }

      return {
        ...state,
        ref: [...refList, payload],
        refEx: [
          ...refExList,
          { ref: payload, tabindex, disabled, readOnly, skip },
        ],
      };
    default:
      return state;
  }
};
