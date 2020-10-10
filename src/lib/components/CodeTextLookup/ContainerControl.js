import { styled, withTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const ContainerControl = styled(withTheme(Box))(props => ({
  display: 'flex',
  alignItems: 'inherits',
}));
