import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const DataGridColumn = ({
  headerName,
  field,
  filter,
  type,
  colSpan,
  rowspan,
  render,
  renderCellChildren,
  renderHeaderCellChildren,
  frozen,
  sortable,
  resizable,
  width,
}) => (
  <Fragment
    title={headerName}
    field={field}
    type={type}
    filter={filter}
    colSpan={colSpan}
    rowspan={rowspan}
    render={render}
    renderCellChildren={renderCellChildren}
    renderHeaderCellChildren={renderHeaderCellChildren}
    frozen={frozen}
    sortable={sortable}
    resizable={resizable}
    width={width}
  />
);
DataGridColumn.propTypes = {
  headerName: PropTypes.string.isRequired,
  field: PropTypes.string,
  type: PropTypes.string,
  filter: PropTypes.string,
  colSpan: PropTypes.number,
  rowspan: PropTypes.number,
  render: PropTypes.any,
  renderCellChildren: PropTypes.any,
  renderHeaderCellChildren: PropTypes.any,
  frozen: PropTypes.bool,
  sortable: PropTypes.bool,
  resizable: PropTypes.bool,
  width: PropTypes.number,
};
export { DataGridColumn };
