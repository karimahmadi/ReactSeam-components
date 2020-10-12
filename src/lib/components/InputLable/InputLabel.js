import { styled, withTheme } from '@material-ui/core/styles';
import { InputLabel as MuiInputLable } from '@material-ui/core';

const InputLabel = styled(withTheme(MuiInputLable))(props => ({
  fontWeight: props.theme.typography.fontWeightRegular,
  fontSize: props.theme.typography.fontSize * 80 / 100 ,
  fontFamily: props.theme.typography.fontFamily,
  whiteSpace: 'nowrap',
  textAlign: 'left',
  color: 'black',
}));

export default InputLabel;
