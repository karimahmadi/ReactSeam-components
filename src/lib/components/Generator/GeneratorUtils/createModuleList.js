const inquirer = require('inquirer');
const getContainers = require('./getContainers');
function createModuleList(containersPath) {
  return getContainers(containersPath)
    .concat(new inquirer.Separator())
    .concat(['Create new business (module)']);
}
module.exports = createModuleList;
