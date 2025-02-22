/**
 * Seconds to parsed "Y Years, D Days, H Hours, M Minutes and S Seconds"
 * @returns {string}
 * @param {number} val
 */
const solution = (val) => {
  const time = [
    ~~(val / 31536000),
    ~~(val / 86400 % 365),
    ~~(val / 3600 % 24),
    ~~((val % 3600) / 60),
    val % 60
  ]
    .map((val, idx) => `${val} ${['year', 'day', 'hour', 'minute', 'second'][idx]}${val > 1 ? 's' : ''}`)
    .filter((val) => !val.startsWith(0))

  return (time.length > 1 ? `${time.slice(0, -1).join(', ')} and ${time.at(-1)}` : time.join(', ')) || 'now'
}
