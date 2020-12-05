module.exports = () =>
  `/*
 * {{ properCase name }} Messages
 *
 * This contains all the text for the {{ properCase name }} component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.{{ properCase name }}';

export default defineMessages({
  header: {
    id: \`\${scope}.header\`,
    defaultMessage: 'This is the {{ properCase name }} component!',
  },
});`;
