import convertToString from '../utils/convert-to-string.js';

/**
 * Checks whether the `value` is blank or not
 * @param value
 * @returns {boolean}
 */
const isBlank = (value) => {
  return convertToString(value).trim().length === 0;
};

export default isBlank;
