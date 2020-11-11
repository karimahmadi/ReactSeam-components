/**
 *
 * Tab
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children, value, id, label, disabled }) => (
  <Fragment id={id} value={value} label={label} disabled={disabled}>
    {children}
  </Fragment>
);

Tab.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export { Tab };
