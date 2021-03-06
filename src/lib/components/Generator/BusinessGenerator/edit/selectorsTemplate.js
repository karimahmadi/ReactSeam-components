module.exports = () =>
  `
import { EditSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the {{ camelCase crudModulePrefix }}Edit state domain
 */

const select{{ properCase crudModulePrefix }}EditDomain = state => state.{{ camelCase crudModulePrefix }}Edit || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by {{ properCase crudModulePrefix }}Edit
 */

const makeSelect{{ properCase crudModulePrefix }}Edit = () =>
  EditSelector(select{{ properCase crudModulePrefix }}EditDomain, substate => substate);

export default makeSelect{{ properCase crudModulePrefix }}Edit;
export { select{{ properCase crudModulePrefix }}EditDomain };
`;
