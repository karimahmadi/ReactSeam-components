import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const DataGridColumnGroup = ({ children }) => <Fragment>{children}</Fragment>;

DataGridColumnGroup.propTypes = {
  children: PropTypes.any,
};

export { DataGridColumnGroup };
