/**
 * Container Generator
 */

const componentExists = require('../GeneratorUtils/componentExists');
const getContainers = require('../GeneratorUtils/getContainers');
const createModuleList = require('../GeneratorUtils/createModuleList');

const actionTemplate = require('./actionsTemplate');
const actionTemplateTest = require('./actionsTemplate.test');
const constantsTemplate = require('./constantsTemplate');
const indexTemplate = require('./indexTemplate');
const messagesTemplate = require('./messagesTemplate');
const reducerTemplate = require('./reducerTemplate');
const reducerTemplateTest = require('./reducerTemplate.test');
const sagaTemplate = require('./sagaTemplate');
const sagaTemplateTest = require('./sagaTemplate.test');
const selectorsTemplate = require('./selectorsTemplate');
const selectorsTemplateTest = require('./sagaTemplate.test');
const testTemplate = require('./testTemplate');
const loadableTemplate = require('../ComponentsGenerator/loadableTemplate');

module.exports = (containersPath, componentsPath) => ({
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value, containersPath, componentsPath)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'moduleName',
      message: 'What your business (module) name?',
      default: 'MyBusiness',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }
        return 'The name is required';
      },
      when: () => getContainers(containersPath).length === 0,
    },
    {
      type: 'list',
      name: 'chooseModuleName',
      message: 'choose your business (module) name from list?',
      choices: createModuleList(containersPath),
      default: 'MyBusiness',
      when: () => getContainers(containersPath).length !== 0,
    },
    {
      type: 'input',
      name: 'moduleName',
      message: 'What your business (module) name?',
      default: 'MyBusiness',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value, containersPath, componentsPath)
            ? 'A component or container with this name already exists'
            : true;
        }
        return 'The name is required';
      },
      when: ans => ans.chooseModuleName === 'Create new business (module)',
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: true,
      message: 'Do you want to load resources asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/index.js',
        template: indexTemplate(),
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/index.test.js',
        template: testTemplate(),
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/messages.js',
        template: messagesTemplate(),
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/actions.js',
        template: actionTemplate(),
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/actions.test.js',
        template: actionTemplateTest(),
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/constants.js',
        template: constantsTemplate(),
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/selectors.js',
        template: selectorsTemplate(),
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/selectors.test.js',
        template: selectorsTemplateTest(),
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/reducer.js',
        template: reducerTemplate(),
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/reducer.test.js',
        template: reducerTemplateTest(),
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/saga.js',
        template: sagaTemplate(),
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/saga.test.js',
        template: sagaTemplateTest(),
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/Loadable.js',
        template: loadableTemplate(),
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: `/containers/${data.moduleName || data.chooseModuleName}`,
    });

    return actions;
  },
});
