import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Grid from '@material-ui/core/Grid/Grid';
import { ModalProvider, useModal } from './lib/components/Modal';
import { Section } from './lib/components/Section';
import { ThemeProvider } from './lib/components/ThemeProvider';
// import { Label } from './lib/components/Label';
import { InputLabel as Label } from './lib/components/InputLable';
import { Input } from './lib/components/Input';
import { Date } from './lib/components/Date';

const TestSection = () => (
  <Fragment>
    <Section title="تقویم تعطیلات سامانه چکاوک" width="80%">
      <Grid container alignItems="center" spacing={0}>
        <Grid item md={1} sm={1}>
          <Label>از تاریخ :</Label>
        </Grid>
        <Grid item md={3} sm={3}>
          <Date />
        </Grid>
        <Grid item md={1} sm={1}>
          <Label>تا تاریخ :</Label>
        </Grid>
        <Grid item md={3} sm={3}>
          <Date />
        </Grid>
        <Grid item md={1} sm={1}>
          <Label>نوع تعطیلی :</Label>
        </Grid>
        <Grid item md={3} sm={3}>
          <Input />
        </Grid>
      </Grid>
    </Section>
    <Section width="100%" grid></Section>
  </Fragment>
);

const App = () => {
  const { openError } = useModal();
  return (
    <ThemeProvider>
      <TestSection />
      <button
        onClick={() =>
          openError('error from useModal HOOK', () =>
            console.log('modal closed'),
          )
        }
      >
        test modal component
      </button>
    </ThemeProvider>
  );
};

render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById('root'),
);
