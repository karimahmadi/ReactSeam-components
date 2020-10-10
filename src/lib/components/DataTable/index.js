/**
 *
 * DataTable
 *
 */

import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { DataTableProvider } from './DataTableContext';

const useData = () => [
  { name: 'Frozen yoghurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9 },
];

function DataTable() {
  const rows = useData();
  const colsDef = [
    {
      checkbox: true,
    },
    {
      id: 'name',
      headerAlign: 'right',
      align: 'left',
      numeric: true,
      disablePadding: false,
      label: 'دسر (100گرم)',
    },
    {
      id: 'calories',
      headerAlign: 'right',
      align: 'right',
      numeric: true,
      disablePadding: false,
      label: 'کالری',
    },
    {
      id: 'fat',
      headerAlign: 'right',
      align: 'right',
      numeric: true,
      disablePadding: false,
      label: 'چربی (گرم)',
    },
    {
      id: 'carbs',
      headerAlign: 'right',
      align: 'right',
      numeric: true,
      disablePadding: false,
      label: 'کربوهیدرات (گرم)',
    },
    {
      id: 'protein',
      headerAlign: 'right',
      align: 'right',
      numeric: true,
      disablePadding: false,
      label: 'پروتئین (گرم)',
    },
  ];

  return (
    <DataTableProvider rows={rows} colsDef={colsDef}>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead />
          <TableBody />
        </Table>
      </TableContainer>
    </DataTableProvider>
  );
}

DataTable.propTypes = {};

export default DataTable;
