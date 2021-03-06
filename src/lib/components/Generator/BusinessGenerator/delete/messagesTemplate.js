module.exports = () =>
`
/*
 * {{properCase crudModulePrefix}}Delete Messages
 *
 * This contains all the text for the {{properCase crudModulePrefix}}Delete container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.{{properCase crudModulePrefix}}Delete';

export default defineMessages({
  header: {
    id: \`\${scope}.header\`,
    defaultMessage: 'This is the {{properCase crudModulePrefix}}Delete container!',
  },
});
`
