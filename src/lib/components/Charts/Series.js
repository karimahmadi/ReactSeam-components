import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const Series = ({ children }) => <Fragment>{children}</Fragment>;

Series.propTypes = {
  children: PropTypes.any,
};

export { Series };
