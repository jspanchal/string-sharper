import { REGEX_NUMERIC_ONLY } from '../consts/regex.js';
import convertToString from '../utils/convert-to-string.js';

/**
 * Checks whether the `value` contains only `numeric` characters or not
 * @param value
 * @returns {boolean}
 */
const isNumeric = (value) => {
  return REGEX_NUMERIC_ONLY.test(convertToString(value));
};

export default isNumeric;
