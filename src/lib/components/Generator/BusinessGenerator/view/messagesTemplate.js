module.exports = () =>
  `/*
 * {{properCase crudModulePrefix}}View Messages
 *
 * This contains all the text for the {{properCase crudModulePrefix}}View container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.{{properCase crudModulePrefix}}View';

export default defineMessages({
  header: {
    id: \`\${scope}.header\`,
    defaultMessage: 'This is the {{properCase crudModulePrefix}}View container!',
  },
});`;
