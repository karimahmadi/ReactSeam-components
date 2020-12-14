import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const LabelAxis = ({ align, x, y, format }) => (
  <Fragment align={align} x={x} y={y} format={format} />
);

LabelAxis.propTypes = {
  align: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  format: PropTypes.string,
};

export { LabelAxis };
