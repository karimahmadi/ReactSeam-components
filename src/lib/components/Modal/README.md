```
import React from 'react';
import {ModalProvider,useModal} from '@tatareact/core';

const TestModal = () => {
  const {openError} = useModal();
  return <button onClick={()=>openError("modal from tatareact code ")}>click me</button>
};

function App() {
  return (
      <ModalProvider>
        <div className="App">
            Test Tata React Modal Components
            <TestModal/>
        </div>
      </ModalProvider>
  );
}

export default App;

```
