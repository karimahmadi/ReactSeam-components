module.exports = () =>
  `/**
 *
 * {{properCase moduleName}}
 *
 */

{{#if memo}}
import React, { memo } from 'react';
{{else}}
import React from 'react';
{{/if}}
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
{{#if wantHeaders}}
import { Helmet } from 'react-helmet';
{{/if}}
{{#if wantMessages}}
import { FormattedMessage } from 'react-intl';
{{/if}}
{{#if wantActionsAndReducer}}
import { createStructuredSelector } from 'reselect';
{{/if}}
import { compose } from 'redux';

{{#if wantSaga}}
import { useInjectSaga } from 'utils/injectSaga';
{{/if}}
{{#if wantActionsAndReducer}}
import { useInjectReducer } from 'utils/injectReducer';
import makeSelect{{properCase moduleName}} from './selectors';
import reducer from './reducer';
{{/if}}
{{#if wantSaga}}
import saga from './saga';
{{/if}}
{{#if wantMessages}}
import messages from './messages';
{{/if}}

export function {{ properCase moduleName }}() {
  {{#if wantActionsAndReducer}}
  useInjectReducer({ key: '{{ camelCase moduleName }}', reducer });
  {{/if}}
  {{#if wantSaga}}
  useInjectSaga({ key: '{{ camelCase moduleName }}', saga });
  {{/if}}

  return (
    <div>
    {{#if wantHeaders}}
      <Helmet>
        <title>{{properCase moduleName}}</title>
        <meta name="description" content="Description of {{properCase moduleName}}" />
      </Helmet>
    {{/if}}
    {{#if wantMessages}}
      <FormattedMessage {...messages.header} />
    {{/if}}
    </div>
  );
}

{{ properCase moduleName }}.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

{{#if wantActionsAndReducer}}
const mapStateToProps = createStructuredSelector({
  {{ camelCase moduleName }}: makeSelect{{properCase moduleName}}(),
});
{{/if}}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

{{#if wantActionsAndReducer}}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
{{else}}
const withConnect = connect(null, mapDispatchToProps);
{{/if}}

export default compose(
  withConnect,
{{#if memo}}
  memo,
{{/if}}
)({{ properCase moduleName }});
`;
