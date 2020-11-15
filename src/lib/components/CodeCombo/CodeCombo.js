/**
 *
 * CodeCombo
 * by karim ahmadi
 * at 1399/05/17
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContainerControl } from './ContainerControl';
import { CodeInput } from './CodeInput';
import { Select } from './Select';
import { Input } from '../Input';
import { Asteriks } from '../CodeTextLookup/Asteriks';

function CodeCombo({
  items,
  propertyCode = 'code',
  propertyTitle = 'title',
  value,
  onChange,
  ratio = '1:4',
  disabled,
  placeholder,
  type,
  name,
  maxlength,
  pattern,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  onBlur,
  onFocus,
  required = false,
}) {
  const [code, setCode] = React.useState(value || '');

  useEffect(() => {
    if (value) setCode(value);
    else setCode('');
  }, [value]);

  const handleChange = event => {
    if (pattern) {
      const re = new RegExp(pattern);
      const isRegExpMatched = re.test(event.target.value);
      if (!isRegExpMatched) return false;
    }

    if (event.target.value !== '') {
      setCode(event.target.value);
    } else {
      setCode('');
    }
    if (onChange) {
      const selectedItem = items.filter(
        item => String(item[propertyCode]) === String(event.target.value),
      );
      const [item] = selectedItem;
      onChange(
        { target: { value: item ? item[propertyCode] : '', name } },
        item,
      );
    }

    return true;
  };

  const renderItems = arr =>
    arr.map(item => (
      <option key={item[propertyCode]} value={item[propertyCode]}>
        {item[propertyTitle]}
      </option>
    ));

  const getRatio = (rat, index) => {
    const rates = rat.split(':').map(Number);
    return (rates[index] * 100) / (rates[0] + rates[1]);
  };

  return (
    <ContainerControl>
      <CodeInput
        ratio={getRatio(ratio, 0)}
        onChange={handleChange}
        value={code}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        inputProps={{
          maxLength: maxlength,
        }}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <Select
        native
        value={code}
        onChange={handleChange}
        input={<Input skip />}
        ratio={getRatio(ratio, 1)}
        disabled={disabled}
      >
        <option aria-label="None" value="" />
        {renderItems(items)}
      </Select>
      {required && <Asteriks>*</Asteriks>}
    </ContainerControl>
  );
}

CodeCombo.propTypes = {
  items: PropTypes.array,
  propertyCode: PropTypes.string,
  propertyTitle: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  ratio: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pattern: PropTypes.instanceOf(RegExp),
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
};

export default CodeCombo;
