module.exports = () =>
  `/*
 *
 * {{properCase crudModulePrefix}}Edit reducer
 *
 */s
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const {{ camelCase crudModulePrefix }}EditReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default {{ camelCase crudModulePrefix }}EditReducer;`;
