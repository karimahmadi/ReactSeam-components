import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const DataGridColumn = ({
  headerName,
  field,
  filter,
  type,
  colspan,
  rowspan,
  render,
  frozen,
  sortable,
}) => (
  <Fragment
    title={headerName}
    field={field}
    type={type}
    filter={filter}
    colspan={colspan}
    rowspan={rowspan}
    render={render}
    frozen={frozen}
    sortable={sortable}
  />
);
DataGridColumn.propTypes = {
  headerName: PropTypes.string.isRequired,
  field: PropTypes.string,
  type: PropTypes.string,
  filter: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  render: PropTypes.any,
  frozen: PropTypes.bool,
  sortable: PropTypes.bool,
};
export { DataGridColumn };
