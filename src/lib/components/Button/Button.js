import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button as MatButton } from '@material-ui/core';

function Button({
  disabled,
  fullWidth,
  disableFocusRipple,
  disableRipple,
  size,
  className,
  variant,
  color,
  startIcon,
  endIcon,
  children,
  onClick,
  skip,
  dispatch,
  ADD_TO_REF_LIST,
}) {
  const buttonRef = useRef(null);
  useEffect(() => {
    if (!skip && !disabled && dispatch)
      dispatch({ type: ADD_TO_REF_LIST, payload: buttonRef });
  }, [buttonRef, skip, disabled]);
  function handleClick(e) {
    if (typeof onClick === 'function') onClick(e);
  }

  return (
    <MatButton
      disabled={disabled}
      fullWidth={fullWidth}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      size={size}
      className={className}
      onClick={handleClick}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      ref={buttonRef}
    >
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
};

export default Button;
