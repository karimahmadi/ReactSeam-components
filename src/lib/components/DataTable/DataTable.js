/**
 *
 * DataTable
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { DataTableProvider } from './DataTableContext';
import { DataTablePagination } from './DataTablePagination';

function DataTable({ rows, colsDef, totalCount, pageSize }) {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(
    totalCount / pageSize + (totalCount % pageSize) > 0 ? 1 : 0,
  );

  useEffect(() => {
    setCount(totalCount / pageSize + (totalCount % pageSize > 0 ? 1 : 0));
  }, [totalCount, pageSize]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <DataTableProvider rows={rows} colsDef={colsDef} pageSize={pageSize}>
      <TableContainer style={{ maxHeight: 240 }}>
        <Table>
          <TableHead />
          <TableBody />
        </Table>
      </TableContainer>
      <DataTablePagination
        size="small"
        count={count}
        showFirstButton
        showLastButton
        page={page}
        onChange={handleChange}
      />
    </DataTableProvider>
  );
}

DataTable.propTypes = {
  rows: PropTypes.array,
  colsDef: PropTypes.array,
  totalCount: PropTypes.number,
  pageSize: PropTypes.number,
};

export default DataTable;
