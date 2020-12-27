import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const DataGridColumnGroup = ({ children, header, align, verticalAlign }) => (
  <Fragment header={header} align={align} verticalAlign={verticalAlign}>
    {children}
  </Fragment>
);

DataGridColumnGroup.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.string,
  verticalAlign: PropTypes.string,
  align: PropTypes.string,
};

export { DataGridColumnGroup };
