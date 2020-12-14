/* eslint-disable react/no-unused-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const ObjectDataContainer = ({ children }) => <Fragment>{children}</Fragment>;

ObjectDataContainer.propTypes = {
  name: PropTypes.string.isRequired,
  colorByPoint: PropTypes.bool,
  children: PropTypes.array.isRequired,
};

export { ObjectDataContainer };
