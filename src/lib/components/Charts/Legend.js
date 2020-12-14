import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const Legend = ({ align, verticalAlign, borderWidth }) => (
  <Fragment
    align={align}
    verticalAlign={verticalAlign}
    borderWidth={borderWidth}
  />
);

Legend.propTypes = {
  align: PropTypes.string,
  verticalAlign: PropTypes.string,
  borderWidth: PropTypes.number,
};

export { Legend };
