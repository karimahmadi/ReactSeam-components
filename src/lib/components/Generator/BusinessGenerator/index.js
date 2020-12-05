/* eslint-disable no-param-reassign */
/**
 *
 * BusinessGenerator
 *
 */
const getMyBusinessCount = require('../GeneratorUtils/getMyBusinessCount');
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
const routeTemplate = require('./routeTemplate');
const loadableTemplate = require('../ComponentsGenerator/loadableTemplate');

// create
const actionTemplateCreate = require('./create/actionsTemplate');
const actionTemplateTestCreate = require('./create/actionsTemplate.test');
const constantsTemplateCreate = require('./create/constantsTemplate');
const indexTemplateCreate = require('./create/indexTemplate');
const messagesTemplateCreate = require('./create/messagesTemplate');
const reducerTemplateCreate = require('./create/reducerTemplate');
const reducerTemplateTestCreate = require('./create/reducerTemplate.test');
const sagaTemplateCreate = require('./create/sagaTemplate');
const sagaTemplateTestCreate = require('./create/sagaTemplate.test');
const selectorsTemplateCreate = require('./create/selectorsTemplate');
const selectorsTemplateTestCreate = require('./create/sagaTemplate.test');
const testTemplateCreate = require('./create/testTemplate');

// edit
const actionTemplateEdit = require('./edit/actionsTemplate');
const actionTemplateTestEdit = require('./edit/actionsTemplate.test');
const constantsTemplateEdit = require('./edit/constantsTemplate');
const indexTemplateEdit = require('./edit/indexTemplate');
const messagesTemplateEdit = require('./edit/messagesTemplate');
const reducerTemplateEdit = require('./edit/reducerTemplate');
const reducerTemplateTestEdit = require('./edit/reducerTemplate.test');
const sagaTemplateEdit = require('./edit/sagaTemplate');
const sagaTemplateTestEdit = require('./edit/sagaTemplate.test');
const selectorsTemplateEdit = require('./edit/selectorsTemplate');
const selectorsTemplateTestEdit = require('./edit/sagaTemplate.test');
const testTemplateEdit = require('./edit/testTemplate');

// view
const actionTemplateView = require('./view/actionsTemplate');
const actionTemplateTestView = require('./view/actionsTemplate.test');
const constantsTemplateView = require('./view/constantsTemplate');
const indexTemplateView = require('./view/indexTemplate');
const messagesTemplateView = require('./view/messagesTemplate');
const reducerTemplateView = require('./view/reducerTemplate');
const reducerTemplateTestView = require('./view/reducerTemplate.test');
const sagaTemplateView = require('./view/sagaTemplate');
const sagaTemplateTestView = require('./view/sagaTemplate.test');
const selectorsTemplateView = require('./view/selectorsTemplate');
const selectorsTemplateTestView = require('./view/sagaTemplate.test');
const testTemplateView = require('./view/testTemplate');

// delete
const actionTemplateDelete = require('./delete/actionsTemplate');
const actionTemplateTestDelete = require('./delete/actionsTemplate.test');
const constantsTemplateDelete = require('./delete/constantsTemplate');
const indexTemplateDelete = require('./delete/indexTemplate');
const messagesTemplateDelete = require('./delete/messagesTemplate');
const reducerTemplateDelete = require('./delete/reducerTemplate');
const reducerTemplateTestDelete = require('./delete/reducerTemplate.test');
const sagaTemplateDelete = require('./delete/sagaTemplate');
const sagaTemplateTestDelete = require('./delete/sagaTemplate.test');
const selectorsTemplateDelete = require('./delete/selectorsTemplate');
const selectorsTemplateTestDelete = require('./delete/sagaTemplate.test');
const testTemplateDelete = require('./delete/testTemplate');

const BusinessGenerator = containerPath => ({
  description: 'Add a business',
  prompts: [
    {
      type: 'input',
      name: 'moduleName',
      message: 'What your business (module) name?',
      default: 'MyBusiness',
    },
    {
      type: 'checkbox',
      name: 'neededContainerComponent',
      message: 'select default CRUD component to generat:',
      default: 'MyBusiness',
      choices: [
        { name: 'create', checked: true },
        { name: 'edit', checked: true },
        { name: 'view', checked: true },
        { name: 'delete', checked: true },
      ],
    },
    {
      type: 'confirm',
      name: 'wantRouting',
      default: true,
      message: 'Do you want to add routing?',
    },
    {
      type: 'input',
      name: 'crudModulePrefix',
      message: 'What your CRUD modules prefix?',
      default: 'MyCRUD',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }
        return 'The name is required';
      },
      when: ans => ans.neededContainerComponent,
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
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
      default: false,
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
    // if entered MyBusiness add number to it
    if (data.moduleName === 'MyBusiness') {
      data.moduleName += parseInt(getMyBusinessCount(containerPath), 0) + 1;
    }
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/containers/{{properCase moduleName}}/index.js',
        template: indexTemplate(),
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../../app/containers/{{properCase moduleName}}/tests/index.test.js',
        template: testTemplate(),
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/containers/{{properCase moduleName}}/route.js',
        template: routeTemplate(),
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase moduleName}}/messages.js',
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
        path: '../../app/containers/{{properCase moduleName}}/actions.js',
        template: actionTemplate(),
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{properCase moduleName}}/tests/actions.test.js',
        template: actionTemplateTest(),
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase moduleName}}/constants.js',
        template: constantsTemplate(),
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase moduleName}}/selectors.js',
        template: selectorsTemplate(),
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{properCase moduleName}}/tests/selectors.test.js',
        template: selectorsTemplateTest(),
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase moduleName}}/reducer.js',
        template: reducerTemplate(),
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{properCase moduleName}}/tests/reducer.test.js',
        template: reducerTemplateTest(),
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase moduleName}}/saga.js',
        template: sagaTemplate(),
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{properCase moduleName}}/tests/saga.test.js',
        template: sagaTemplateTest(),
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase moduleName}}/Loadable.js',
        template: loadableTemplate(),
        abortOnFail: true,
      });
    }

    /**
     * create
     */
    if (data.neededContainerComponent.indexOf('create') !== -1) {
      actions.push(
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/index.js',
          template: indexTemplateCreate(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/tests/index.test.js',
          template: testTemplateCreate(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/messages.js',
          template: messagesTemplateCreate(),
          abortOnFail: true,
        },

        // Actions
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/actions.js',
          template: actionTemplateCreate(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/tests/actions.test.js',
          template: actionTemplateTestCreate(),
          abortOnFail: true,
        },

        // Constants
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/constants.js',
          template: constantsTemplateCreate(),
          abortOnFail: true,
        },

        // Selectors
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/selectors.js',
          template: selectorsTemplateCreate(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/tests/selectors.test.js',
          template: selectorsTemplateTestCreate(),
          abortOnFail: true,
        },

        // saga
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/saga.js',
          template: sagaTemplateCreate(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/tests/saga.test.js',
          template: sagaTemplateTestCreate(),
          abortOnFail: true,
        },

        // Reducer
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/reducer.js',
          template: reducerTemplateCreate(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Create/tests/reducer.test.js',
          template: reducerTemplateTestCreate(),
          abortOnFail: true,
        },
      );
    }
    /**
     * edit
     */
    if (data.neededContainerComponent.indexOf('edit') !== -1) {
      actions.push(
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/index.js',
          template: indexTemplateEdit(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/tests/index.test.js',
          template: testTemplateEdit(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/messages.js',
          template: messagesTemplateEdit(),
          abortOnFail: true,
        },

        // Actions
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/actions.js',
          template: actionTemplateEdit(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/tests/actions.test.js',
          template: actionTemplateTestEdit(),
          abortOnFail: true,
        },

        // Constants
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/constants.js',
          template: constantsTemplateEdit(),
          abortOnFail: true,
        },

        // Selectors
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/selectors.js',
          template: selectorsTemplateEdit(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/tests/selectors.test.js',
          template: selectorsTemplateTestEdit(),
          abortOnFail: true,
        },

        // saga
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/saga.js',
          template: sagaTemplateEdit(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/tests/saga.test.js',
          template: sagaTemplateTestEdit(),
          abortOnFail: true,
        },

        // Reducer
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/reducer.js',
          template: reducerTemplateEdit(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Edit/tests/reducer.test.js',
          template: reducerTemplateTestEdit(),
          abortOnFail: true,
        },
      );
    }
    /**
     * view
     */
    if (data.neededContainerComponent.indexOf('view') !== -1) {
      actions.push(
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/index.js',
          template: indexTemplateView(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/tests/index.test.js',
          template: testTemplateView(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/messages.js',
          template: messagesTemplateView(),
          abortOnFail: true,
        },
        // Actions
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/actions.js',
          template: actionTemplateView(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/tests/actions.test.js',
          template: actionTemplateTestView(),
          abortOnFail: true,
        },

        // Constants
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/constants.js',
          template: constantsTemplateView(),
          abortOnFail: true,
        },

        // Selectors
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/selectors.js',
          template: selectorsTemplateView(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/tests/selectors.test.js',
          template: selectorsTemplateTestView(),
          abortOnFail: true,
        },

        // saga
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/saga.js',
          template: sagaTemplateView(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/tests/saga.test.js',
          template: sagaTemplateTestView(),
          abortOnFail: true,
        },

        // Reducer
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/reducer.js',
          template: reducerTemplateView(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}View/tests/reducer.test.js',
          template: reducerTemplateTestView(),
          abortOnFail: true,
        },
      );
    }
    /**
     * delete
     */
    if (data.neededContainerComponent.indexOf('delete') !== -1) {
      actions.push(
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/index.js',
          template: indexTemplateDelete(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/tests/index.test.js',
          template: testTemplateDelete(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/messages.js',
          template: messagesTemplateDelete(),
          abortOnFail: true,
        },
        // Actions
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/actions.js',
          template: actionTemplateDelete(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/tests/actions.test.js',
          template: actionTemplateTestDelete(),
          abortOnFail: true,
        },

        // Constants
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/constants.js',
          template: constantsTemplateDelete(),
          abortOnFail: true,
        },

        // Selectors
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/selectors.js',
          template: selectorsTemplateDelete(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/tests/selectors.test.js',
          template: selectorsTemplateTestDelete(),
          abortOnFail: true,
        },

        // saga
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/saga.js',
          template: sagaTemplateDelete(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/tests/saga.test.js',
          template: sagaTemplateTestDelete(),
          abortOnFail: true,
        },

        // Reducer
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/reducer.js',
          template: reducerTemplateDelete(),
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            '../../app/containers/{{properCase moduleName}}/{{properCase crudModulePrefix}}Delete/tests/reducer.test.js',
          template: reducerTemplateTestDelete(),
          abortOnFail: true,
        },
      );
    }

    actions.push({
      type: 'prettify',
      path: `/containers/${data.moduleName}`,
    });

    return actions;
  },
});

module.exports = BusinessGenerator;
