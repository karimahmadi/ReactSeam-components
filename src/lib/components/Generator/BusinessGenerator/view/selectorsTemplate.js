module.exports = () =>
  `import { ViewSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the {{ camelCase crudModulePrefix }}View state domain
 */

const select{{ properCase crudModulePrefix }}ViewDomain = state => state.{{ camelCase crudModulePrefix }}View || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by {{ properCase crudModulePrefix }}View
 */

const makeSelect{{ properCase crudModulePrefix }}View = () =>
  ViewSelector(select{{ properCase crudModulePrefix }}ViewDomain, substate => substate);

export default makeSelect{{ properCase crudModulePrefix }}View;
export { select{{ properCase crudModulePrefix }}ViewDomain };
`;
