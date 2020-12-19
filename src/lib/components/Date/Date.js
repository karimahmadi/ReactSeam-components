/**
 *
 * Date
 *
 */

import React, { useState, useEffect } from 'react';
import jMoment from 'moment-jalaali';
import PropTypes from 'prop-types';
import { InputDate } from './InputDate';

function Date(props) {
  const [value, setValue] = useState(props.value || '');

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const toArray = strDate => {
    const val = strDate.replace(/\//g, '');
    const year = val.substr(0, 4);
    const month = val.substr(4, 2);
    const day = val.substr(6, 2);
    return [year, month, day];
  };

  const validateDate = strDate => {
    let iYear;
    let iMonth;
    let iDay;
    let today = false;
    let pTodays;
    let val = strDate;

    if (!strDate) {
      return { valid: false };
    }

    if (props.currentDate) {
      if (Array.isArray(props.currentDate)) {
        pTodays = props.currentDate;
      } else if (props.currentDate instanceof String) {
        pTodays = toArray(props.currentDate);
      } else {
        pTodays = toArray(jMoment().format('jYYYYjMMjDD'));
      }
    } else {
      pTodays = toArray(jMoment().format('jYYYYjMMjDD'));
    }

    const [todayYear, todayMonth, todayDay] = pTodays;

    if (val === '0') {
      today = true;
    }

    val = val.replace(/\//g, '');

    val = val.padStart(8, '0');

    const year = val.substr(0, 4);
    const month = val.substr(4, 2);
    const day = val.substr(6, 2);

    /* make valid persian date and show to user */

    iYear = parseInt(year, 10);
    iMonth = parseInt(month, 10);
    iDay = parseInt(day, 10);

    if (iYear === 0) {
      iYear = todayYear;
    }

    if (iYear < 100) {
      iYear += Math.floor(todayYear / 100) * 100;
    } else if (iYear < 1000) {
      iYear += Math.floor(todayYear / 1000) * 1000;
    }

    if (iYear < 1200) {
      /* Invalidate Day to reset it */
      iDay = -1;
    }

    if (iYear > 2000) {
      /* Invalidate Day to reset it */
      iDay = -1;
    }

    if (iMonth === 0) {
      iMonth = todayMonth;
    }

    if (iDay === 0) {
      if (today) {
        iDay = todayDay;
        /* set today date */
      } else {
        /* Invalidate Day to reset it */
        iDay = -1;
      }
    }

    /* convert persian Date to gregorian date */
    if (jMoment(`${iYear}/${iMonth}/${iDay}`).isValid()) {
      // formatOnBlur(iYear, iMonth, iDay);
      // dates = persianDate.jalaliToGregorian(iYear, iMonth, iDay);
      // return Date.UTC(dates[0], dates[1] - 1, dates[2], 0, 0, 0, 0);
      return {
        valid: true,
        date: jMoment(`${iYear}/${iMonth}/${iDay}`).format('YYYY/MM/DD'),
      };
    }

    /* Invalid Date String entered */
    return { valid: false };
  };

  const handleFocus = () => {
    if (value) {
      setValue(value.replace(/\//g, ''));
    }
  };

  const handleBlur = () => {
    const { valid, date } = validateDate(value);
    if (valid) {
      setValue(date);
    } else {
      setValue('');
    }

    if (props.onBlur) {
      props.onBlur(
        {
          target: { value: date, name: props.name },
        },
        { valid, date },
      );
    }
  };

  const handleChange = event => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange({
        target: { value: event.target.value, name: props.name },
      });
    }
  };

  return (
    <InputDate
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      disabled={props.disabled}
      readOnly={props.readOnly}
      required={props.required}
      skip={props.skip}
      tabindex={props.tabindex}
    />
  );
}

Date.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  currentDate: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  skip: PropTypes.bool,
  tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Date;
