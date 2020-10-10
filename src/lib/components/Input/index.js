import { styled, withTheme } from '@material-ui/core/styles';
import { OutlinedInput as MuiOutlinedInput } from '@material-ui/core';

export const Input = styled(withTheme(MuiOutlinedInput))(props => ({
  width: '100%',
  backgroundColor: props.theme.palette.grey[50],
  height: '23px',
  lineHeight: '1.42857143',
  color: '#555',
  backgroundImage: 'none',
  // border: '1px solid #ccc',
  // boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
  transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
  '& input': {
    padding: '3px 3px',
    fontSize: props.theme.typography.fontSize,
    fontFamily: props.theme.typography.fontFamily,
  },
}));
