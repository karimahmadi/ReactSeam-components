import { styled, withTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const UploadContainer = styled(withTheme(Box))(props => ({
  display: 'flex',
  flexDirection: `${props.ltr ? 'row-reverse' : 'row'}`,
}));
