import { styled, withTheme } from '@material-ui/core';
import CheckboxBase from './Checkbox';
import { withChangeFocus } from '../FocusManager';

export const Checkbox = styled(withTheme(withChangeFocus(CheckboxBase)))(
  props => ({
    // background: props.theme.palette.grey[200],
    borderRadius: props.theme.typography.button.borderRadius,
    // border: props.theme.typography.button.border,
    // color: props.theme.palette.grey[900],
    fontFamily: props.theme.typography.button.fontFamily,
    fontSize: (props.theme.typography.fontSize * 40) / 100,
    padding: '0px',
    margin: '0 5px', // props.theme.spacing('auto', 0.25),
    whiteSpace: 'noWrap',
    '&:hover': {
      background: props.theme.palette.grey[200],
      // border: props.theme.typography.button.hoverBorder,
    },
    '& svg': {
      fontSize: '1rem',
    },
  }),
);

export { default as MuiChkStyle } from './MuiChkStyle';
