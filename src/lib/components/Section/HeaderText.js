import { styled, withTheme } from '@material-ui/core/styles';
import { Box as MuiBox } from '@material-ui/core';

export const HeaderText = styled(withTheme(MuiBox))(() => ({
  width: 'fit-content',
  fontFamily: 'B Titr',
  padding: '2px',
  borderRadius: '0',
  fontSize: '0.9em',
  lineHeight: '0.7em',
  margin: '-17px auto 0px auto',
}));
