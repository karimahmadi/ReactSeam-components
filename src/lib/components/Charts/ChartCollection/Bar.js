import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Series } from '../Series';
const Bar = ({ children }) => <Fragment>{children}</Fragment>;

Bar.propTypes = {
  children: PropTypes.objectOf(Series),
};

export { Bar };
