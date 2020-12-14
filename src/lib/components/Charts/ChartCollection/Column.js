import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Series } from '../Series';
const Column = ({ children }) => <Fragment>{children}</Fragment>;

Column.propTypes = {
  children: PropTypes.objectOf(Series),
};

export { Column };
