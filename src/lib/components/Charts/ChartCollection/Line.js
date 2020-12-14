import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Series } from '../Series';
const Line = ({ children }) => <Fragment>{children}</Fragment>;

Line.propTypes = {
  children: PropTypes.objectOf(Series),
};

export { Line };
