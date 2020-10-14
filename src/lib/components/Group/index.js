import React, { useReducer } from 'react';
import PropsType from 'prop-types';
import { reducer, initalState } from './reducer';
import { ChangeFocus } from './ChangeFocus';
import { ALL_CONSTANT } from './constants';

const ComponentContext = React.createContext();

const GroupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <ComponentContext.Provider value={[state, dispatch, ALL_CONSTANT]}>
      {children}
    </ComponentContext.Provider>
  );
};

GroupProvider.propTypes = {
  children: PropsType.node,
};

export { GroupProvider, ChangeFocus, ComponentContext };
