import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function Label({
  children,
  variant = 'body1',
  color = 'initial',
  display = 'initial',
  align,
  classes,
  gutterBottom,
  noWrap,
  paragraph,
  variantMapping,
  component,
}) {
  return (
    <Typography
      variant={variant}
      color={color}
      display={display}
      align={align}
      classes={classes}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      component={component}
      paragraph={paragraph}
      variantMapping={variantMapping}
    >
      {children}
    </Typography>
  );
}

Label.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  children: PropTypes.string || PropTypes.node,
  align: PropTypes.string,
  classes: PropTypes.object,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  variantMapping: PropTypes.object,
  component: PropTypes.elementType,
};

export default Label;
