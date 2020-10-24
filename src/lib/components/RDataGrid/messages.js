/*
 * DataGrid Messages
 *
 * This contains all the text for the DataGrid component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.DataGrid';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the DataGrid component!',
  },
  nextPage: {
    id: `${scope}.nextPage`,
    defaultMessage: 'بعدی',
  },
  prevPage: {
    id: `${scope}.nextPage`,
    defaultMessage: 'قبلی',
  },
  lastPage: {
    id: `${scope}.nextPage`,
    defaultMessage: 'آخر',
  },
  firstPage: {
    id: `${scope}.nextPage`,
    defaultMessage: 'اول',
  },
});
