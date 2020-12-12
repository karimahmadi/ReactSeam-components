import MuiTableHead from '@material-ui/core/TableHead';
import React, { useContext } from 'react';
import { DataTableContext } from './DataTableContext';
import { DataTableHeadCell } from './DataTableHeadCell';
import { DataTableHeadRow } from './DataTableHeadRow';

export const TableHead = () => {
  const [state] = useContext(DataTableContext);

  return (
    <MuiTableHead>
      <DataTableHeadRow>
        {state.rowDef.map(headCell => (
          <DataTableHeadCell
            key={headCell.field}
            style={{ textAlign: headCell.headerAlign, width: headCell.width }}
            padding="none"
          >
            {headCell.headerName}
          </DataTableHeadCell>
        ))}
      </DataTableHeadRow>
    </MuiTableHead>
  );
};
