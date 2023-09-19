import convertToString from '../utils/convert-to-string.js';

/**
 * Replace `valueToReplace` with `valueToReplaceWith` in the `value`
 * @param value
 * @param valueToReplace
 * @param valueToReplaceWith
 * @returns {string}
 */
const replace = (value, valueToReplace, valueToReplaceWith) => {
  return convertToString(value).replace(valueToReplace, valueToReplaceWith);
};

export default replace;
