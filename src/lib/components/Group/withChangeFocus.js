import React, { useContext } from 'react';
import { ComponentContext } from '../index';
const withChangeFocus = Component => props => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch, ALL_CONSTANT] = useContext(ComponentContext);
  return (
    <Component
      {...props}
      dispatch={dispatch}
      ADD_TO_REF_LIST={ALL_CONSTANT.ADD_TO_REF_LIST}
      ADD_REF_TO_FOCUS={ALL_CONSTANT.ADD_FOCUSED}
    />
  );
};
export default withChangeFocus;
