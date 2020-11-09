import React, { Fragment } from 'react';
import { render } from 'react-dom';
import 'rc-easyui/dist/themes/default/easyui.css';
import 'rc-easyui/dist/themes/react.css';
import { ModalProvider } from './lib/components/Modal';
import { Section } from './lib/components/Section';
import { ThemeProvider } from './lib/components/ThemeProvider';
import { Grid } from './lib/components/Grid';

const TestAccordion = () => {

  return (
    <Fragment>
      <Section title="تست آکاردئون">
        <Grid container>

        </Grid>
      </Section>
    </Fragment>
  );
};

const App = () => (
  <ThemeProvider>
    <TestAccordion />
  </ThemeProvider>
);

render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById('root'),
);
