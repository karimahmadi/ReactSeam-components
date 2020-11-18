import React, { useState } from 'react';
import { render } from 'react-dom';
import { ModalProvider } from './lib/components/Modal';
import { Section } from './lib/components/Section';
import { ThemeProvider } from './lib/components/ThemeProvider';
import Tabs from './lib/components/Tab/Tabs';
import { Tab, TabPanel } from './lib/components/Tab';
import Input from './lib/components/Input/Input';
import { Button } from './lib/components/Button';

const TestAccordion = () => {
  const [activeTab, setActiveTab] = useState('0');
  const [value, setValue] = useState('');

  const handleChangeTab = (e, newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setValue(new Date());
  };

  return (
    <Section title="تست TabControl">
      <Tabs value={activeTab} onChange={handleChangeTab}>
        <Tab id="0" value="0" label="قسمت اول" />
        <Tab id="1" value="1" label="قسمت دوم" />
        <Tab id="2" value="2" label="سمت سوم" />
      </Tabs>
      <TabPanel value={activeTab} index="0">
        <div>tab1</div>
        <Input value={value} onChange={handleChange} />
        <Button onClick={handleClick}>تغییر</Button>
      </TabPanel>
      <TabPanel value={activeTab} index="1">
        <div>tab2</div>
      </TabPanel>
      <TabPanel value={activeTab} index="2">
        <div>tab3</div>
      </TabPanel>
    </Section>
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
