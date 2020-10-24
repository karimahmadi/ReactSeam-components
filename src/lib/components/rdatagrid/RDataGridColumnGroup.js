import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const RDataGridColumnGroup = ({ children, header, align, verticalAlign }) => (
  <Fragment header={header} align={align} verticalAlign={verticalAlign}>
    {children}
  </Fragment>
);

RDataGridColumnGroup.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.string,
  verticalAlign: PropTypes.string,
  align: PropTypes.string,
};

export { RDataGridColumnGroup };
