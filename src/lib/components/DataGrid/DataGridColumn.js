import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const DataGridColumn = ({
  title,
  field,
  filter,
  type,
  colspan,
  rowspan,
  render,
  frozen,
  sortable,
  align,
}) => (
  <Fragment
    title={title}
    field={field}
    type={type}
    filter={filter}
    colspan={colspan}
    rowspan={rowspan}
    render={render}
    frozen={frozen}
    sortable={sortable}
    align={align}
  />
);
DataGridColumn.propTypes = {
  title: PropTypes.string.isRequired,
  field: PropTypes.string,
  type: PropTypes.string,
  filter: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  render: PropTypes.any,
  frozen: PropTypes.bool,
  sortable: PropTypes.bool,
  align: PropTypes.string,
};
export { DataGridColumn };
