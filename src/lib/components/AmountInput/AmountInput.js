/**
 *
 * AmountInput
 *
 */

import React from 'react';
import { Input } from '../Input';
import NumberFormat from './NumberFormat';

function AmountInput(props) {
  return <Input inputComponent={NumberFormat} {...props} />;
}

AmountInput.propTypes = {};

export default AmountInput;
