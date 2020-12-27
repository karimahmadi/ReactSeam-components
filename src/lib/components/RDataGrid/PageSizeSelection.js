import React, { Fragment } from 'react';
import PropsTypes from 'prop-types';
const PageSizeSelection = ({
  sizeList = [10, 20, 30, 40, 50],
  render,
  selectedSize,
  onChange,
}) => {
  const handleChange = e => {
    if (typeof onChange === 'function') onChange(e.target.value, 1);
  };
  let result = sizeList.map(size => (
    <option key={size} value={size}>
      {size}
    </option>
  ));
  if (typeof render === 'function') {
    result = render();
  }
  return (
    <Fragment>
      <select
        onChange={handleChange}
        defaultValue={(!selectedSize && sizeList[0]) || selectedSize}
      >
        {result}
      </select>
    </Fragment>
  );
};

PageSizeSelection.propTypes = {
  render: PropsTypes.func,
  sizeList: PropsTypes.array,
  selectedSize: PropsTypes.number,
  onChange: PropsTypes.func,
};

export default PageSizeSelection;
