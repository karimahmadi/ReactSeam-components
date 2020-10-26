import React from 'react';
import { Cell } from 'rsuite-table';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => {
  if (!rowData[dataKey]) {
    throw new Error('DataGrid: please enter correct datakey for data');
  }
  return (
    <Cell {...props} style={{ padding: 0 }}>
      <div style={{ 'justify-content': 'center', display: 'flex' }}>
        <Checkbox
          id={rowData[dataKey]}
          onChange={onChange}
          checked={checkedKeys.some(
            item => item === rowData[dataKey].toString(),
          )}
        />
      </div>
    </Cell>
  );
};

CheckCell.propTypes = {
  rowData: PropTypes.object,
  onChange: PropTypes.func,
  checkedKeys: PropTypes.array,
  dataKey: PropTypes.string,
};
export default CheckCell;
