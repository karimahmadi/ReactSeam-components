import React, { Fragment } from 'react';
import { render } from 'react-dom';
import numeral from 'numeral';
import { Section } from './lib/components/Section';
import { SimpleDataTable } from './lib/components/SimpleDataTable';
import { Grid } from './lib/components/Grid';
import { ThemeProvider } from './lib/components/ThemeProvider';
import { ModalProvider } from './lib/components/Modal';

const Page1 = () => {
  const useData = () => [
    {
      date: '1398/10/18',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      amount: 12000,
      desc: '',
    },
    {
      date: '1398/10/18',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      amount: 121200,
      desc: '',
    },
    {
      date: '1398/10/18',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      amount: 52000,
      desc: '',
    },
    {
      date: '1398/10/18',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      amount: 0,
      desc: '',
    },
    {
      date: '1398/10/25',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      amount: 1200000,
      desc: '',
    },
    {
      date: '1398/11/02',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      amount: 12000,
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      amount: 100,
      desc: '',
    },
  ];

  const dataRows = useData();
  const rowDef = [
    {
      field: 'date',
      headerName: 'تاریخ',
      headerAlign: 'right',
      align: 'right',
      width: '10%',
    },
    {
      field: 'dayofweek',
      headerName: 'روز هفته',
      headerAlign: 'right',
      align: 'right',
      width: '10%',
    },
    {
      field: 'holidaytype',
      headerName: 'نوع تعطیلی',
      headerAlign: 'right',
      align: 'right',
    },
    {
      field: 'amount',
      headerName: 'مبلغ',
      headerAlign: 'right',
      align: 'right',
      formatter: value => numeral(value).format('0,0'),
      width: '10%',
    },
    {
      field: 'desc',
      headerName: 'توضیحات',
      headerAlign: 'right',
      align: 'right',
    },
  ];

  const dataFooters = [{ total: '1200000', headerTotal: 'جمع' }];
  const footerDef = [
    {
      field: 'headerTotal',
      colSpan: 3,
      align: 'left',
    },
    {
      field: 'total',
      align: 'right',
      formatter: value => numeral(value).format('0,0'),
    },
    {},
  ];

  return (
    <Fragment>
      <Section grid>
        <Grid container spacing={0}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <SimpleDataTable
              dataRows={dataRows}
              rowDef={rowDef}
              dataFooters={dataFooters}
              footerDef={footerDef}
            />
          </Grid>
        </Grid>
      </Section>
    </Fragment>
  );
};

// export default Page1;

const App = () => (
  <ThemeProvider>
    <Page1 />
  </ThemeProvider>
);

render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById('root'),
);
