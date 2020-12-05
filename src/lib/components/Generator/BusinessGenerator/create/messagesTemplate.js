module.exports = () =>
  `
/*
 * {{properCase crudModulePrefix}}Create Messages
 *
 * This contains all the text for the {{properCase crudModulePrefix}}Create container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.{{properCase crudModulePrefix}}Create';

export default defineMessages({
  header: {
    id: \`\${scope}.header\`,
    defaultMessage: 'This is the {{properCase crudModulePrefix}}Create container!',
  },
});
`;
