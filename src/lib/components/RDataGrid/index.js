/**
 *
 * DataGrid
 *
 */

import React from 'react';
import DataGrid from './DataGrid';
export default props => <DataGrid {...props} />;
export { DataGridColumn as RDataGridColumn } from './DataGridColumn';
export { DataGridHeaderRow as RDataGridHeaderRow } from './DataGridHeaderRow';
export {
  DataGridColumnGroup as RDataGridColumnGroup,
} from './DataGridColumnGroup';
