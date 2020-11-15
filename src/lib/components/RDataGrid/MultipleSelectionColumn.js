import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '../Checkbox';

const MultipleSelectionColumn = ({ data, checkedKeys, onChange }) => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [
    selectAllCheckedIndeterminate,
    setSelectAllCheckedIndeterminate,
  ] = useState(false);
  useEffect(() => {
    if (checkedKeys) {
      if (checkedKeys.length === data.length) {
        setSelectAllChecked(true);
        setSelectAllCheckedIndeterminate(false);
      } else if (checkedKeys.length === 0) {
        setSelectAllCheckedIndeterminate(false);
        setSelectAllChecked(false);
      } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
        setSelectAllCheckedIndeterminate(true);
      } else {
        setSelectAllChecked(false);
        setSelectAllCheckedIndeterminate(false);
      }
    }
  }, [checkedKeys, data]);

  const handleChange = e => {
    onChange(e, selectAllChecked, selectAllCheckedIndeterminate);
  };
  return (
    <div
      style={{
        position: 'relative',
        top: '-9px',
        'justify-content': 'center',
        display: 'flex',
      }}
    >
      <Checkbox
        checked={selectAllChecked}
        indeterminate={selectAllCheckedIndeterminate}
        onChange={handleChange}
      />
    </div>
  );
};
MultipleSelectionColumn.propTypes = {
  data: PropTypes.any,
  checkedKeys: PropTypes.array,
  onChange: PropTypes.func,
};

export default MultipleSelectionColumn;
