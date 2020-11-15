import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button as MatButton } from '@material-ui/core';

function Button({ skip, dispatch, ADD_TO_REF_LIST, tabindex, ...others }) {
  const buttonRef = useRef(null);

  const { disabled, children } = others;

  useEffect(() => {
    if (!skip && !disabled && dispatch)
      dispatch({
        type: ADD_TO_REF_LIST,
        payload: buttonRef,
        tabindex,
        skip,
        disabled,
      });
  }, [buttonRef, tabindex, skip, disabled]);

  return (
    <MatButton {...others} ref={buttonRef}>
      {children}
    </MatButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
  skip: PropTypes.bool,
  dispatch: PropTypes.func,
  ADD_TO_REF_LIST: PropTypes.any,
  href: PropTypes.string,
  tabindex: PropTypes.number,
};

export default Button;
