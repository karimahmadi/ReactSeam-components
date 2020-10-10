import { styled, withTheme } from '@material-ui/core/styles';
import { Input } from '../Input';

export const TitleInput = styled(withTheme(Input))(() => ({
  width: 'calc({props => props.ratio}%)',
}));
