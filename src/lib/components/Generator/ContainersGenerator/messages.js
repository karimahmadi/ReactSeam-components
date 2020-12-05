/*
 * ContainersGenerator Messages
 *
 * This contains all the text for the ContainersGenerator component.
 */

const { defineMessages } = require('react-intl');

const scope = 'app.components.ContainersGenerator';

module.exports = {
  scope,
  defineMessages: defineMessages({
    header: {
      id: `${scope}.header`,
      defaultMessage: 'This is the ContainersGenerator component!',
    },
  }),
};
