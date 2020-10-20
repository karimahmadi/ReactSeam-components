/**
 *
 * AmountInput
 *
 */

import React from 'react';
import { Input } from '../Input';
import NumberFormat from './NumberFormat';

function NumberInput(props) {
  return <Input inputComponent={NumberFormat} {...props} />;
}

NumberInput.propTypes = {};

export default NumberInput;
