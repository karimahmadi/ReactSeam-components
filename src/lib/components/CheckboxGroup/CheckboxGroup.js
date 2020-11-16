/**
 *
 * CheckboxGroup
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import { Checkbox } from '../Checkbox';

function CheckboxGroup({
  items,
  propertyCode = 'code',
  propertyTitle = 'title',
  value = [],
  name,
  onChange,
}) {
  const [checkedCodes, setCheckedCodes] = useState(value);
  const handleChange = item => () => {
    if (checkedCodes.indexOf(item[propertyCode]) === -1) {
      const newValue = [...checkedCodes, item[propertyCode]];
      if (onChange) onChange({ target: { value: newValue, name } }, newValue);
      setCheckedCodes(newValue);
    } else {
      const newValue = [...checkedCodes.filter(e => e !== item[propertyCode])];
      if (onChange) onChange({ target: { value: newValue, name } }, newValue);
      setCheckedCodes(newValue);
    }
  };

  return (
    <Box>
      {items.map(item => (
        <FormControlLabel
          key={item[propertyCode]}
          control={
            <Checkbox
              checked={checkedCodes.indexOf(item[propertyCode]) !== -1}
              onChange={handleChange(item)}
            />
          }
          label={item[propertyTitle]}
        />
      ))}
    </Box>
  );
}

CheckboxGroup.propTypes = {
  items: PropTypes.array,
  propertyCode: PropTypes.string,
  propertyTitle: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default CheckboxGroup;
