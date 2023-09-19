import convertToString from '../utils/convert-to-string.js';

/**
 * Checks whether the `value` is empty or not
 * @param value
 * @returns {boolean}
 */
const isEmpty = (value) => {
  return convertToString(value).length === 0;
};

export default isEmpty;
