import { styled } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';

export const Toggle = styled(Box)(() => ({
  position: 'absolute',
  top: '0',
  left: '0',
  border: '2px solid #ccc',
  borderRadius: '50%',
  borderTop: '7px solid #134c7e',
  width: '200px',
  height: '200px;',
  animation: 'spin 2s linear infinite',
}));
