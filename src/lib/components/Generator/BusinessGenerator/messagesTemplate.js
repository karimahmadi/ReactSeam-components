module.exports = () =>
  `/*
 * {{ properCase moduleName }} Messages
 *
 * This contains all the text for the {{ properCase moduleName }} container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.{{ properCase moduleName }}';

export default defineMessages({
  header: {
    id: \`\${scope}.header\`,
    defaultMessage: 'This is the {{ properCase moduleName }} container!',
  },
});
`;
