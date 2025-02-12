/**
 * @returns {number}
 * @param {number} number
 */
const solution = (number) => {
  let data = []

  for (let i = 1; i < number; i++) {
    if (!!!(i % 3) || !!!(i % 5))
      data.push(i)
  }

  return data.reduce((acc, curr) => acc + curr, 0)
}

console.log(solution(-10))
