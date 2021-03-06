import { OutlinedInput as MuiOutlinedInput } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import React, { useEffect, useRef } from 'react';
import PropsType from 'prop-types';

const InputBase = ({
  dispatch,
  ADD_TO_REF_LIST,
  skip,
  tabindex,
  ...others
}) => {
  const inputRef = useRef(null);

  const { disabled, readOnly } = others;

  useEffect(() => {
    if (dispatch)
      dispatch({
        type: ADD_TO_REF_LIST,
        payload: inputRef,
        skip,
        disabled,
        readOnly,
        tabindex,
      });
  }, [inputRef, skip, disabled, tabindex]);

  return (
    <MuiOutlinedInput
      {...others}
      inputRef={inputRef}
      endAdornment={<InputAdornment position="start">*</InputAdornment>}
    />
  );
};

InputBase.propTypes = {
  dispatch: PropsType.func,
  ADD_TO_REF_LIST: PropsType.string,
  skip: PropsType.bool,
  tabindex: PropsType.oneOfType([PropsType.string, PropsType.number]),
};

export { InputBase };
