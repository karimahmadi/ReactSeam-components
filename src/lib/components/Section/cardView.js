import { styled, withTheme } from '@material-ui/core/styles';
import { Box as MuiBox } from '@material-ui/core';

export const CardView = styled(withTheme(MuiBox))(props => ({
  width: props.width,
  backgroundColor: props.grid ? props.theme.palette.grey[50] : props.theme.palette.background.default,
  border: '1px solid #bfbfbf',
  borderRadius: '2px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '8px',
  marginTop: '5px',
  boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
}));
