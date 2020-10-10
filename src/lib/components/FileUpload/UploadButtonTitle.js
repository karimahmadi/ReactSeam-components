import { styled, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const UploadButtoTitle = styled(withTheme(Typography))(() => ({
  padding: '2px',
  whiteSpace: 'nowrap',
}));
