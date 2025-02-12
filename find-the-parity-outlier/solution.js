/**
 * @returns {number}
 * @param {Array<number>} integers
 */
const solution = (integers) => {
  const filtred = integers.filter((val) => val % 2)

  return filtred.length > 1 ? integers.find((val) => !(val % 2)) : filtred[0]
}
