import jMoment from 'moment-jalaali';
import React, { useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import PropTypes from 'prop-types';
import JalaliUtils from './jalali-util';
import { DatePicker } from './DatePicker';

function DateTimePicker({
  value,
  format = 'jYYYY/jMM/jDD',
  onChange,
  ...other
}) {
  const [selectedDate, handleDateChange] = useState(jMoment(value, format));
  const handleOnChange = date => {
    handleDateChange(date);
    if (onChange) {
      onChange(date ? date.format(format) : undefined, date);
    }
  };

  const formatter = date => {
    if (date && date !== '') {
      return jMoment(date).format(format);
    }
    return '';
  };

  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <DatePicker
        {...other}
        autoOk
        clearable
        okLabel="تأیید"
        cancelLabel="لغو"
        clearLabel="پاک کردن"
        labelFunc={date => formatter(date)}
        value={selectedDate && selectedDate.isValid() ? selectedDate : null}
        format="YYYY/MM/DD"
        onChange={handleOnChange}
        inputVariant="outlined"
      />
    </MuiPickersUtilsProvider>
  );
}

DateTimePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string,
  value: PropTypes.string,
};

export default DateTimePicker;
