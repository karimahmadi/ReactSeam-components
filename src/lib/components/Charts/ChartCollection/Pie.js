/* eslint-disable react/no-unused-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Series } from '../Series';
const Pie = ({ children }) => <Fragment>{children}</Fragment>;

Pie.propTypes = {
  children: PropTypes.objectOf(Series),
  plotBackgroundColor: PropTypes.string,
  plotBorderWidth: PropTypes.number,
  plotShadow: PropTypes.string,
};

export { Pie };
