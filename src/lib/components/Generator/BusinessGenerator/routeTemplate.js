module.exports = () =>
  `/**
 *
 * {{properCase moduleName}}Route
 *
 */

import React,{Fragment} from 'react';
import { Route } from 'react-router-dom';
import {{properCase moduleName}} from './{{properCase crudModulePrefix}}Create';
import {{properCase crudModulePrefix}}Create from './{{properCase crudModulePrefix}}Create';
import {{properCase crudModulePrefix}}Edit from './{{properCase crudModulePrefix}}Edit';
import {{properCase crudModulePrefix}}View from './{{properCase crudModulePrefix}}View';
import {{properCase crudModulePrefix}}Delete from './{{properCase crudModulePrefix}}Delete';
const {{properCase moduleName}}Route = () =>{
  return (
    <Fragment>
    <Route exact path="/{{lowerCase moduleName}}" component={ {{properCase moduleName}} } />
    {{#if (listContain neededContainerComponent 'create')}}
      <Route exact path="/{{lowerCase moduleName}}/{{lowerCase crudModulePrefix}}Create" component={ {{concat (properCase crudModulePrefix) 'Create'}} } />
    {{/if}}
    {{#if (listContain neededContainerComponent 'edit')}}
      <Route exact path="/{{lowerCase moduleName}}/{{lowerCase crudModulePrefix}}Edit" component={ {{concat (properCase crudModulePrefix) 'Edit'}} } />
    {{/if}}
    {{#if (listContain neededContainerComponent 'view')}}
      <Route exact path="/{{lowerCase moduleName}}/{{lowerCase crudModulePrefix}}View" component={ {{concat (properCase crudModulePrefix) 'View'}} } />
    {{/if}}
    {{#if (listContain neededContainerComponent 'delete')}}
      <Route exact path="/{{lowerCase moduleName}}/{{lowerCase crudModulePrefix}}Delete" component={ {{concat (properCase crudModulePrefix) 'Delete'}} } />
    {{/if}}
    </Fragment>
  )
}
export default {{properCase moduleName}}Route
`;
