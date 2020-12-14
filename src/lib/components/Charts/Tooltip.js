import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const Tooltip = ({ shared, crosshairs }) => (
  <Fragment shared={shared} crosshairs={crosshairs} />
);

Tooltip.propTypes = {
  shared: PropTypes.bool,
  crosshairs: PropTypes.bool,
};

export { Tooltip };
