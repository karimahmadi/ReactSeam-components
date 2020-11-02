import { styled, withTheme } from '@material-ui/core/styles';
import { OutlinedInput as MuiOutlinedInput } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import React from 'react';

const Input = styled(
  withTheme(props => (
    <MuiOutlinedInput
      {...props}
      endAdornment={<InputAdornment position="start">*</InputAdornment>}
    />
  )),
)(props => ({
  width: '100%',
  backgroundColor: props.theme.palette.grey[50],
  height: '23px',
  lineHeight: '1.42857143',
  color: '#555',
  backgroundImage: 'none',
  paddingLeft: props.theme.spacing(0),
  paddingRight: props.theme.spacing(0.5),
  transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
  '& input': {
    padding: '3px 3px',
    fontSize: props.theme.typography.fontSize,
    fontFamily: props.theme.typography.fontFamily,
  },
  '&.Mui-disabled': {
    backgroundColor: props.theme.palette.grey[300],
  },
  '& div': {
    marginLeft: props.theme.spacing(-1),
    display: props.required ? 'flex' : 'none',
    '& p': {
      color: 'red',
      height: '23px',
    },
  },
}));

export default Input;
