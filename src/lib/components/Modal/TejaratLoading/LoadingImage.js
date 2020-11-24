import { styled } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';

export const LoadingImage = styled(Box)(() => ({
  width: '200px',
  height: '200px',
  margin: '50px auto',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '50%',
  background: 'linear-gradient(45deg, #d8d8d8 0%, #dddddd 40%, #bababa 100%)',
}));
