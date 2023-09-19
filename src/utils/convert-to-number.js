/**
 * Convert the `value` to its numeric representation.
 * Return `defaultValue` if `value` is `null` or `undefined`
 * @param value
 * @param defaultValue
 * @returns {number}
 */
const convertToNumber = (value, defaultValue = 0) => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  return Number(value);
};

export default convertToNumber;
