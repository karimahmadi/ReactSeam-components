/**
 *
 * Checkbox
 *
 */

import React, { useRef, useEffect } from 'react';
import MatCheckbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Checkbox({
  disabled,
  checked,
  onChange,
  id,
  skip,
  dispatch,
  ADD_TO_REF_LIST,
}) {
  const checkboxRef = useRef(null);
  useEffect(() => {
    if (!skip && !disabled && dispatch)
      dispatch({ type: ADD_TO_REF_LIST, payload: checkboxRef });
  }, [checkboxRef, skip, disabled]);

  function handleOnChange(e) {
    onChange(e);
  }
  return (
    <MatCheckbox
      disabled={disabled}
      checked={checked}
      inputRef={checkboxRef}
      onChange={handleOnChange}
      id={id}
    />
  );
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string,
  skip: PropTypes.bool,
  dispatch: PropTypes.func,
  ADD_TO_REF_LIST: PropTypes.any,
};

export default Checkbox;
