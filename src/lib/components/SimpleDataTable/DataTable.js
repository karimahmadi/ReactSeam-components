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
  rowDef = [],
  dataFooters = [],
  footerDef = [],
  overflowX = 'hidden',
  overflowY = 'hidden',
}) {
  return (
    <DataTableProvider
      dataRows={dataRows}
      rowDef={rowDef}
      dataFooters={dataFooters}
      footerDef={footerDef}
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
  rowDef: PropTypes.array,
  dataFooters: PropTypes.array,
  footerDef: PropTypes.array,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string,
};

export default DataTable;
