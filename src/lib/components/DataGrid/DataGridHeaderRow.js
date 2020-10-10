import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const DataGridHeaderRow = ({ children }) => <Fragment>{children}</Fragment>;

DataGridHeaderRow.propTypes = {
  children: PropTypes.any,
};

export { DataGridHeaderRow };
