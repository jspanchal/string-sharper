import convertToString from '../utils/convert-to-string.js';
import isAlpha from './is-alpha.js';

/**
 * Checks whether the `value` contains only lower case letters or not
 * @param value
 * @returns {boolean}
 */
const isLowerCase = (value) => {
  const stringValue = convertToString(value);
  return isAlpha(stringValue) && stringValue.toLowerCase() === stringValue;
};

export default isLowerCase;
