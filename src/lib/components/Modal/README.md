```
import React from 'react';
import {ModalProvider,useModal} from '@tatareact/core';

const TestModal = () => {
  const {openError} = useModal();
  return <button onClick={()=>openError("modal from tatareact code ",onClose)}>click me</button>
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

```ecmascript 6
 const { openModal } = useModal();
openModal(options)
```

### options

- Component  : react component
- ComponentProps : object  
- fullScreen : boolean 
- fullWidth : boolean
- maxWidth : 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false
- title : string 
- disableBackdropClick: boolean
- disableEscapeKeyDown: boolean     
- onClose : event
- onConfirm : event
- onCancel : event




