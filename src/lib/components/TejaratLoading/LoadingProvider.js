import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

import { LoadingContext } from './LoadingContext';
import { TejaratLoading } from './';

export const LoadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { loading: false });
  return (
    <LoadingContext.Provider value={[state, dispatch]}>
      {children}
      {state.loading && <TejaratLoading />}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node,
};
