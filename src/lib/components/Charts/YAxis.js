/* eslint-disable react/no-unused-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Title } from './Title';
import { AxisLabel } from './AxisLabel';
const YAxis = ({ children }) => <Fragment>{children}</Fragment>;

YAxis.propTypes = {
  children: PropTypes.any,
  title: PropTypes.objectOf(Title),
  labels: PropTypes.objectOf(AxisLabel),
};

export { YAxis };
