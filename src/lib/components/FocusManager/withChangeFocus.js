import React, { useContext } from 'react';
import { FocusManagerContext } from './FocusManagerContext';
const withChangeFocus = Component => props => {
  const [dispatch, ALL_CONSTANT] = useContext(FocusManagerContext) || [];
  return (
    <Component
      {...props}
      dispatch={dispatch}
      ADD_TO_REF_LIST={ALL_CONSTANT ? ALL_CONSTANT.ADD_TO_REF_LIST : ''}
    />
  );
};
export default withChangeFocus;
