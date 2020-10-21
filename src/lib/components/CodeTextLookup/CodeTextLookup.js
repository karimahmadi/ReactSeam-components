/**
 *
 * CodeTextLookup
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CodeInput } from './CodeInput';
import { TitleInput } from './TitleInput';
import { ContainerControl } from './ContainerControl';
import { CodeTextButton } from './CodeTextButton';

function CodeTextLookup({
  ratio = '1:4',
  disabled,
  value = { code: '', title: '' },
  propertyCode = 'code',
  propertyTitle = 'title',
  name,
  onClick,
  onChange,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  onBlur,
  onFocus,
  hidebutton = false,
}) {
  const [code, setCode] = useState(value[propertyCode] || '');
  const [title, setTitle] = useState(value[propertyTitle] || '');

  useEffect(() => {
    setCode(value[propertyCode] || '');
    setTitle(value[propertyTitle] || '');
  }, [value]);

  const getRatio = (rat, index) => {
    const rates = rat.split(':').map(Number);
    return (rates[index] * 100) / (rates[0] + rates[1]);
  };

  const handleChange = event => {
    setCode(event.target.value);
    if (onChange)
      onChange({ target: { value: event.target.value, name } }, value);
  };
  return (
    <ContainerControl>
      <CodeInput
        ratio={getRatio(ratio, 0)}
        value={code}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <TitleInput ratio={getRatio(ratio, 1)} value={title} readOnly disabled />
      <CodeTextButton
        variant="contained"
        onClick={onClick}
        disabled={disabled}
        hidebutton={hidebutton}
      >
        ...
      </CodeTextButton>
    </ContainerControl>
  );
}

CodeTextLookup.propTypes = {
  ratio: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.object,
  propertyCode: PropTypes.string,
  propertyTitle: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  hidebutton: PropTypes.bool,
};

export default CodeTextLookup;
