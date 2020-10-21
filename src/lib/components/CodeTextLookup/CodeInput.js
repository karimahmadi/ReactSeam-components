import { styled, withTheme } from '@material-ui/core/styles';
import { Input } from '../Input';

export const CodeInput = styled(withTheme(Input))(props => ({
  width: `${props.ratio}%`,
}));
