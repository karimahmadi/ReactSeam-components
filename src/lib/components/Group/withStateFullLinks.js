import React, { useContext } from 'react';
import { ComponentContext } from '../index';
const withStateFullLinks = Component => props => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch, ALL_CONSTANT] = useContext(ComponentContext);
  return (
    <Component
      {...props}
      dispatch={dispatch}
      SET_ROUTE_PARAMS={ALL_CONSTANT.SET_ROUTE_PARAMS}
    />
  );
};
export default withStateFullLinks;
