import MuiTableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel/TableSortLabel';
import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { DataTableContext } from './DataTableContext';
import { UPDATE_COLUMN_ORDER, UPDATE_SELECTED_ROWS } from './constants';
import { DataTableCheckbox } from './DataTableCheckbox';
import { DataTableHeadCell } from './DataTableHeadCell';
import { DataTableHeadRow } from './DataTableHeadRow';

export const TableHead = () => {
  const [state, dispatch] = useContext(DataTableContext);

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = state.rows.map(n => n.name);
      dispatch({ type: UPDATE_SELECTED_ROWS, payload: newSelecteds });
      return;
    }
    dispatch({ type: UPDATE_SELECTED_ROWS, payload: [] });
  };

  const numSelected = state.selected.length;

  const createSortHandler = property => () => {
    const isAsc = state.orderBy === property && state.order === 'asc';
    const order = isAsc ? 'desc' : 'asc';
    dispatch({
      type: UPDATE_COLUMN_ORDER,
      payload: { order, orderBy: property },
    });
  };

  return (
    <MuiTableHead>
      <DataTableHeadRow>
        {state.colsDef.map(headCell => {
          if (headCell.checkbox === true) {
            return (
              <DataTableHeadCell key={uuid()}>
                <DataTableCheckbox
                  indeterminate={
                    numSelected > 0 && numSelected < state.rowCount
                  }
                  checked={state.rowCount > 0 && numSelected === state.rowCount}
                  onChange={handleSelectAllClick}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                />
              </DataTableHeadCell>
            );
          }
          return (
            <DataTableHeadCell
              key={headCell.id}
              style={{ textAlign: headCell.headerAlign }}
              padding={headCell.disablePadding ? 'none' : 'default'}
            >
              <TableSortLabel
                active={state.orderBy === headCell.id}
                direction={state.orderBy === headCell.id ? state.order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </DataTableHeadCell>
          );
        })}
      </DataTableHeadRow>
    </MuiTableHead>
  );
};
