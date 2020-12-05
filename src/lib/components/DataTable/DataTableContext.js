import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { reducer } from './reducer';

const DataTableInitialState = {
  order: '',
  orderBy: '',
  selected: [],
  page: 0,
  rowsPerPage: 5,
};
const DataTableContext = React.createContext(DataTableInitialState);

const DataTableProvider = ({ children, rows, colsDef, pageSize }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...DataTableInitialState,
    rows,
    colsDef,
    rowsPerPage: pageSize,
  });
  return (
    <DataTableContext.Provider value={[state, dispatch]}>
      {children}
    </DataTableContext.Provider>
  );
};

DataTableProvider.propTypes = {
  children: PropTypes.node,
  rows: PropTypes.array,
  colsDef: PropTypes.array,
  pageSize: PropTypes.number,
};

export { DataTableContext, DataTableProvider };
