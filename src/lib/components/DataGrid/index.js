/**
 *
 * DataGrid
 *
 */

import React from 'react';
import DataGridWrapper from './DataGridWrapper';
import DataGrid from './DataGrid';
export default props => (
  <DataGridWrapper className="ag-theme-alpine">
    <DataGrid {...props} />
  </DataGridWrapper>
);
export { DataGridColumn } from './DataGridColumn';
export { DataGridHeaderRow } from './DataGridHeaderRow';
export { DataGridColumnGroup } from './DataGridColumnGroup';
