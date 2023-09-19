import convertToString from '../utils/convert-to-string.js';
import isAlpha from './is-alpha.js';

/**
 * Checks whether the `value` contains only upper case letters or not
 * @param value
 * @returns {boolean}
 */
const isUpperCase = (value) => {
  const stringValue = convertToString(value);
  return isAlpha(stringValue) && stringValue.toUpperCase() === stringValue;
};

export default isUpperCase;
