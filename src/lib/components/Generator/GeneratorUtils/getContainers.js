/**
 * getContainers
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');

function getContainers(containersPath) {
  const pageContainers = fs.readdirSync(containersPath);

  return pageContainers.filter(
    container =>
      ['App', 'HomePage', 'LanguageProvider', 'NotFoundPage'].indexOf(
        container,
      ) === -1,
  );
}

module.exports = getContainers;
