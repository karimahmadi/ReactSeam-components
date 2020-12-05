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
import DownLoadFile from './lib/components/DownLoadFile/DownLoadFile';

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

  const handleIsValid = () => {
    console.log('is valid so return true');
    return true;
  };

  const handleError = error => {
    console.log('response:', error.response.status);
    console.log('response:', error.response.data);
    console.log('response:', error.response);
  };

  return (
    <Fragment>
      <Section title="تقویم تعطیلات سامانه چکاوک">
        <Grid container alignItems="center" spacing={0}>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>از تاریخ :</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Date />
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>تا تاریخ :</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Date />
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>نوع تعطیلی :</Label>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Input required />
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} />
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>از تاریخ :</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Date />
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>تا تاریخ :</Label>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Date />
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1} left>
            <Label>نوع تعطیلی :</Label>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Input required />
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} />
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
              <DownLoadFile
                download
                url="http://192.168.101.171/rest/lc/report/due/date/pdf/80?branchId=125" // &organManagementCode=933100
                authorization="Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0d2JESGJzZ1plMVFvbXJRQU9FZWllWG9GVGQ3SHpjNnEzUXVtdnYzbFFJIn0.eyJqdGkiOiI0Njg1M2EyOS04NjI4LTQ2ZjEtYTdkZS01M2Y3ZjRlNGJmYzgiLCJleHAiOjE2MDcxODU2MjksIm5iZiI6MCwiaWF0IjoxNjA3MTQ5NzI4LCJpc3MiOiJodHRwOi8vMTkyLjE2OC4xMDAuMTExL2F1dGgvcmVhbG1zL1Rlc3QtUmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo5MzBjMzI3ZC01YWZhLTQyZGQtOTJhNi05MjQ3OGY5MWJlNGM6ZTIzYWU3ZWMtY2ViNC00NzdjLThiYzEtYjFkYWNjNzg0ZGI4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibGMtY2xpZW50LXRlc3QiLCJhdXRoX3RpbWUiOjE2MDcxNDk2MjksInNlc3Npb25fc3RhdGUiOiIwMjczMzA1Mi1mODg4LTQ0MzYtYjU0YS01NzA0NDRhYzU1YzkiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzI6OTAwMiIsImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzE6MTIwMCIsImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzI6ODAiLCJodHRwOi8vbG9jYWxob3N0OjgwIiwiaHR0cDovLzE5Mi4xNjguMTAxLjE3MTo4MCIsImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzI6ODAxMCIsIioiLCJodHRwOi8vbG9jYWxob3N0IiwiaHR0cDovLzE5Mi4xNjguMTAxLjE3MTo4MDAwIiwiaHR0cDovLzE5Mi4xNjguMTAxLjE3MSIsImh0dHA6Ly8xOTIuMTY4LjEwMS4xNzIiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImJyYW5jaC5hdHRlbmRhbnQiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwicGVyc29uYWxDb2RlIjoiMjA1NDI5Iiwiem9uZWluZm8iOiIiLCJ3ZWJzaXRlIjoiIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJiaXJ0aGRhdGUiOiIiLCJnZW5kZXIiOiIiLCJwcm9maWxlIjoiIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjA1NDI5IiwiZ2l2ZW5fbmFtZSI6Itqp2LHbjNmFIiwibG9jYWxlIjoiZmEtSVIiLCJtaWRkbGVfbmFtZSI6IiIsInVzZXJJZCI6IjEwNzY0MCIsInBpY3R1cmUiOiIiLCJvcmdhbkNvZGUiOiI0MDkiLCJzZXJ2ZXJNYWMiOiIwMDowNDo3NTowYTo2ZTphNiIsIm5hbWUiOiLaqdix24zZhSDYstmG2K8iLCJuaWNrbmFtZSI6IiIsIm9yZ2FuSWQiOiIyMDgiLCJmYW1pbHlfbmFtZSI6Itiy2YbYryJ9.FUA4oGEEGb2K28H5Hgr9Yxn2v02DWIqf7EsExJHKUTlPse7is7l0k43vGSWUlUu_M-p6r6WnLYKdV_KIXfaGPL2vrxqr2Lk4PNFiKhppkDdyhHgOQ6XVnGEM7yzJRQ6DQjKkdkRmRON-J-5EY99lFF5mA2Y5Hgr2kRqYo0kQL-ePJBmU5thPFHED8uw9txd6HsmXXahUlUiOnt2ygEB7g4y97MV6g01rRkP4LgbDOEjjmQh_l3hDlXVw3zVSphCIzL7-D2HnsyPET6Ak2mtBgFxEyU6pFtzjLorlwEWCKPXmceSsxvWpzIt-9P46RKTLqec_vpTQYVVTRRjqRx5PBw"
                responseType="blob"
                fileType="application/pdf"
                isValid={handleIsValid}
                onError={handleError}
              >
                open new tab
              </DownLoadFile>
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
