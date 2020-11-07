import { styled, withTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const Asteriks = styled(withTheme(Box))(() => ({
  color: 'red',
  marginLeft: '-10px',
  paddingRight: '1px',
  height: '22px',
  fontSize: '1.1667rem',
}));
