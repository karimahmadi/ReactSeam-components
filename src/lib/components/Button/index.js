import { styled, withTheme } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';
import withChangeFocus from '../Group/withChangeFocus';

export const Button = styled(withTheme(MuiButton))(props => ({
  background: props.theme.palette.grey[200],
  borderRadius: props.theme.typography.button.borderRadius,
  border: props.theme.typography.button.border,
  color: props.theme.palette.grey[900],
  fontFamily: props.theme.typography.button.fontFamily,
  fontSize: (props.theme.typography.fontSize * 80) / 100,
  padding: '4px 12px',
  margin: props.theme.spacing('auto', 0.25),
	whiteSpace:'noWrap',
}));

const ButtontWithChangeFocus = props => withChangeFocus(Button)(props);
export { ButtontWithChangeFocus };
