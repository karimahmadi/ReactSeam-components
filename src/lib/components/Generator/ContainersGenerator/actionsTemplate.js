module.exports = () =>
  `
/*
 *
 * {{ properCase name }} actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
`;