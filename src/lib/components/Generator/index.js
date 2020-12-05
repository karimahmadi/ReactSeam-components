/* eslint-disable consistent-return */
/**
 *
 * Generator
 *
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const BusinessGenerator = require('./BusinessGenerator');
const ComponentsGenerator = require('./ComponentsGenerator');
const ContainersGenerator = require('./ContainersGenerator');
/**
 * Every generated backup file gets this extension
 * @type {string}
 */
const BACKUPFILE_EXTENSION = 'rbgen';
module.exports = (
  plop,
  modules,
  appFolderPath,
  containersPath,
  componentsPath,
) => {
  const generators = {
    business: BusinessGenerator(containersPath),
    components: ComponentsGenerator(containersPath, componentsPath),
    containers: ContainersGenerator(containersPath, componentsPath),
  };
  modules.forEach(mdl => {
    plop.setGenerator(mdl, generators[mdl]);
  });

  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(path.join(`${appFolderPath}/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      appFolderPath,
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**',
      '**.js',
    )}`;

    try {
      execSync(`npm run prettify -- "${folderPath}"`);
      return folderPath;
    } catch (err) {
      throw err;
    }
  });
  plop.setActionType('backup', (answers, config) => {
    try {
      fs.copyFileSync(
        path.join(__dirname, config.path, config.file),
        path.join(
          __dirname,
          config.path,
          `${config.file}.${BACKUPFILE_EXTENSION}`,
        ),
        'utf8',
      );
      return path.join(
        __dirname,
        config.path,
        `${config.file}.${BACKUPFILE_EXTENSION}`,
      );
    } catch (err) {
      throw err;
    }
  });
  plop.setHelper('listContain', (input1, input2) => {
    if (input1.indexOf(input2) !== -1) return true;
  });
  plop.setHelper('concat', (input1, input2) => input1 + input2);
  plop.setHelper('lowerCase', input => {
    if (input) return input.toLowerCase();
  });
};
