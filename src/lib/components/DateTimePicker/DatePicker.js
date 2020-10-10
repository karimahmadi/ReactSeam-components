import { styled } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';

export const DatePicker = styled(KeyboardDatePicker)(() => ({
  width: '160px',
  backgroundColor: '#fff',
  '& .MuiOutlinedInput-root': {
    borderRadius: '0 !important',
  },
  '& input': {
    padding: '3px 3px',
    fontSize: '12px',
  },
  '& button': {
    padding: 0,
  },
}));
