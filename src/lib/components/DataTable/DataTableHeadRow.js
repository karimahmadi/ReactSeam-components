import { withStyles } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow/TableRow';

export const DataTableHeadRow = withStyles(() => ({
  root: {
    background: '#6cd4de 50% 50% repeat-x',
    color: '#203941',
  },
}))(TableRow);
