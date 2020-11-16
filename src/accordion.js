import React, { Fragment, useState } from 'react';
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

const TestAccordion = () => {
  const [icon, setIcon] = useState(true);

  const handleIconChange = (e, expanded) => {
    setIcon(expanded);
  };

  return (
    <Fragment>
      <Section title="تست آکاردئون">
        <Grid container>
          <Accordion square defaultExpanded onChange={handleIconChange}>
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              expandIcon={icon}
            >
              <div>تست آکاردئون</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                این یک متن تستی است.این یک متن تستی است.این یک متن تستی است.این
                یک متن تستی است.این یک متن تستی است.این یک متن تستی است.این یک
                متن تستی است.این یک متن تستی است.این یک متن تستی است.این یک متن
                تستی است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی
                است.این یک متن تستی است.این یک متن تستی است.این یک متن تستی است.
              </div>
            </AccordionDetails>
          </Accordion>
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
