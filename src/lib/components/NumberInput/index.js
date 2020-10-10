/**
 *
 * AmountInput
 *
 */

import React from 'react';
import NumberFormat from 'react-number-format';
// import { Input } from './Input';
import PropTypes from 'prop-types';
import { Input } from '../Input';

function NumberFormatEx(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
    />
  );
}

function NumberInput(props) {
  return <Input inputComponent={NumberFormatEx} {...props} />;
}

NumberFormatEx.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

NumberInput.propTypes = {};

export default NumberInput;
