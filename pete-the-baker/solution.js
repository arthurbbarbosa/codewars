/**
 * @returns {object}
 * @param {object} recipe
 * @param {object} available
 */
const solution = (recipe, available) => {
  const portions = Object.keys(recipe)
    .map((val) => available[val] ? Math.floor(available[val] / recipe[val]) : null)

  return portions.includes(null) ? 0 : Math.min(...portions)
}
