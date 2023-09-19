import { REGEXP_ALPHA_NUMERIC } from '../consts/regex.js';
import convertToString from '../utils/convert-to-string.js';

/**
 * Checks whether the `value` contains only `alpha` and `numeric` characters or not
 * @param value
 * @returns {boolean}
 */
const isAlphaNumeric = (value) => {
  return REGEXP_ALPHA_NUMERIC.test(convertToString(value));
};

export default isAlphaNumeric;
