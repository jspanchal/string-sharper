import convertToString from '../utils/convert-to-string.js';
import convertToNumber from '../utils/convert-to-number.js';
import isEmpty from '../query/is-empty.js';

/**
 * Insert `valueToInsert` at `position` in the `value`
 * @param value
 * @param valueToInsert
 * @param position
 * @returns {string}
 */
const insert = (value, valueToInsert, position) => {
  const stringValue = convertToString(value);
  const stringValueToInsert = convertToString(value);
  const numberPosition = convertToNumber(position);

  if (numberPosition < 0 || numberPosition > stringValue.length || isEmpty(stringValue)) {
    return stringValue;
  }

  return `${stringValue.slice(0, numberPosition)}${stringValueToInsert}${stringValue.slice(numberPosition)}`;
};

export default insert;
