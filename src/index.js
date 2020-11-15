import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup/ButtonGroup';
import 'rc-easyui/dist/themes/default/easyui.css';
import 'rc-easyui/dist/themes/react.css';
import { ModalProvider } from './lib/components/Modal';
import { Section } from './lib/components/Section';
import { ThemeProvider } from './lib/components/ThemeProvider';
import { InputLabel as Label } from './lib/components/InputLabel';
import { Date } from './lib/components/Date';
import { Button } from './lib/components/Button';
import { Input } from './lib/components/Input';
import DataGrid, { DataGridColumn } from './lib/components/DataGrid';
import { CodeTextLookup } from './lib/components/CodeTextLookup';
import { CodeCombo } from './lib/components/CodeCombo';
import { Grid } from './lib/components/Grid';
import { FocusManager } from './lib/components/FocusManager';
import { CheckboxGroup } from './lib/components/CheckboxGroup';

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
  ];

  const rows = useData();
  const [value, setValue] = useState('');

  return (
    <Fragment>
      <FocusManager>
        <Section title="گزارش اطلاعات قرارداد">
          <Grid container>
            <Grid item lg={2} md={2} sm={2} xs={2} left>
              <Label>شماره قرارداد:</Label>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Input
                autoFocus
                tabindex="0"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} left>
              <Label>شماره حساب برداشت کارمزد:</Label>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <CodeTextLookup ratio="1:1" required />
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} />
            <Grid item lg={2} md={2} sm={2} xs={2} left>
              <Label>شماره قرارداد:</Label>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Input required disabled={value === '123'} />
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} left>
              <Label>شماره حساب برداشت کارمزد:</Label>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <CodeTextLookup ratio="1:1" hidebutton />
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} />

            <Grid item lg={2} md={2} sm={2} xs={2} left>
              <Label>تاریخ شروع اعتبار از:</Label>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Date />
              <Label>تا:</Label>
              <Date />
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} left>
              <Label>تاریخ خاتمه اعتبار از:</Label>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Date />
              <Label>تا:</Label>
              <Date required />
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} left />

            <Grid item lg={2} md={2} sm={2} xs={2} left>
              <Label>وضعیت:</Label>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}>
              <CodeCombo items={[]} required />
            </Grid>
            <Grid>
              <CheckboxGroup
                items={[
                  { code: 1, title: 'مورد یک' },
                  { code: 2, title: 'مورد دو' },
                ]}
                propertyCode="code"
                propertyTitle="title"
                value={[]}
                name="name"
              />
            </Grid>
          </Grid>
        </Section>
        <Section grid>
          <Grid container spacing={1}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <ButtonGroup variant="text">
                <Button onClick={() => console.log('fetch')}>بازیابی</Button>
                <Button onClick={() => console.log('create')}>جدید</Button>
                <Button onClick={() => console.log('update')}>ویرایش</Button>
                <Button onClick={() => console.log('delete')}>حذف</Button>
              </ButtonGroup>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <DataGrid data={rows} pagination>
                <DataGridColumn title="تاریخ" field="date" align="right" />
                <DataGridColumn
                  title="روز هفته"
                  field="dayofweek"
                  align="right"
                />
                <DataGridColumn
                  title="نوع تعطیلی"
                  field="holidaytype"
                  align="right"
                />
                <DataGridColumn title="توضیحات" field="desc" align="right" />
              </DataGrid>
            </Grid>
          </Grid>
        </Section>
      </FocusManager>
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
