module.exports = () =>
  `/*
 *
 * {{properCase crudModulePrefix}}View reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const {{ camelCase crudModulePrefix }}ViewReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default {{ camelCase crudModulePrefix }}ViewReducer;
`;
