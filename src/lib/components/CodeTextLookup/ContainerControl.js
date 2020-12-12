import { styled, withTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const ContainerControl = styled(withTheme(Box))(() => ({
  display: 'flex',
  alignItems: 'inherits',
  width: '100%',
}));
