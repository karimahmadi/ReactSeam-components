import React from 'react';
import PropTypes from 'prop-types';

export const Logo = ({ src }) => (
  <img src={src} alt="" style={{ margin: '71px 20px' }} />
);

Logo.propTypes = {
  src: PropTypes.string,
};
