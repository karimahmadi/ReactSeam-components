import { styled, withTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

export const UploadButton = styled(withTheme(IconButton))(props => ({
  width: `${props.ratio}%`,
  minWidth: 'fit-content',
  display: 'flex',
  padding: '0 !important',
  '& svg': {
    fontSize: '1.305rem',
  },
}));
