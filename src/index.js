import React, { Fragment } from 'react';
import { render } from 'react-dom';
import numeral from 'numeral';
import { Section } from './lib/components/Section';
import { SimpleDataTable } from './lib/components/SimpleDataTable';
import { Grid } from './lib/components/Grid';
import { ThemeProvider } from './lib/components/ThemeProvider';
import { ModalProvider } from './lib/components/Modal';
import Input from './lib/components/Input/Input';
import { CodeCombo } from './lib/components/CodeCombo';
import { CodeTextLookup } from './lib/components/CodeTextLookup';
import { PostfixContainer } from './lib/components/PostfixContainer';
import { AmountInput } from './lib/components/AmountInput';
import { NumberInput } from './lib/components/NumberInput';
import { Date } from './lib/components/Date';

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
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <PostfixContainer required postfix="ریال">
              <Input />
            </PostfixContainer>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <CodeCombo items={[]} required />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <CodeCombo items={[]} />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <CodeCombo items={[]} required />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Input />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <CodeTextLookup required hidebutton />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <AmountInput required />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <NumberInput required />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Date required />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Date postfix="تاریخ جاری" />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <SimpleDataTable
              dataRows={dataRows}
              rowColDef={rowDef}
              dataFooters={dataFooters}
              footerColDef={footerDef}
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
