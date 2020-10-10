/**
 *
 * AmountInput
 *
 */

import React from 'react';
import NumberFormat from 'react-number-format';
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
      thousandSeparator
      isNumericString
    />
  );
}

function AmountInput(props) {
  return <Input inputComponent={NumberFormatEx} {...props} />;
}

NumberFormatEx.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

AmountInput.propTypes = {};

export default AmountInput;
