import { REGEX_ALPHA_ONLY } from '../consts/regex.js';
import convertToString from '../utils/convert-to-string.js';

/**
 * Checks whether the `value` contains only `alpha` characters or not
 * @param value
 * @returns {boolean}
 */
const isAlpha = (value) => {
  return REGEX_ALPHA_ONLY.test(convertToString(value));
};

export default isAlpha;
