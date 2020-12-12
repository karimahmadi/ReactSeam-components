/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
function componentExists(comp, containerPath, componentPath) {
  const pageComponents = fs.readdirSync(path.join(__dirname, containerPath));
  const pageContainers = fs.readdirSync(path.join(__dirname, componentPath));
  const components = pageComponents.concat(pageContainers);

  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
