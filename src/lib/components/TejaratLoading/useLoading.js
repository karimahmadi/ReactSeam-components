import { useContext } from 'react';
import { LoadingContext } from './LoadingContext';
import { showLoading, hideLoading, loading } from './actions';

export const useLoading = () => {
  const [, dispatch] = useContext(LoadingContext);
  return {
    showLoading: children => dispatch(showLoading(children)),
    hideLoading: () => dispatch(hideLoading()),
    loading: (state, msg) => dispatch(loading(state, msg)),
  };
};
