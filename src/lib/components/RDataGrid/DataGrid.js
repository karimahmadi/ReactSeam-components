/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useEffect } from 'react';
import numeral from 'numeral';
import arrayUtil from 'lodash';

import PropTypes from 'prop-types';
import { Table, Column, HeaderCell, Cell, ColumnGroup } from '@rsuitelocal/table';
import '@rsuitelocal/table/dist/css/rsuite-table.css'; // or 'rsuite-table/dist/css/rsuite-table.css'
import DataTableGlobalStyles from './DataTableStyles';
import Footer from './Footer';
import MultipleSelectionColumn from './MultipleSelectionColumn';
import CheckCell from './CheckCell';

const DataGrid = ({
  dataKey = 'id',
  loading,
  // allColumnSortable,
  // rowSelection,
  // checkboxSelection,
  // resizable,
  // pagination,
  data,
  children,
  // rowModelType,
  paginationPageSize,
  pageNumber,
  total,
  // lazy,
  onChangePage,
  // cacheBlockSize,
  // pageOptions,
  // columnResizing,
  // multiSort,
  // columnMoving,
  onSortColumn,
  // rownumbers,
  selectionMode = 'single',
  // onSelectionChange,
  selection,
  rtl = true,
  pageRangeDisplayed,
  onChangePageSize,
  selectionColor,
  onRowClick,
  onRowSingleSelection,
  showRowNumberColumn,
  rowNumberColumnMessage = '#',
  headerHeight,
  height,
  // onAllCheckChange,
  // selectedAllRows,
}) => {
  const [sortColumnName, setSortColumnName] = useState();
  const [sortType, setSortType] = useState();
  const [pageSelectedRows, setPageSelectedRows] = useState([]);
  const [totalSelectedRows, setTotalSelectedRows] = useState([]);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [selectedRowRef, setSelectedRowRef] = useState();
  useEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    if (selectedRowRef)
      selectedRowRef.classList.remove('rs-table-row-selection');
    if (typeof onRowSingleSelection === 'function')
      onRowSingleSelection(undefined);
    setPageSelectedRows(
      arrayUtil.intersection(
        totalSelectedRows,
        arrayUtil.map(data, d => d[dataKey].toString()),
      ),
    );
  }, [data]);

  const handleSortColumn = (newSortColumnName, newSortType) => {
    onSortColumn(newSortColumnName, newSortType);
    setSortType(newSortType);
    setSortColumnName(newSortColumnName);
  };
  const handleCheckAll = (e, checkedAll, checkedIntermediate) => {
    const currentPageRows = [...data.map(item => item[dataKey].toString())];
    const { checked } = e.target;
    if (checked || checkedIntermediate) {
      setPageSelectedRows(currentPageRows);
      setTotalSelectedRows(
        arrayUtil.uniq([...totalSelectedRows, ...currentPageRows]),
      );
    } else if (checked === false) {
      setTotalSelectedRows(
        arrayUtil.without([...totalSelectedRows], ...currentPageRows),
      );
      setPageSelectedRows([]);
    }
  };
  const handleCheck = e => {
    const value = e.target[dataKey];
    const { checked } = e.target;
    const nextCheckedKeysTotal = checked
      ? [...totalSelectedRows, value]
      : totalSelectedRows.filter(item => item !== value);
    const nextCheckedKeysPage = checked
      ? [...pageSelectedRows, value]
      : pageSelectedRows.filter(item => item !== value);
    setTotalSelectedRows(nextCheckedKeysTotal);
    setPageSelectedRows(nextCheckedKeysPage);
  };
  const handleRowClick = (rowData, e) => {
    if (typeof onRowClick === 'function') onRowClick(rowData, e);
    // eslint-disable-next-line no-restricted-syntax
    if (selectedRowRef)
      selectedRowRef.classList.remove('rs-table-row-selection');
    setSelectedRowRef(e.currentTarget);
    e.currentTarget.classList.add('rs-table-row-selection');
    if (typeof onRowSingleSelection === 'function')
      onRowSingleSelection(rowData[dataKey]);
  };
  const handleChangePageSize = (newPageSize, newPageNumber) => {
    setCurrentPageSize(newPageSize);
    onChangePageSize(newPageSize, newPageNumber);
  };

  const renderColumnChildren = inputColumnChildren => {
    const result = [];
    if (selection) {
      if (selectionMode === 'multiple') {
        result.push(
          <Column width={55}>
            <HeaderCell>
              <MultipleSelectionColumn
                data={data}
                checkedKeys={pageSelectedRows}
                onChange={handleCheckAll}
              />
            </HeaderCell>
            <CheckCell
              onChange={handleCheck}
              checkedKeys={totalSelectedRows}
              dataKey={dataKey}
            />
          </Column>,
        );
      }
    }
    if (showRowNumberColumn) {
      result.push(
        <Column width={40}>
          {rowNumberHeaderColumn()}
          {rowNumberRowsColumn()}
        </Column>,
      );
    }
    inputColumnChildren.forEach(inputColumnChild => {
      if (inputColumnChild.type.name === 'DataGridColumnGroup') {
        result.push(columnGroup(inputColumnChild));
      } else result.push(displayColumnHeaderAndCell(inputColumnChild));
    });
    return result;
  };
  const rowNumberHeaderColumn = () => (
    <HeaderCell>{rowNumberColumnMessage}</HeaderCell>
  );
  const displayColumnHeaderAndCell = columnChild => {
    const result = [];
    if (
      columnChild.props.renderHeaderCellChildren ||
      columnChild.props.renderCellChildren
    ) {
      if (columnChild.props.renderHeaderCellChildren)
        result.push(
          column(
            columnChild,
            columnChild.props.colSpan,
            columnChild.props.fixed,
            columnChild.props.align,
            columnChild.props.width,
            columnChild.props.renderHeaderCellChildren,
          ),
        );
      else if (columnChild.props.renderCellChildren) {
        result.push(
          column(
            columnChild,
            columnChild.props.colSpan,
            columnChild.props.fixed,
            columnChild.props.align,
            columnChild.props.width,
            undefined,
            columnChild.props.renderCellChildren,
          ),
        );
      } else
        result.push(
          column(
            columnChild,
            columnChild.props.colSpan,
            columnChild.props.fixed,
            columnChild.props.align,
            columnChild.props.width,
            columnChild.props.renderHeaderCellChildren,
            columnChild.props.renderCellChildren,
          ),
        );
    } else result.push(column(columnChild));
    return result;
  };
  const rowNumberRowsColumn = () => (
    <Cell>
      {(rowData, rowIndex) =>
        parseInt(currentPageSize, 0) * (parseInt(pageNumber, 0) - 1) +
        rowIndex +
        1
      }
    </Cell>
  );
  const columnGroup = columns => (
    <ColumnGroup
      header={columns.props.header}
      align={columns.props.align}
      verticalAlign={columns.props.verticalAlign}
    >
      {columns.props.children.map(
        columnChild => displayColumnHeaderAndCell(columnChild)[0],
      )}
    </ColumnGroup>
  );

  const column = inputColumnChildren => {
    let insideColumnHeader;
    let insideColumnCell;
    if (inputColumnChildren.props.type) {
      insideColumnCell = renderColumnWithFormatter(
        inputColumnChildren.props.field,
        inputColumnChildren.props.colSpan,
        inputColumnChildren.props.type,
        findFormatter,
      );
    }
    if (
      typeof inputColumnChildren.props.renderHeaderCellChildren === 'function'
    )
      insideColumnHeader = renderHeaderCellChildren(
        inputColumnChildren.props.headerName,
        inputColumnChildren.props.renderHeaderCellChildren,
      );
    else insideColumnHeader = header(inputColumnChildren.props.headerName);
    if (typeof inputColumnChildren.props.renderCellChildren === 'function')
      insideColumnCell = renderCellChildren(
        inputColumnChildren.props.field,
        inputColumnChildren.props.colSpan,
        inputColumnChildren.props.renderCellChildren,
      );
    else if (!inputColumnChildren.props.type)
      insideColumnCell = cell(
        inputColumnChildren.props.field,
        inputColumnChildren.props.colSpan,
      );
    return (
      <Column
        resizable={inputColumnChildren.props.resizable}
        sortable={inputColumnChildren.props.sortable}
        fixed={inputColumnChildren.props.fixed}
        align={inputColumnChildren.props.align}
        width={inputColumnChildren.props.width}
      >
        {insideColumnHeader}
        {insideColumnCell}
      </Column>
    );
  };
  const header = headerName => <HeaderCell>{headerName}</HeaderCell>;
  const cell = (field, colSpan) => <Cell dataKey={field} colSpan={colSpan} />;
  const renderHeaderCellChildren = (
    headerName,
    renderHeaderCellChildrenFunc,
  ) => <HeaderCell>{renderHeaderCellChildrenFunc(headerName)}</HeaderCell>;
  const renderCellChildren = (field, colSpan, renderCellChildrenFunc) => (
    <Cell dataKey={field} colSpan={colSpan}>
      {(rowData, rowIndex) => renderCellChildrenFunc(rowData, rowIndex)}
    </Cell>
  );
  const renderColumnWithFormatter = (
    field,
    colSpan,
    formatter,
    formatterFunc,
  ) => (
    <Cell dataKey={field} colSpan={colSpan}>
      {rowData => formatterFunc(formatter, rowData[field])}
    </Cell>
  );
  return (
    <Fragment>
      <Table
        bordered
        cellBordered
        // rownumbers={rownumbers}
        data={data}
        // rowSelection={rowSelection}
        // defaultColDef={defaultColDef}
        rtl={rtl}
        loading={loading}
        onSortColumn={handleSortColumn}
        sortColumn={sortColumnName}
        sortType={sortType}
        headerHeight={headerHeight}
        height={height}
        // pagination={pagination}
        // lazy={lazy}
        // rowModelType={rowModelType}
        // cacheBlockSize={cacheBlockSize}
        // pageOptions={pageOptions}
        // columnResizing={columnResizing}
        // multiSort={multiSort}
        // columnMoving={columnMoving} should implement
        // remoteSort={remoteSort} not needed
        // selectionMode={selectionMode === 'single' ? 'single' : ''} should implement
        // onSelectionChange={handleRowSelection}
        // selection={selection}
        onRowClick={handleRowClick}
      >
        {renderColumnChildren(children)}
      </Table>
      <Footer
        activePage={pageNumber}
        itemsCountPerPage={paginationPageSize}
        totalItemsCount={total}
        pageRangeDisplayed={pageRangeDisplayed}
        onChangePage={onChangePage}
        onChangePageSize={handleChangePageSize}
      />
      <DataTableGlobalStyles selectionColor={selectionColor} />
    </Fragment>
  );
};

const findFormatter = (formatter, value) => {
  if (formatter === 'currency') {
    return currencyFormatter(value);
  }
  return undefined;
};

function currencyFormatter(value) {
  return numeral(value).format('0,0.00');
}

DataGrid.propTypes = {
  dataKey: PropTypes.string,
  // rownumbers: PropTypes.bool,
  loading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  // pagination: PropTypes.bool,
  // rowSelection: PropTypes.string,
  // allColumnSortable: PropTypes.bool,
  // checkboxSelection: PropTypes.bool,
  // resizable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  // rowModelType: PropTypes.string,
  paginationPageSize: PropTypes.number,
  pageNumber: PropTypes.number,
  // pageOptions: PropTypes.object,
  onChangePage: PropTypes.func,
  total: PropTypes.number,
  // lazy: PropTypes.bool,
  // cacheBlockSize: PropTypes.number,
  // columnResizing: PropTypes.bool,
  // multiSort: PropTypes.bool,
  // columnMoving: PropTypes.bool,
  onSortColumn: PropTypes.func,
  selectionMode: PropTypes.string,
  // onSelectionChange: PropTypes.func,
  onRowClick: PropTypes.func,
  onRowSingleSelection: PropTypes.func,
  selection: PropTypes.bool,
  rtl: PropTypes.bool,
  onChangePageSize: PropTypes.func,
  pageRangeDisplayed: PropTypes.number,
  selectionColor: PropTypes.string,
  showRowNumberColumn: PropTypes.bool,
  rowNumberColumnMessage: PropTypes.string,
  headerHeight: PropTypes.number,
  height: PropTypes.number,
  // onAllCheckChange: PropTypes.func,
  // selectedAllRows: PropTypes.bool,
};

export default DataGrid;
