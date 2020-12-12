import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DataTableContext = React.createContext({});

const DataTableProvider = ({
  children,
  dataRows,
  rowDef,
  dataFooters,
  footerDef,
}) => {
  const [state, setState] = useState({
    dataRows,
    rowDef,
    dataFooters,
    footerDef,
  });
  return (
    <DataTableContext.Provider value={[state, setState]}>
      {children}
    </DataTableContext.Provider>
  );
};

DataTableProvider.propTypes = {
  children: PropTypes.node,
  dataRows: PropTypes.array,
  rowDef: PropTypes.array,
  dataFooters: PropTypes.array,
  footerDef: PropTypes.array,
};

export { DataTableContext, DataTableProvider };
