import React, { useEffect, useContext } from 'react';
import MuiTableBody from '@material-ui/core/TableBody/TableBody';
import { v4 as uuid } from 'uuid';
import { DataTableContext } from './DataTableContext';
import { UPDATE_SELECTED_ROWS, UPDATE_ROWS_COUNT } from './constants';
import { DataTableCheckbox } from './DataTableCheckbox';
import { DataTableRow } from './DataTableRow';
import { DataTableCell } from './DataTableCell';

export const TableBody = () => {
  const [state, dispatch] = useContext(DataTableContext);

  const isSelected = name => state.selected.indexOf(name) !== -1;
  const emptyRows =
    state.rowsPerPage -
    Math.min(
      state.rowsPerPage,
      state.rows.length - state.page * state.rowsPerPage,
    );

  useEffect(() => {
    let rowCount = state.rowsPerPage;
    if (
      state.rows.length - state.page * state.rowsPerPage <
      state.rowsPerPage
    ) {
      rowCount = state.rows.length - state.page * state.rowsPerPage;
    }
    dispatch({ type: UPDATE_ROWS_COUNT, payload: rowCount });
  }, [state.rows, state.rowsPerPage, state.page]);

  function descendingComparator(a, b, by) {
    if (b[by] < a[by]) {
      return -1;
    }
    if (b[state.orderBy] > a[state.orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(o, by) {
    return o === 'desc'
      ? (a, b) => descendingComparator(a, b, by)
      : (a, b) => -descendingComparator(a, b, by);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const result = comparator(a[0], b[0]);
      if (result !== 0) return result;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  const handleClick = (event, name) => {
    const selectedIndex = state.selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(state.selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(state.selected.slice(1));
    } else if (selectedIndex === state.selected.length - 1) {
      newSelected = newSelected.concat(state.selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        state.selected.slice(0, selectedIndex),
        state.selected.slice(selectedIndex + 1),
      );
    }

    dispatch({
      type: UPDATE_SELECTED_ROWS,
      payload: newSelected,
    });
  };

  return (
    <MuiTableBody>
      {stableSort(state.rows, getComparator(state.order, state.orderBy))
        .slice(
          state.page * state.rowsPerPage,
          state.page * state.rowsPerPage + state.rowsPerPage,
        )
        .map(row => {
          const isItemSelected = isSelected(row.name);

          return (
            <DataTableRow
              hover
              onClick={event => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.name}
              selected={isItemSelected}
            >
              {state.colsDef.map(headCell => {
                if (headCell.checkbox === true) {
                  return (
                    <DataTableCell key={uuid()}>
                      <DataTableCheckbox checked={isItemSelected} />
                    </DataTableCell>
                  );
                }
                return (
                  <DataTableCell align={headCell.align} key={headCell.id}>
                    {row[headCell.id]}
                  </DataTableCell>
                );
              })}
            </DataTableRow>
          );
        })}
      {emptyRows > 0 && (
        <DataTableRow>
          <DataTableCell colSpan={6} />
        </DataTableRow>
      )}
    </MuiTableBody>
  );
};
