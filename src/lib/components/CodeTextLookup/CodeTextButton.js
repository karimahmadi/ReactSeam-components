import { styled, withTheme } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';

export const CodeTextButton = styled(withTheme(MuiButton))(props => ({
  minWidth: props.theme.spacing(3),
  padding: 0,
}));
