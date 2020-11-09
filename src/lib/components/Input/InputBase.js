import { OutlinedInput as MuiOutlinedInput } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import React, { useEffect, useRef } from 'react';

export const InputBase = (
  dispatch,
  ADD_TO_REF_LIST,
  ADD_REF_TO_FOCUS,
  ...others
) => {
  const inputRef = useRef(null);

  const { skip, disabled, readOnly } = others;

  useEffect(() => {
    if (!skip && !disabled && !readOnly && dispatch)
      dispatch({ type: ADD_TO_REF_LIST, payload: inputRef });
  }, [inputRef, skip, disabled, readOnly]);

  return (
    <MuiOutlinedInput
      {...others}
      endAdornment={<InputAdornment position="start">*</InputAdornment>}
    />
  );
};
