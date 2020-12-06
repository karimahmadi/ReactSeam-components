import { withStyles } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow/TableRow';

export const DataTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
