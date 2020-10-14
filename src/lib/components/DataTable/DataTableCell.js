import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell/TableCell';

export const DataTableCell = withStyles(() => ({
  root: {
    padding: '0 2px',
    border: '1px solid #a6c9e2',
  },
}))(TableCell);
