import jMoment from 'moment-jalaali';
import JalaliUtils from '@date-io/jalaali';

jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false });

/* const originalParse = JalaliUtils.prototype.parse; */
const originalFormat = JalaliUtils.prototype.format;

// Hack around a bug causing weird behavior when using keyboard input
JalaliUtils.prototype.parse = function jParse(value, format) {
  if (value.includes('_')) {
    return jMoment.invalid();
  }
  try {
    console.log(format);
    const parsedDate = jMoment(value, 'jYYYY/jM/jD');
    if (parsedDate.isValid()) return parsedDate;

    return jMoment.invalid();
  } catch (e) {
    return jMoment.invalid();
  }
};

JalaliUtils.prototype.format = function jFormat(date, format) {
  if (!date.isValid()) {
    return '';
  }

  return originalFormat.call(this, date, format);
};

JalaliUtils.prototype.getDatePickerHeaderText = function getDatePickerHeaderText(
  date,
) {
  return date.format('ddd jD jMMMM');
};

JalaliUtils.prototype.getDateTimePickerHeaderText = function getDateTimePickerHeaderText(
  date,
) {
  return date.format('jMMMM jD');
};

export default JalaliUtils;
