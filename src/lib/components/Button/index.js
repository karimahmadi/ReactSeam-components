import { styled, withTheme } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';
import withChangeFocus from '../Group/withChangeFocus';

export const Button = styled(withTheme(MuiButton))(props => ({
  background: props.theme.palette.grey[200],
  borderRadius: props.theme.typography.button.borderRadius,
  color: props.theme.palette.grey[900],
  fontFamily: props.theme.typography.button.fontFamily,
  fontSize: props.theme.typography.fontSize,
  padding: '4px 12px',
}));

const ButtontWithChangeFocus = props => withChangeFocus(Button)(props);
export { ButtontWithChangeFocus };
