import { styled } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';

export const Loading = styled(Box)(() => ({
  position: 'absolute',
  top: '0',
  right: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.4)',
  zIndex: '9999',
}));
