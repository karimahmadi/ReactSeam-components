import React, { Fragment } from 'react';
import { render } from 'react-dom';
import 'rc-easyui/dist/themes/default/easyui.css';
import 'rc-easyui/dist/themes/react.css';
import { ModalProvider } from './lib/components/Modal';
import { Section } from './lib/components/Section';
import { ThemeProvider } from './lib/components/ThemeProvider';
import { Grid } from './lib/components/Grid';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from './lib/components/Accordion';

const TestAccordion = () => (
  <Fragment>
    <Section title="تست آکاردئون">
      <Grid container>
        <Accordion square defaultExpanded>
          <AccordionSummary>
            <div>تست آکاردئون</div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              این یک متن تستی است.این یک متن تستی است.این یک متن تستی است.این یک
              متن تستی است.این یک متن تستی است.این یک متن تستی است.این یک متن
              تستی است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی
              است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی
              است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی است.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion square>
          <AccordionSummary>
            <div>تست آکاردئون</div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              این یک متن تستی است.این یک متن تستی است.این یک متن تستی است.این یک
              متن تستی است.این یک متن تستی است.این یک متن تستی است.این یک متن
              تستی است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی
              است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی
              است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی است.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion square showIcon={false} defaultExpanded>
          <AccordionSummary>
            <div>تست آکاردئون</div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              این یک متن تستی است.این یک متن تستی است.این یک متن تستی است.این یک
              متن تستی است.این یک متن تستی است.این یک متن تستی است.این یک متن
              تستی است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی
              است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی
              است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی است.
            </div>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Section>
  </Fragment>
);

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
