import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Grid from '@material-ui/core/Grid/Grid';
import { ModalProvider, useModal } from './lib/components/Modal';
import { Section } from './lib/components/Section';
import { ThemeProvider } from './lib/components/ThemeProvider';
import { InputLabel as Label } from './lib/components/InputLable';
import { Input } from './lib/components/Input';
import { Date } from './lib/components/Date';
import { Button } from './lib/components/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup/ButtonGroup';

const TestSection = () => (
  <Fragment>
    <Section title="تقویم تعطیلات سامانه چکاوک">
      <Grid container alignItems="center" spacing={0}>
        <Grid item lg={1} md={1} sm={1} xs={1}>
          <Label>از تاریخ :</Label>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <Date />
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={1}>
          <Label>تا تاریخ :</Label>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
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
      <ButtonGroup variant="text">
        <Button>بازیابی</Button>
        <Button>ایجاد گروهی</Button>
        <Button>ایجاد موردی</Button>
        <Button>ایجاد سالانه شمسی</Button>
        <Button>ویرایش موردی</Button>
      </ButtonGroup>
    </Section>
  </Fragment>
);

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
