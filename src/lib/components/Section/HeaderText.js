import { styled, withTheme } from '@material-ui/core/styles';
import { Box as MuiBox } from '@material-ui/core';

export const HeaderText = styled(withTheme(MuiBox))(props => ({
  width: 'fit-content',
  fontFamily: 'B Titr',
  padding: '2px',
  borderRadius: '0',
  background: `-webkit-gradient( linear, 52% 53%, 52% 48%, from(${
    props.theme.palette.background.default
  }), to(#ebebeb))`,
  fontSize: '80%',
  margin: '-19px auto -5px auto',
}));
