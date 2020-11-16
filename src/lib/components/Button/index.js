import { styled, withTheme } from '@material-ui/core/styles';
import ButtonBase from './Button';
import withChangeFocus from '../FocusManager/withChangeFocus';

export const Button = styled(withTheme(withChangeFocus(ButtonBase)))(props => ({
  background: props.theme.palette.grey[200],
  borderRadius: props.theme.typography.button.borderRadius,
  border: props.theme.typography.button.border,
  color: props.theme.palette.grey[900],
  fontFamily: props.theme.typography.button.fontFamily,
  fontSize: (props.theme.typography.fontSize * 80) / 100,
  padding: '4px 12px',
  margin: props.theme.spacing('auto', 0.25),
  whiteSpace: 'noWrap',
  '&:hover': {
    background: props.theme.palette.grey[200],
    border: props.theme.typography.button.hoverBorder,
  },
}));
