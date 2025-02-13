/**
 * @returns {string}
 * @param {string} string
 */
const solution = (string) => {
  return string.replace(/[A-Z]/g, ' $&')
}
