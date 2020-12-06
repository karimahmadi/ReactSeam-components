import { withStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination/Pagination';

export const DataTablePagination = withStyles({
  root: {
    backgroundColor: '#6cd4de',
  },
  ul: {
    justifyContent: 'center',
  },
})(Pagination);
