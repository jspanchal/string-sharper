/**
 * Convert the `value` to its string representation.
 * Return `defaultValue` if `value` is `null` or `undefined`
 * @param value
 * @param defaultValue
 * @returns {string}
 */
const convertToString = (value, defaultValue = '') => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  return String(value);
};

export default convertToString;
