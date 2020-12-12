import React, { useContext } from 'react';
import MuiTableBody from '@material-ui/core/TableBody/TableBody';
import { v4 as uuid } from 'uuid';
import { DataTableContext } from './DataTableContext';
import { DataTableRow } from './DataTableRow';
import { DataTableCell } from './DataTableCell';

export const TableBody = () => {
  const [state] = useContext(DataTableContext);
  return (
    <MuiTableBody>
      {state.dataRows.map(row => (
        <DataTableRow key={uuid()}>
          {state.rowDef.map(headCell => (
            <DataTableCell
              align={headCell.align}
              key={uuid()}
              colSpan={headCell.colSpan}
            >
              {headCell.formatter
                ? headCell.formatter(row[headCell.field])
                : row[headCell.field]}
            </DataTableCell>
          ))}
        </DataTableRow>
      ))}
    </MuiTableBody>
  );
};
