/**
 * @returns {string[]}
 * @param {Array<string, number>} iterable
 */
const solution = (iterable) => {
  return [...iterable].filter((val, idx) => val !== iterable[--idx])
}
