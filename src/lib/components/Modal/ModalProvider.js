import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

import { ModalContext } from './ModalContext';
import {ModalWrapper} from './ModalWrapper';

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <ModalContext.Provider value={[state, dispatch]}>
      {children}
      <ModalWrapper/>
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node,
};
