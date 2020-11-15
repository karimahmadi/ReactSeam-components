/**
 *
 * Checkbox
 *
 */

import React, { useRef, useEffect } from 'react';
import MatCheckbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

function Checkbox({ skip, dispatch, ADD_TO_REF_LIST, tabindex, ...others }) {
  const checkboxRef = useRef(null);
  const { disabled } = others;
  useEffect(() => {
    if (dispatch)
      dispatch({
        type: ADD_TO_REF_LIST,
        payload: checkboxRef,
        skip,
        tabindex,
        disabled,
      });
  }, [checkboxRef, skip, tabindex, disabled]);

  return <MatCheckbox {...others} inputRef={checkboxRef} />;
}

Checkbox.propTypes = {
  tabindex: PropTypes.number,
  skip: PropTypes.bool,
  dispatch: PropTypes.func,
  ADD_TO_REF_LIST: PropTypes.any,
};

export default Checkbox;
