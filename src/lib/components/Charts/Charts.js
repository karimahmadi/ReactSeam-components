import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const Charts = ({ children }) => <Fragment> {children} </Fragment>;

Charts.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Charts };
