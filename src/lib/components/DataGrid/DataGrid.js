import React from 'react';
import numeral from 'numeral';

import PropTypes from 'prop-types';

import {
  DataGrid as EasDataGrid,
  GridColumn as EasGridColumn,
  GridColumnGroup as EasGridColumnGroup,
  GridHeaderRow as EasGridHeaderRow,
} from 'rc-easyui';

const DataGrid = ({
  loading,
  allColumnSortable,
  rowSelection,
  checkboxSelection,
  resizable,
  pagination,
  data,
  children,
  rowModelType,
  paginationPageSize,
  pageNumber,
  total,
  lazy,
  onChangePage,
  cacheBlockSize,
  pageOptions,
  columnResizing,
  multiSort,
  columnMoving,
  remoteSort,
  rownumbers,
}) => {
  const defaultColDef = {
    sortable: allColumnSortable || false,
    checkboxSelection: checkboxSelection || false,
    resizable: resizable || false,
    pagination: pagination || false,
    columnResizing: columnResizing || true,
    pageOptions: {
      layout: ['list', 'sep', 'first', 'prev', 'next', 'last', 'sep', 'info'],
    },
  };
  const handelChangePage = e => {
    onChangePage(e.pageNumber, e.pageSize);
  };

  const renderChildren = inputChildren => {
    if (Array.isArray(inputChildren)) {
      return inputChildren.map(child => renderColumn(child));
    }
    if (inputChildren.type.name === 'DataGridColumnGroup') {
      return renderGroupColumn(inputChildren.props.children);
    }
    return renderColumn(inputChildren);
  };
  const renderGroupColumn = rowHeaders => {
    if (Array.isArray(rowHeaders)) {
      return (
        <EasGridColumnGroup>
          {rowHeaders.map(rowHeader =>
            renderColumnRowHeader(rowHeader.props.children),
          )}
        </EasGridColumnGroup>
      );
    }
    return (
      <EasGridColumnGroup>
        {renderColumnRowHeader(rowHeaders.props.children)}
      </EasGridColumnGroup>
    );
  };
  const renderColumnRowHeader = columns => {
    if (Array.isArray(columns)) {
      return (
        <EasGridHeaderRow>
          {columns.map(column => renderColumn(column))}
        </EasGridHeaderRow>
      );
    }
    return <EasGridHeaderRow>{renderColumn(columns)}</EasGridHeaderRow>;
  };
  const renderColumn = column => (
    <EasGridColumn
      key={column.props.field}
      title={column.props.title}
      field={column.props.field}
      rowspan={column.props.rowspan}
      colspan={column.props.colspan}
      frozen={column.props.frozen}
      sortable={column.props.sortable}
      align={column.props.align}
      render={({ row }) =>
        renderCell(
          row,
          column.props.field,
          column.props.type,
          column.props.render,
        )
      }
    />
  );
  return (
    <EasDataGrid
      rownumbers={rownumbers}
      data={data}
      rowSelection={rowSelection}
      defaultColDef={defaultColDef}
      enableRtl
      loading={loading}
      pageNumber={pageNumber}
      pagination={pagination}
      onPageChange={handelChangePage}
      pageSize={paginationPageSize}
      total={total}
      lazy={lazy}
      rowModelType={rowModelType}
      cacheBlockSize={cacheBlockSize}
      pageOptions={pageOptions}
      columnResizing={columnResizing}
      multiSort={multiSort}
      columnMoving={columnMoving}
      remoteSort={remoteSort}
    >
      {renderChildren(children)}
    </EasDataGrid>
  );
};

const renderCell = (row, columnName, type, render) => {
  let result = row[columnName];
  if (type) {
    result = findFormatter(type, row[columnName]);
  }
  if (render && typeof render === 'function') {
    result = render(row);
  }
  return result;
};
const findFormatter = (formatter, value) => {
  if (formatter === 'currency') {
    return currencyFormatter(value);
  }
};

function currencyFormatter(value) {
  return numeral(value).format('0,0.00');
}

DataGrid.propTypes = {
  rownumbers: PropTypes.bool,
  loading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  pagination: PropTypes.bool,
  rowSelection: PropTypes.string,
  allColumnSortable: PropTypes.bool,
  checkboxSelection: PropTypes.bool,
  resizable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  rowModelType: PropTypes.string,
  paginationPageSize: PropTypes.number,
  pageNumber: PropTypes.number,
  pageOptions: PropTypes.object,
  onChangePage: PropTypes.func,
  total: PropTypes.number,
  lazy: PropTypes.bool,
  cacheBlockSize: PropTypes.number,
  columnResizing: PropTypes.bool,
  multiSort: PropTypes.bool,
  columnMoving: PropTypes.bool,
  remoteSort: PropTypes.bool,
};

export default DataGrid;
