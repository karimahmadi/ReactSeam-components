#  Modal component
## import 
```
import {useModal, EVENT_ERROR, EVENT_GENERAL_ERROR} from '@tatareact/core/Modal';
```

- openInfo(message, onClose, options)
- openError(message, onClose, options)
- openConfirm(message, onConfirm, onCancel, options)
- openQuestion(message, onConfirm, onCancel, options)
- openGeneralError(statusCode, options)

### options 
- {
		eventType : string, (ex. EVENT_ERROR || 'my_custom_event')
  	data: object
  }

### sample 
```
import React from 'react';
import {ModalProvider,useModal} from '@tatareact/core';

const TestModal = () => {
  const {openError,openInfo,openModal,openConfirm,openGeneralError,openQuestion} = useModal();
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

- openModal(options)

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
 
```
 const { openModal } = useModal();
openModal(options)
```





