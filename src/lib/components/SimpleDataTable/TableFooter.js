import React, { useContext } from 'react';
import MuiTableFooter from '@material-ui/core/TableFooter';
import { v4 as uuid } from 'uuid';
import { DataTableContext } from './DataTableContext';
import { DataTableRow } from './DataTableRow';
import { DataTableCell } from './DataTableCell';

export const TableFooter = () => {
  const [state] = useContext(DataTableContext);

  return (
    <MuiTableFooter>
      {state.dataFooters.map(row => (
        <DataTableRow key={uuid()}>
          {state.footerDef.map(headCell => (
            <DataTableCell
              variant="footer"
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
    </MuiTableFooter>
  );
};
