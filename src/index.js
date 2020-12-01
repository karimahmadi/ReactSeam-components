import React, { Fragment } from 'react';
import { render } from 'react-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup/ButtonGroup';
import { ModalProvider, useModal } from './lib/components/Modal';
import { Section } from './lib/components/Section';
import { ThemeProvider } from './lib/components/ThemeProvider';
import { InputLabel as Label } from './lib/components/InputLabel';
import { Input } from './lib/components/Input';
import { Date } from './lib/components/Date';
import { Button } from './lib/components/Button';
import { DataTable } from './lib/components/DataTable';
import { Grid } from './lib/components/Grid';
import Page2 from './page2';

const TestSection = () => {
  const useData = () => [
    {
      date: '1398/10/18',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/10/25',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
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
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
  ];

  const rows = useData();
  const colsDef = [
    {
      checkbox: true,
    },
    {
      id: 'date',
      headerAlign: 'right',
      align: 'right',
      numeric: true,
      disablePadding: true,
      label: 'تاریخ',
    },
    {
      id: 'dayofweek',
      headerAlign: 'right',
      align: 'right',
      numeric: true,
      disablePadding: true,
      label: 'روز هفته',
    },
    {
      id: 'holidaytype',
      headerAlign: 'right',
      align: 'right',
      numeric: true,
      disablePadding: true,
      label: 'نوع تعطیلی',
    },
    {
      id: 'desc',
      headerAlign: 'right',
      align: 'right',
      numeric: true,
      disablePadding: true,
      label: 'توضیحات',
    },
  ];

  const { openModal } = useModal();

  const handleConfirm = () => {
    // confirm clicked
  };
  const handleCancel = () => {
    // cancel clicked
  };
  const handleClose = () => {
    // modal closed
  };

  const handleRetrive = () => {
    openModal({
      Component: Page2,
      fullWidth: true,
      maxWidth: 'sm',
      title: 'عنوان فرم',
      disableBackdropClick: true,
      disableEscapeKeyDown: true,
      onConfirm: handleConfirm,
      onCancel: handleCancel,
      onClose: handleClose,
    });
  };

  return (
    <Fragment>
      <Section title="تقویم تعطیلات سامانه چکاوک">
        <Grid container alignItems="center" spacing={0}>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Label>از تاریخ :</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Date />
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Label>تا تاریخ :</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Date />
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Label>نوع تعطیلی :</Label>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Input />
          </Grid>
        </Grid>
      </Section>
      <Section grid>
        <Grid container spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <ButtonGroup variant="text">
              <Button onClick={handleRetrive}>بازیابی</Button>
              <Button>ایجاد گروهی</Button>
              <Button>ایجاد موردی</Button>
              <Button>ایجاد سالانه شمسی</Button>
              <Button>ویرایش موردی</Button>
            </ButtonGroup>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <DataTable
              rows={rows}
              colsDef={colsDef}
              totalCount={100}
              pageSize={10}
            />
          </Grid>
        </Grid>
      </Section>
    </Fragment>
  );
};

const App = () => (
  <ThemeProvider>
    <TestSection />
  </ThemeProvider>
);

render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById('root'),
);
