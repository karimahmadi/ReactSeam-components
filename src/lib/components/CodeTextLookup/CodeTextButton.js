import { styled, withTheme } from '@material-ui/core/styles';
import { Button } from '../Button';

export const CodeTextButton = styled(withTheme(Button))(props => ({
  minWidth: 'auto',
  padding: '0 4px',
  margin: '0 0 0 0',
  height: '22px',
  display: props.hidebutton === 'hide' ? 'none' : 'inline-block',
}));
