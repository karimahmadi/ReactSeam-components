import React from 'react';
import PropTypes from 'prop-types';
import ReactNumberFormat from 'react-number-format';

function NumberFormat(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <ReactNumberFormat
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

NumberFormat.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default NumberFormat;
