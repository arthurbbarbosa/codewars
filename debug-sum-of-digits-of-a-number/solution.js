/**
 * @returns {number}
 * @param {number} integer
 */
const solution = (integer) => {
  return (''+integer)
    .split('')
    .reduce((prev, curr) => prev + +curr, 0)
}
