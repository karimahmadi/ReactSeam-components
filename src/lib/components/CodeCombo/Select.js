import { styled, withTheme } from '@material-ui/core/styles';
import { Select as MuiSelect } from '@material-ui/core';

export const Select = styled(withTheme(MuiSelect))(props => ({
  width: `${props.ratio}%`,
  '& select': {
    paddingBottom: '0',
    paddingTop: '0',
  },
}));
