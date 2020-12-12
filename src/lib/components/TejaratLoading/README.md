```
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { ModalProvider } from '@tatareact/core/Modal';
import { Section } from '@tatareact/core/Section';
import { ThemeProvider } from '@tatareact/core/ThemeProvider';
import { Button } from '@tatareact/core/Button';

import { LoadingProvider, useLoading } from '@tatareact/core/TejaratLoading';

const TestSection = () => {

  const { loading } = useLoading();

  const handleRetrive = () => {
    loading(true);
    setTimeout(() => {
      loading(false);
    }, 5000);
  };

  return (
	...
	<Button onClick={handleRetrive}>بازیابی</Button>
	...
  );
};

const App = () => (
  <ThemeProvider>
    <TestSection />
  </ThemeProvider>
);

render(
  <LoadingProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </LoadingProvider>,
  document.getElementById('root'),
);

```
