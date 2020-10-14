import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell/TableCell';

export const DataTableHeadCell = withStyles(() => ({
  root: {
    padding: '0 2px',
    border: '1px solid #c5dbec',
  },
}))(TableCell);
