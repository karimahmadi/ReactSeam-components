/**
 *
 * DataTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { DataTableProvider } from './DataTableContext';

function DataTable({
  dataRows = [],
  rowColDef = [],
  dataFooters = [],
  footerColDef = [],
  overflowX = 'hidden',
  overflowY = 'hidden',
}) {
  return (
    <DataTableProvider
      dataRows={dataRows}
      rowDef={rowColDef}
      dataFooters={dataFooters}
      footerDef={footerColDef}
    >
      <TableContainer style={{ overflowX, overflowY }}>
        <Table>
          <TableHead />
          <TableBody />
          <TableFooter />
        </Table>
      </TableContainer>
    </DataTableProvider>
  );
}

DataTable.propTypes = {
  dataRows: PropTypes.array,
  rowColDef: PropTypes.array,
  dataFooters: PropTypes.array,
  footerColDef: PropTypes.array,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string,
};

export default DataTable;
