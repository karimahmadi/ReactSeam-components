import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ComponentContext } from '../index';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  inlineLabel: {
    position: 'unset',
    transform: 'unset',
    padding: '26px 6px 0px 0px',
  },
});
function InputText({
  autoComplete,
  color,
  defaultValue,
  value,
  disabled,
  error,
  fullWidth,
  id,
  inputProps,
  InputLabelProps,
  name,
  placeholder,
  readOnly,
  required,
  type,
  helperText,
  onChange,
  label,
  variant,
  skip,
  dispatch,
  ADD_TO_REF_LIST,
  ADD_REF_TO_FOCUS,
}) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (!skip && !disabled && !readOnly && dispatch)
      dispatch({ type: ADD_TO_REF_LIST, payload: inputRef });
  }, [inputRef, skip, disabled, readOnly]);
  const styles = useStyles();
  function handleOnChange(e) {
    onChange(e);
  }
  function handleClick(e) {
    dispatch({ type: ADD_REF_TO_FOCUS, payload: e.target });
  }
  return (
    <TextField
      id={id}
      name={name}
      autoComplete={autoComplete}
      helperText={helperText}
      className={styles.root}
      fullWidth={fullWidth}
      onChange={handleOnChange}
      color={color}
      readOnly={readOnly}
      disabled={disabled}
      error={error}
      required={required}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      type={type}
      inputProps={inputProps}
      InputLabelProps={
        variant === 'inlineLable'
          ? { lassName: styles.inlineLabel, ...InputLabelProps }
          : InputLabelProps
      }
      label={label}
      variant={variant !== 'inlineLable' ? variant : 'standard'}
      inputRef={inputRef}
      onFocusCapture={handleClick}
    />
  );
}

InputText.propTypes = {
  autoComplete: PropTypes.string,
  value: PropTypes.any,
  color: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  helperText: PropTypes.node,
  onChange: PropTypes.func,
  label: PropTypes.node,
  variant: PropTypes.string,
  InputLabelProps: PropTypes.object,
  skip: PropTypes.bool,
  dispatch: PropTypes.any,
  ADD_TO_REF_LIST: PropTypes.any,
  ADD_REF_TO_FOCUS: PropTypes.any,
};

export default InputText;
