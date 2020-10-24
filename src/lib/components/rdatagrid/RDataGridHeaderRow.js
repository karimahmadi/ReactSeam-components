import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const RDataGridHeaderRow = ({ children }) => <Fragment>{children}</Fragment>;

RDataGridHeaderRow.propTypes = {
  children: PropTypes.any,
};

export { RDataGridHeaderRow };
