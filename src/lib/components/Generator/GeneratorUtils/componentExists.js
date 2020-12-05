/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
function componentExists(comp, containersPath, componentsPath) {
  const pageComponents = fs.readdirSync(componentsPath);
  const pageContainers = fs.readdirSync(containersPath);
  const components = pageComponents.concat(pageContainers);

  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
